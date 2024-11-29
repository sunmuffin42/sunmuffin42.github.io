# pympi                 praat textgrid -> elan eaf
# flibl                       elan eaf -> flibl flextext json
# leconquifiquer   flibl flextext json -> leconc json


# v05.0.2 no longer require flexible.py to load a config
import xml.etree.ElementTree as ET
import flexible13 as flibl
import re
from datetime import datetime
import json
from uuid import uuid4
import argparse
import pympi
flextext_construction_version = "5.0.2"
# parser = argparse.ArgumentParser()
# parser.add_argument("-j", "--json", dest="export_json", help="Export as JSON as well", action="store_true")
# args = parser.parse_args()

# use pympi to get an EAF out of the textgrid
tg_filename = ""
tg = pympi.Praat.TextGrid(tg_filename)
eaf = tg.to_eaf()
eaf.to_file(tg_filename[-8]+".eaf")

# use flibl to get a flibl flextext json out of the EAF
config = json.load(open("to_flextext_config.json"))

file_name = tg_filename
language = config["languages"]["main_language"]
flex_language = config["languages"]["flex_language"]

# if you have associated utterances and use a different language in FLEx for the phonetic renderings of those in FLEx, give that language code here
assoc_utt_language = config["languages"]["assoc_utt_language"]

# Open and parse the EAF
eaf_parsed = ET.parse(file_name)
eaf_root = eaf_parsed.getroot()

# Create the JSON

# in order to have the right order, have the segments in a list with their dicts, but then do the ordering and make those segnums the keys
segments = {}
#TODO: should eventually have a version that takes the flibl naming system assumptions as well as one where people can put theirs in themselves--or a flag that generates. not for now though
# find all parent, independent tiers
parent_tiers = [
    tier for tier in eaf_root.findall(".//TIER")
        if "PARENT_REF" not in tier.attrib
        and tier.attrib["TIER_ID"] not in config["exclude_tier_ids"]
        and tier.attrib["LINGUISTIC_TYPE_REF"] not in config["exclude_tier_types"]
        and (
            "CONSTRAINTS" not in eaf_root.find(".//LINGUISTIC_TYPE[@LINGUISTIC_TYPE_ID='{}']".format(tier.attrib["LINGUISTIC_TYPE_REF"])).attrib.keys()
            or eaf_root.find(".//LINGUISTIC_TYPE[@LINGUISTIC_TYPE_ID='{}']".format(tier.attrib["LINGUISTIC_TYPE_REF"])).attrib["CONSTRAINTS"] not in config["exclude_tier_constraints"]
            )
]
# find all dependent tiers
dependent_tiers = [
    tier for tier in eaf_root.findall(".//TIER")
        if "PARENT_REF" in tier.attrib
        and tier.attrib["TIER_ID"] not in config["exclude_tier_ids"]
        and tier.attrib["LINGUISTIC_TYPE_REF"] not in config["exclude_tier_types"]
        and eaf_root.find(".//LINGUISTIC_TYPE[@LINGUISTIC_TYPE_ID='{}']".format(tier.attrib["LINGUISTIC_TYPE_REF"])).attrib["CONSTRAINTS"] not in config["exclude_tier_constraints"]
        and (
            "CONSTRAINTS" not in eaf_root.find(".//LINGUISTIC_TYPE[@LINGUISTIC_TYPE_ID='{}']".format(tier.attrib["LINGUISTIC_TYPE_REF"])).attrib.keys()
            or eaf_root.find(".//LINGUISTIC_TYPE[@LINGUISTIC_TYPE_ID='{}']".format(tier.attrib["LINGUISTIC_TYPE_REF"])).attrib["CONSTRAINTS"] not in config["exclude_tier_constraints"]
            )
]

# get the transcription tiers' annotations, call them segments
for parent_tier in parent_tiers:
    this_tier_anns = {}
    # put annotation data into the list of annotations in this tier
    for alignable_annotation in parent_tier.findall(".//ALIGNABLE_ANNOTATION"):
        segment = {}
        full_text = alignable_annotation[0].text
        # if the alignable annotation is an empty string, skip it
        if not full_text:
            continue

        segment["full_text"] = full_text
        segment["times"] = {
            "begin": {
                "ts_ref": alignable_annotation.attrib["TIME_SLOT_REF1"],
                "time": eaf_root.find(".//*[@TIME_SLOT_ID='{}']".format(alignable_annotation.attrib["TIME_SLOT_REF1"])).attrib["TIME_VALUE"]
            },
            "end": {
                "ts_ref": alignable_annotation.attrib["TIME_SLOT_REF2"],
                "time": eaf_root.find(".//*[@TIME_SLOT_ID='{}']".format(alignable_annotation.attrib["TIME_SLOT_REF2"])).attrib["TIME_VALUE"]
            }
        }
        
        # and because this is about going into flex and not making all the documents consistent as such, orig_aID is going to again be the aID from this ELAN file, NOT the first one ever. we may want to at some point change that? but the point is so that we know to build the next step from it, not to reconstruct the previous elan
        segment["orig_aID"] = alignable_annotation.attrib["ANNOTATION_ID"]
        # making this an integer so we can reorder things by time when we're combinging all of the tiers
        segment["alignable_aID"] = int(segment["orig_aID"][1:])
        try:
            segment["speaker"] = parent_tier.attrib["PARTICIPANT"]
        except:
            segment["speaker"] = ""
        # default putting "phonetic" in, basically this is the unmarked one, presumably what was actually said
        segment["phon_assoc"] = "phonetic"
        segment["has_assoc"] = False

        segment["notes"] = []
        segment["word_list"] = flibl.tokenize(full_text, config["valid_characters"]["main_language"])
        segments[segment["orig_aID"]] = segment

# get all the associated tier annotations together and put them in the annotations_by_tier dict because each item them is going to get its own segment in flex even though they're not independent in elan
for associated_tier_type in config["associated_utterance_tier_types"]:
    for associated_tier in eaf_root.findall(".//TIER[@LINGUISTIC_TYPE_REF='{}']".format(associated_tier_type)):
        this_tier_anns = {}
        for associated_utterance_annotation in associated_tier.findall(".//REF_ANNOTATION"):
            segment = {}
            full_text = associated_utterance_annotation[0].text
            segment["full_text"] = full_text
            try:
                orig_times = segments[associated_utterance_annotation.attrib["ANNOTATION_REF"]]["times"]
            except:
                print(segments)
            segment["times"] = orig_times
            segment["orig_aID"] = associated_utterance_annotation.attrib["ANNOTATION_REF"]
            segment["ann_ref"] = int(associated_utterance_annotation.attrib["ANNOTATION_REF"][1:])
            segment["ref_aID"] = associated_utterance_annotation.attrib["ANNOTATION_ID"]
            segment["speaker"] = parent_tier.attrib["PARTICIPANT"]
            # eg "associated"
            segment["notes"] = []
            segment["phon_assoc"] = associated_tier_type

            segments[segment["orig_aID"]]["has_assoc"] = True
            segment["has_assoc"] = False

            segment["word_list"] = flibl.tokenize(full_text, config["valid_characters"]["assoc_utt_language"])

            segments[segment["ref_aID"]] = segment

# go through each note tier and add the note values to the segments they refer to
for note_tier_type in config["note_tier_types"]:
    for note_tier in eaf_root.findall(".//TIER[@LINGUISTIC_TYPE_REF='{}']".format(note_tier_type)):
        for note_annotation in note_tier.findall(".//REF_ANNOTATION"):
            # put the note in the list of notes associated with the utterances
            segments[note_annotation.attrib["ANNOTATION_REF"]]["notes"].append(note_annotation[0].text)
# go through each translation tier and put it in the segments. let's do this by types instead of ids. if we need to change that we can.
for translation_tier_info in config["translation_tiers"]:
    translation_tier = eaf_root.find(".//TIER[@TIER_ID='{}']".format(translation_tier_info["translation_tier_id"]))
    if not translation_tier:
        continue
    for translation_annotation in translation_tier.findall(".//REF_ANNOTATION"):
        # put the translation in the dict
        segments[translation_annotation.attrib["ANNOTATION_REF"]]["tns-{}".format(translation_tier_info["translation_language"])] = translation_annotation[0].text

# make the segments dict ordered
sorted_segs = sorted(segments.values(), key=lambda seg: int(seg["times"]["begin"]["time"]))
ordered_segs = {segnum:seg for segnum, seg in zip(range(len(sorted_segs)),sorted_segs)}

# write json if desired
# now = str(datetime.now()).split(" ")
# time = now[1].split(":")
# date_time = now[0].replace("-", "_") + "-{}_{}".format(time[0], time[1])
# if args.export_json:
#     json.dump(ordered_segs, open(file_name[:-4] + "-to_flex_export-" + date_time + "-ft_cxn_v" + flextext_construction_version + ".json", mode="w", encoding="utf8"), indent=1)

ordered_segs


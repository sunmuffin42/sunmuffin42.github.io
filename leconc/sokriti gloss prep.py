import json, datetime
a = json.load(open("kre_sokriti_20180902_mjl_1_narrative-to_flex_export-2024_04_16-01_12-ft_cxn_v5.0.2.json"))
newdoc = open("sokriti_text1.txt", mode="w", encoding="utf8")
for segnum, seg in a.items():
    # assuming the text is under 1 hr, convert start and stop time of each utterance and make a line with utt number and timestamp
    newdoc.writelines(["Line {} (".format(str(int(segnum)+1)), str(datetime.timedelta(milliseconds=int(seg["times"]["begin"]["time"])))[2:-3] + "-" + str(datetime.timedelta(milliseconds=int(seg["times"]["end"]["time"])))[2:-3], ")\n"])
    newdoc.writelines([seg["full_text"] + "\n\n"] + [seg["full_text"] + "\n"] * 2)
    newdoc.writelines(["\n\n\"" + seg["tns-por"] + "\"\n"])
    if len(seg["notes"]):
        newdoc.writelines(["Notes: ", seg["notes"][0], "\n"])
    newdoc.writelines("\n\n\n")
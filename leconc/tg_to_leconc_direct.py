# make a textgrid into a json leconc will take
import pympi.Praat as Praat
import json

metadata = {
    "title": "Kussâ hä kja",
    "speakers": "Pâtti",
    "linguists": "Myriam Lapierre, Ella De Falco, Jessamine Jeter",
    "Indigenous researcher": ""
  }
filename = "./corpus/pnr_krenpy_MJL_ERD_JCJ_story_20230619_shurebeta54.TextGrid"
tg = Praat.TextGrid(file_path=filename, codec="utf-8")
tx_tier = 1
tr_tier = 2
notes_tier = 3
this_tx = tg.get_tier(tx_tier)
try:
    # if there's a translation tier, find it
    this_tr = tg.get_tier(tr_tier)
    this_tr_intervals = this_tr.get_all_intervals()
except:
    this_tr = None
    this_tr_intervals = None
    pass
try:
    # if there's a notes tier, find it
    this_notes = tg.get_tier(notes_tier)
    this_notes_intervals = this_notes.get_all_intervals()
except:
    this_notes = None
    this_notes_intervals = None
    pass

sentence_counter = 1
leconc = {
    "metadata": metadata,
    "sentences": []
}

for transcription in this_tx.get_all_intervals():
    # exclude intervals with no/blank text annotations
    if not transcription[2]:
        continue
    sentence_dict = {
            "id":sentence_counter,
            "start": transcription[0],
            "stop": transcription[1]*1000, # make it miliseconds
            "transcription": transcription[2],
            "translation":"",
            "notes":"",
            "words":[""]
        }
    if this_tr:
        # find corresponding translation annotation
        try:
            translation = [i[2] for i in this_tr_intervals if i[0] == transcription[0]][0]
            sentence_dict["translation"] = translation
        except:
            print("there is not a translation corresponding to the transcription '{}'".format(transcription[2]))
            pass
    if this_notes:
        # find corresponding notes annotation
        try:
            notes = [i[2] for i in this_notes_intervals if i[0] == transcription[0]][0]
            sentence_dict["notes"] = notes
        except:
            # print("there is not a translation corresponding to the transcription '{}'".format(transcription[2]))
            pass

    # add interval to sentences of leconc json
    leconc["sentences"].append(
        sentence_dict
    )
    sentence_counter += 1


json.dump(leconc, open("./corpus/JSON/" + filename[9:-8] + "json", mode="w", encoding="utf8"))
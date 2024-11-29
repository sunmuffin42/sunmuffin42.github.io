# flibl json to leconc json
import json, datetime
for i in ["../pnr_txt_karansa-women-work_20190707", "../pnr_txt_sykja-shaman_20190703",
"../pnr_txt_turen-hist-a_24072019"]:
    a = json.load(open(i + "-to_flex_export-2024_05_02-14_11-ft_cxn_v5.0.2.json"))
    newdoc = open(i + ".txt", mode="w", encoding="utf8")
    for segnum, seg in a.items():
        # assuming the text is under 1 hr, convert start and stop time of each utterance and make a line with utt number and timestamp
        newdoc.writelines(["Line {} (".format(str(int(segnum)+1)), str(datetime.timedelta(milliseconds=int(seg["times"]["begin"]["time"])))[2:-3] + "-" + str(datetime.timedelta(milliseconds=int(seg["times"]["end"]["time"])))[2:-3], ")\n"])
        newdoc.writelines([seg["full_text"] + "\n\n"] + [seg["full_text"] + "\n"] * 2)
        try:
            newdoc.writelines(["\n\n\"" + seg["tns-por"] + "\"\n"])
        except:
            newdoc.writelines(["\n\n[no translation]\n"])
        if len(seg["notes"]):
            try:
                newdoc.writelines(["Notes: "+ seg["notes"][0]+ "\n"])
            except:
                print(segnum)
        newdoc.writelines("\n\n\n")
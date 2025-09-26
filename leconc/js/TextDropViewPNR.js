class TextSummaryView {
  constructor(text, el = document.createElement('div')) {
    this.text = text
    this.el = el
    this.el.classList.add("text-summary")
  }

  render() {
    this.el.innerHTML = `
<li class=show-text>
  <p>${this.text.metadata.title} <button class=show-text>view</button></p>
</li>
`
    this.listen()
    return this
  }

  listen() {
    this.el.addEventListener('click', clickEvent => {
      if (clickEvent.target.matches('button.show-text')) {
        let showTextEvent = new CustomEvent('show-text-request', {
          bubbles: true,
          detail: {
            text: this.text
          }
        })
        this.el.dispatchEvent(showTextEvent)
      }
    })
  }
}

class TextDropViewPNR {
  constructor(el = document.createElement('section'), parsers = {}) {
    this.el = el
    this.el.classList.add('file-drop-view')
    this.texts = []
    this.pnrCorpus = [{
  "metadata": {
    "title": "Causatives (Elicitation 2024)",
    "speakers": "Sôpôha",
    "linguists": "Myriam Lapierre, Ella De Falco, Jessa Jeter",
    "type": "elicitation"
  },
  "sentences": [
    {
      "id": "1",
      "start": "",
      "stop": "",
      "transcription": "Pârakrisan hë tikrëë inpoj̃ï",
      "translation": "Pârakrisan comeu carne de boi",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "2",
      "start": "",
      "stop": "",
      "transcription": "Pêkjä hë tinparamä Pârakrisan hë tikrëë inpoj̃ï",
      "translation": "Pêkjä acha que Pârakrisan comeu carne de boi",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "3",
      "start": "",
      "stop": "",
      "transcription": "Pêkjä hë tisün Pârakrisan hë tikrëë inpoj̃ï",
      "translation": "Pêkjä disse que Pârakrisan comeu carne",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "4",
      "start": "",
      "stop": "",
      "transcription": "Pêkjämä mäkïrïn Pârakisan hë tikrëë hahê poj̃ï",
      "translation": "Pêkjä quer que Pârakrisan come carne",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "5",
      "start": "",
      "stop": "",
      "transcription": "Pêkjähë timäsün Pârakrisan mä tikrëë hahê inpoj̃ï",
      "translation": "Pêkjä pediu/falou Pârakrisan comer carne",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "6",
      "start": "",
      "stop": "",
      "transcription": "Pêkjä hë timäsari Pârakrisan mä tikrëë hahê inpoj̃ï",
      "translation": "Pêkjä deixou para Pârakrisan comer carne;  ‘I kept the beef for her to eat later’",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "7",
      "start": "",
      "stop": "",
      "transcription": "Pêkjä hë timäsöri Pârakrisan mä inpoj̃ï",
      "translation": "Pêkjä deu a carne para Pârakrisan",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "8",
      "start": "",
      "stop": "",
      "transcription": "Kjêpyti hë kitwâri kôkjappää",
      "translation": "Kjêpyti broke the little bro cup",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "9",
      "start": "",
      "stop": "",
      "transcription": "ti ïkwâri kôkjappää hë",
      "translation": "quebrou o copinho",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "10",
      "start": "",
      "stop": "",
      "transcription": "[Kôkâ hë tisyri pâri] jy tën",
      "translation": "Kôkâ cortou árvore, caiu; Kôkâ cut the tree, fell",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "11",
      "start": "",
      "stop": "",
      "transcription": "Pârakrisan hë kitrëë pârisy",
      "translation": "P comeu feijäo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "12",
      "start": "",
      "stop": "",
      "transcription": "Pêkjä hë timähosö Pârakrisan mä pârisyho",
      "translation": "Pêkjä alimetou para Pârakrisan com feijäo; Pêkjä fed Pârakrisan beans",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "13",
      "start": "",
      "stop": "",
      "transcription": "Kuupêri jyty",
      "translation": "Ku morreu",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "14",
      "start": "",
      "stop": "",
      "transcription": "Kjêpyti hë tipïrï kuupêri",
      "translation": "Kjêpyti matou Kuupêri",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "15",
      "start": "",
      "stop": "",
      "transcription": "[Kjêpyti hë tinänka hamä] jyty Kuupêri, söösâhamä",
      "translation": "Por causa que Kjêpyti separou, ele morreu, por causa de saudade",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "16",
      "start": "",
      "stop": "",
      "transcription": "Kjêpyta mä jyty kuupêri",
      "translation": "Kuupêri morreu quando estava com Kjêpyti",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "17",
      "start": "",
      "stop": "",
      "transcription": "Kjêpyti hä jyty Kuupêri",
      "translation": "Por causa de Kjêpyti que Kuupêri morreu",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "18",
      "start": "",
      "stop": "",
      "transcription": "Kjêpyti hë tihowajäri, jyty Kuupêri",
      "translation": "Kjêpyti fez alguma coisa que matou Kuupêri (w/ knife, fire, witchcraft…)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "19",
      "start": "",
      "stop": "",
      "transcription": "Kjêpyti hë tihowajäri kâjasâho, Kuupêri jyty",
      "translation": "Kjêpyti fez com faca, ele morreu; Kjêpyti did it with a knife, he died",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "20",
      "start": "",
      "stop": "",
      "transcription": "??",
      "translation": "S fez para Kjêpyti rir; S fez alguma coisa para K ficar rindo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "21",
      "start": "",
      "stop": "",
      "transcription": "ha tikanswantô hä Sârêa hë?",
      "translation": "Sârêa está brincando com você?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "22",
      "start": "",
      "stop": "",
      "transcription": "haa, tiraatä swantôhä Sârêahë",
      "translation": "sim, sârêa estava brincando comigo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "23",
      "start": "",
      "stop": "",
      "transcription": "[Pêkjähë tiwajäri pârisy Pârakrisan mä] tikrëë hahê",
      "translation": "Pêkjä fez feijäo para Pârakrisan comer; Pêkjä fez Pârakrisan comer feijäo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "24",
      "start": "",
      "stop": "",
      "transcription": "[Pêkjä hë tiwajäri pârisy] Pârakrisan hë tikrëë hahê",
      "translation": "Pêkjä fez feijäo para Pârakrisan comer",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "25",
      "start": "",
      "stop": "",
      "transcription": "Sykjä hë titä hakô hokjya hä kawajära hê kasantora hê Prefeito mä",
      "translation": "S pediu para você fazer/escrever uma carta/documento para enviar/mandar paro o prefeito",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "26",
      "start": "",
      "stop": "",
      "transcription": "Sykjä hë titä hakô hokjya hä kawajära hê",
      "translation": "S pediu para você fazer uma carta",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "27",
      "start": "",
      "stop": "",
      "transcription": "Sykjä hë titä hakô hokjya hä",
      "translation": "S pediu para você escrever carta",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "28",
      "start": "",
      "stop": "",
      "transcription": "Sykjä hë titäkô Sôkren hë tiwajära hê hokjya",
      "translation": "Sy pediu para Sô fazer documento",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "29",
      "start": "",
      "stop": "",
      "transcription": "Sykjä hë titäkô hokjya hä",
      "translation": "Sy pediu para ele escrever",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "30",
      "start": "",
      "stop": "",
      "transcription": "Ka hë katiwajä hokjya",
      "translation": "você que vai escrever",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "31",
      "start": "",
      "stop": "",
      "transcription": "Kjêpyti hë kawajä hokjya",
      "translation": "eu que vou escrever",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "32",
      "start": "",
      "stop": "",
      "transcription": "Kamërân katirêwajä hokjya",
      "translation": "vocês que väo escrever",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "33",
      "start": "",
      "stop": "",
      "transcription": "Sykjä hë tiköwajäri Sôkrenköö hokjya",
      "translation": "Sykjä ajudou Sô para fazer a carta; Sykjä fez junto com Sô a carta",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "34",
      "start": "",
      "stop": "",
      "transcription": "Sykjä hë titä kô Sôkren hë tiwajära hê hokjya",
      "translation": "Sy pediu para Sô escrever a carta",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "35",
      "start": "",
      "stop": "",
      "transcription": "maçämä mäkïrïn hamakjya",
      "translation": "maçä gosta do friu",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "36",
      "start": "",
      "stop": "",
      "transcription": "maçä mä mänänka nänkjo",
      "translation": "maçä näo gosta do calor",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "37",
      "start": "",
      "stop": "",
      "transcription": "j̃ähä katipam",
      "translation": "vai ficar aquí",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "38",
      "start": "",
      "stop": "",
      "transcription": "jopykââ katipam",
      "translation": "the cat will stay",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "39",
      "start": "",
      "stop": "",
      "transcription": "kjêpyti hë katisïrïnterin/katisorinteri jopykââ",
      "translation": "kjêpyti will leave the cat here",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "40",
      "start": "",
      "stop": "",
      "transcription": "jopykââ jykwâri",
      "translation": "the cat shat",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "41",
      "start": "",
      "stop": "",
      "transcription": "jopykââ hën pan",
      "translation": "o gato está com medo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "42",
      "start": "",
      "stop": "",
      "transcription": "tinpan jopykââ hë",
      "translation": "o gato está com medo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "43",
      "start": "",
      "stop": "",
      "transcription": "jopykââ hë sunpan soti",
      "translation": "o gato está como da roposa/do cachorro",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "44",
      "start": "",
      "stop": "",
      "transcription": "jopykââ hë tisunpa soti",
      "translation": "o gato está com medo do cachorro",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "45",
      "start": "",
      "stop": "",
      "transcription": "jopykââ jatoo",
      "translation": "gato saiu (da casa)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "46",
      "start": "",
      "stop": "",
      "transcription": "jopykââ jyhatoo",
      "translation": "o gato saiu",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "47",
      "start": "",
      "stop": "",
      "transcription": "jyhatoo jopykââ pôttä",
      "translation": "the cat went outside, o gato saiu fora",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "48",
      "start": "",
      "stop": "",
      "transcription": "jytoo jopykââ",
      "translation": "gato foi em bora",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "49",
      "start": "",
      "stop": "",
      "transcription": "Kjêpyti hë tisari jopykââ pôpy",
      "translation": "K colocou o gato fora, K put the cat outside",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "50",
      "start": "",
      "stop": "",
      "transcription": "kjêpyti hë timmën jopykââ pôttä",
      "translation": "K jogou o gato fora",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "51",
      "start": "",
      "stop": "",
      "transcription": "jyhatoo jopykââ",
      "translation": "o gato saiu sozinho",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "52",
      "start": "",
      "stop": "",
      "transcription": "[Kjêpyti hë tipjori mën sakwa] jyhatoo jopykââ",
      "translation": "Kjêpyti opened the door, saiu o gato; Kjêpyti abiu a porta, saiu o gato",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "53",
      "start": "",
      "stop": "",
      "transcription": "jopykââ jysâpïrï pârihä",
      "translation": "O gato subiu na árvore",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "54",
      "start": "",
      "stop": "",
      "transcription": "jysâpïrï pârihä jopykââ",
      "translation": "o gato subiu na árvore",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "55",
      "start": "",
      "stop": "",
      "transcription": "pârihä jynkwâ jopykââ",
      "translation": "gato desceu da árvore",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "56",
      "start": "",
      "stop": "",
      "transcription": "pâripên tinpân Kjêpyti hë jopykââ",
      "translation": "da árvore Kjêpyti pegou o gato",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "57",
      "start": "",
      "stop": "",
      "transcription": "Kjêpyti hë tiwajärï inkwâ hahê jopykââ",
      "translation": "Kjêpyti fez alguma coisa para gato descer",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "58",
      "start": "",
      "stop": "",
      "transcription": "Kjêpyti hë tiwajärï inkwâ hahê jopykââ pâri pên",
      "translation": "Kjêpyti fez o gato descer da árvore (“deve ser você chamom colocou alguma alimentaçäo para ele descer”)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "59",
      "start": "",
      "stop": "",
      "transcription": "inkjë rasöti",
      "translation": "estou dormindo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "60",
      "start": "",
      "stop": "",
      "transcription": "wâtâti hë kjëntokâtin",
      "translation": "o sol me da um sonho",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "61",
      "start": "",
      "stop": "",
      "transcription": "tinkjëntokâti sö hë",
      "translation": "a comida me faz dormir",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "62",
      "start": "",
      "stop": "",
      "transcription": "Kjêpyti hë tiröwan Kuupêri",
      "translation": "Kjêpyti bateu muito forte no Kuupêri (machuca ou mata)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "63",
      "start": "",
      "stop": "",
      "transcription": "Kjêpyti hë tisikâri Kuupêri",
      "translation": "Kjêpyti hit Kuupêri; Kjêpyti bateu no Kuupêri",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "64",
      "start": "",
      "stop": "",
      "transcription": "Pêkjä hë titäkô kjêpyti tisikârahê Kuupêri",
      "translation": "Pêkjä pediu/mandou Kjêpyti bater no Kuupêri",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},
{
  "metadata": {
    "title": "Akâ hunting story",
    "speakers": "Akâ",
    "linguists": "Myriam Lapierre, Bernat Bardagil-Mas",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 0,
      "start": "10730",
      "stop": "12909",
      "transcription": " Jowpy ra= pa.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 1,
      "start": "13740",
      "stop": "15390",
      "transcription": "Rê pjâ-ri jowpy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": "15720",
      "stop": "16720",
      "transcription": "Mãmã ni.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": "17235",
      "stop": "19625",
      "transcription": "Rê= pari, rê= pari.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": "20900",
      "stop": "23240",
      "transcription": "Rê= kâri pjoo sua, kjow.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": "24830",
      "stop": "27480",
      "transcription": "Sua kjã rê= kâri, sikâkâ rê= kjã= kâri.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": "28360",
      "stop": "29590",
      "transcription": "Kâ pêj ho krĩ.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": "32900",
      "stop": "36410",
      "transcription": "Nânkjô ti= kjã= kwârâ, rê= ta= pa-ri jowpy.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": "37360",
      "stop": "41000",
      "transcription": "Ikjyti ti= kjã= kwârâ, rê= ta= pa-ri jowpy.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": "41490",
      "stop": "42830",
      "transcription": "Ikjyti ti= kjã= kwârâ.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": "44575",
      "stop": "48181",
      "transcription": "Rê= wajã-ri inkjẽ-merãn, suankjara.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": "50295",
      "stop": "53345",
      "transcription": " Ikjyti kõ ra= pa.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": "54010",
      "stop": "55200",
      "transcription": "Rê= pa-ri.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": "57290",
      "stop": "59930",
      "transcription": "Rê= sinôpô rê= sinõ.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": "60025",
      "stop": "62715",
      "transcription": "Rê= si= na= sâri, ho= ra= pôô tu ho.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": "65190",
      "stop": "69424",
      "transcription": "Kôôwma su= ra=\n pa rê=\n ho= jôti, rê=\n kuri ikjyti.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": "69559",
      "stop": "70520",
      "transcription": "Rê= para.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": "71620",
      "stop": "75477",
      "transcription": " Rê= para rê= kwajãra suankjarã ikjyti.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": "77264",
      "stop": "80745",
      "transcription": "Pytikôôma ra= pa tõ, rê= pjâri.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": "81352",
      "stop": "84586",
      "transcription": "%% not verified pê pa suasĩra ho ra pa pjyâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": "85496",
      "stop": "89535",
      "transcription": "Uwã rê= pjâri mama ni rê= pan suasĩra.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": "90129",
      "stop": "91168",
      "transcription": "Rê= pari.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": "91806",
      "stop": "93858",
      "transcription": "Rê= ho= jôti, rê= kuri.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": "94440",
      "stop": "96895",
      "transcription": "Rê= kuri rê= kwajãri suasĩra.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": "97663",
      "stop": "103221",
      "transcription": "Hê py= pa jôriti, rê= pari jôriti rê= kuri.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": "104326",
      "stop": "107508",
      "transcription": "Ho= ra= pôô rê= kuri jôriti rê= kuri.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": "109574",
      "stop": "112301",
      "transcription": "Jãnsy japêj sowpy ra= pa.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": "112528",
      "stop": "115308",
      "transcription": "Ra= pa suasêri mã rê= pjyri.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": "115703",
      "stop": "117872",
      "transcription": "Jãnsy rê= pari.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": "118732",
      "stop": "121031",
      "transcription": "Ho= ra= pôô kri tã.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": "121338",
      "stop": "124013",
      "transcription": "Rê= sê kjê, rê= mĩ, rê= kuri.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": "124526",
      "stop": "126396",
      "transcription": "Rê= kwajãri jãnsy.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": "127996",
      "stop": "133307",
      "transcription": "Hê tititi kõõ ra= pa paa kõõ.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": "133372",
      "stop": "135749",
      "transcription": "Ũwa rê= pjâ pẽkwa.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": "136727",
      "stop": "139961",
      "transcription": "Mãmã ni rê= kwân, rê= kwân.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": "140876",
      "stop": "145967",
      "transcription": " Rê= sapôpô, kô ho rê= sapôpô tititi, rê= pari.\n",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": "147418",
      "stop": "153029",
      "transcription": "rê ho juti mãmã pêj ho ra pôô kri tã tititi ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": "153244",
      "stop": "154751",
      "transcription": "rê sê kjê (fer foc)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": "155288",
      "stop": "157093",
      "transcription": "rê nã syri (lligar)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": "158190",
      "stop": "161545",
      "transcription": "re mĩri kjê amã rê kuri tititi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": "161743",
      "stop": "163782",
      "transcription": "rê wajã tititi rê kuri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 41,
      "start": "166316",
      "stop": "170965",
      "transcription": "soti rê so kuri mãmã soti ra rê so kura pjâra(menjar que es pot menjar)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 42,
      "start": "171524",
      "stop": "172823",
      "transcription": "ra pa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 43,
      "start": "173763",
      "stop": "175348",
      "transcription": "swasêri mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 44,
      "start": "175600",
      "stop": "178289",
      "transcription": "mãmã rê pjâri pâtiti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 45,
      "start": "178777",
      "stop": "180777",
      "transcription": "pêj tã pa (van a menjar qlcm que saps que mengen",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 46,
      "start": "181273",
      "stop": "186195",
      "transcription": "pôjôtâ(mena de termita) ti so kuri tâtũ(qualsevol) sanpâ(menja) pâtiti pôjôtâ ti kuri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 47,
      "start": "186601",
      "stop": "188925",
      "transcription": "rê tã pari pâtiti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 48,
      "start": "189512",
      "stop": "193772",
      "transcription": "ho ra pô kri tã rê kuri pâtiti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 49,
      "start": "195075",
      "stop": "196790",
      "transcription": "rê wajãri (és així)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 50,
      "start": "197467",
      "stop": "200597",
      "transcription": "rê wajãri japjârâ(nosaltres) rê so pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 51,
      "start": "200900",
      "stop": "203290",
      "transcription": "po ho rê so pari japjârâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 52,
      "start": "203432",
      "stop": "206107",
      "transcription": "swâsi(fletxa dentada) ho su rê so pari ikôw",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 53,
      "start": "206718",
      "stop": "208588",
      "transcription": "ikôw nê pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 54,
      "start": "209075",
      "stop": "213244",
      "transcription": "swâsi ho, ho ra pô, rê kuri ikôw",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 55,
      "start": "214350",
      "stop": "217169",
      "transcription": "kwakriti re pari po(fletxa punxeguda de \"tacuara\") ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 56,
      "start": "218324",
      "stop": "222090",
      "transcription": "ho ra pô, rê mĩri, rê kuri kwakriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 57,
      "start": "225221",
      "stop": "228637",
      "transcription": "swakõ rê pari tõ po ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 58,
      "start": "229910",
      "stop": "235439",
      "transcription": "rê kuri rê so ra pôô swakõ ho rê kuri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 59,
      "start": "235733",
      "stop": "238343",
      "transcription": "rê wajãri sõjowpy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 60,
      "start": "240163",
      "stop": "243280",
      "transcription": "japjâra rê so pari po ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 61,
      "start": "244078",
      "stop": "246247",
      "transcription": "jowpy rê ho pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 62,
      "start": "246688",
      "stop": "248247",
      "transcription": "ikjyti rê ho pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 63,
      "start": "249643",
      "stop": "251123",
      "transcription": "nankjô rê ho pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 64,
      "start": "251159",
      "stop": "253185",
      "transcription": "jôriti rê ho pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 65,
      "start": "253492",
      "stop": "255206",
      "transcription": "jãnsy rê ho pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 66,
      "start": "255262",
      "stop": "257068",
      "transcription": "pâtiti rê ho pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 67,
      "start": "258104",
      "stop": "262614",
      "transcription": "suakõ rê ho pari, kwakriti rê ho pari, rê nkwajãri po ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 68,
      "start": "263185",
      "stop": "264726",
      "transcription": "po ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 69,
      "start": "267985",
      "stop": "272362",
      "transcription": "soti ho rê wajãri pjow tôrinsi  kô ho su rê sapôpô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 70,
      "start": "272617",
      "stop": "274924",
      "transcription": "rê pjâ torinsi kô ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 71,
      "start": "275259",
      "stop": "278770",
      "transcription": "rê kõ kre torinsi kõ rê kõ kre",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 72,
      "start": "278849",
      "stop": "280696",
      "transcription": "hõkwa(allà) rê pjâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 73,
      "start": "281635",
      "stop": "284512",
      "transcription": "rê sapôpô torinsi kô ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 74,
      "start": "284589",
      "stop": "290170",
      "transcription": "mãmã pêj rê ho pôô, rê rõwa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 75,
      "start": "291217",
      "stop": "294768",
      "transcription": "ho ra pôô rê sapu(fer un cistell de fulles) ho ra pa kri tã rê kuri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 76,
      "start": "295406",
      "stop": "297732",
      "transcription": "nẽ kwajãri torinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 77,
      "start": "298035",
      "stop": "300229",
      "transcription": "torinsi rê kuri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 78,
      "start": "302425",
      "stop": "306089",
      "transcription": "swâsi ho, rê sê sunswâ (fer per coŀlocar) swâsi tep ahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 79,
      "start": "306177",
      "stop": "308085",
      "transcription": "rê ho sapôpô tepi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 80,
      "start": "308655",
      "stop": "311268",
      "transcription": "kjãrãsânsi(tucunare) rê ho sapôpô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 81,
      "start": "312841",
      "stop": "315178",
      "transcription": "tosôa(bicuda) rê ho sapôpô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 82,
      "start": "316317",
      "stop": "317888",
      "transcription": "swaja(peixe cachorro) rê sapôpô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 83,
      "start": "318041",
      "stop": "319764",
      "transcription": "pjoja(pacu) rê ho sapôpô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 84,
      "start": "319793",
      "stop": "321984",
      "transcription": "jõti(curimata) rê ho sapôpô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 85,
      "start": "322382",
      "stop": "324073",
      "transcription": "rê wajã swâsi ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 86,
      "start": "324698",
      "stop": "326771",
      "transcription": "swâsi ho rê pari tepi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 87,
      "start": "326987",
      "stop": "328980",
      "transcription": "swâsi ho rê sapôpô tepi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 88,
      "start": "329040",
      "stop": "330025",
      "transcription": "swâsi ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 89,
      "start": "330792",
      "stop": "332093",
      "transcription": "rê wajãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 90,
      "start": "332924",
      "stop": "335821",
      "transcription": "apjã rê kjã kwâri tõ swâsi ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 91,
      "start": "335920",
      "stop": "336854",
      "transcription": "Apjã ho rê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 92,
      "start": "336898",
      "stop": "339038",
      "transcription": "apjã nê pari swâsi ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 93,
      "start": "339293",
      "stop": "340403",
      "transcription": "rê kuri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 94,
      "start": "340491",
      "stop": "342256",
      "transcription": "apjã swâsi ho rê pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 95,
      "start": "343381",
      "stop": "344594",
      "transcription": "rê wajãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 96,
      "start": "345529",
      "stop": "348544",
      "transcription": "swâsi ho rê pari nânpân(arara)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 97,
      "start": "349672",
      "stop": "352422",
      "transcription": "rê kuri nânpân swâsi ho rê pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 98,
      "start": "353337",
      "stop": "355859",
      "transcription": "swâsi ho rê pari tomakriti(mutum)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 99,
      "start": "356676",
      "stop": "359330",
      "transcription": "rê kuri tomakriti swâsi ho rê pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 100,
      "start": "360315",
      "stop": "363124",
      "transcription": "kowtita(jacu) rê pari swâsi ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 101,
      "start": "364023",
      "stop": "365420",
      "transcription": "rê kuri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 102,
      "start": "366749",
      "stop": "369999",
      "transcription": "sõkranpjââ rê ho sapôpô swâsi ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 103,
      "start": "370164",
      "stop": "371847",
      "transcription": "rê ho kuri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 104,
      "start": "372565",
      "stop": "374910",
      "transcription": "âh rê wajãri swâsi ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 105,
      "start": "374991",
      "stop": "378234",
      "transcription": "swâsi, sopãjantê swâsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 106,
      "start": "379407",
      "stop": "382723",
      "transcription": "tomakritantê, nãnpârantê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 107,
      "start": "384413",
      "stop": "386236",
      "transcription": "tomasâ(tipu de mutum) rê ho pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 108,
      "start": "386295",
      "stop": "387912",
      "transcription": "prete rê ho pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 109,
      "start": "391222",
      "stop": "393200",
      "transcription": "wârô(papagaio) rê ho pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 110,
      "start": "395063",
      "stop": "396982",
      "transcription": "swakjê rê ho pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 111,
      "start": "396994",
      "stop": "398862",
      "transcription": "jõkwekwen rê ho pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 112,
      "start": "398938",
      "stop": "401754",
      "transcription": "rê wajãri swâsi ho, tân rê kwajãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 113,
      "start": "402923",
      "stop": "405276",
      "transcription": "po ho su rê ho pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 114,
      "start": "405646",
      "stop": "408234",
      "transcription": "ikjyti po ho, ikjyti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 115,
      "start": "408560",
      "stop": "409560",
      "transcription": "jowpy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 116,
      "start": "409718",
      "stop": "410858",
      "transcription": "nânkjô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 117,
      "start": "410869",
      "stop": "412082",
      "transcription": "jôriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 118,
      "start": "412626",
      "stop": "414398",
      "transcription": "pâtiti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 119,
      "start": "414550",
      "stop": "416013",
      "transcription": "jãsy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 120,
      "start": "416716",
      "stop": "417863",
      "transcription": "\"so\" japjâra",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 121,
      "start": "417905",
      "stop": "419824",
      "transcription": "japjâra rê ho pari po ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 122,
      "start": "420295",
      "stop": "422977",
      "transcription": "swâsi ho su tepi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 123,
      "start": "423079",
      "stop": "424873",
      "transcription": "swâsi ho su tomakriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 124,
      "start": "424901",
      "stop": "425703",
      "transcription": "nânpân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 125,
      "start": "425776",
      "stop": "426725",
      "transcription": "rê kwajãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 126,
      "start": "427358",
      "stop": "430307",
      "transcription": "rê kwajãri inkjẽmerân swankjarân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 127,
      "start": "431697",
      "stop": "434116",
      "transcription": "antigo hẽ ti wajãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 128,
      "start": "434154",
      "stop": "435720",
      "transcription": "swankjarân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 129,
      "start": "437010",
      "stop": "440076",
      "transcription": "kowma kjarân pjow, kowma kjarân pjow, jankjapjârân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 130,
      "start": "440260",
      "stop": "441981",
      "transcription": "kamerân ka rê mã...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 131,
      "start": "442391",
      "stop": "444376",
      "transcription": "antigo, kamerân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 132,
      "start": "444997",
      "stop": "447490",
      "transcription": "jankjarân, swankjarân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 133,
      "start": "447713",
      "stop": "449919",
      "transcription": "inkjẽmera pẽẽ swankjara",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 134,
      "start": "451703",
      "stop": "453681",
      "transcription": "ia ra kan sũ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 135,
      "start": "459859",
      "stop": "462573",
      "transcription": "rê pãpã ho jy pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 136,
      "start": "462950",
      "stop": "465325",
      "transcription": "rê pãpã ka ti tanpa ka hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 137,
      "start": "465530",
      "stop": "466625",
      "transcription": "jy pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Jôôtu story",
    "speakers": "Jôôtu",
    "linguists": "Myriam Lapierre, Bernat Bardagil-Mas",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 0,
      "start": "29607",
      "stop": "31215",
      "transcription": "rê pôsô pre",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 1,
      "start": "32269",
      "stop": "34323",
      "transcription": "kjãpo ahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": "42005",
      "stop": "45491",
      "transcription": "pykôôma sa po rapêj swasêri mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": "45714",
      "stop": "47376",
      "transcription": "swasêri mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": "48135",
      "stop": "53608",
      "transcription": "ra kâ paa... ra sapêj swasêri mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": "53648",
      "stop": "57662",
      "transcription": "ra paa... ra so pa kwakriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": "57891",
      "stop": "60026",
      "transcription": "rê so kja kjũrã ra so pa kwakriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": "60675",
      "stop": "64499",
      "transcription": "mãmã pêj ra py ho pan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": "64810",
      "stop": "67296",
      "transcription": "ra py ho pôô kri tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": "67932",
      "stop": "70689",
      "transcription": "pjõpjõ ho ran prejn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": "71175",
      "stop": "72905",
      "transcription": "pjõpjõ ho sõjoopy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": "73182",
      "stop": "75290",
      "transcription": "mãmã ra py ho pôô kri tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": "75485",
      "stop": "78931",
      "transcription": "mãmã ra sê kjêj sipjâapjârân kjêj amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": "79593",
      "stop": "81607",
      "transcription": "mãmã ra mĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": "82864",
      "stop": "86296",
      "transcription": "mãmã pêj rã kjêj krĩ[esperar até ficar pronto] kjêj amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": "86675",
      "stop": "88189",
      "transcription": "ra pari[pocurar a comida]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": "88432",
      "stop": "90297",
      "transcription": "mãmã pêj ra kjâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": "91114",
      "stop": "92992",
      "transcription": "ra a kjâ....",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": "94289",
      "stop": "96343",
      "transcription": "mãmã pêj ra pĩ mã sa krej[dividir]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": "97242",
      "stop": "99823",
      "transcription": "ra pĩ mã sõ....",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": "100363",
      "stop": "103322",
      "transcription": "ra ho jy pjow mãmã pêj ra so ku kjãpo amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": "103551",
      "stop": "106810",
      "transcription": "nãjã sotẽ swankjarân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": "108350",
      "stop": "112499",
      "transcription": "jan swankjara pẽẽ tân kwakriti ra pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": "113189",
      "stop": "115783",
      "transcription": "tôrinsi ra sa pôpô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": "116020",
      "stop": "117993",
      "transcription": "tôrinsi ra sa ko tõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": "118378",
      "stop": "119486",
      "transcription": "swankjara",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": "121499",
      "stop": "123878",
      "transcription": "mẽ jy kwy tãrajã[assim]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": "124107",
      "stop": "126878",
      "transcription": "tôrinsi mãmã hẽ kypa jõ kjâ tôrinsi hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": "127905",
      "stop": "129770",
      "transcription": "nãjã tôrinsi hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": "130019",
      "stop": "132898",
      "transcription": "jĩ sê[fa voltes] tôrinsi hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": "135891",
      "stop": "139378",
      "transcription": "ra pjâri ja mã rõ rajãri[assim que a gente encontra]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": "140459",
      "stop": "142648",
      "transcription": "mãmã pêj ra a su tôrinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": "142918",
      "stop": "144445",
      "transcription": "uu sâ kjõ[fica no fundo]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": "144445",
      "stop": "147013",
      "transcription": "mãmã pêj rãnkjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": "147607",
      "stop": "148783",
      "transcription": "pâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": "149202",
      "stop": "150837",
      "transcription": "mãmã pêj ra sê kâ pam",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": "150945",
      "stop": "157040",
      "transcription": "pêj sê kjã kâ pan ka... totya[tipus d'arbre fruiter]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": "157445",
      "stop": "158702",
      "transcription": "totya kô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": "158959",
      "stop": "161175",
      "transcription": "kâjasâkjã ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": "161445",
      "stop": "164378",
      "transcription": "swankjara inkjow kâjasâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": "164715",
      "stop": "168350",
      "transcription": "kâjasâkjã rê pĩ mã ku kjẽn [dividir]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 41,
      "start": "168878",
      "stop": "173351",
      "transcription": "rê ho jõti[dur posat] jãhã inkôkô[esquena] hã swankjarân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 42,
      "start": "173391",
      "stop": "174445",
      "transcription": "sotirõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 43,
      "start": "174992",
      "stop": "176573",
      "transcription": "inkjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 44,
      "start": "178843",
      "stop": "180383",
      "transcription": "mãmã pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 45,
      "start": "183581",
      "stop": "184527",
      "transcription": "ra su ho pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 46,
      "start": "184615",
      "stop": "187115",
      "transcription": "mãmã pêj ra tã krej tôrinsi hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 47,
      "start": "192418",
      "stop": "194878",
      "transcription": "ra nẽ kypa, ra tã kre ja pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 48,
      "start": "200256",
      "stop": "203202",
      "transcription": "krekjã jãhã kypa rej jĩ kre",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 49,
      "start": "203303",
      "stop": "205384",
      "transcription": "mãmã pêj ra su ho pa tôrinsi suu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 50,
      "start": "208810",
      "stop": "209972",
      "transcription": "sâ jahã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 51,
      "start": "210418",
      "stop": "211891",
      "transcription": "sâ jahã kõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 52,
      "start": "212080",
      "stop": "213782",
      "transcription": "mãmã pêj ra py sê pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 53,
      "start": "215040",
      "stop": "218526",
      "transcription": "ra py sunkjân... ra kjẽri[trobar el forat i cavar]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 54,
      "start": "219141",
      "stop": "220330",
      "transcription": "hê, sãn![quan el trobes] rêjãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 55,
      "start": "221971",
      "stop": "224282",
      "transcription": "mámá pëj ra sapôpô kô ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 56,
      "start": "224998",
      "stop": "226119",
      "transcription": "mãmã pêj ra krâ[estibar]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 57,
      "start": "228159",
      "stop": "229294",
      "transcription": "ra ho pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 58,
      "start": "229881",
      "stop": "231733",
      "transcription": "mãmã pêj ra pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 59,
      "start": "234395",
      "stop": "235530",
      "transcription": "ra soti rê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 60,
      "start": "237201",
      "stop": "239269",
      "transcription": "rã ra so kwajã sõjoopy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 61,
      "start": "239431",
      "stop": "241093",
      "transcription": "swankja pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 62,
      "start": "241851",
      "stop": "244810",
      "transcription": "jamã ra pa tân aty kõ ti krẽ pẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 63,
      "start": "245148",
      "stop": "246378",
      "transcription": "to jy pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 64,
      "start": "248432",
      "stop": "251351",
      "transcription": "jamã suu ra py so paa kowmã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 65,
      "start": "251662",
      "stop": "253175",
      "transcription": "rê ranpun inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 66,
      "start": "253357",
      "stop": "254871",
      "transcription": "rê so tã ranpun inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 67,
      "start": "255242",
      "stop": "258053",
      "transcription": "ra kõ ra pa swasêri mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 68,
      "start": "259073",
      "stop": "261559",
      "transcription": "rê sanpyn kâjasâpasê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 69,
      "start": "263161",
      "stop": "265161",
      "transcription": "ra kõ ra pa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 70,
      "start": "266060",
      "stop": "268154",
      "transcription": "mãmã pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 71,
      "start": "269357",
      "stop": "271897",
      "transcription": "ikjyti tõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 72,
      "start": "272620",
      "stop": "275445",
      "transcription": "mãra hẽ ti kjẽ so pari insi ka...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 73,
      "start": "278094",
      "stop": "280662",
      "transcription": "kjẽ jũnpjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 74,
      "start": "280898",
      "stop": "283263",
      "transcription": "tijãri tân su rê sanpun kjẽ junpjâ Kârântoa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 75,
      "start": "283722",
      "stop": "284600",
      "transcription": "tijari tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 76,
      "start": "285235",
      "stop": "287843",
      "transcription": "tijãri ti ra pêj pĩri kayapo hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 77,
      "start": "288586",
      "stop": "289802",
      "transcription": "rê sanpun inkjẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 78,
      "start": "290471",
      "stop": "291660",
      "transcription": "mãra hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 79,
      "start": "292207",
      "stop": "295288",
      "transcription": "ti ra pêj pĩri kayapo hẽ atõ ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 80,
      "start": "295875",
      "stop": "297916",
      "transcription": "rankwyn[chorar] inkjẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 81,
      "start": "298770",
      "stop": "302351",
      "transcription": "tijãri tân ka mãmã tân pam Pĩtiti[filho Jootu]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 82,
      "start": "304485",
      "stop": "308066",
      "transcription": "ti pam ra pêj pĩri kjẽ junpjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 83,
      "start": "310904",
      "stop": "314296",
      "transcription": "mãmã pêj jy ra twatĩ[sem pai] kjẽmẽra",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 84,
      "start": "315337",
      "stop": "317931",
      "transcription": "mãmã pêj rê jĩ so pari[ell mateix havia de caçar]inkjẽ hẽ tijãri tân ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 85,
      "start": "318283",
      "stop": "320999",
      "transcription": "tepi rê jĩ sapôpô kâjân ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 86,
      "start": "321310",
      "stop": "323634",
      "transcription": "rê tepi japôpô jampannõ[sense parar] kjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 87,
      "start": "325715",
      "stop": "327364",
      "transcription": "pa mẽ rê pari ka",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 88,
      "start": "328424",
      "stop": "330221",
      "transcription": "kwaka, arara",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 89,
      "start": "331464",
      "stop": "333383",
      "transcription": "rê sapôpô hĩ[sempre així] inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 90,
      "start": "333594",
      "stop": "337189",
      "transcription": "rê so pari kâjân ho rêjãri tã, ra panpe inkjẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 91,
      "start": "337391",
      "stop": "339202",
      "transcription": "rapanpe pytinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 92,
      "start": "339810",
      "stop": "341837",
      "transcription": "haa ra sari tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 93,
      "start": "342729",
      "stop": "344688",
      "transcription": "rê pari totoka[mico petit]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 94,
      "start": "344782",
      "stop": "348431",
      "transcription": "mãmã hẽ jãri nõkô-nõkô-nõkô tã jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 95,
      "start": "349869",
      "stop": "352694",
      "transcription": "rê pari tõ sâpeti[mico molt petit]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 96,
      "start": "353923",
      "stop": "356463",
      "transcription": "ti so kuri kjẽ twapjâ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 97,
      "start": "357216",
      "stop": "363216",
      "transcription": "ti ra sôôn so kuri kjãpo amã kjẽ twapjâ Koopyjy hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 98,
      "start": "364716",
      "stop": "367013",
      "transcription": "kjẽ topjâpjâ Iakiô hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 99,
      "start": "367702",
      "stop": "370040",
      "transcription": "paa, rê mã so pari inkjẽ hẽ jõkwekwej",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 100,
      "start": "370378",
      "stop": "372418",
      "transcription": "jõkwekwe mẽ rê mã so pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 101,
      "start": "373593",
      "stop": "375539",
      "transcription": "ti so kuri kjẽ topjâpjâ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 102,
      "start": "375708",
      "stop": "377275",
      "transcription": "kjẽ twapjâ Koopyjy hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 103,
      "start": "377647",
      "stop": "378783",
      "transcription": "kjãpo amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 104,
      "start": "379870",
      "stop": "384749",
      "transcription": "sê so tõ pĩri hã jõkwekwe sâpeti hĩ, rê jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 105,
      "start": "385242",
      "stop": "387837",
      "transcription": "sokjapê[procurar bicho] ho ra pa ate",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 106,
      "start": "388797",
      "stop": "390540",
      "transcription": "pjy ja pô hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 107,
      "start": "392364",
      "stop": "395107",
      "transcription": "sê su so to ra pôô kjẽ twapjâ suu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 108,
      "start": "395945",
      "stop": "399810",
      "transcription": "ti so kuri kjẽ twapjâ hẽ ti jĩ so pôri tsy amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 109,
      "start": "401222",
      "stop": "406040",
      "transcription": "ti so kuri kjẽ twapjâ hẽ Koopyjy mẽ kjẽ topjâpjâ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 110,
      "start": "406327",
      "stop": "407773",
      "transcription": "kjẽ topjâpjâ ro pa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 111,
      "start": "408138",
      "stop": "410192",
      "transcription": "topjâpjâ Iakiô mẽ Koopyjy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 112,
      "start": "411037",
      "stop": "412672",
      "transcription": "mãmã mẽ ro pa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 113,
      "start": "412915",
      "stop": "416050",
      "transcription": "kõ ra pa pjow kjẽ rãpjâ kõ swari pa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 114,
      "start": "417405",
      "stop": "418688",
      "transcription": "atte",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 115,
      "start": "420194",
      "stop": "421883",
      "transcription": "jaa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 116,
      "start": "422756",
      "stop": "426580",
      "transcription": "atte ro pa kjẽ topjâpjâ kukrenprẽ jamã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 117,
      "start": "426661",
      "stop": "428648",
      "transcription": "haa ti jãra mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 118,
      "start": "429944",
      "stop": "432647",
      "transcription": "ro pa ja panô rê jĩ mã sa pôpô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 119,
      "start": "434040",
      "stop": "435486",
      "transcription": "intapa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 120,
      "start": "436418",
      "stop": "439310",
      "transcription": "rê jĩ mã sopari  mãmã ra sũ sotti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 121,
      "start": "439627",
      "stop": "440438",
      "transcription": "ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 122,
      "start": "442377",
      "stop": "444390",
      "transcription": "mãmã ra sotã jĩ sũ inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 123,
      "start": "444660",
      "stop": "446565",
      "transcription": "wã hã swankjara tã ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 124,
      "start": "446848",
      "stop": "448538",
      "transcription": "mãmã to jy pjow ippẽ hẽ kypa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 125,
      "start": "450024",
      "stop": "451983",
      "transcription": "ra pan inkjẽ jãhã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 126,
      "start": "455918",
      "stop": "458216",
      "transcription": "mãmã pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 127,
      "start": "459756",
      "stop": "463958",
      "transcription": "rê amã so kuri si kjãpo amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 128,
      "start": "464256",
      "stop": "465458",
      "transcription": "rê sôri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 129,
      "start": "465864",
      "stop": "467337",
      "transcription": "rê pja sân so kurinsi ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 130,
      "start": "468931",
      "stop": "470796",
      "transcription": "pakwa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 131,
      "start": "471235",
      "stop": "473005",
      "transcription": "ittu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 132,
      "start": "473951",
      "stop": "475492",
      "transcription": "kjãpo",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 133,
      "start": "475593",
      "stop": "477714",
      "transcription": "swankjara kjõ rê so kurinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 134,
      "start": "477862",
      "stop": "479092",
      "transcription": "ra tyjã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 135,
      "start": "480039",
      "stop": "482810",
      "transcription": "mĩ ja krẽẽ! kjẽ twapjâ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 136,
      "start": "482945",
      "stop": "484729",
      "transcription": "hê rê kãnsari ittu, tijãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 137,
      "start": "485155",
      "stop": "486546",
      "transcription": "mãmã pêj rê kuri kattu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 138,
      "start": "486695",
      "stop": "488289",
      "transcription": "inkwânpe tu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 139,
      "start": "488499",
      "stop": "489823",
      "transcription": "swankjara tan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 140,
      "start": "490141",
      "stop": "492695",
      "transcription": "jy ra pêê ty kjẽ twapjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 141,
      "start": "494384",
      "stop": "496006",
      "transcription": "ti kjẽ sa swyri tõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 142,
      "start": "497850",
      "stop": "498675",
      "transcription": "pakwa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 143,
      "start": "498715",
      "stop": "499904",
      "transcription": "pakwa kârãkjã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 144,
      "start": "500451",
      "stop": "501924",
      "transcription": "nãsisinpe",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 145,
      "start": "502202",
      "stop": "504945",
      "transcription": "pakwa kârãkjã, rê kuri tõ pakwa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 146,
      "start": "505958",
      "stop": "510513",
      "transcription": "ti kjẽ so kja swâri kjẽ twapjâ twatũ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 147,
      "start": "510959",
      "stop": "512891",
      "transcription": "rê sô so kuri kjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 148,
      "start": "513472",
      "stop": "515797",
      "transcription": "py sa po a kwy ti kjẽ jãrinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 149,
      "start": "516952",
      "stop": "518370",
      "transcription": "sa po rapansi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 150,
      "start": "520121",
      "stop": "522675",
      "transcription": "rê mã sapôpônsi pan nĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 151,
      "start": "527593",
      "stop": "532067",
      "transcription": "rê sõ joopy pjã ka inkjẽ hẽ rê so pari pjã kâjân ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 152,
      "start": "535337",
      "stop": "537972",
      "transcription": "rê so pari pjã rã krii kjẽ hẽ [m-agradava matar animals]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 153,
      "start": "538256",
      "stop": "541229",
      "transcription": "nê nanpari rõ inkjara, inkjow [ni pensava en dones]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 154,
      "start": "542573",
      "stop": "544668",
      "transcription": "ti kjẽ jãri kjẽ topjâpjâ Jakjô hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 155,
      "start": "544721",
      "stop": "545627",
      "transcription": "ka kân sũ ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 156,
      "start": "546275",
      "stop": "547964",
      "transcription": "ka ra nĩri pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 157,
      "start": "549823",
      "stop": "551999",
      "transcription": "inkjara inkjow ti jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 158,
      "start": "552377",
      "stop": "555053",
      "transcription": "ka so para hênpe hĩ ti kjẽ jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 159,
      "start": "555235",
      "stop": "556614",
      "transcription": "swankjara pẽẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 160,
      "start": "557390",
      "stop": "559025",
      "transcription": "ka so para hênpe",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 161,
      "start": "559295",
      "stop": "562443",
      "transcription": "ka ti jãpêj hã ti kjẽ jãri ka kjẽ topjâpjâ Jakjô hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 162,
      "start": "562849",
      "stop": "565443",
      "transcription": "a tã tũ a pa ka so parênpe",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 163,
      "start": "565518",
      "stop": "567085",
      "transcription": "hĩ! rê inkjãri inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 164,
      "start": "567281",
      "stop": "568875",
      "transcription": "kaa pjâ tanta",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 165,
      "start": "569031",
      "stop": "570936",
      "transcription": "tijãri tã ti kjẽ pẽẽ ja kre",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 166,
      "start": "572436",
      "stop": "573787",
      "transcription": "topjâpjâ Jakjô hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 167,
      "start": "574753",
      "stop": "577158",
      "transcription": "ja rê sotinpari kjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 168,
      "start": "577300",
      "stop": "581418",
      "transcription": "mãmã ramã rê so pa ra kwa inkjẽ hẽ kâjân ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 169,
      "start": "582972",
      "stop": "585864",
      "transcription": "rê pĩri kwakriti jãhã sõkôti rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 170,
      "start": "586339",
      "stop": "588084",
      "transcription": "mũn pytinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 171,
      "start": "588578",
      "stop": "590259",
      "transcription": "ky py su kwy kâjân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 172,
      "start": "591179",
      "stop": "592806",
      "transcription": "rê sun swâri jãhã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 173,
      "start": "594316",
      "stop": "596402",
      "transcription": "jy ra sô tẽn kwakriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 174,
      "start": "597407",
      "stop": "599503",
      "transcription": "ti ra sôri mĩri kjẽ nãpjâ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 175,
      "start": "600627",
      "stop": "603074",
      "transcription": "jy pan sê ra tepi inkjy jamã tijã ramã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 176,
      "start": "605063",
      "stop": "607361",
      "transcription": "na sari tâti inkjẽ kâjân ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 177,
      "start": "607558",
      "stop": "609824",
      "transcription": "paa, inkjẽ kĩn kâjân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 178,
      "start": "611489",
      "stop": "613254",
      "transcription": "kâjân ho rê so pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 179,
      "start": "613493",
      "stop": "615621",
      "transcription": "mãmã ra kan tã jĩ sũrĩ kjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 180,
      "start": "616584",
      "stop": "618796",
      "transcription": "jahã soti jã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 181,
      "start": "619796",
      "stop": "628823",
      "transcription": "rê so kuramã... soti jaaan swankjara tan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 182,
      "start": "630810",
      "stop": "634296",
      "transcription": "krejâ mẽ rê so kuri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 183,
      "start": "635371",
      "stop": "640235",
      "transcription": "pjã mẽ ti tõ mõsy rê jĩ sê pôri tepi ahê rê a mã kuri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 184,
      "start": "640985",
      "stop": "641512",
      "transcription": "ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 185,
      "start": "643782",
      "stop": "645782",
      "transcription": "kôkôpy ranpyn jĩ swakjara",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 186,
      "start": "645802",
      "stop": "646964",
      "transcription": "soti rõ amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 187,
      "start": "648810",
      "stop": "651837",
      "transcription": "rê kuri nãnpre jy pĩ tori",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 188,
      "start": "652702",
      "stop": "654229",
      "transcription": "jy pĩ tori nãnpre",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 189,
      "start": "654715",
      "stop": "657107",
      "transcription": "jãhã krĩ tosypôa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 190,
      "start": "657634",
      "stop": "659418",
      "transcription": "a tã tũ nãnpyn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 191,
      "start": "659925",
      "stop": "663452",
      "transcription": "kwatintepi rê kuri ja mãmã ho kukre ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 192,
      "start": "663641",
      "stop": "664695",
      "transcription": "kwatintepi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 193,
      "start": "665309",
      "stop": "668931",
      "transcription": "rê jĩ pôri kjẽmẽrân nẽ kuri kjẽmẽrân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 194,
      "start": "669688",
      "stop": "672864",
      "transcription": "prĩ tan kjẽ nãpjã hẽ ti kjẽ so pôri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 195,
      "start": "673229",
      "stop": "674864",
      "transcription": "nẽ kuri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 196,
      "start": "676228",
      "stop": "677836",
      "transcription": "inta rãhã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 197,
      "start": "679741",
      "stop": "681917",
      "transcription": "rê kuri tõ kwakriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 198,
      "start": "682498",
      "stop": "683471",
      "transcription": "kwakriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 199,
      "start": "684166",
      "stop": "685910",
      "transcription": "pjã ky py tapja pẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 200,
      "start": "686910",
      "stop": "687991",
      "transcription": "mamão",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 201,
      "start": "688673",
      "stop": "692822",
      "transcription": "haa, rê kuri kwakriti kjẽmẽrân tõ nãsisinpe",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 202,
      "start": "693323",
      "stop": "696283",
      "transcription": "a tã tũn rê so kuri swankjarân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 203,
      "start": "696310",
      "stop": "698134",
      "transcription": "inkjow mãmã ra pa tan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 204,
      "start": "702323",
      "stop": "704242",
      "transcription": "mãmã kuri akwyti hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 205,
      "start": "704586",
      "stop": "708424",
      "transcription": "akwyti rê sanpyn tõ kjẽ hẽ swankja tan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 206,
      "start": "708701",
      "stop": "710728",
      "transcription": "rê tõ pyn inkjẽ hẽ akwyti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 207,
      "start": "711653",
      "stop": "713667",
      "transcription": "na pẽrinpe inkjẽ ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 208,
      "start": "713896",
      "stop": "715302",
      "transcription": "naha, kre",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 209,
      "start": "717349",
      "stop": "720444",
      "transcription": "swankjarân rê so kwajãri ja soti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 210,
      "start": "722673",
      "stop": "724741",
      "transcription": "akwyti mãmã rê sanpyn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 211,
      "start": "727173",
      "stop": "728565",
      "transcription": "pjã ti tõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 212,
      "start": "729486",
      "stop": "731553",
      "transcription": "tôrinsi rê pĩri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 213,
      "start": "732985",
      "stop": "735391",
      "transcription": "jôriti rê pĩri tõ kâjân ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 214,
      "start": "736019",
      "stop": "737681",
      "transcription": "kâjân ho rê pĩri tõ jôriti ũãhã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 215,
      "start": "738019",
      "stop": "739397",
      "transcription": "panãranpe tan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 216,
      "start": "740147",
      "stop": "742742",
      "transcription": "na sari pjow kooma kjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 217,
      "start": "742951",
      "stop": "744870",
      "transcription": "nã pê kâjân nõ amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 218,
      "start": "745646",
      "stop": "749592",
      "transcription": "nã sa ra pêjn ũãhã pĩ nõ ra pa tan panãranpe tan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 219,
      "start": "750783",
      "stop": "752837",
      "transcription": "mãmã nĩ ti ra pê ta ra pa kayapo hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 220,
      "start": "755918",
      "stop": "758297",
      "transcription": "ja rê sũ rãhê inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 221,
      "start": "759262",
      "stop": "761587",
      "transcription": "pjã ka ti pja sũri inkjẽ nsipjâ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 222,
      "start": "765364",
      "stop": "768648",
      "transcription": "jahã rẽ ka tã jĩ sũ sõjoopy hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 223,
      "start": "769310",
      "stop": "770999",
      "transcription": "rê amã so kura",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 224,
      "start": "777526",
      "stop": "778485",
      "transcription": "pjã mã sũ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 225,
      "start": "869025",
      "stop": "870725",
      "transcription": "tititi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 226,
      "start": "870763",
      "stop": "872538",
      "transcription": "pâtiti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 227,
      "start": "875338",
      "stop": "877138",
      "transcription": "jãsy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 228,
      "start": "887125",
      "stop": "888750",
      "transcription": "nõnpej",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 229,
      "start": "900375",
      "stop": "901950",
      "transcription": "paa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 230,
      "start": "902825",
      "stop": "907925",
      "transcription": "mãmã rê kãn sũ kjẽ topjâpjâ Iakiô ro pa, rê sanpun",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 231,
      "start": "908488",
      "stop": "911113",
      "transcription": "ti kjẽ sê wajãri kâjân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 232,
      "start": "911600",
      "stop": "917200",
      "transcription": "jy tã ra tepi inkjââ tãnpjâ, mãmã ra kã jĩ sũ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 233,
      "start": "917500",
      "stop": "920700",
      "transcription": "rê sanpun topjâpjâ Iakio, mãmã ro pa pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 234,
      "start": "920963",
      "stop": "922413",
      "transcription": "topjâpjâ Iakiô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 235,
      "start": "922701",
      "stop": "924851",
      "transcription": "kjẽ twapjâ Kopyjy mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 236,
      "start": "925314",
      "stop": "927402",
      "transcription": "mãmã na mẽ ro pa pêj ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 237,
      "start": "927402",
      "stop": "929602",
      "transcription": "jãhã jy ra pêty koomã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 238,
      "start": "929640",
      "stop": "932090",
      "transcription": "mãmã nĩ Matupa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 239,
      "start": "932453",
      "stop": "934528",
      "transcription": "Matupa, Kôtikô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 240,
      "start": "935003",
      "stop": "937028",
      "transcription": "mãmã nĩ jy ra pêty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 241,
      "start": "937203",
      "stop": "938778",
      "transcription": "kjẽ topjâpjâ Iakiô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 242,
      "start": "939053",
      "stop": "941703",
      "transcription": "inkjẽ rãpjâ Jôôkri jy ra pê mẽ ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 243,
      "start": "941766",
      "stop": "944591",
      "transcription": "wântwê hã tunsi hã jy ra pêty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 244,
      "start": "944891",
      "stop": "946191",
      "transcription": "koomã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 245,
      "start": "946629",
      "stop": "949004",
      "transcription": "ta pôô tapja Xingu tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 246,
      "start": "952987",
      "stop": "958713",
      "transcription": "pjã rãnkjo hẽ ky py pan ra pê pĩ pa nã pêty topjâpjâ Iakiô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 247,
      "start": "960368",
      "stop": "961547",
      "transcription": "topjâpjâ Iakiô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 248,
      "start": "961879",
      "stop": "963487",
      "transcription": "nẽ sanpun inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 249,
      "start": "966201",
      "stop": "968165",
      "transcription": "tijãri topjâpjâ Iakiô hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 250,
      "start": "968629",
      "stop": "970153",
      "transcription": "innã gordo",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 251,
      "start": "970987",
      "stop": "971856",
      "transcription": "innã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 252,
      "start": "972665",
      "stop": "974582",
      "transcription": "asyka inkjy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 253,
      "start": "978273",
      "stop": "978975",
      "transcription": "how?",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 254,
      "start": "980880",
      "stop": "983201",
      "transcription": "mãrapjâra ti wajãrinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 255,
      "start": "983499",
      "stop": "984939",
      "transcription": "pêê tã kjapjâra",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 256,
      "start": "985201",
      "stop": "987939",
      "transcription": "ippê jamẽra swankjara pẽẽ hã ippê ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 257,
      "start": "988135",
      "stop": "991147",
      "transcription": "mãmã hã ti tã jĩ sũrinsi jahã mãmã py pan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 258,
      "start": "992706",
      "stop": "994004",
      "transcription": "ippê jahã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 259,
      "start": "994444",
      "stop": "995849",
      "transcription": "asânpe ka",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 260,
      "start": "996640",
      "stop": "997592",
      "transcription": "swankjara",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 261,
      "start": "997765",
      "stop": "999610",
      "transcription": "inkjy ka",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 262,
      "start": "1000359",
      "stop": "1001931",
      "transcription": "asâpansi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 263,
      "start": "1002571",
      "stop": "1005654",
      "transcription": "ti so tã jĩ sũ ian pa tâti mãmã pan pêj tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 264,
      "start": "1005940",
      "stop": "1008559",
      "transcription": "ippê ja rê inkjãri ja mãmã ra pan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 265,
      "start": "1008690",
      "stop": "1010690",
      "transcription": "mãmã pju jyy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 266,
      "start": "1012213",
      "stop": "1015535",
      "transcription": "jahã ti tã jĩ sũrinsi kjẽ topjâpjâ Iakiô hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 267,
      "start": "1015820",
      "stop": "1018296",
      "transcription": "ka kãn tã jĩ sũ ti kjẽ jãrinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 268,
      "start": "1018790",
      "stop": "1020218",
      "transcription": "rê sotinpari inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 269,
      "start": "1020218",
      "stop": "1022563",
      "transcription": "rê pẽẽnpari inkjẽ hẽ topjâpjâ Iakiô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 270,
      "start": "1023134",
      "stop": "1024098",
      "transcription": "hãã rê jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 271,
      "start": "1024324",
      "stop": "1027729",
      "transcription": "nã tĩrĩ tãn ka kãn tã jĩ sũ mãra hã ti jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 272,
      "start": "1028437",
      "stop": "1030794",
      "transcription": "ra tĩri tãn ka jy pjori",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 273,
      "start": "1032133",
      "stop": "1036383",
      "transcription": "inẽ jy ka ti ri hẽ kamẽrân tĩnkjẽ jãrinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 274,
      "start": "1037609",
      "stop": "1040573",
      "transcription": "mãmã jy ra pê ty kri topjâpjâ Iakiô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 275,
      "start": "1041394",
      "stop": "1043013",
      "transcription": "mãmã ro pa pêê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 276,
      "start": "1043387",
      "stop": "1044221",
      "transcription": "topjâpjâ Iakiô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 277,
      "start": "1045274",
      "stop": "1047322",
      "transcription": "jy pjow mãmã hã tân sĩ ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 278,
      "start": "1049244",
      "stop": "1055845",
      "transcription": "kjẽ topjâpjâ Iakiô kjẽ twapjyâ Koopyjy mẽ jy ra pê mẽ jy pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 279,
      "start": "1057654",
      "stop": "1059868",
      "transcription": "mãmã ra pa inkjẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 280,
      "start": "1060874",
      "stop": "1062636",
      "transcription": "ra pa inkjân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 281,
      "start": "1063570",
      "stop": "1066332",
      "transcription": "jahã ti so sũ topjâpjâ Iakiô hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 282,
      "start": "1068868",
      "stop": "1072190",
      "transcription": "asâ pjow topjâpjâ Iakiô swa kjõri[orientar la gent] ka",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 283,
      "start": "1073773",
      "stop": "1076082",
      "transcription": "swa kjõrã topjâpjâ Iakiô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 284,
      "start": "1076873",
      "stop": "1078123",
      "transcription": "kjow, ti jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 285,
      "start": "1079468",
      "stop": "1081778",
      "transcription": "ti ra tõ kwajãri pjow, kjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 286,
      "start": "1082950",
      "stop": "1084724",
      "transcription": "rê sanpun rãmã inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 287,
      "start": "1090678",
      "stop": "1092071",
      "transcription": "...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 288,
      "start": "1094618",
      "stop": "1096749",
      "transcription": "paa, tinkjẽ sũ hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 289,
      "start": "1096963",
      "stop": "1098141",
      "transcription": "ti tã jĩ sũ hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 290,
      "start": "1098986",
      "stop": "1100867",
      "transcription": "tinkjẽ tã jĩ sũ hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 291,
      "start": "1102729",
      "stop": "1106170",
      "transcription": "ka sê sũ rã swa japêj ta kja, ti ra jĩ sũ pjyy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 292,
      "start": "1106883",
      "stop": "1108252",
      "transcription": "rê tõ pĩri pjow inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 293,
      "start": "1109073",
      "stop": "1110716",
      "transcription": "tĩkjẽ tã jĩ sũ hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 294,
      "start": "1114094",
      "stop": "1116380",
      "transcription": "prẽ hẽ ky py sũn swâ jãhã pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 295,
      "start": "1119154",
      "stop": "1120356",
      "transcription": "inkjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 296,
      "start": "1121594",
      "stop": "1124201",
      "transcription": "topjâpjâ Iakiô suu ra sa kwa rẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 297,
      "start": "1124224",
      "stop": "1125974",
      "transcription": "topjâpjâ Iakiô hẽ ti kjẽ tã jĩ sũ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 298,
      "start": "1127152",
      "stop": "1128724",
      "transcription": "ti kjẽ tã jĩ sũ mãra hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 299,
      "start": "1130039",
      "stop": "1131265",
      "transcription": "pêj tã kja hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 300,
      "start": "1131384",
      "stop": "1134170",
      "transcription": "haa, ky py ra sun swâ jãhã pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 301,
      "start": "1134557",
      "stop": "1135699",
      "transcription": "jy too rê jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 302,
      "start": "1136110",
      "stop": "1138741",
      "transcription": "jy kõ ra tẽn hã tijãri pâri hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 303,
      "start": "1139121",
      "stop": "1141526",
      "transcription": "ũãhã tinkjẽ tã jĩ sũrinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 304,
      "start": "1141936",
      "stop": "1143448",
      "transcription": "Sõkârãsã nĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 305,
      "start": "1143793",
      "stop": "1145841",
      "transcription": "iãhã Sõkârãsã rĩ prẽ rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 306,
      "start": "1146037",
      "stop": "1147751",
      "transcription": "mãmã to jy pjow pẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 307,
      "start": "1149808",
      "stop": "1151659",
      "transcription": "ti pãpã syri pâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 308,
      "start": "1151659",
      "stop": "1154540",
      "transcription": "mãmã nĩ tinkjẽ tã jĩ sũ inkâpy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 309,
      "start": "1155045",
      "stop": "1156367",
      "transcription": "inkwa pôô pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 310,
      "start": "1157283",
      "stop": "1158926",
      "transcription": "inpja tâtinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 311,
      "start": "1160190",
      "stop": "1162047",
      "transcription": "rê tân sanpun pãpã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 312,
      "start": "1162273",
      "stop": "1163725",
      "transcription": "ũãtã ra krĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 313,
      "start": "1163838",
      "stop": "1166255",
      "transcription": "pãpã mãmã jy ra jy pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 314,
      "start": "1166683",
      "stop": "1168254",
      "transcription": "ra tõ pa pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 315,
      "start": "1169188",
      "stop": "1170950",
      "transcription": "kooma su ka ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 316,
      "start": "1171896",
      "stop": "1173801",
      "transcription": "mãmã ti ra pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 317,
      "start": "1174901",
      "stop": "1178390",
      "transcription": "inẽ japêj ky py ra su mõri mekragnoti tũm pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 318,
      "start": "1179437",
      "stop": "1180663",
      "transcription": "ja ka kãn sũ hê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 319,
      "start": "1181163",
      "stop": "1182639",
      "transcription": "haa, ti ra para",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 320,
      "start": "1184404",
      "stop": "1189166",
      "transcription": "juri ky py ra su mõ mãmã jy ra pja sân jy pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 321,
      "start": "1190225",
      "stop": "1194011",
      "transcription": "inkjẽ kjââ inkjẽ mã kjẽ junpjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 322,
      "start": "1194564",
      "stop": "1196505",
      "transcription": "kjẽ junpjâ Kârântoa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 323,
      "start": "1196885",
      "stop": "1199326",
      "transcription": "pa ttã, Sõnsêrãsã tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 324,
      "start": "1199563",
      "stop": "1200754",
      "transcription": "kypa tõ tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 325,
      "start": "1201223",
      "stop": "1202807",
      "transcription": "ũãhã mãmã nĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 326,
      "start": "1203711",
      "stop": "1207199",
      "transcription": "Matupa, ja tã swa tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 327,
      "start": "1208368",
      "stop": "1209654",
      "transcription": "Sõrêrãsã tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 328,
      "start": "1210279",
      "stop": "1210838",
      "transcription": "py!",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 329,
      "start": "1211826",
      "stop": "1214647",
      "transcription": "ka sanpun râhê ka twâpjâ tinkjẽ jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 330,
      "start": "1215718",
      "stop": "1217004",
      "transcription": "hĩn! nê jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 331,
      "start": "1217212",
      "stop": "1220200",
      "transcription": "jy pan sê ra tepinkjâ rê jãri, rê inkwâri kâjân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 332,
      "start": "1220688",
      "stop": "1222009",
      "transcription": "kâjân rê inkwâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 333,
      "start": "1222223",
      "stop": "1223675",
      "transcription": "jy ra sari inkjẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 334,
      "start": "1225237",
      "stop": "1228594",
      "transcription": "kjẽ râpjâ mẽ kjẽ junpjâ mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 335,
      "start": "1232511",
      "stop": "1233214",
      "transcription": "ra pa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 336,
      "start": "1234011",
      "stop": "1235392",
      "transcription": "ra jõti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 337,
      "start": "1236778",
      "stop": "1238373",
      "transcription": "py ra jõti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 338,
      "start": "1239617",
      "stop": "1242009",
      "transcription": "py ra jõti, y jâhã hĩ paa kypa mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 339,
      "start": "1242581",
      "stop": "1243866",
      "transcription": "paa, kypa mã ra pa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 340,
      "start": "1244003",
      "stop": "1246348",
      "transcription": "ja mã, ja tã pjy rõ mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 341,
      "start": "1247633",
      "stop": "1248859",
      "transcription": "py ra jõti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 342,
      "start": "1249752",
      "stop": "1251645",
      "transcription": "jy ra jõ kri ahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 343,
      "start": "1252394",
      "stop": "1253716",
      "transcription": "jy ra têpi [a prop del poblat]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 344,
      "start": "1254882",
      "stop": "1255537",
      "transcription": "paa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 345,
      "start": "1255917",
      "stop": "1257358",
      "transcription": "mã mĩ jĩ kâ ty rê jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 346,
      "start": "1258630",
      "stop": "1259404",
      "transcription": "rê sê kuri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 347,
      "start": "1259749",
      "stop": "1261178",
      "transcription": "rê sê tẽj pjuti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 348,
      "start": "1262421",
      "stop": "1264469",
      "transcription": "rê sê kâ swâri pan ka... pĩpjyâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 349,
      "start": "1264998",
      "stop": "1267201",
      "transcription": "mãmã pêj nê ra kõ jĩ kâ ty inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 350,
      "start": "1267450",
      "stop": "1269391",
      "transcription": "rê jĩ kâ ty pãpã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 351,
      "start": "1270094",
      "stop": "1272547",
      "transcription": "pãpã ranto kâ ty pytinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 352,
      "start": "1272826",
      "stop": "1274397",
      "transcription": "rê jĩ kâ ty pãpã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 353,
      "start": "1274986",
      "stop": "1277653",
      "transcription": "jy paa têpi pykkôômã ka ti pa pôô rê jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 354,
      "start": "1278527",
      "stop": "1280741",
      "transcription": "ippẽ hẽ ti ra pa rahê pju jy ahẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 355,
      "start": "1281676",
      "stop": "1282735",
      "transcription": "nãnprĩn pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 356,
      "start": "1284461",
      "stop": "1287080",
      "transcription": "jy ra pôô Sõnsêrãsã tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 357,
      "start": "1289059",
      "stop": "1290779",
      "transcription": "jy rẽj a pôô, jy ra pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 358,
      "start": "1290779",
      "stop": "1293553",
      "transcription": "kukreanka, kukre kin pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 359,
      "start": "1294726",
      "stop": "1296511",
      "transcription": "pjã ho pjo rê jĩ sotarêê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 360,
      "start": "1297279",
      "stop": "1299767",
      "transcription": "ra pa kukreanka amã asê amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Women work",
    "speakers": "Kâransâ",
    "linguists": "Myriam Lapierre",
    "Indigenous researchers": "Sôpôha (transcription, translation",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 0,
      "start": "19732",
      "stop": "21896",
      "transcription": "haa mãmã ra kãnsüri ja kuupêri",
      "translation": "Sim, então isso que estou contando para você, Kuupêri",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 1,
      "start": "21908",
      "stop": "26230",
      "transcription": "nãrajã ja inkjara",
      "translation": "Assim que nós mulheres fazemos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": "26540",
      "stop": "29550",
      "transcription": "pên kati tãmõ ja hakun",
      "translation": "então o tempo (a época da seca) vai passando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": "30250",
      "stop": "32030",
      "transcription": "pên inkjôti pôô",
      "translation": "Então quando sai o [inkjôti] (sai muito cedo, ás 4-5 horas da manhã)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": "32170",
      "stop": "36825",
      "transcription": "inkjôti pôô inkjôtakaka ka sânpün jysujy, pên",
      "translation": "Quando sair o inkjôti, o inkjôti muito branco, eles [os homens, as mulheres) vão ver que o inkjôti fica muito lónge já (já está subindo, são 11 horas), então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": "37432",
      "stop": "39233",
      "transcription": "ka pan, pên",
      "translation": "eles vão andar, então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": "40244",
      "stop": "41729",
      "transcription": "ka pïnmãsukâ",
      "translation": "eles vão se chamar (entre eles)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": "41733",
      "stop": "44608",
      "transcription": "ka pïnjusari kukâra hê puu",
      "translation": "eles vão se avisar (recp.) para demarcar a roça",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": "44928",
      "stop": "48450",
      "transcription": "surapaha hê, rê sânpürã hê kypakjã",
      "translation": "para eles virem, para eles verem a terra preta",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": "48706",
      "stop": "50248",
      "transcription": "kypatipô",
      "translation": "terra de areia branca",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": "50660",
      "stop": "51933",
      "transcription": "ja hahê",
      "translation": "para isso",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": "52532",
      "stop": "53527",
      "transcription": "pên",
      "translation": "então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": "53773",
      "stop": "56578",
      "transcription": "karãkõ inpyhara puu sân",
      "translation": "os homens vão se espalhar em busca da roça (de um lugar para fazer nova roça)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": "57344",
      "stop": "61447",
      "transcription": "ka pan ka sânpün puu ka sâmpun",
      "translation": "eles vão andar e eles vão ver a roça (o lugar para fazer roça), eles vão ver",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": "61496",
      "stop": "63628",
      "transcription": "nem nësaswâri [ket] (rêsaswâri pjo) kypahãnka",
      "translation": "Eles não vzão demarcar terra ruim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": "63788",
      "stop": "65913",
      "transcription": "kypanprâ, nãnka",
      "translation": "terra vermelha, é ruim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": "66358",
      "stop": "68668",
      "transcription": "kypakjã japê ka pan",
      "translation": "eles vão andar atrás da terra preta",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": "68668",
      "stop": "71028",
      "transcription": "kypatipô japê ka pan",
      "translation": "eles vão andar atrás da terra de areia branca",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": "71132",
      "stop": "73593",
      "transcription": "pên ka sânpün puu ",
      "translation": "então vão ver a roça (eles vão ver/achar um lugar para fazer roça)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": "73593",
      "stop": "76637",
      "transcription": "pên kapy sârintêrin, ka sânpün",
      "translation": "então eles vão atravessar de novo, eles vão ver",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": "77476",
      "stop": "80895",
      "transcription": "pên ka pjâ kypa kïn kypatipô",
      "translation": "então eles vão achar terra boa, terra de areia branca",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": "81132",
      "stop": "82404",
      "transcription": "ka pjâ",
      "translation": "eles vão achar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": "82568",
      "stop": "85877",
      "transcription": "kypakjã ja mï kukâri, pên kati kusyrin",
      "translation": "\"Esta terra preta, vamos (incl) demarcar,\" então ele vai demarcar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": "86096",
      "stop": "88030",
      "transcription": "kati hopopo kïrin",
      "translation": "Ele vai fazer ela bem redonda",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": "88483",
      "stop": "90756",
      "transcription": "pên kati homö",
      "translation": "Então ele vai indo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": "90976",
      "stop": "92918",
      "transcription": "pên kati kusyri kïn",
      "translation": "então ele vai marcar bem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": "93967",
      "stop": "95776",
      "transcription": "pên kankjân kukâ",
      "translation": "então eles também vão demarcar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": "96104",
      "stop": "97663",
      "transcription": "pên ka pysêpôô",
      "translation": "então eles vão voltar para continuar (a trabalhar na roça)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": "98290",
      "stop": "101018",
      "transcription": "kati kwan puu kukâri",
      "translation": "a roça dermarcada vai ficar lá (deitada)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": "101022",
      "stop": "105133",
      "transcription": "kati kwan, pên mãmãrahã ka supan",
      "translation": "vai ficar lá, então nesse momento eles vão em busca da roça",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": "105276",
      "stop": "107107",
      "transcription": "rêrãrê jahê puu",
      "translation": "para eles roçarem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": "107915",
      "stop": "111143",
      "transcription": "ka rãrêrïn, ka rãrê",
      "translation": "eles vão roçar, eles vão roçar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": "111703",
      "stop": "114019",
      "transcription": "pên ka mãnpen puu mã",
      "translation": "então eles vão terminar a roça",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": "114471",
      "stop": "117397",
      "transcription": "pên ka pypôô puu pên",
      "translation": "então eles vão voltar da roça",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": "117844",
      "stop": "121741",
      "transcription": "rarãrê inpyharân ja tã rarãrê inkjarân",
      "translation": "os homens estão roçando para lá, e as mulheres estão roçando (do outro lado)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": "122531",
      "stop": "126346",
      "transcription": "pên impyti rê/ impyti hë ti rõwarã ka pysêpôô",
      "translation": "então se chegar na hora (11 hrs), o pessoal vai voltar para casa, e depois voltar para continuar (a roçar)",
      "notes": "inpyti hë ti rõwarã = se o sol bater naquele lugar (11 hrs)",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": "126346",
      "stop": "129684",
      "transcription": "ka pÿn nãn/ kaj rãnsõn (ka pÿn rãnsõn) prïaran",
      "translation": "elas vão fazer comida para as crianças",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": "129800",
      "stop": "131373",
      "transcription": "rapêrãnkwy pa",
      "translation": "(as crianças) estão andando chorando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": "131378",
      "stop": "135165",
      "transcription": "pên ka rãnsõn sokkjô pãã ho, pên",
      "translation": "então eles vão se alimentar com qualquer coisinha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": "135458",
      "stop": "137245",
      "transcription": "ka rarêmï ittu",
      "translation": "elas vão enterrar batata (no forno de pedra)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": "137277",
      "stop": "139175",
      "transcription": "ka rarêmï kjãpo",
      "translation": "eles vão cozir beiju tradicional",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 41,
      "start": "139957",
      "stop": "144464",
      "transcription": "pên ka kwâ, ka ku prïarân kjãpo, ittu",
      "translation": "então eles vão cavar (desenterrar), as crianças vão comer, beiju, batata",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 42,
      "start": "145230",
      "stop": "146906",
      "transcription": "pakwa ka ku",
      "translation": "bananas eles vão comer",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 43,
      "start": "147450",
      "stop": "148318",
      "transcription": "pên",
      "translation": "então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 44,
      "start": "148975",
      "stop": "151695",
      "transcription": "pên ti/ pysupôô më pÿn impyti",
      "translation": "então assim que chegar de novo o horário",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 45,
      "start": "152063",
      "stop": "153953",
      "transcription": "ka pypan puu su",
      "translation": "eles vão andar de novo para a roça",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 46,
      "start": "154513",
      "stop": "156873",
      "transcription": "pên ka pyrãrê",
      "translation": "então eles vão roçar de novo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 47,
      "start": "157006",
      "stop": "158594",
      "transcription": "pên ka mãnpen",
      "translation": "então eles vão terminar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 48,
      "start": "158608",
      "stop": "161711",
      "transcription": "rêmãnpe, mãkwa puu rêrãrê pjo",
      "translation": "eles terminaram. a roça estã lá, não precisa mais roçar",
      "notes": "mãkwa = está lá",
      "words": [
        ""
      ]
    },
    {
      "id": 49,
      "start": "161711",
      "stop": "163652",
      "transcription": "kati kwa pïpï",
      "translation": "está lá (deitado) em silencio",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 50,
      "start": "164190",
      "stop": "166705",
      "transcription": "pên ka samãrïn, pên",
      "translation": "então eles vão vigiar/cuidar, então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 51,
      "start": "166793",
      "stop": "169153",
      "transcription": "rêpãpã mãnpe ja hahã puu",
      "translation": "nesse momento todo mundo terminou a roça",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 52,
      "start": "169378",
      "stop": "174303",
      "transcription": "pên ka su pan puu su, pên katisumë hakwyy hãn",
      "translation": "então eles vão andar de novo em busca da roça, então \"vocês dois vão indo\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 53,
      "start": "174397",
      "stop": "177706",
      "transcription": "kapjamë kârahê inkjëkrïpjânpy hë",
      "translation": "para vocês derrobar, meu gênro",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 54,
      "start": "178209",
      "stop": "182694",
      "transcription": "puu ti pja kâri ahê hïn kati jã krïpjâmpy hë",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 55,
      "start": "182978",
      "stop": "184596",
      "transcription": "kati su kwyj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 56,
      "start": "184669",
      "stop": "186353",
      "transcription": "kati kâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 57,
      "start": "186654",
      "stop": "190699",
      "transcription": "mã swankaa pên kati kõtã kwy krïpjâmpy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 58,
      "start": "191039",
      "stop": "192495",
      "transcription": "krïpjâ toopâtün",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 59,
      "start": "192546",
      "stop": "195282",
      "transcription": "kati kö kwyj kati kö kâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 60,
      "start": "195963",
      "stop": "199676",
      "transcription": "pja py sâ më pôô pên ka ra mï kjãpo",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 61,
      "start": "199693",
      "stop": "201222",
      "transcription": "ka ra mï ittu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 62,
      "start": "201961",
      "stop": "204263",
      "transcription": "mõ ramã pja sân ampâ rahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 63,
      "start": "204340",
      "stop": "206266",
      "transcription": "mõramã pja sân ampâ rahe",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 64,
      "start": "206266",
      "stop": "208509",
      "transcription": "kati mã mï kati mã kôti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 65,
      "start": "208879",
      "stop": "213379",
      "transcription": "kati su pôô kati mõ ho kwyj kati pja sân ku pâripja sân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 66,
      "start": "213562",
      "stop": "215724",
      "transcription": "kati pja sân sâmpâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 67,
      "start": "216319",
      "stop": "216827",
      "transcription": "pên kati",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 68,
      "start": "217561",
      "stop": "221392",
      "transcription": "pên pykkôômã kati py su kwy kati py kââ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 69,
      "start": "221395",
      "stop": "222638",
      "transcription": "kati mãmpen",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 70,
      "start": "222722",
      "stop": "225531",
      "transcription": "kati mãmpen puu kati rõ puu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 71,
      "start": "226082",
      "stop": "227523",
      "transcription": "pên kati tã saamã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 72,
      "start": "228607",
      "stop": "230445",
      "transcription": "kati tã saamã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 73,
      "start": "230452",
      "stop": "232867",
      "transcription": "pên inta piti më pyn ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 74,
      "start": "232867",
      "stop": "235940",
      "transcription": "kat/ ka su mõ puu rê ku pôô ahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 75,
      "start": "236242",
      "stop": "239264",
      "transcription": "pên ka pïn ju saa puu suu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 76,
      "start": "239302",
      "stop": "243949",
      "transcription": "pên ka su rã kõ impyara krïpjâmpyarân nã ra pôô puu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 77,
      "start": "244314",
      "stop": "248270",
      "transcription": "pên ka su rã kõ pên ka pôô puu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 78,
      "start": "249624",
      "stop": "252278",
      "transcription": "pên ka py pja sân poôj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 79,
      "start": "252979",
      "stop": "257832",
      "transcription": "kati a/ kati sêrõ wakam pyti kwam kati ha kan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 80,
      "start": "258089",
      "stop": "261816",
      "transcription": "pên pykkôômã kati sânpun ti kïn japê ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 81,
      "start": "261976",
      "stop": "263829",
      "transcription": "ti kïn japê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 82,
      "start": "264078",
      "stop": "268013",
      "transcription": "kati sânpun kati kô pam puu kõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 83,
      "start": "268043",
      "stop": "270315",
      "transcription": "kati sânpun kati pja py sâ pô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 84,
      "start": "270493",
      "stop": "273383",
      "transcription": "a jy ti kïn haa jy ti kïn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 85,
      "start": "273799",
      "stop": "275910",
      "transcription": "jy pãpã titi pâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 86,
      "start": "275910",
      "stop": "278226",
      "transcription": "pãpã titi akjô kati ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 87,
      "start": "278806",
      "stop": "280842",
      "transcription": "pên ka to kwyj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 88,
      "start": "281478",
      "stop": "284191",
      "transcription": "mõsy ho ti kree ahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 89,
      "start": "284633",
      "stop": "287501",
      "transcription": "ja ka kren kôjasân tân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 90,
      "start": "287549",
      "stop": "291718",
      "transcription": "inkjõti [broto] ahê mãra pên kato kwy kati kren",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 91,
      "start": "292093",
      "stop": "293351",
      "transcription": "mõsy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 92,
      "start": "293725",
      "stop": "297342",
      "transcription": "kati kren kati mãmpen",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 93,
      "start": "297741",
      "stop": "300167",
      "transcription": "pên mãmã rahã ka su mõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 94,
      "start": "300958",
      "stop": "303635",
      "transcription": "rê mã ho/ rê mã rãrê ahê sâti mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 95,
      "start": "304550",
      "stop": "310640",
      "transcription": "sâti mã ka mã rê akjô kõ ka mã rõ kwyn pên ka mã rã põ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 96,
      "start": "310864",
      "stop": "313036",
      "transcription": "pârikjati hakjô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 97,
      "start": "313036",
      "stop": "316540",
      "transcription": "ka mã ho pôô pem hakjô pãã sâti mã ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 98,
      "start": "316838",
      "stop": "319301",
      "transcription": "ka mã rã põri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 99,
      "start": "319429",
      "stop": "321377",
      "transcription": "ka mã ho kïn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 100,
      "start": "322848",
      "stop": "325679",
      "transcription": "pên kati mãmpen sâtijõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 101,
      "start": "325769",
      "stop": "328416",
      "transcription": "kypa mã ti rã põ hakjô mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 102,
      "start": "328810",
      "stop": "331369",
      "transcription": "mãmã rahã ka sê kjãkâ kwysaa [issimpe]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 103,
      "start": "331405",
      "stop": "333251",
      "transcription": "ti kre ahê sakâ hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 104,
      "start": "333903",
      "stop": "336043",
      "transcription": "kati kjãkâ pên",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 105,
      "start": "336110",
      "stop": "340007",
      "transcription": "kato pjõ kati su ho pam puuntwe tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 106,
      "start": "341005",
      "stop": "343557",
      "transcription": "kwysaa ho kati sê pãã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 107,
      "start": "343583",
      "stop": "348902",
      "transcription": "kati sê wy nkwysaa pên mãmã rahã kati kjãkâ kwysaa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 108,
      "start": "350172",
      "stop": "353113",
      "transcription": "pên kati mã kren krïpjâmpy hë",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 109,
      "start": "353312",
      "stop": "355797",
      "transcription": "japê kati mã kren krïpjâmpy hë",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 110,
      "start": "355797",
      "stop": "358128",
      "transcription": "kati mã kren impimjâ hë",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 111,
      "start": "358441",
      "stop": "360073",
      "transcription": "krïpjâ toopâtün hë",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 112,
      "start": "360088",
      "stop": "362875",
      "transcription": "kati mã kren kati sâ mï",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 113,
      "start": "363881",
      "stop": "367145",
      "transcription": "kati sâ mï krïpjâmpy hë",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 114,
      "start": "367252",
      "stop": "370833",
      "transcription": "kati sâ mï krïpjânkjêj hë krâjyy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 115,
      "start": "370991",
      "stop": "372748",
      "transcription": "krekriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 116,
      "start": "373805",
      "stop": "375327",
      "transcription": "kati sookren",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 117,
      "start": "375327",
      "stop": "378606",
      "transcription": "japê kati sookren krïpjâ hë kwysaa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 118,
      "start": "379067",
      "stop": "384133",
      "transcription": "kati sookren krïpjânkjej hë kreekriti kreejyy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 119,
      "start": "384582",
      "stop": "386405",
      "transcription": "kati sookren",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 120,
      "start": "386552",
      "stop": "389037",
      "transcription": "kati sookren a kreenti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 121,
      "start": "390769",
      "stop": "394482",
      "transcription": "kati sookren pên kati soti mãmpen",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 122,
      "start": "394522",
      "stop": "396706",
      "transcription": "kati soti inkjõti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 123,
      "start": "397086",
      "stop": "399056",
      "transcription": "kati tün kwy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 124,
      "start": "399056",
      "stop": "400946",
      "transcription": "kati kjã kreejyy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 125,
      "start": "401420",
      "stop": "404302",
      "transcription": "kati pam pakwa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 126,
      "start": "404522",
      "stop": "406338",
      "transcription": "kati tu pô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 127,
      "start": "406338",
      "stop": "408937",
      "transcription": "kati jôjô kati tensi pakwa ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 128,
      "start": "409249",
      "stop": "410631",
      "transcription": "rõ wa jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 129,
      "start": "411016",
      "stop": "413082",
      "transcription": "swankjara jõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 130,
      "start": "413895",
      "stop": "415703",
      "transcription": "japên",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 131,
      "start": "416155",
      "stop": "417302",
      "transcription": "mãja tõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 132,
      "start": "418035",
      "stop": "419961",
      "transcription": "kati tã të inta",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 133,
      "start": "419969",
      "stop": "423201",
      "transcription": "kati tan kwyn ka syn sâti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 134,
      "start": "423415",
      "stop": "425915",
      "transcription": " inta inkwy hã sâti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 135,
      "start": "426499",
      "stop": "428271",
      "transcription": "ka kwâ sâti ka",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 136,
      "start": "428738",
      "stop": "431296",
      "transcription": "prëë pyti hë kati ho swam",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 137,
      "start": "431507",
      "stop": "434036",
      "transcription": "sâti kati ra mã sutân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 138,
      "start": "434085",
      "stop": "435924",
      "transcription": "suty kati mã sutân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 139,
      "start": "436316",
      "stop": "438566",
      "transcription": "kati rã surï sâti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 140,
      "start": "438778",
      "stop": "442190",
      "transcription": "kati rã su kati ho kjã puu saa sâti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 141,
      "start": "442533",
      "stop": "444459",
      "transcription": " sâti kati ho kjã puu saa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 142,
      "start": "444777",
      "stop": "448416",
      "transcription": "pên kati sê ra su kukre kö impy hë",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 143,
      "start": "448664",
      "stop": "452311",
      "transcription": "krïpjâmpyara ra pam sâti jahê rê ra suu rahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 144,
      "start": "452593",
      "stop": "454652",
      "transcription": "kati mõ kukre kõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 145,
      "start": "454674",
      "stop": "457454",
      "transcription": "kati sinkwâri sâti ahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 146,
      "start": "458301",
      "stop": "461455",
      "transcription": "sâti suu kati rê kjë suu ha pam kati inkjë sê kwâ rahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 147,
      "start": "461455",
      "stop": "462572",
      "transcription": "kwâ rahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 148,
      "start": "462667",
      "stop": "464667",
      "transcription": "karê inkjë sêsy ahê ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 149,
      "start": "464967",
      "stop": "468931",
      "transcription": "puu jahê kati jã/ kati mõ kukre kõ kati ra saa rõ mõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 150,
      "start": "469387",
      "stop": "471541",
      "transcription": " ti ra saa rõ mõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 151,
      "start": "472715",
      "stop": "475538",
      "transcription": "pên kati py pôô sõ kukre tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 152,
      "start": "476329",
      "stop": "479299",
      "transcription": "kati ram tã pôô kreekriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 153,
      "start": "479621",
      "stop": "481577",
      "transcription": "tã rampen në jâ rahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 154,
      "start": "481792",
      "stop": "483718",
      "transcription": "kati pô kreekriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 155,
      "start": "483755",
      "stop": "485446",
      "transcription": " kati pô kreejyy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 156,
      "start": "485872",
      "stop": "487666",
      "transcription": "pên rê tã ku rahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 157,
      "start": "488551",
      "stop": "494298",
      "transcription": "pên ka su pün inkjarân ka su pün impyarân nãhã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 158,
      "start": "494809",
      "stop": "498449",
      "transcription": "pên tumã kjâra amã krin sâti amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 159,
      "start": "498518",
      "stop": "499547",
      "transcription": "tumã kjâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 160,
      "start": "499709",
      "stop": "503150",
      "transcription": "nãsisi tumã kjâri ra tã kuri rejyn sâti amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 161,
      "start": "503608",
      "stop": "505182",
      "transcription": "pên kati syn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 162,
      "start": "505666",
      "stop": "508747",
      "transcription": "kaj tã pô tumã kjâri issy amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 163,
      "start": "508835",
      "stop": "510306",
      "transcription": "ka pôri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 164,
      "start": "510543",
      "stop": "512823",
      "transcription": "kati pepeti tumã kjâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 165,
      "start": "512874",
      "stop": "515609",
      "transcription": "pên ka ku tumã kjâ sâti amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 166,
      "start": "516059",
      "stop": "522194",
      "transcription": "ka ku ka syn ka mãmpen rê pãpã syn mãmpen ahã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 167,
      "start": "523381",
      "stop": "526252",
      "transcription": "rankjâ sy kïn pïn sâti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 168,
      "start": "526377",
      "stop": "528657",
      "transcription": "sâ kïn pï nãrã kjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 169,
      "start": "529011",
      "stop": "531673",
      "transcription": "sê rankjâ re sâ kïn pïn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 170,
      "start": "531796",
      "stop": "534039",
      "transcription": "syankaa kati/ syankaa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 171,
      "start": "534083",
      "stop": "535703",
      "transcription": "kaj tân kjâ kamï hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 172,
      "start": "535711",
      "stop": "538361",
      "transcription": "kjãpo hã kaj tân kjâ syanka",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 173,
      "start": "538813",
      "stop": "541724",
      "transcription": "pên kati ra nkjâri sy kïn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 174,
      "start": "541735",
      "stop": "542656",
      "transcription": "kre jahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 175,
      "start": "543024",
      "stop": "546488",
      "transcription": "kati ra nkjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 176,
      "start": "546701",
      "stop": "548793",
      "transcription": "kati sa kato pun",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 177,
      "start": "549204",
      "stop": "552169",
      "transcription": "parãmã pjâ pamã kato pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 178,
      "start": "552200",
      "stop": "553661",
      "transcription": "pjâ pamãra kjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 179,
      "start": "554134",
      "stop": "556966",
      "transcription": "pên kati nkjâ pjâ pamã pên kati nkjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 180,
      "start": "556988",
      "stop": "561462",
      "transcription": "kô/ kô kwâ amã mãmã mã ra soti mã akâj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 181,
      "start": "561502",
      "stop": "564907",
      "transcription": "mãmã ramã kati nkjâri kati nkjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 182,
      "start": "566242",
      "stop": "569973",
      "transcription": "kato kïri kati pren pên ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 183,
      "start": "570122",
      "stop": "571512",
      "transcription": "to kri pê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 184,
      "start": "571586",
      "stop": "573029",
      "transcription": "kati nãpren",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 185,
      "start": "573156",
      "stop": "575367",
      "transcription": "sâti kati sa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 186,
      "start": "576063",
      "stop": "577658",
      "transcription": "pên",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 187,
      "start": "578399",
      "stop": "580220",
      "transcription": "pykkôôtõ amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 188,
      "start": "580241",
      "stop": "581454",
      "transcription": "kati py sê ra sa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 189,
      "start": "581454",
      "stop": "583697",
      "transcription": "kati py mõ sâti ahê tõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 190,
      "start": "584102",
      "stop": "587438",
      "transcription": "kati py mõ kati py ra sa rõ mõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 191,
      "start": "588186",
      "stop": "590055",
      "transcription": "ka py mã su pün",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 192,
      "start": "590874",
      "stop": "592506",
      "transcription": "ka py mã syn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 193,
      "start": "593589",
      "stop": "596810",
      "transcription": "kukre tõ amã pên wãtün a ka tõ amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 194,
      "start": "596841",
      "stop": "598704",
      "transcription": "kati py sê ra sari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 195,
      "start": "598735",
      "stop": "602024",
      "transcription": "wãtün aka tõ kati py sê ra sa wãtün aka tõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 196,
      "start": "602321",
      "stop": "606942",
      "transcription": "pên rê pãpã sy mãnpe ahã kukre kõ sâti mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 197,
      "start": "607811",
      "stop": "610211",
      "transcription": "pên ka jï tã samãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 198,
      "start": "610305",
      "stop": "613352",
      "transcription": "mã akjôkjô ahã kypa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 199,
      "start": "613988",
      "stop": "617232",
      "transcription": "mãmã rahã ka ho pan puu sââ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 200,
      "start": "617232",
      "stop": "619043",
      "transcription": "ka ho rãkõ sâti ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 201,
      "start": "619222",
      "stop": "621138",
      "transcription": "ka ho rãkõri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 202,
      "start": "621641",
      "stop": "623757",
      "transcription": "pên ka kren sâti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 203,
      "start": "623983",
      "stop": "627741",
      "transcription": " ka kren ka/ ka kren pykkôômã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 204,
      "start": "627749",
      "stop": "631286",
      "transcription": "ja kosï ra pên ra pê tã sâ nkjân kârãjoo (peanut type)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 205,
      "start": "631549",
      "stop": "634128",
      "transcription": "kârãjoo inkjõ tankan ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 206,
      "start": "634492",
      "stop": "637971",
      "transcription": "pên kan terin impy kõ pên ka py ho pôôj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 207,
      "start": "639442",
      "stop": "641558",
      "transcription": "ka po pôôj a ka kre haa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 208,
      "start": "641596",
      "stop": "644185",
      "transcription": "rê kre japê pêrã rajã pê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 209,
      "start": "644800",
      "stop": "646868",
      "transcription": "ra py ho pan pykkôômã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 210,
      "start": "647794",
      "stop": "650457",
      "transcription": "ka/ ka hë tan te kjiti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 211,
      "start": "650786",
      "stop": "652307",
      "transcription": "kan te kjiti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 212,
      "start": "652376",
      "stop": "654618",
      "transcription": "pên ka ho pan pytenpê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 213,
      "start": "655402",
      "stop": "659165",
      "transcription": "pytenpê ka ho pan kati kren pytenpê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 214,
      "start": "659171",
      "stop": "660571",
      "transcription": "pên kati pjasâ pô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 215,
      "start": "661595",
      "stop": "663584",
      "transcription": "pên kati mã pëë ja kren",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 216,
      "start": "663642",
      "stop": "665326",
      "transcription": "uuhã pên kjapjâran",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 217,
      "start": "666107",
      "stop": "667676",
      "transcription": "rê mãnpe sâti mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 218,
      "start": "667676",
      "stop": "669493",
      "transcription": "kati rê kjë rõ to hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 219,
      "start": "669493",
      "stop": "671283",
      "transcription": "kati rê rõ nkwâran",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 220,
      "start": "671283",
      "stop": "672730",
      "transcription": "kjë kïn ahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 221,
      "start": "672731",
      "stop": "674478",
      "transcription": "kjë kjõ kïn ahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 222,
      "start": "674573",
      "stop": "678426",
      "transcription": "kjë rã kïn ahê prïaran rê kjë kuri prïarân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 223,
      "start": "679160",
      "stop": "681870",
      "transcription": "inkjõkïrã hê katirênkjërãton hãn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 224,
      "start": "681870",
      "stop": "684687",
      "transcription": "rarajã wãpênkja hapjâra, pên rarajã   ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 225,
      "start": "684695",
      "stop": "687232",
      "transcription": "ramãpëë jakren sâti mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 226,
      "start": "687356",
      "stop": "690481",
      "transcription": "rapypô, pêrã ramãnpen",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 227,
      "start": "691585",
      "stop": "694943",
      "transcription": "pêrãrapan, pên kati mãsâkjârïn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 228,
      "start": "694943",
      "stop": "696264",
      "transcription": "sâti mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 229,
      "start": "696264",
      "stop": "698316",
      "transcription": "kati mãsâkjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 230,
      "start": "698316",
      "stop": "701624",
      "transcription": "kamãrãkö nãnpen suu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 231,
      "start": "702039",
      "stop": "706076",
      "transcription": "kasõkjâ hatyn, kahopôjn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 232,
      "start": "707167",
      "stop": "709943",
      "transcription": "pên karãnkôn inpyarân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 233,
      "start": "709943",
      "stop": "713190",
      "transcription": "karãnkôn kasaswâ suty hamã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 234,
      "start": "713230",
      "stop": "716489",
      "transcription": "suty hamã kasaswâ nãnpen",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 235,
      "start": "716650",
      "stop": "718994",
      "transcription": "pên katirãnkôn inpy hë",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 236,
      "start": "718994",
      "stop": "720476",
      "transcription": "nãnpen, pên",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 237,
      "start": "720536",
      "stop": "725075",
      "transcription": "kati surapãrïn kukre kõõ mãmãnnï kjahapjâra kukre hamãnkja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 238,
      "start": "725075",
      "stop": "727174",
      "transcription": "kjahapjãra katisurapã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 239,
      "start": "727694",
      "stop": "729879",
      "transcription": "kahokõõ nãnpen ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 240,
      "start": "729921",
      "stop": "732539",
      "transcription": "kahokõõ sâtijõ sâkjâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 241,
      "start": "732761",
      "stop": "735810",
      "transcription": "sâtijõ sâkjâri kahokõõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 242,
      "start": "736132",
      "stop": "738905",
      "transcription": "katiraapôn nãnperãnkô hë",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 243,
      "start": "738905",
      "stop": "740647",
      "transcription": "nãnperãnkô hë katiraapôn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 244,
      "start": "740647",
      "stop": "743364",
      "transcription": "pên kahosõjïn nãnpen ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 245,
      "start": "743643",
      "stop": "746075",
      "transcription": "kahosõjïn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 246,
      "start": "746961",
      "stop": "748455",
      "transcription": "pên katijã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 247,
      "start": "748455",
      "stop": "750687",
      "transcription": "haa hë rêhojyypjon",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 248,
      "start": "750688",
      "stop": "752342",
      "transcription": "rêrêhokapô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 249,
      "start": "752467",
      "stop": "754640",
      "transcription": "rêrêkãnho sõjïn hatêê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 250,
      "start": "754647",
      "stop": "756351",
      "transcription": "katirajã mãmãn hë",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 251,
      "start": "756390",
      "stop": "758896",
      "transcription": "katiransakren issin",
      "translation": "issin = cera?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 252,
      "start": "759034",
      "stop": "762046",
      "transcription": "sê, sê katirarïnkjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 253,
      "start": "762813",
      "stop": "766727",
      "transcription": "sê katirarïnkjâ kukretõ tã, kukre tõ tã, kukre tõ tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 254,
      "start": "766733",
      "stop": "768104",
      "transcription": "katihorasârin",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 255,
      "start": "768162",
      "stop": "770001",
      "transcription": "katihorasârin",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 256,
      "start": "771066",
      "stop": "772979",
      "transcription": "pên tõ mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 257,
      "start": "772979",
      "stop": "775214",
      "transcription": "tõ mã kapymã sâkjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 258,
      "start": "775289",
      "stop": "777560",
      "transcription": "karãkõrïn swasâri mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 259,
      "start": "777825",
      "stop": "783603",
      "transcription": "pakre tã, haty tã, kaparin kwaakriti, ikkôn, ikkjyti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 260,
      "start": "783946",
      "stop": "788761",
      "transcription": "kahopôjn kwâra kapan pakre tã tessuu kahopôjn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 261,
      "start": "789051",
      "stop": "792916",
      "transcription": "pên karapêsaswâ suty hamã tepi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 262,
      "start": "792925",
      "stop": "795246",
      "transcription": "karapêsaswâ sõjopy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 263,
      "start": "795856",
      "stop": "801745",
      "transcription": "karapêsaswâ sõjopy suty hamã karapê hosyn nãnpjuu ho suty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 264,
      "start": "802939",
      "stop": "805507",
      "transcription": "pên rasuranpipjâ tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 265,
      "start": "805526",
      "stop": "809761",
      "transcription": "kararêmï kjê hamã, kararêmï kjê hamã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 266,
      "start": "810293",
      "stop": "811750",
      "transcription": "sõjopy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 267,
      "start": "811969",
      "stop": "816895",
      "transcription": "katimï katikreejï katisêsïn kiti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 268,
      "start": "817127",
      "stop": "820583",
      "transcription": "katiswâ katipysâpï",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 269,
      "start": "820583",
      "stop": "823237",
      "transcription": "pên katikwâ inkjêj hë",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 270,
      "start": "823397",
      "stop": "826878",
      "transcription": "sõjopy katikwâ katihopjõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 271,
      "start": "826878",
      "stop": "829206",
      "transcription": "karantã sanpâ pettã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 272,
      "start": "830132",
      "stop": "831984",
      "transcription": "katihakjârin",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 273,
      "start": "832156",
      "stop": "835460",
      "transcription": "sõjopy katihakjârin katihokjã puu sã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 274,
      "start": "835460",
      "stop": "838476",
      "transcription": "pên katiranhonpja kukre kõõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 275,
      "start": "838476",
      "stop": "841352",
      "transcription": "sõjopy tiransaswâra mãnkjy hahê kukre kõõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 276,
      "start": "841631",
      "stop": "845804",
      "transcription": "katiransaswârin, katijyypjon",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 277,
      "start": "846245",
      "stop": "850037",
      "transcription": "nãhã mãmãn rêrêhokapô jy jyypjon",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 278,
      "start": "850075",
      "stop": "855036",
      "transcription": "mãmãn tirêhatâ tirêhasânnõ kin kamãjã sâti jõ sâkjâri mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 279,
      "start": "855930",
      "stop": "857683",
      "transcription": "rajã, pên",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 280,
      "start": "858077",
      "stop": "860839",
      "transcription": "rapyrãkõrin rarãkõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 281,
      "start": "860839",
      "stop": "864813",
      "transcription": "kwârân kwâra rãnkirã, katisü sõjopy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 282,
      "start": "864917",
      "stop": "866397",
      "transcription": "kwâra rãnkïrã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 283,
      "start": "866548",
      "stop": "869236",
      "transcription": "nãnpen katisü nãnpen",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 284,
      "start": "869244",
      "stop": "871945",
      "transcription": "kwâra rãnkïrã tessuu ramõra hê ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 285,
      "start": "871945",
      "stop": "874199",
      "transcription": "kahopôjn tepi ho nãrajã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 286,
      "start": "874269",
      "stop": "878957",
      "transcription": "sâtijõ sâkjâri mã, sâtijõ sâkjârijõ ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 287,
      "start": "879466",
      "stop": "880492",
      "transcription": "puu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 288,
      "start": "881197",
      "stop": "887404",
      "transcription": "puu jy/ puu jarasaswâ rankjân rarãrêjankjân puu, rêmãsâkjâri pjo puu mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 289,
      "start": "887481",
      "stop": "892558",
      "transcription": "sâti mã ramãsâkjâri, rãrawajã puu, sâpên",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 290,
      "start": "893030",
      "stop": "897483",
      "transcription": "rasokwajã rasotokin inkjõ kin",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 291,
      "start": "897483",
      "stop": "899925",
      "transcription": "tãjojo inta",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 292,
      "start": "900624",
      "stop": "904715",
      "transcription": "katinkjõppôjn sâti hë katinkypyjapôjn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 293,
      "start": "904946",
      "stop": "908154",
      "transcription": "katijõ kypyjapôjn sâti hë",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 294,
      "start": "908439",
      "stop": "910439",
      "transcription": "katijõ kypakwârïn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 295,
      "start": "910440",
      "stop": "912933",
      "transcription": "pên kwâra rêkrekjata",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 296,
      "start": "913062",
      "stop": "914855",
      "transcription": "katinkjõpôjn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 297,
      "start": "914870",
      "stop": "916376",
      "transcription": "katinkjõpôjn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 298,
      "start": "916494",
      "stop": "921430",
      "transcription": "koomã rêkreha katijãtan kypa hë inkjõta hê wã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 299,
      "start": "921430",
      "stop": "923637",
      "transcription": "pên katijãtan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 300,
      "start": "924194",
      "stop": "929349",
      "transcription": "pên katikunkjõ kwâra, pên kati pãpãã jãtan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 301,
      "start": "929376",
      "stop": "931947",
      "transcription": "katijãtan katipysukwâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 302,
      "start": "932041",
      "stop": "935651",
      "transcription": "insunpjâ katipysukwyy sâtijõnsunpjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 303,
      "start": "935893",
      "stop": "938439",
      "transcription": "insunpjâ katipysukwyy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 304,
      "start": "938534",
      "stop": "941178",
      "transcription": "katisânpürïn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 305,
      "start": "941178",
      "stop": "943061",
      "transcription": "katikõpan sâti kõõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 306,
      "start": "943241",
      "stop": "946410",
      "transcription": "prëënkjêj jysuhokwyyja nãnpjuu ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 307,
      "start": "946443",
      "stop": "947832",
      "transcription": "mãmãn rarãnpjuu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 308,
      "start": "947903",
      "stop": "949491",
      "transcription": "katisuhokwyy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 309,
      "start": "949491",
      "stop": "951933",
      "transcription": "katiho/ katimãhopan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 310,
      "start": "952184",
      "stop": "954239",
      "transcription": "katihopa sâti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 311,
      "start": "954421",
      "stop": "956812",
      "transcription": "sotinkjo suhokwyy ja nãnpjuu ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 312,
      "start": "956815",
      "stop": "961010",
      "transcription": "katiparin kati pãpãã tyn sâti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 313,
      "start": "961644",
      "stop": "964503",
      "transcription": "pên katipysêkwyn prêpi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 314,
      "start": "964593",
      "stop": "966647",
      "transcription": "katiporãprê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 315,
      "start": "966849",
      "stop": "969392",
      "transcription": "pên katipysupy kypa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 316,
      "start": "969392",
      "stop": "972131",
      "transcription": "katipyrãprê kypa ho, pên",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 317,
      "start": "972310",
      "stop": "975864",
      "transcription": "katipykin kypa/ sâti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 318,
      "start": "975921",
      "stop": "979465",
      "transcription": "katipykin sâti, katipynkjõ kïrïn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 319,
      "start": "979690",
      "stop": "984016",
      "transcription": "jyty hakwa sâti katipy tïrïna",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Kjãnsê story",
    "speakers": "Kjãnsê",
    "linguists": "Myriam Lapierre, Bernat Bardagil-Mas",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 0,
      "start": "10568",
      "stop": "12598",
      "transcription": "mãmã pêj nê ra ho pari tepi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 1,
      "start": "14190",
      "stop": "17376",
      "transcription": "ra ho pô ra ma sapu(cobrir al beiju) kjãmpo amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": "17598",
      "stop": "23053",
      "transcription": "rãmã si kjê mõ.. mõsy amã kjãmpo, kwy jamã kjãmpo",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": "23223",
      "stop": "24509",
      "transcription": "rê so su",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": "24596",
      "stop": "26514",
      "transcription": "rê soti mĩri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": "26938",
      "stop": "30571",
      "transcription": "mãmã pêj ra pa inkô tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": "30917",
      "stop": "32550",
      "transcription": "mãmã pêj rê kjẽn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": "32754",
      "stop": "36641",
      "transcription": "mãmã pêj rê jõ pari (esquitxar) hu, hu, hu, hu rêjãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": "36989",
      "stop": "38632",
      "transcription": "oooo rêjãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": "38938",
      "stop": "40795",
      "transcription": "pêj ra koko",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": "42743",
      "stop": "45141",
      "transcription": "pyrê pyrêêê ka rê ka koko",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": "45162",
      "stop": "46580",
      "transcription": "puu rampja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": "47081",
      "stop": "49458",
      "transcription": "pyrê pêj jowpy mahê joti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": "50723",
      "stop": "52621",
      "transcription": "tepakriti rêjãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": "53101",
      "stop": "54448",
      "transcription": "pyrê pyrê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": "54463",
      "stop": "56678",
      "transcription": "py ra kõ ranpjaaa ...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": "57116",
      "stop": "60065",
      "transcription": "ra pôô, rê sokwân(treure el beiju)) mõ ramã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": "61367",
      "stop": "63428",
      "transcription": "rê so kuri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": "71968",
      "stop": "73988",
      "transcription": "ti tã si kâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": "74122",
      "stop": "75846",
      "transcription": "jy tân kjy pimpiâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": "76265",
      "stop": "80326",
      "transcription": "pimpiâ ti sikâri kô kâ kjãn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": "81162",
      "stop": "82479",
      "transcription": "py pô hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": "82754",
      "stop": "84519",
      "transcription": "tirã prê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": "84703",
      "stop": "86682",
      "transcription": "ti sõ kretêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": "87019",
      "stop": "88999",
      "transcription": "ti tojatê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": "89219",
      "stop": "91025",
      "transcription": "mãmã pêj mãra pẽẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": "91468",
      "stop": "93591",
      "transcription": "inkjy insi pytinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": "102050",
      "stop": "105376",
      "transcription": "mãmã pêj py sê ra pa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": "105928",
      "stop": "109724",
      "transcription": "mãmã ni tã ra kô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": "110397",
      "stop": "114060",
      "transcription": "kwakja pêj, kwakja pêj ta ra kô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": "118908",
      "stop": "120836",
      "transcription": "mãmã ni tã ra kô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": "121203",
      "stop": "124275",
      "transcription": "mi jĩ pô, mi jĩ pô, mi jĩ pô tijãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": "124356",
      "stop": "126917",
      "transcription": "a jy kjâ nampju nampju nampju ...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": "127019",
      "stop": "130928",
      "transcription": "huô, huô pjj, huô pjj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": "131305",
      "stop": "132927",
      "transcription": "sukwâ(el marit va a buscar esposa) pimpia",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": "133111",
      "stop": "135346",
      "transcription": "ti sê mã sâ swâri pompo(tipus de tacuara)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": "135469",
      "stop": "137928",
      "transcription": "ti mã sari nankââ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": "137948",
      "stop": "140428",
      "transcription": "rê mã sêsari py",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": "142672",
      "stop": "146509",
      "transcription": "si pyri ho kwy ti sari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": "147172",
      "stop": "150488",
      "transcription": "mãmã pêj ho sãn ti sakâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": "151224",
      "stop": "153203",
      "transcription": "hitõ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Puuping story",
    "speakers": "Kj\u00e2ras\u00e2",
    "linguists": "Sunkulp Ananthanarayan",
    "type": "elicitation of a story",
    "date": "2025/08/01",
    "note": "this is part of the tepakriti & kjäräsâ recording, after tepakriti left since he was too tired"
  },
  "sentences": [
    {
      "transcription": "ka hë sarëri hokjy haka köö,",
      "translation": "vc estava lendo todo o dia"
    }
  ]
},{
  "metadata": {
    "title": "S\u00e2k\u00f6r\u00e4kriti h\u00e4 kja",
    "speakers": "Kj\u00e2ras\u00e2",
    "linguists": "Myriam Lapierre, Sunkulp Ananthanarayan",
    "Indigenous researcher": "Krenkjon Pan\u00e3ra",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 1,
      "start": 23.813446983680887,
      "stop": 29125.736188090723,
      "transcription": "Kankj\u00e2 m\u00e4s\u00fcn m\u00e4ra kukkwa, s\u00e2k\u00f6n.",
      "translation": "Eu vou contar sobre o c\u00e9u e as nuvens",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": 29.125736188090723,
      "stop": 34306.97974504893,
      "transcription": "n\u00ebn janpe tij\u00e4ri, m\u00e4ja s\u00e2k\u00f6n.",
      "translation": "N\u00e3o s\u00e3o essas nuvens.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": 34.30697974504893,
      "stop": 39690.000545648836,
      "transcription": "R\u00eaj\u00e4\u00e4, r\u00ea j\u00efnkre tij\u00e4ri, tit\u00e4rak\u00f4 tij\u00e4ri.",
      "translation": "Dissem que n\u00f3s fizemos buraco. Algu\u00e9m pediu para n\u00f3s fazer buraco.",
      "notes": "tit\u00e4rank\u00f4 = pedir",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": 39.690000545648836,
      "stop": 44128.01121892566,
      "transcription": "katir\u00ea sypjy j\u00efnkren, katir\u00ea kukren, katir\u00ea kukren.",
      "translation": "Antes de voc\u00eas fizerem buraco, voc\u00eas v\u00e3o se preparar.",
      "notes": "sypjyri = preparar",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": 44.128011218925664,
      "stop": 47817.86930261936,
      "transcription": "tij\u00e4\u00e4 s\u00f6p\u00e4\u00e4 h\u00eb, rap\u00e4\u00e4nkj\u00eatapj\u00e2r\u00e2n",
      "translation": "Eles dizem que aquelas pessoas que t\u00eam muitos filhos n\u00e3o cavam r\u00e1pido.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": 47.81786930261936,
      "stop": 50505.8570592843,
      "transcription": "n\u00ebn r\u00ea kypa r\u00ebn r\u00e4p\u00f4npe tij\u00e4ri, ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": 50.5058570592843,
      "stop": 57993.77730087064,
      "transcription": "p\u00e4\u00e4 p\u00ffr\u00e4 h\u00eb tikre hap\u00f4 tij\u00e4\u00e4, kukkwan jy m\u00e4 suras\u00ea tij\u00e4\u00e4, kypa suu.",
      "translation": "Aqueles que tem poucos filhos cavam bem r\u00e1pido. Conseguem logo cavar o buraco na terra porque a fam\u00edlia deles ajuda.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": 57.99377730087064,
      "stop": 63609.76606765673,
      "transcription": "katir\u00ea sypjyri j\u00efn ra kukren, m\u00e4m\u00e4 r\u00earoo hankj\u00e2 hah\u00ea.",
      "translation": "Voc\u00eas v\u00e3o se preparar fazendo buraco, para voc\u00eas puderem entrar nele com a sua fam\u00edlia.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": 63.60976606765673,
      "stop": 69918.42350319204,
      "transcription": "[kati] m\u00e4m\u00e4 s\u00eamm\u00f6 h\u00eb, [kar\u00ea s\u00e2np\u00fcn] m\u00e4ja ti s\u00fcn, tij\u00e4\u00e4.",
      "translation": "Voc\u00eas est\u00e3o vendo? As nuvens j\u00e1 est\u00e3o vindo para ac\u00e1.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": 69.91842350319205,
      "stop": 79811.57993436119,
      "transcription": "ti s\u00fcn pan h\u00eb m\u00e4ra h\u00eb [ti s\u00eamm\u00ebn,] ti s\u00earar\u00ebr\u00e4 h\u00eb, ti s\u00fcn katir\u00ea ta j\u00e4 s\u00e2np\u00fc.",
      "translation": "Aquela pessoa que contou essa hist\u00f3ria para n\u00f3s, ela falou \"\"Voc\u00eas v\u00e3o ver.\"\".",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": 79.81157993436119,
      "stop": 88298.24267396412,
      "transcription": " [katir\u00eak\u00e4nt\u00e4] katir\u00ea k\u00e4n t\u00f6t\u00eb m\u00e4ja s\u00e2k\u00f6n, K\u00fcn, tij\u00e4\u00e4 tij\u00e4\u00e4 m\u00e4ja m\u00e4 s\u00e2k\u00f6n m\u00e4.",
      "translation": "\"\"Eu acho que essas nuvens v\u00e3o cair,\"\" ela disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": 88.29824267396413,
      "stop": 93224.4291140002,
      "transcription": "[Ha] ha katit\u00eb? katir\u00ea k\u00e4n t\u00f6t\u00eb,",
      "translation": "\"\"Ser\u00e1 que vai cair?\"\" \"\"Eu acho que vai cair.\"\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": 93.2244291140002,
      "stop": 97085.535364262,
      "transcription": "janpe tij\u00e4\u00e4 kypankjon, ja s\u00e2k\u00f6n.",
      "translation": "Disse, \"\"N\u00e3o \u00e9 terra, \u00e9 nuvem.\"\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": 97.085535364262,
      "stop": 101639.31847790937,
      "transcription": "ti j\u00efnkrehap\u00f4 tij\u00e4ri ti ran s\u00eas\u00fcn.",
      "translation": "Ele contou para n\u00f3s que o pessoal cavava bem r\u00e1pido.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": 101.63931847790937,
      "stop": 106355.17494555183,
      "transcription": "ranna kuk\u00e2jankj\u00e2 tij\u00e4\u00e4 s\u00f6p\u00e4\u00e4 japj\u00e2ran,",
      "translation": "Aqueles que tinham muitos filhos chamavam em v\u00e3o para eles entrarem no buraco.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": 106.35517494555182,
      "stop": 110272.7461834171,
      "transcription": "kw\u00e2r\u00e2n ra kj\u00e4pepeta pj\u00e2r\u00e2n,",
      "translation": "Os outros, aqueles que escutam bem,",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": 110.2727461834171,
      "stop": 118814.17556959728,
      "transcription": "rankj\u00e2 taj\u00efn, rankj\u00e2 taj\u00efn, r\u00ean s\u00ea k\u00e2kkw\u00e2 tij\u00e4ri, inkwakj\u00e4k\u00e2, inkwanpe kj\u00e4k\u00e2, r\u00ean s\u00ea k\u00e2kkw\u00e2ri.",
      "translation": "eles entraram, entraram no buraco. Eles taparam o buraco com planchas de buriti, buriti verdadeiro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": 118.81417556959728,
      "stop": 123319.91915869391,
      "transcription": "p\u00earankj\u00e2 tij\u00e4\u00e4, r\u00ean j\u00e4 sasw\u00e2\u00e2 tij\u00e4\u00e4, sasw\u00e2\u00e2",
      "translation": "Escapando das nuvens, eles entraram no buraco e iam fechando o buraco por cima.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": 123.3199191586939,
      "stop": 126307.88678677016,
      "transcription": "h\u00fcw\u00e4h\u00e4 raku pjookr\u00ef kypa kran.",
      "translation": "L\u00e1 eles sentavam cobrertos dentro da terra.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": 126.30788678677017,
      "stop": 131975.93401680043,
      "transcription": "kw\u00e2r\u00e2n, [m\u00ffn m\u00e4ra] m\u00e4 rankwyynpjaa tij\u00e4\u00e4, rankwyynpjaa.",
      "translation": "Os outros que n\u00e3o conseguiram entrar no buraco corriam chorando, corriam chorando.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": 131.97593401680044,
      "stop": 141544.6251707547,
      "transcription": "jap\u00ean, jy raat\u00ebn tij\u00e4\u00e4 kypa, kypanpe tij\u00e4\u00e4 s\u00e2k\u00f6n tij\u00e4\u00e4.",
      "translation": "Depois disso, disse que cairam as nuvens, n\u00e3o era terra, eram nuvens.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": 141.5446251707547,
      "stop": 144436.09151559998,
      "transcription": "m\u00e4ja, m\u00e4m\u00e4 sapotin.",
      "translation": "Esse mesmo, caiu t\u00e3o r\u00e1pido que deixou nuvem [wake] atr\u00e1s.",
      "notes": "find translation for wake of a boat/plane",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": 144.43609151559997,
      "stop": 151434.43774750739,
      "transcription": "jy t\u00ebn tij\u00e4\u00e4, katir\u00ea hakr\u00ef p\u00efp\u00efn,",
      "translation": "Disse que caiu, voc\u00eas v\u00e3o ficar sentados l\u00e1.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": 151.4344377475074,
      "stop": 155999.72112668777,
      "transcription": "r\u00eahap\u00f4\u00f4 s\u00e4, katir\u00ea hakr\u00ef p\u00efp\u00efn h\u00e4",
      "translation": "Voc\u00eas n\u00e3o podem sair, t\u00eam que ficar al\u00ed mesmo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": 155.99972112668777,
      "stop": 160528.73096080858,
      "transcription": "ti rankj\u00e4\u00e4 tij\u00e4\u00e4 [p\u00efn] katir\u00ea hakr\u00ef p\u00efp\u00efn, tij\u00e4\u00e4?",
      "translation": "Aquela pessoa que contou a hist\u00f3ria disse \"\"Voc\u00eas v\u00e3o ficar al\u00ed sentados.\"\".",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": 160.5287309608086,
      "stop": 165374.4115365392,
      "transcription": "jy t\u00ebn",
      "translation": "Caiu.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": 165.3744115365392,
      "stop": 173464.32583892928,
      "transcription": "jy raat\u00ebn, p\u00ean jy rankwyy tij\u00e4\u00e4 pr\u00efhara, rankwyy, rankwyy, p\u00ean",
      "translation": "Cairam as nuvens, a\u00ed as crian\u00e7as come\u00e7aram a chorar e chorar.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": 173.46432583892928,
      "stop": 178544.22040712158,
      "transcription": "p\u00ean tij\u00e4\u00e4 tij\u00e4\u00e4 rat\u00ebtt\u00ebti tij\u00e4\u00e4 rat\u00ebtt\u00ebti.",
      "translation": "A\u00ed disse que o pessoal ficou tremendo, tremendo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": 178.54422040712157,
      "stop": 182491.46840278662,
      "transcription": "intos\u00e4n tij\u00e4\u00e4, kiti ti m\u00e4 kj\u00e4k\u00e2mm\u00ebn tij\u00e4\u00e4",
      "translation": "A\u00ed, algu\u00e9m abriu o buraco s\u00f3 um pouquinho para olhar para cima, fora do buraco.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": 182.4914684027866,
      "stop": 188266.58268033748,
      "transcription": "jy pyr\u00f6 kakka tij\u00e4\u00e4 n\u00e4h\u00e4.",
      "translation": "Entrou a luz do sol dentro do buraco",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": 188.26658268033748,
      "stop": 196608.75782726728,
      "transcription": "jap\u00ean kappynn\u00eb [ti], r\u00ea py j\u00efn kj\u00e4pjori r\u00ebn tij\u00e4\u00e4, r\u00ea py ku j\u00efn kj\u00e4pjori r\u00ebn, jy pyrap\u00f4\u00f4 tij\u00e4ri",
      "translation": "\"\"Abre o buraco,\"\" eles disseram. A\u00ed eles tiraram as planchas para abrir o buraco e todos sairam.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": 196.60875782726728,
      "stop": 202456.5387822671,
      "transcription": "r\u00ea j\u00e4 kw\u00e2ri pytinsi tij\u00e4\u00e4, r\u00ea hoj\u00efsy tij\u00e4\u00e4 haj\u00efn ho,",
      "translation": "Disse que eles cagaram no buraco mesmo. Eles cagaram tanto que ficaram todos sujos da sua pr\u00f3pia merda.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": 202.4565387822671,
      "stop": 205398.48510748334,
      "transcription": "rankwyy tij\u00e4\u00e4, pj\u00e4n h\u00e4.",
      "translation": "Choraram de tanta fome que eles passaram.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": 205.39848510748334,
      "stop": 208159.9264320655,
      "transcription": "kw\u00e2ra jy rak\u00e2\u00e2tepi tij\u00e4\u00e4",
      "translation": "Os outros, eles n\u00e3o aguentaram e morreram de de fome.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": 208.1599264320655,
      "stop": 214235.33966777174,
      "transcription": "ja r\u00ea rakwanpari [inkj\u00eb m\u00eb] inkj\u00eb h\u00eb, inkj\u00ebm\u00ebr\u00e2n",
      "translation": "N\u00f3s ouvimos isso, a fala dessa historia.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": 214.23533966777174,
      "stop": 218215.73332945415,
      "transcription": "ha ta r\u00ea pja k\u00e4n m\u00eb s\u00fcn, m\u00e4m\u00e4nna jy s\u00eam\u00eb jyy pjon.",
      "translation": "Os dois anci\u00f5es teriam contado para voc\u00eas se eles ainda estivessem vivos.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": 218.21573332945414,
      "stop": 222317.76316022637,
      "transcription": "inkj\u00eb rat\u00e2\u00e2 jam\u00e4 kin, rar\u00ea k\u00e4n rar\u00ebn kin.",
      "translation": "Como que eu estou viva ainda, ainda posso contar e repassar essa hist\u00f3ria para voc\u00eas.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": 222.31776316022638,
      "stop": 228116.55592002632,
      "transcription": "tinkj\u00eb s\u00fcn kin ja, [kwa] kukkwa m\u00e4ra h\u00eb.",
      "translation": "Ele me contou bem a hist\u00f3ria das nuvens.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": 228.11655592002631,
      "stop": 234251.00773203664,
      "transcription": "jap\u00ean jy rans\u00eapp\u00eb\u00eb, jap\u00ean n\u00ebn kjon tij\u00e4\u00e4 tij\u00e4\u00e4, kjon jap\u00ean.",
      "translation": "Depois disso, n\u00e3o vai acontecer mais, n\u00e3o.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": 234.25100773203664,
      "stop": 238157.3490082772,
      "transcription": "r\u00ea ran hap\u00eb\u00eb s\u00e4, ka r\u00eapp\u00efn waj\u00e4\u00e4 s\u00e4.",
      "translation": "N\u00e3o pode mais falar mal de ningu\u00e9m, n\u00e3o pode brigar mais.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 41,
      "start": 238.1573490082772,
      "stop": 243137.5237166254,
      "transcription": "jyy kati r\u00eapp\u00ef r\u00f6 hapan, ja ham\u00e4 p\u00efr\u00e4 paanp\u00fc",
      "translation": "Olha, o paj\u00e9 do c\u00e9u est\u00e1 olhando para n\u00f3s. Voc\u00eas t\u00eam que ficar quietos, t\u00eam que ficar de boa.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 42,
      "start": 243.1375237166254,
      "stop": 247420.2472014481,
      "transcription": "hyj\u00e4h\u00e4 r\u00f6\u00f6 tij\u00e4\u00e4 h\u00eb, kukkwa.",
      "translation": "Eles dissem que na \u00e9poca, o c\u00e9u estava pertinho da terra.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 43,
      "start": 247.4202472014481,
      "stop": 253608.4970534111,
      "transcription": "ja ham\u00e4 r\u00ebn kas\u00e2 s\u00e4, [tira] rapp\u00eb\u00eb tij\u00e4\u00e4.",
      "translation": "Por isso voc\u00eas n\u00e3o podem ficar bravos, \u00e9 isso que o paj\u00e9 do c\u00e9u falou para n\u00f3s.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 44,
      "start": 253.6084970534111,
      "stop": 256155.36034947576,
      "transcription": "py raa pjas\u00e2n s\u00e2p\u00ef\u00ef tij\u00e4\u00e4.",
      "translation": "O paj\u00e9 j\u00e1 voltou para o c\u00e9u.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 45,
      "start": 256.15536034947576,
      "stop": 260897.56690484562,
      "transcription": "p\u00ean, rakin tij\u00e4\u00e4, rakin.",
      "translation": "Agora n\u00f3s estamos bem.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 46,
      "start": 260.89756690484563,
      "stop": 265348.877657662,
      "transcription": "jap\u00ean tinteri.",
      "translation": "Depois disso, ele parou.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 47,
      "start": 265.34887765766194,
      "stop": 268496.7093304904,
      "transcription": "p\u00ean r\u00eapp\u00efn jam\u00e4ri tij\u00e4\u00e4,",
      "translation": "Agora estamos atentos, cuidando um do outro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 48,
      "start": 268.4967093304904,
      "stop": 275060.3354469916,
      "transcription": "kar\u00eapp\u00efn t\u00f6 waj\u00e4\u00e4 s\u00e4 [kar\u00eapp\u00efn] kar\u00eapp\u00efn t\u00f6pp\u00efn s\u00e4, inkjon tij\u00e4\u00e4.",
      "translation": "Voc\u00eas n\u00e3o podem brigar, n\u00e3o podem matar os outros, n\u00e3o.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 49,
      "start": 275.0603354469916,
      "stop": 285565.8445943567,
      "transcription": "r\u00ea rankj\u00e4 rankj\u00e2 tij\u00e4\u00e4 [r\u00f6], te jy ras\u00ea rakj\u00e4p\u00efntori jap\u00ean, intw\u00ea, intw\u00ea suu ra r\u00eak\u00e4n s\u00fc.",
      "translation": "Os antigos j\u00e1 contaram muito essa hist\u00f3ria, mas as pessoas n\u00e3o acreditavam. A\u00ed, foram esquecendo. Por isso eu estou contando de novo para voc\u00eas.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 50,
      "start": 285.56584459435675,
      "stop": 292695.19554149435,
      "transcription": "pakkjapp\u00ean ra r\u00eak\u00e4n homm\u00f6ri ja, m\u00e4m\u00e4 r\u00f6kwy s\u00e2k\u00f6n h\u00eb.",
      "translation": "Eu estou contando desde o in\u00edcio, a historia dessas nuvens que est\u00e3o passando no c\u00e9u agora.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 51,
      "start": 292.69519554149434,
      "stop": 297323.8423040794,
      "transcription": "r\u00eam\u00e4j\u00e4\u00e4 rankj\u00e2, ja tinkj\u00eb s\u00fcn.",
      "translation": "Eles j\u00e1 avisaram dessa hist\u00f3ria, \u00e9 isso que ele contou para mim.",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Contact (Kôkâ)",
    "speakers": "Kôkâ",
    "linguists": "Myriam Lapierre, Bernat Bardagil-Mas",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 0,
      "start": "196313",
      "stop": "199831",
      "transcription": "haa, inkjẽ hẽ rê=sanpu  a=prĩ tân Peixoto rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 1,
      "start": "200656",
      "stop": "203582",
      "transcription": "rê=ranpũ prĩ tân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": "204981",
      "stop": "208982",
      "transcription": "jy=ra=tepi Peixoto rĩ ti=jãri jy=ra=pan Peixoto rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": "209981",
      "stop": "214093",
      "transcription": "ra=pa, ti=jãri, jy=ra=su=pôô avião",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": "214213",
      "stop": "215787",
      "transcription": "mũnkja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": "216139",
      "stop": "220454",
      "transcription": "ti jy a ky ti ra rĩ mẽn pan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": "222147",
      "stop": "225054",
      "transcription": "pjã, pan ka...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": "226443",
      "stop": "229536",
      "transcription": "ia sõkjêntita",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": "229591",
      "stop": "232036",
      "transcription": "ti ra ri nẽn pompoakriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": "232246",
      "stop": "234960",
      "transcription": "ti nẽn jakôpâ kri kôpâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": "235012",
      "stop": "236129",
      "transcription": "pan nĩ...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": "236291",
      "stop": "237629",
      "transcription": "kjo rãnkjẽri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": "238187",
      "stop": "240486",
      "transcription": "mãmã ti nẽn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": "240745",
      "stop": "243278",
      "transcription": "jy pôô mũnkja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": "244096",
      "stop": "247109",
      "transcription": "ti ja kyti ti ranpũn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": "249445",
      "stop": "253554",
      "transcription": "jy ra nkwyn pja inkjẽmẽra prĩara",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": "253695",
      "stop": "256614",
      "transcription": "avião jũmpa, mũnkja jũmpa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": "257472",
      "stop": "261188",
      "transcription": "rampja  [van fugir?]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": "261566",
      "stop": "265553",
      "transcription": "ti ra kõn pytinsi swankjara mũnkja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": "266674",
      "stop": "269971",
      "transcription": "pêj ti ra nsoti rejn ponpoakriti mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": "270194",
      "stop": "271802",
      "transcription": "sõkjentita mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": "272559",
      "stop": "275099",
      "transcription": "pẽkâ mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": "276648",
      "stop": "281310",
      "transcription": "kâjasâ mẽ, ti rẽjn, jãhã kjõ ra kjẽri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": "282756",
      "stop": "286891",
      "transcription": "jãhã rê sanpũ pakjati inkjẽ hẽ ipẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": "288189",
      "stop": "293675",
      "transcription": "ia rê sanpũ pakjati jy pô, ti ja kyti jy py too",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": "294323",
      "stop": "296715",
      "transcription": "mãmã pêj ra pa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": "297769",
      "stop": "301350",
      "transcription": "mãmã pêj jy py ra mõri ũãtã Tupajyrõ tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": "302296",
      "stop": "305202",
      "transcription": "Tupajyrõ tã jy py ra mõri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": "306216",
      "stop": "309959",
      "transcription": "py sê ra pa, jy py ra mõri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": "309999",
      "stop": "311661",
      "transcription": "mãmỹn Kjorakjê tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": "312499",
      "stop": "314688",
      "transcription": "Kjorakjê tã jy py ra jĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": "316904",
      "stop": "323756",
      "transcription": "mãmã pêj jy ra mõri akwa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": "324607",
      "stop": "327621",
      "transcription": "jy ra mõri akwa pan kĩ su [a buscar caça ;bona?]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": "327932",
      "stop": "330350",
      "transcription": "pan kin sy jy ra mõri akwa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": "330661",
      "stop": "333513",
      "transcription": "jy pô pakjati ipẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": "334513",
      "stop": "336770",
      "transcription": "jy pjy ho pô pjy ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": "337174",
      "stop": "339066",
      "transcription": "pjy ho jy ho pô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": "340262",
      "stop": "341965",
      "transcription": "rê pjy rãrĩ [estrada]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": "343295",
      "stop": "345674",
      "transcription": "mãmã pêj jy kõ ra mõri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": "346499",
      "stop": "353270",
      "transcription": "pêj kõ ra mõri, kõ ra mõri, kõ ra mõõri rê ho tê pẽn ho pa tomahaka ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": "353378",
      "stop": "354608",
      "transcription": "pyti ipẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 41,
      "start": "355797",
      "stop": "357729",
      "transcription": "pêj ho pa pyti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 42,
      "start": "358216",
      "stop": "360486",
      "transcription": "rê tân sanpũ mãmã pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 43,
      "start": "361385",
      "stop": "365006",
      "transcription": "kwa nã kõn... ipẽ kwa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 44,
      "start": "365553",
      "stop": "369013",
      "transcription": "kõ ta kwy mỹn ho kwy, mãmã pêj rê tã sũn swâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 45,
      "start": "369114",
      "stop": "370695",
      "transcription": "rê tã sapôpô ipẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 46,
      "start": "371478",
      "stop": "374992",
      "transcription": "kâjân ho rê sũnswâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 47,
      "start": "376715",
      "stop": "381120",
      "transcription": "Peixoto rĩ, mãmã jy ho pôô pjy ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 48,
      "start": "383270",
      "stop": "385492",
      "transcription": "rê tã sũn swâri kâjân ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 49,
      "start": "385492",
      "stop": "387479",
      "transcription": "rê sũn swâri jãhã sõkôti rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 50,
      "start": "388005",
      "stop": "390384",
      "transcription": "...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 51,
      "start": "390944",
      "stop": "392903",
      "transcription": "jy ho too pa tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 52,
      "start": "395986",
      "stop": "398108",
      "transcription": "pa tã jy ho too",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 53,
      "start": "398256",
      "stop": "400473",
      "transcription": "innẽ ju tã pjã cidade tã jy ho too",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 54,
      "start": "400992",
      "stop": "402317",
      "transcription": "jy ho too",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 55,
      "start": "403472",
      "stop": "405282",
      "transcription": "mãmã pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 56,
      "start": "407094",
      "stop": "412121",
      "transcription": "mãmã pêj ti sapôpô ipẽ panãrân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 57,
      "start": "412459",
      "stop": "415202",
      "transcription": "ja pjy mãmã rõ ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 58,
      "start": "415472",
      "stop": "417877",
      "transcription": "ja jy py ho pô kjati ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 59,
      "start": "418883",
      "stop": "421140",
      "transcription": "ja rê sânpũ inkjẽ hẽ ra prĩ tân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 60,
      "start": "421801",
      "stop": "424491",
      "transcription": "rê ho pĩ ntori pjow kjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 61,
      "start": "424923",
      "stop": "428355",
      "transcription": "mãmã jy pô kjati mãmã jy rõ ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 62,
      "start": "428580",
      "stop": "432188",
      "transcription": "jy pô ja swa avião mũnkja amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 63,
      "start": "432350",
      "stop": "434945",
      "transcription": "ti ra ri nẽn mẽ karijô mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 64,
      "start": "435694",
      "stop": "438437",
      "transcription": "pĩ jãn tapja kjytijĩ tapja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 65,
      "start": "438801",
      "stop": "440369",
      "transcription": "pẽkâ mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 66,
      "start": "440808",
      "stop": "444578",
      "transcription": "pompoakriti mẽ, sõkjêntita mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 67,
      "start": "444686",
      "stop": "446429",
      "transcription": "ja pjy ra ti nẽjn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 68,
      "start": "448334",
      "stop": "449888",
      "transcription": "mãmã pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 69,
      "start": "451442",
      "stop": "454145",
      "transcription": "jy py sũ pa ra mõ pa tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 70,
      "start": "454286",
      "stop": "455786",
      "transcription": "Tupajyrõ tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 71,
      "start": "456799",
      "stop": "458759",
      "transcription": "Tupajyrõ tã...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 72,
      "start": "466459",
      "stop": "468770",
      "transcription": "a ate ka pẽẽ jĩ?",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 73,
      "start": "496192",
      "stop": "500605",
      "transcription": "mãmã pêj tijãri jy py pjõ Tupajyrõ rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 74,
      "start": "501480",
      "stop": "506143",
      "transcription": "rê pĩ jõn, mãmã pêj jy py pôô mũnkja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 75,
      "start": "507325",
      "stop": "509479",
      "transcription": "jy py pôô mũnkja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 76,
      "start": "509556",
      "stop": "511903",
      "transcription": "jy ho pôô mũnkja pan ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 77,
      "start": "511945",
      "stop": "516298",
      "transcription": "kâjasâ ho ti ra rĩ nẽjn, kâjasâ, pompoakriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 78,
      "start": "517989",
      "stop": "519884",
      "transcription": "ti nẽjn kâjasâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 79,
      "start": "520056",
      "stop": "523767",
      "transcription": "jy ho pôô kâjasâ ho Tupajyrõ tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 80,
      "start": "525335",
      "stop": "530316",
      "transcription": "rê rĩ npari rõ swankjarân rê kukjẽn pompoakriti, kâjasâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 81,
      "start": "531325",
      "stop": "534431",
      "transcription": "rê sêjn krâ kjâri rê swa kâjasâ ahã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 82,
      "start": "535210",
      "stop": "537056",
      "transcription": "rê wajãri swankjarân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 83,
      "start": "537234",
      "stop": "539666",
      "transcription": "rê soti npari pjow swankjarân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 84,
      "start": "539877",
      "stop": "541291",
      "transcription": "pompoakriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 85,
      "start": "542509",
      "stop": "545932",
      "transcription": " ... jy ho pôô, jy  ho pôô kâjasâ ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 86,
      "start": "546105",
      "stop": "548105",
      "transcription": "mãmã rã jy sõ kâjasâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 87,
      "start": "549038",
      "stop": "552355",
      "transcription": "ti nẽjn kâjasâpasê [machado] mẽ Tupajyrõ rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 88,
      "start": "552615",
      "stop": "556971",
      "transcription": "mãmã pêj jy ra... mãmã pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 89,
      "start": "560019",
      "stop": "563999",
      "transcription": "mãmã pêj jy pôô pa tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 90,
      "start": "564254",
      "stop": "565811",
      "transcription": "Peixoto tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 91,
      "start": "568143",
      "stop": "570586",
      "transcription": "jy pôô Peixoto tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 92,
      "start": "573451",
      "stop": "575028",
      "transcription": "jy sĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 93,
      "start": "576009",
      "stop": "579634",
      "transcription": "na pjy wy pôri jy sĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 94,
      "start": "580124",
      "stop": "581806",
      "transcription": "jy ra pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 95,
      "start": "581989",
      "stop": "584229",
      "transcription": "mãmã pêj Cãudio ti ra kôt ahẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 96,
      "start": "584238",
      "stop": "585988",
      "transcription": "jy pôô Claudio",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 97,
      "start": "587509",
      "stop": "590374",
      "transcription": "jy sĩ panãra jõ pjy wy pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 98,
      "start": "590826",
      "stop": "592403",
      "transcription": "jy ra pêj sĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 99,
      "start": "592990",
      "stop": "599211",
      "transcription": "rê sanpũ rãnkjâ, rê sanpũ rãnkjâ, rê sanpũ rankjâ... mãmã pêj ti ra nsa nsôri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 100,
      "start": "600181",
      "stop": "609854",
      "transcription": "mãmã pêj ti ra nsa nsôri kâjasâ, nankânto mẽ, kôôkjati mẽ, tepaprẽpi mẽ, tomãaka mẽ...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 101,
      "start": "610307",
      "stop": "613162",
      "transcription": "ja pjy rã ti ra nsa nsôri pjy pôôri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 102,
      "start": "615566",
      "stop": "617114",
      "transcription": "nê rinkwâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 103,
      "start": "618604",
      "stop": "621344",
      "transcription": "ti ho sikja syri pytinsi kâjasâ ho  [cortar mao]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 104,
      "start": "621719",
      "stop": "622777",
      "transcription": "swankjara",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 105,
      "start": "622954",
      "stop": "623916",
      "transcription": "Peixoto rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 106,
      "start": "624036",
      "stop": "625603",
      "transcription": "ja rê sanpun inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 107,
      "start": "625958",
      "stop": "627420",
      "transcription": "swankjara pẽẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 108,
      "start": "627922",
      "stop": "629999",
      "transcription": "swankjara pẽẽ ja rê sũn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 109,
      "start": "630061",
      "stop": "631734",
      "transcription": "nê rĩnpari inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 110,
      "start": "633240",
      "stop": "634817",
      "transcription": "Peixoto pan ni",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 111,
      "start": "635321",
      "stop": "638465",
      "transcription": "Typajyrõ rĩ, kukre amã, Typajyrõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 112,
      "start": "638917",
      "stop": "640811",
      "transcription": "itsi Typajyrõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 113,
      "start": "641851",
      "stop": "643635",
      "transcription": "nê rinpari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 114,
      "start": "645488",
      "stop": "648351",
      "transcription": "mãmã pêj jy ra mõri kwã tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 115,
      "start": "648436",
      "stop": "650732",
      "transcription": "ũã tã kukre ntwêj tõ tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 116,
      "start": "650840",
      "stop": "652601",
      "transcription": "Sypysâapâri tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 117,
      "start": "653521",
      "stop": "655408",
      "transcription": "mãmã pêj jy ra mõri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 118,
      "start": "657453",
      "stop": "660021",
      "transcription": "jy ra mõri kri ntwêj tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 119,
      "start": "660038",
      "stop": "662107",
      "transcription": "rê py wajãri puu ntwêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 120,
      "start": "662123",
      "stop": "664260",
      "transcription": "jy ra rê pakre wy [van travessar]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 121,
      "start": "664992",
      "stop": "667254",
      "transcription": "rê insôri akjô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 122,
      "start": "667936",
      "stop": "670424",
      "transcription": "nã kjã pa akjô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 123,
      "start": "672977",
      "stop": "675545",
      "transcription": "mãmã pêj jy ra rê saa tã [a l'altra banda]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 124,
      "start": "675618",
      "stop": "677743",
      "transcription": "ra mõri jy ra pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 125,
      "start": "678390",
      "stop": "680595",
      "transcription": "py rã rê puu kukre hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 126,
      "start": "680896",
      "stop": "683066",
      "transcription": "rê rãrê Sypysâapâri tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 127,
      "start": "684534",
      "stop": "686409",
      "transcription": "rê rarê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 128,
      "start": "686454",
      "stop": "689238",
      "transcription": "ra pa rê sũnswâri kukre [construir cases]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 129,
      "start": "690204",
      "stop": "694534",
      "transcription": "pãpã pytinsi, ra nkjêt pytinsi swankjara",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 130,
      "start": "696476",
      "stop": "697999",
      "transcription": "ra rêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 131,
      "start": "700726",
      "stop": "706238",
      "transcription": "ra rêj mãmã pêj jy py su ra mõri Claudio suu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 132,
      "start": "706749",
      "stop": "709510",
      "transcription": "jy pôô Peixoto rĩ, Peixoto tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 133,
      "start": "709909",
      "stop": "714250",
      "transcription": "ah, py rên kâjasâpasê japêj ipẽ japêj pẽn py too",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 134,
      "start": "714556",
      "stop": "719635",
      "transcription": "ôw mãrân ky py pan ipẽ jy sa py ra too",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 135,
      "start": "721044",
      "stop": "724169",
      "transcription": "mãmã nĩ sĩ pĩmã Peixoto rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 136,
      "start": "725363",
      "stop": "727988",
      "transcription": "mãmã nĩ ra pêj sĩ pakre wy amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 137,
      "start": "729101",
      "stop": "732340",
      "transcription": "jy suu ra pôô mãmã pêj ti ra pjâri Claudio hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 138,
      "start": "733681",
      "stop": "735772",
      "transcription": "jy py pôô panãra",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 139,
      "start": "736067",
      "stop": "740124",
      "transcription": "mãhẽ kâjasâpasê ho, mã ho pa mõri jy mã ho ntêri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 140,
      "start": "740897",
      "stop": "742454",
      "transcription": "kâjasâpasê ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 141,
      "start": "744499",
      "stop": "748453",
      "transcription": "\"ay\" pyti sakan sãn ti kôt ahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 142,
      "start": "749045",
      "stop": "751465",
      "transcription": "ti kôt ahê pẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 143,
      "start": "752465",
      "stop": "754886",
      "transcription": "a jy pêj ta ran pja [van córrer]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 144,
      "start": "755431",
      "stop": "757181",
      "transcription": "pê tã ra pêj [por dels blancs]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 145,
      "start": "757994",
      "stop": "761766",
      "transcription": "pyti sa kân san mãmã jy ty txucarramae ja kãn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 146,
      "start": "763784",
      "stop": "766272",
      "transcription": "pyti sa kãn san mãmã hẽ ti kôti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 147,
      "start": "766544",
      "stop": "768090",
      "transcription": "sa kãn san",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 148,
      "start": "769062",
      "stop": "770255",
      "transcription": "(ra kôti)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 149,
      "start": "771539",
      "stop": "774084",
      "transcription": "mãra mẽ Sokriti mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 150,
      "start": "774374",
      "stop": "776124",
      "transcription": "mãmã pan Sonkwêj rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 151,
      "start": "776709",
      "stop": "778937",
      "transcription": "jamẽ \"doirân\" (pytirân) ti mẽ kôt",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 152,
      "start": "780227",
      "stop": "783363",
      "transcription": "mãmã pêj jy sũmpa mẽ sân jãhã su jy nkjââ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 153,
      "start": "783915",
      "stop": "786040",
      "transcription": "mãmã pêj suu mẽ kwy pẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 154,
      "start": "786601",
      "stop": "790624",
      "transcription": "ti mẽ wajãri jy mã mẽ pẽẽ ti mã mẽ sa swâri kâjasâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 155,
      "start": "791447",
      "stop": "793254",
      "transcription": "kâjasâpasê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 156,
      "start": "793640",
      "stop": "795651",
      "transcription": "kâjasâswasy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 157,
      "start": "797297",
      "stop": "800660",
      "transcription": "mãmã pêj ti mã mẽ jãri Claudio hẽ mãhẽ rê ka mẽ sa suri kâjasâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 158,
      "start": "800882",
      "stop": "802911",
      "transcription": "ka ti rê kĩ sanpân hã ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 159,
      "start": "802914",
      "stop": "805591",
      "transcription": "mãmã pêj jy py mõri Claudio sĩnkwa tã [a casa seva]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 160,
      "start": "806205",
      "stop": "807021",
      "transcription": "saa tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 161,
      "start": "808344",
      "stop": "809506",
      "transcription": "pêj jy ntêri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 162,
      "start": "810043",
      "stop": "813741",
      "transcription": "jy py ntêj mãmã pêj jy py suu ra pôô kâjasâpasê suu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 163,
      "start": "813977",
      "stop": "816014",
      "transcription": "rê pãpã pân pytinsi [ho van agafar tot]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 164,
      "start": "816366",
      "stop": "817373",
      "transcription": "kâjasâpasê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 165,
      "start": "817867",
      "stop": "821725",
      "transcription": "mãmã pêj jy po ra pôô kukre ntwêj tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 166,
      "start": "823122",
      "stop": "827826",
      "transcription": "mãmã pêj ti pakja sâri nãnkjo hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 167,
      "start": "828438",
      "stop": "830907",
      "transcription": "ti pãpã ra pĩri ahê nankjo hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 168,
      "start": "832187",
      "stop": "833871",
      "transcription": "pêj ti pãpã ra pĩri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 169,
      "start": "835504",
      "stop": "838371",
      "transcription": "ti pakjat sari nãnkjo hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 170,
      "start": "838422",
      "stop": "839687",
      "transcription": "inka hẽ [tos]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 171,
      "start": "841886",
      "stop": "843141",
      "transcription": "inka hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 172,
      "start": "845559",
      "stop": "849797",
      "transcription": "mãmã pêj jy ra ty inpô rĩ kukre wy amã [a dins del poblat]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 173,
      "start": "849951",
      "stop": "852523",
      "transcription": "ra ty pêjn jy ra kõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 174,
      "start": "853237",
      "stop": "854844",
      "transcription": "nãnkjo jũnpa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 175,
      "start": "854986",
      "stop": "859082",
      "transcription": "ra ku pa ũãhã ky py ra kutyn atã tũm",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 176,
      "start": "859266",
      "stop": "861790",
      "transcription": "ũãhã ky py ra tyn atyn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 177,
      "start": "864249",
      "stop": "868891",
      "transcription": "mãmã pêj jy rosâ inkjẽ tõ [el seu germà se'l va endur al bosc]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 178,
      "start": "869809",
      "stop": "874856",
      "transcription": "kjẽ tõ a jatã pa mõri jãhã ka ti pakwa pĩ mã yjãhã ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 179,
      "start": "875070",
      "stop": "880335",
      "transcription": "mãmã pêj jy ra sâ inkjẽmẽra, kjẽ nâpjâ, kjẽ tõ, kjẽ tõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 180,
      "start": "881469",
      "stop": "883428",
      "transcription": "ja pjyra jy rankjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 181,
      "start": "883657",
      "stop": "885076",
      "transcription": "jy ra mõri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 182,
      "start": "887214",
      "stop": "890091",
      "transcription": "mãmã nĩ jy ra pêj ty kjẽ twapjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 183,
      "start": "890474",
      "stop": "893790",
      "transcription": "ti pĩri aswa kahẽ nankjo hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 184,
      "start": "894836",
      "stop": "897091",
      "transcription": "intâti jy ra ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 185,
      "start": "897346",
      "stop": "902407",
      "transcription": "pjã mãhẽ ra sê pasitâti ipẽ jõ sõpâri tapja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 186,
      "start": "902978",
      "stop": "906435",
      "transcription": "ipẽ hẽ ky py ra suu mẽ jy pãpã ra ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 187,
      "start": "907030",
      "stop": "909679",
      "transcription": "pjãn hẽ ky py ra pârô pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 188,
      "start": "910839",
      "stop": "913052",
      "transcription": "panãrân tapja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 189,
      "start": "913137",
      "stop": "914744",
      "transcription": "ky py ra pârô pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 190,
      "start": "914807",
      "stop": "916201",
      "transcription": "tâti jy ra ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 191,
      "start": "916903",
      "stop": "921584",
      "transcription": "ũãhã kjẽmẽra jõ kypa rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 192,
      "start": "921648",
      "stop": "923478",
      "transcription": "ha jy pãpã ra ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 193,
      "start": "923579",
      "stop": "925409",
      "transcription": "pãpã ra sââ [enterrar]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 194,
      "start": "926680",
      "stop": "929765",
      "transcription": "atyn jy pãpã ra ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 195,
      "start": "930159",
      "stop": "931286",
      "transcription": "swankjara",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 196,
      "start": "932085",
      "stop": "935063",
      "transcription": "jahã pan ni Pytsypâri rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 197,
      "start": "936350",
      "stop": "940467",
      "transcription": "so ja rê sânpũn inkjẽ hẽ swankjara jõ soti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 198,
      "start": "941371",
      "stop": "943371",
      "transcription": "ja jy tã ra nto pôti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 199,
      "start": "945174",
      "stop": "947323",
      "transcription": "jy tã ra nto pôti mãmã pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 200,
      "start": "947946",
      "stop": "951233",
      "transcription": "jy pãpã ty pytinsi jy rã kõn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 201,
      "start": "952212",
      "stop": "954265",
      "transcription": "a ti py pjõn ja tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 202,
      "start": "954946",
      "stop": "956786",
      "transcription": "pa tã Typajyrõ tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 203,
      "start": "957127",
      "stop": "958329",
      "transcription": "nõpjõmẽrân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 204,
      "start": "959116",
      "stop": "962404",
      "transcription": "rê py pjõ py pa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 205,
      "start": "964042",
      "stop": "965925",
      "transcription": "mãmã pĩn mãra ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 206,
      "start": "966648",
      "stop": "972871",
      "transcription": "ra ty... pjãn kõ jy a ty pytinsi panãra \"ou\" sõpâri kõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 207,
      "start": "973233",
      "stop": "976489",
      "transcription": "sõpâri hẽ ky py ra pĩn pâ ro pari hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 208,
      "start": "977159",
      "stop": "980882",
      "transcription": "o pjãn hẽ ti pãpã ra pĩri panãra",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 209,
      "start": "982031",
      "stop": "985244",
      "transcription": "jy pãpã ra ty aty sââ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 210,
      "start": "985382",
      "stop": "987276",
      "transcription": "aty sââ jy pãpã ra ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 211,
      "start": "987850",
      "stop": "989648",
      "transcription": "a jy jy pjow panãra",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 212,
      "start": "989818",
      "stop": "991127",
      "transcription": "jy kôti nõpjõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 213,
      "start": "992211",
      "stop": "995828",
      "transcription": "mãmã pêj ti ra kôti Claudio hẽ nõpjõmẽra",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 214,
      "start": "996195",
      "stop": "998556",
      "transcription": "ti ra kôti nõpjõmẽra",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 215,
      "start": "999999",
      "stop": "1003568",
      "transcription": "haa, ti ra nkwajãri Claudio hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 216,
      "start": "1003568",
      "stop": "1005377",
      "transcription": "mãmã pêj ti ra nsõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 217,
      "start": "1006076",
      "stop": "1009093",
      "transcription": "ti rã nsô nãhã asâ pjow panãra",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 218,
      "start": "1009132",
      "stop": "1012093",
      "transcription": "tijãri Claudio hẽ nãhã ti ra kôti nõpjõmẽra",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 219,
      "start": "1013209",
      "stop": "1016016",
      "transcription": "mãmã pêj rê su pjõ ja tã Peixoto tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 220,
      "start": "1017662",
      "stop": "1019922",
      "transcription": "ti ranpũn jy too Claudio",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 221,
      "start": "1020364",
      "stop": "1021712",
      "transcription": "ha, jy too",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 222,
      "start": "1021759",
      "stop": "1023869",
      "transcription": "jy too Claudio ũã tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 223,
      "start": "1025519",
      "stop": "1028209",
      "transcription": "ra ho pa iã hã pẽmẽra Peixoto rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 224,
      "start": "1029464",
      "stop": "1032154",
      "transcription": "pêj ro pa ra ku ty mãmã nĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 225,
      "start": "1032646",
      "stop": "1033590",
      "transcription": "Peixoto rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 226,
      "start": "1034624",
      "stop": "1036104",
      "transcription": "nãnkjo kõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 227,
      "start": "1036916",
      "stop": "1038833",
      "transcription": "ra kô ty pỹramã ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 228,
      "start": "1038833",
      "stop": "1042048",
      "transcription": "pêj jy pôô tõ ja kôkjatipita ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 229,
      "start": "1042485",
      "stop": "1043618",
      "transcription": "mãmã pja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 230,
      "start": "1044204",
      "stop": "1046823",
      "transcription": "mãmã pêj jy ho pôô pjy wy pytinsi ho jy ho pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 231,
      "start": "1046823",
      "stop": "1049110",
      "transcription": "mãmã pêj jy nkjâ py ra ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 232,
      "start": "1051109",
      "stop": "1052192",
      "transcription": "sĩ kõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 233,
      "start": "1054297",
      "stop": "1055584",
      "transcription": "mãmã pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 234,
      "start": "1057640",
      "stop": "1060375",
      "transcription": "pêj ky py ra sêj pari Claudio hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 235,
      "start": "1061990",
      "stop": "1067710",
      "transcription": "pêj ti mẽ swâri pytira Watuja mẽ Krekõ pèj jy mẽ ho too kjat Xingu tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 236,
      "start": "1069355",
      "stop": "1071135",
      "transcription": "pèj jy mẽ ho too",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 237,
      "start": "1073771",
      "stop": "1078991",
      "transcription": "jy py mẽ pôô Peixoto tã ti ra mẽ sũũ ũã hã ra pan panãra ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 238,
      "start": "1079821",
      "stop": "1081745",
      "transcription": "ũã hã pakre wy rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 239,
      "start": "1082016",
      "stop": "1083770",
      "transcription": "ra pan panãra",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 240,
      "start": "1085855",
      "stop": "1091253",
      "transcription": "jy jahê ipẽ hẽ rê sakjâri ankjâ innẽ ti mẽ sũũ pjow ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 241,
      "start": "1091253",
      "stop": "1093321",
      "transcription": "ti mẽ pẽẽ npari kjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 242,
      "start": "1094194",
      "stop": "1095406",
      "transcription": "aja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 243,
      "start": "1096974",
      "stop": "1098643",
      "transcription": "mãmã pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 244,
      "start": "1101177",
      "stop": "1104092",
      "transcription": "ti ra toori Xingu tã [els van enviar al Xingu]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 245,
      "start": "1106364",
      "stop": "1110228",
      "transcription": "jy ra too, jy ra suu pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 246,
      "start": "1110431",
      "stop": "1112041",
      "transcription": "imũnkja wy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 247,
      "start": "1113804",
      "stop": "1115906",
      "transcription": "wy pytinsi jy ra suu pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 248,
      "start": "1116974",
      "stop": "1121296",
      "transcription": "mãmã pêj... jy ra mõri Xingu tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 249,
      "start": "1122313",
      "stop": "1124957",
      "transcription": "jy ra mõri jy ra pôô Diauarum tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 250,
      "start": "1126127",
      "stop": "1129533",
      "transcription": "Diauarum tã rê pjõ pjãnmẽrân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 251,
      "start": "1129626",
      "stop": "1131829",
      "transcription": "sotankamêrân[indis del PIX]  rê pjõn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 252,
      "start": "1131949",
      "stop": "1135372",
      "transcription": "mãmã pêj nẽ jãri kjẽmẽrân prĩ tã inkjẽ hẽ Xingu rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 253,
      "start": "1135418",
      "stop": "1136435",
      "transcription": "tijãri tãn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 254,
      "start": "1137490",
      "stop": "1141024",
      "transcription": "rê sanpũn pjãrã ho jõti sakânsi pytinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 255,
      "start": "1141118",
      "stop": "1144728",
      "transcription": "pjãn kõ mãra, rê sanpũn pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 256,
      "start": "1145663",
      "stop": "1148197",
      "transcription": "mãmã pêj sakânsi pytinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 257,
      "start": "1148680",
      "stop": "1150111",
      "transcription": "txucarramae ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 258,
      "start": "1150525",
      "stop": "1153042",
      "transcription": "mãmã pêj rê sumpa inkjẽmẽrân prĩ tân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 259,
      "start": "1153645",
      "stop": "1155749",
      "transcription": "sumpa pytinsi Xingu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 260,
      "start": "1155948",
      "stop": "1157724",
      "transcription": "sakânsi ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 261,
      "start": "1158128",
      "stop": "1160258",
      "transcription": "haa jy ra pôô Xingu tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 262,
      "start": "1160827",
      "stop": "1163930",
      "transcription": "mãmã pêj ra pa, mãmã pêj jy ra mõri Kretire tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 263,
      "start": "1164370",
      "stop": "1165775",
      "transcription": "Txucarramae ja tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 264,
      "start": "1167085",
      "stop": "1173301",
      "transcription": "mãmã pêj sakã ra pa[moravam junto com eles], sakã ra pa, sakã ra ty, txucarramae ja kãn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 265,
      "start": "1175636",
      "stop": "1178374",
      "transcription": "jy mẽ pôô ja kwa pytira \"dois\"",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 266,
      "start": "1178511",
      "stop": "1180125",
      "transcription": "pam pêj ka...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 267,
      "start": "1180692",
      "stop": "1182533",
      "transcription": "Cuiabá pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 268,
      "start": "1182954",
      "stop": "1184669",
      "transcription": "jy mẽ ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 269,
      "start": "1184669",
      "stop": "1187442",
      "transcription": "haa, nõpjõ jy sãka ra ty txucarramae ja kãn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 270,
      "start": "1187473",
      "stop": "1188728",
      "transcription": "haa, jy ra ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 271,
      "start": "1188771",
      "stop": "1191533",
      "transcription": "mãmã pêj ti py ra swâri Claudio hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 272,
      "start": "1192364",
      "stop": "1194805",
      "transcription": "ti py ra swâri Diauarum tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 273,
      "start": "1194805",
      "stop": "1196877",
      "transcription": "py sê ra pa Diauarum nĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 274,
      "start": "1196877",
      "stop": "1199546",
      "transcription": "mãmã pêj jy py ra ho mõri Suyá tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 275,
      "start": "1200508",
      "stop": "1205974",
      "transcription": "mãmã pêj py ra pa Suyá rĩĩĩĩ... ra tõ ty pjow Suyá rĩ nkjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 276,
      "start": "1206363",
      "stop": "1208041",
      "transcription": "mãmã nĩ si ra tâti [no van tenir malalties]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 277,
      "start": "1209109",
      "stop": "1210440",
      "transcription": "mãmã pêj...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 278,
      "start": "1211211",
      "stop": "1216076",
      "transcription": "mãmã pêj rê py jĩ npari, jy py ra mõri pêj tã, swa tã [para abaixo, para a cima]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 279,
      "start": "1217618",
      "stop": "1220126",
      "transcription": "mámá pëj jy py ra mõri kukre ntwêj japêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 280,
      "start": "1220609",
      "stop": "1224033",
      "transcription": "rê py rãrẽ [roçar], rê rãrẽ, rê rãrẽ, rê mã mpe[terminou]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 281,
      "start": "1225109",
      "stop": "1228855",
      "transcription": "mãmã pêj nẽ sokre jy py ra jõ sõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 282,
      "start": "1229530",
      "stop": "1230187",
      "transcription": "sõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 283,
      "start": "1231631",
      "stop": "1233224",
      "transcription": "pêj py ra sã mãmã nĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 284,
      "start": "1233238",
      "stop": "1237114",
      "transcription": "mãmã pêj py ra tyyyy py ra ty py ra ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 285,
      "start": "1241771",
      "stop": "1243650",
      "transcription": "mãmã pêj rê ho pĩ ntori[esqueceu]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 286,
      "start": "1245146",
      "stop": "1247126",
      "transcription": "rë ho pí ntori Prêpuri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 287,
      "start": "1247651",
      "stop": "1250181",
      "transcription": "Prêpuri rĩ sa kãn na pa kjati tõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 288,
      "start": "1251536",
      "stop": "1253939",
      "transcription": "mãmã pêj sa kãn ra ty Prêpuri ja kãn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 289,
      "start": "1254844",
      "stop": "1257160",
      "transcription": "sa kãn ra ty pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 290,
      "start": "1258650",
      "stop": "1259576",
      "transcription": "jy ra mõri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 291,
      "start": "1260804",
      "stop": "1263838",
      "transcription": "mãmã pêj jy ra mõri ja tã pêj tã[avall]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 292,
      "start": "1265657",
      "stop": "1269228",
      "transcription": "mãmã pêj jy ra pa pêj rĩ, pêj tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 293,
      "start": "1271147",
      "stop": "1272516",
      "transcription": "mãmã pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 294,
      "start": "1274369",
      "stop": "1276771",
      "transcription": "nẽ jĩ kjã npari kjẽmẽrân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 295,
      "start": "1277476",
      "stop": "1281348",
      "transcription": "pjã mãhê toopytũ wy hẽ pan sotõ rõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 296,
      "start": "1281550",
      "stop": "1286551",
      "transcription": "ti pan tõ pyri rõ pjãn môtô mẽ, atõ mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 297,
      "start": "1286551",
      "stop": "1288091",
      "transcription": "ti pan tõ py rahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 298,
      "start": "1288959",
      "stop": "1291673",
      "transcription": "toopytũ wy hẽ kypa pjy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 299,
      "start": "1291908",
      "stop": "1293112",
      "transcription": "ti py pan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 300,
      "start": "1293366",
      "stop": "1295999",
      "transcription": "ti pja pan so tõ tõ ahê kypa pjy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 301,
      "start": "1296785",
      "stop": "1298316",
      "transcription": "toopytũ wy hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 302,
      "start": "1299387",
      "stop": "1303183",
      "transcription": "mãmã pêj jy su ra mõri ti ra pỹri atõ, kypa pjy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 303,
      "start": "1303907",
      "stop": "1309805",
      "transcription": "ti pyri atõ, môtô mẽ, kôkjati mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 304,
      "start": "1309836",
      "stop": "1311805",
      "transcription": "ja ti pyri kypa pjy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 305,
      "start": "1313835",
      "stop": "1319090",
      "transcription": "mãmã pêj ra pa, mãmã nĩ ra pa, mãmã pêj jy...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 306,
      "start": "1319315",
      "stop": "1326928",
      "transcription": "mãmã pêj jy py ra mõri swa tã... munição akõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 307,
      "start": "1327306",
      "stop": "1329724",
      "transcription": "mãmã pêj jy py ra jĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 308,
      "start": "1330784",
      "stop": "1332764",
      "transcription": "mãmã pêj nẽ jĩ kjã npari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 309,
      "start": "1334173",
      "stop": "1336530",
      "transcription": "ti jĩ kjã npari toopytũ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 310,
      "start": "1336724",
      "stop": "1338040",
      "transcription": "ti jĩ kjã npari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 311,
      "start": "1338590",
      "stop": "1341898",
      "transcription": "py rêj ũã tã pẽ toopytũ suu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 312,
      "start": "1342055",
      "stop": "1344443",
      "transcription": "prẽ hẽ ti pa pẽẽ npari Sejn hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 313,
      "start": "1344754",
      "stop": "1347775",
      "transcription": "mãmã hẽ ka ti pa pẽẽ jarẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 314,
      "start": "1348489",
      "stop": "1352397",
      "transcription": "mĩ pỹj sanpũ pa jõ kypa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 315,
      "start": "1352673",
      "stop": "1354387",
      "transcription": "pa jõ kypa tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 316,
      "start": "1354867",
      "stop": "1356877",
      "transcription": "pjã mãhê jy pa pêj jy pjow sõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 317,
      "start": "1357326",
      "stop": "1359765",
      "transcription": "pjã mãhê so kĩ nõ sõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 318,
      "start": "1360836",
      "stop": "1362081",
      "transcription": "ja mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 319,
      "start": "1362861",
      "stop": "1364494",
      "transcription": "mã pa pẽẽ jahê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 320,
      "start": "1364652",
      "stop": "1367641",
      "transcription": "ti py pan sõri japêj kypa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 321,
      "start": "1368734",
      "stop": "1372622",
      "transcription": "sa pa riti mã pa pẽẽ pẽ toopytũ mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 322,
      "start": "1373275",
      "stop": "1375091",
      "transcription": "ti py pan sõ rahê kypa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 323,
      "start": "1375158",
      "stop": "1377300",
      "transcription": "mẽjn ju tã tõ rõ kypa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 324,
      "start": "1377734",
      "stop": "1378693",
      "transcription": "pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 325,
      "start": "1379626",
      "stop": "1382228",
      "transcription": "jy py sa ra mõri kôkjatipita mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 326,
      "start": "1382928",
      "stop": "1387530",
      "transcription": "sa py ra mõri, sa py ra... sa py ra pa [a gente já foi procurar]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 327,
      "start": "1388091",
      "stop": "1393979",
      "transcription": "sa py ra pa, jy py ra pôô, py sê ra pôô, mãmã pêj py ra mõri toopytũ wy suu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 328,
      "start": "1394765",
      "stop": "1396142",
      "transcription": "nễ py wajãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 329,
      "start": "1396733",
      "stop": "1398733",
      "transcription": "rê wajãri, mãmã pêj mãra pẽẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 330,
      "start": "1400999",
      "stop": "1402428",
      "transcription": "asâ pytinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 331,
      "start": "1403228",
      "stop": "1405239",
      "transcription": "ja japêj, kypa japêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 332,
      "start": "1406826",
      "stop": "1412061",
      "transcription": "mãmã pêj jy py ra mõri pẽ toopytũ wy suu",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 333,
      "start": "1413091",
      "stop": "1415295",
      "transcription": "py ra mõri mãra pẽẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 334,
      "start": "1417724",
      "stop": "1425551",
      "transcription": "mãra pẽẽ Sẽn mẽ, Andre mẽ, toopytũ wy... toopytũ wy mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 335,
      "start": "1425775",
      "stop": "1428959",
      "transcription": "mãra pẽẽ, mãmã pêj rê kjari pẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 336,
      "start": "1431367",
      "stop": "1436377",
      "transcription": "rê mã sũũ pẽ mã, \"so\" rê sanpũ rãnkjâ ahê kypa to jy pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 337,
      "start": "1436897",
      "stop": "1439081",
      "transcription": "a to jy pjow kypa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 338,
      "start": "1439270",
      "stop": "1442474",
      "transcription": "\"so\" rê ranpũ ahê kjẽmẽra jõ kypa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 339,
      "start": "1444081",
      "stop": "1446550",
      "transcription": "mãmã pêj jy suu ra mõri kôkjatipita mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 340,
      "start": "1447137",
      "stop": "1449004",
      "transcription": "jy sê ra jõti Matupá rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 341,
      "start": "1449116",
      "stop": "1451361",
      "transcription": "mãmã pêj rê sanpũ imũnkja amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 342,
      "start": "1451702",
      "stop": "1454447",
      "transcription": "rê sanpũ ja tã pikãsâ[un ocell vermell] jõ inkô tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 343,
      "start": "1454448",
      "stop": "1456079",
      "transcription": "rê sanpũ pija[aquest]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 344,
      "start": "1457944",
      "stop": "1461821",
      "transcription": "ja rê sanpũ ũã tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 345,
      "start": "1461921",
      "stop": "1465277",
      "transcription": "rê sanpũ tõ ja jy pãpã sââ garimpeiro",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 346,
      "start": "1465749",
      "stop": "1468627",
      "transcription": "ja tã pa tã pikãsâ jõ inkô tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 347,
      "start": "1469366",
      "stop": "1471143",
      "transcription": "rê sanpũ ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 348,
      "start": "1471171",
      "stop": "1474727",
      "transcription": "haa ja tãn ta ka ti mĩ py, ja ka ti py pan sõri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 349,
      "start": "1475177",
      "stop": "1476944",
      "transcription": "ja mã ka ti py pa pan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 350,
      "start": "1477166",
      "stop": "1479288",
      "transcription": "Nãnsêpotiti jõ inkô amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 351,
      "start": "1480023",
      "stop": "1485046",
      "transcription": "ti py ra nsôri inkjẽmẽran kypa pẽ toopytũ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 352,
      "start": "1485430",
      "stop": "1487965",
      "transcription": "kjẽmẽra jõ kypa ti pãpã ho jy pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 353,
      "start": "1488912",
      "stop": "1490180",
      "transcription": "pẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 354,
      "start": "1491017",
      "stop": "1493947",
      "transcription": "to jy pjow pytinsi kjã kâ kjêj [desmatado]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 355,
      "start": "1494882",
      "stop": "1496406",
      "transcription": "ja to jy pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 356,
      "start": "1497010",
      "stop": "1498604",
      "transcription": "pẽ toopytũ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 357,
      "start": "1499673",
      "stop": "1502511",
      "transcription": "jy jy pjow kjẽmẽra jõ kyypa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 358,
      "start": "1503365",
      "stop": "1506238",
      "transcription": "kjẽmẽra jõ kyypa to jy pjow pytinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 359,
      "start": "1508324",
      "stop": "1511080",
      "transcription": "ja pẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 360,
      "start": "1513743",
      "stop": "1518476",
      "transcription": "haa, to jy pjow pytinsi pẽ hẽ kyypa, kjẽmẽra jõ kyypa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 361,
      "start": "1520837",
      "stop": "1523534",
      "transcription": "swankja tân ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 362,
      "start": "1524302",
      "stop": "1528302",
      "transcription": "a tân nõ tân \"so\" ja rê npari inkjẽ hẽ swankjara pẽẽ tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 363,
      "start": "1529848",
      "stop": "1532011",
      "transcription": "ja pêj jy pôô pẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 364,
      "start": "1532267",
      "stop": "1536023",
      "transcription": "ja pêj tapja, ja pêj \"so\" ja rê sũũ swankjarân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 365,
      "start": "1537953",
      "stop": "1539430",
      "transcription": "ja rê sũũ swankjarân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 366,
      "start": "1539720",
      "stop": "1542104",
      "transcription": "mãmã rê kân sũũ pija",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 367,
      "start": "1542337",
      "stop": "1544127",
      "transcription": "jy ra pẽẽ jy pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 368,
      "start": "1544726",
      "stop": "1546343",
      "transcription": "\"so\" ja rê kân sũũ, ka npari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 369,
      "start": "1547412",
      "stop": "1548738",
      "transcription": "haa, jy pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 370,
      "start": "1553650",
      "stop": "1554778",
      "transcription": "a rahã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 371,
      "start": "1557685",
      "stop": "1559011",
      "transcription": "py pĩri ja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "speaker": "Kôräkoko",
    "title": "Kôräkoko present continuous elicitation",
    "date": "2025/08",
    "notes": "sent sentences for translation over whatsapp"
  },
  "sentences": [
    {
      "transcription": "Inkjë më Kjêpyti më (inkjëmëra) jy rapa",
      "translation": "Eu, Kjêpyti, e Sâkjo estamos caminhando"
    },
    {
      "transcription": "Pasymä më Sôpôa më (märara) rê mën santori",
      "translation": "Pasymä e Sôpôa estão caminhando"
    },
    {
      "transcription": "ka më inkjë më (jara) rê pantori",
      "translation": "Você e eu estamos caminhando"
    },
    {
      "transcription": "röpjö swasïrä (mäjapjâra) rê santori",
      "translation": "uns porcos estão caminhando"
    },
    {
      "transcription": "ka më inkjë më (japjâra) jy rapa",
      "translation": "Você e eu estamos caminhando"
    },
    {
      "transcription": "kjêpyti (mäja) rê santori",
      "translation": "kjêpyti está caminhando"
    },
    {
      "transcription": "swasïrä (mäja) rê santori",
      "translation": "o porco está caminhando"
    },
    {
      "transcription": "ka më ka tö më (kara) rê mën kantori",
      "translation": "você e o seu irmão estão caminhando"
    },
    {
      "transcription": "pysy më kôräkoko më tanpê (märapjâra) rê rantori",
      "translation": "pysy e sokriti e kreenpy estão caminhando"
    },
    {
      "transcription": "ka (mära) rê santori",
      "translation": "você está caminhando"
    },
    {
      "transcription": "inkjë rê rantori",
      "translation": "eu estou caminhando"
    },
    {
      "transcription": "pytira swasïrä (mäjara) rê mën santori",
      "translation": "dois porcos estão caminhando"
    }
  ]
},{
  "metadata": {
    "title": "Tititi hakriti",
    "speakers": "Kreenpy",
    "non-Indigenous researchers": "Jo\u00e3o Paulo Den\u00f3frio",
    "date": "2019/01/15",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 1,
      "start": 2.19,
      "stop": 5290.0,
      "transcription": "Hoje ent\u00e3o \u00e9 dia 15/01/19",
      "translation": "Hoje ent\u00e3o \u00e9 dia 15/01/19",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": 5.38,
      "stop": 7730.0,
      "transcription": "16h15m.",
      "translation": "16h15m.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": 8.35,
      "stop": 9980.0,
      "transcription": "aldeia N\u00e4ns\u00eapotiti",
      "translation": "aldeia N\u00e4ns\u00eapotiti",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": 10.04,
      "stop": 13710.0,
      "transcription": "e a minha m\u00e3e Krenpy hoje veio contar tititiakriti.",
      "translation": "e a minha m\u00e3e Krenpy hoje veio contar tititiakriti.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": 21.39,
      "stop": 22060.0,
      "transcription": "Haa.",
      "translation": "Sim. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": 22.48,
      "stop": 26690.0,
      "transcription": "Ja ka s\u00fcn inkj\u00eb h\u00eb, ja ti s\u00fcn twatun m\u00eb, topytun h\u00eb.",
      "translation": "Isso eu contarei, isso a velha e o velho contaram. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": 27.31,
      "stop": 28790.0,
      "transcription": "ti ran s\u00fcr\u00f6kr\u00ef",
      "translation": "Ele nos contou sentado.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": 29.635,
      "stop": 33035.0,
      "transcription": "r\u00ea a pa r\u00f6 ah\u00eanpe pakjap\u00e4\u00e4 k\u00f6\u00f6`1",
      "translation": "Voc\u00eas n\u00e3o andem pelo igarap\u00e9 (pakjati) pequeno. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": 33.15,
      "stop": 36230.0,
      "transcription": "pakjap\u00e4\u00e4 k\u00f6\u00f6 ja pan tititi-hakriti",
      "translation": "Pelo igarap\u00e9 pequeno anda este tatu canastra gigante que se transforma (tititiakriti).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": 36.79,
      "stop": 38590.0,
      "transcription": "katir\u00ea su a p\u00f4",
      "translation": "Voc\u00eas chegar\u00e3o ao encontro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": 39.225,
      "stop": 45395.0,
      "transcription": "kati r\u00ea k\u00e4n tom\u00e4p\u00e4, kati r\u00ea k\u00e4n tokj\u00f4kj\u00f4n, m\u00e4m\u00e4 t\u00e4 katir\u00ea py a p\u00f4.",
      "translation": "Ele deixar\u00e1 voc\u00eas tontos (tom\u00e4p\u00e4), ele deixar\u00e1 voc\u00eas com olho-mole (tokj\u00f4kj\u00f4), naquela dire\u00e7\u00e3o voc\u00eas voltar\u00e3o. [S\u00f4kr\u00eb\u00eb: eles se perder\u00e3o e n\u00e3o chegar\u00e3o na aldeia, voltar\u00e3o ao lugar em que estava o tititiakriti, pois est\u00e3o tokj\u00f4kj\u00f4n, ou seja, sem consci\u00eancia de localiza\u00e7\u00e3o].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": 46.375,
      "stop": 48245.0,
      "transcription": "\u00efkin pjo tititi",
      "translation": "tatu canastra n\u00e3o \u00e9 bom",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": 48.765,
      "stop": 52415.0,
      "transcription": "n\u00e4nka, ti ra tokj\u00f4kj\u00f4 pepetinpe",
      "translation": "ruim, ele nos deixa olho-mole (tokj\u00f4kj\u00f4), bem mole (pepetinpe).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": 53.115,
      "stop": 59675.0,
      "transcription": "M\u00e4m\u00e4 t\u00e4 katir\u00ea py a p\u00f4, r\u00ea a pa s\u00e4 pakjap\u00e4\u00e4 [t\u00e4], sakre r\u00ef pan ka, sakre r\u00ef.",
      "translation": "Naquela dire\u00e7\u00e3o voc\u00eas voltar\u00e3o, voc\u00eas n\u00e3o andem em dire\u00e7\u00e3o do igarap\u00e9 pequeno, no remanso [do igarapezinho] vive [tatu canastra kriti], no remanso.  ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": 60.01,
      "stop": 61800.0,
      "transcription": "pakre jakre r\u00ef",
      "translation": "No remanso do igarap\u00e9.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": 62.07,
      "stop": 69630.0,
      "transcription": "N\u00e4nsi kati m\u00e4 kin, kati m\u00e4 k\u00efr\u00ef m\u00e4m\u00e4 j\u00f6 kwa, s\u00f6 kwa r\u00ef pan ka",
      "translation": "Assim que ficar bonito para [o tatu kriti], ficar\u00e1 bonito para [o tatu kriti], \u00e9 a casa dele, em sua casa vive.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": 70.215,
      "stop": 73415.0,
      "transcription": "katir\u00ea su a pan, katir\u00ea s\u00e2np\u00fcr\u00ef.",
      "translation": "Voc\u00eas ir\u00e3o em busca, voc\u00eas ver\u00e3o. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": 74.24,
      "stop": 76630.0,
      "transcription": "katir\u00ea antonk\u00e2nk\u00e2n",
      "translation": "Voc\u00eas ficar\u00e3o com os olhos ardendo (k\u00e2nk\u00e2n).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": 76.73,
      "stop": 78000.0,
      "transcription": "kati s\u00f6j\u00ef",
      "translation": "Voc\u00ea vomitar\u00e1.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": 78.58,
      "stop": 80980.0,
      "transcription": "n\u00e4 j\u00e4r\u00ef ja h\u00eb, tititi h\u00eb",
      "translation": "Isso faz assim, tatu canastra [faz assim]. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": 81.26,
      "stop": 85950.0,
      "transcription": "tititinpe t\u00f6 ka k\u00e2, ti sakjun ka tititinpe k\u00e2",
      "translation": "O casco (k\u00e2) do tatu canastra verdadeiro (tititinpe) \u00e9 igual ([m\u00e4m\u00e4n] t\u00f6) [ao do tatu canastra kriti], ele \u00e9 igual (sakjun) ao casco do tatu canastra verdadeiro (tititinpe). [S\u00f4kr\u00eb\u00eb tamb\u00e9m traduz tititinpe por \"\"tatu canastra normal\"\", mas ele prefere a tradu\u00e7\u00e3o de \"\"tatu canastra verdadeiro\"\"].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": 87.09,
      "stop": 93350.0,
      "transcription": "A jynn\u00e4? Haa, inn\u00e4 ka, p\u00e4\u00e4nkj\u00e2jaakri tititiakriti. ",
      "translation": "\u00c9 grande (inn\u00e4)? Sim, \u00e9 grande (inn\u00e4), n\u00e3o \u00e9 pouco pequeno o tatu canastra gigante que se transforma. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": 93.645,
      "stop": 95285.0,
      "transcription": "ink\u00f4jam\u00e4kja",
      "translation": "[O tatu canastra kriti \u00e9] da \u00e1gua.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": 96.32,
      "stop": 98910.0,
      "transcription": "\u00efp\u00e4\u00e4nkj\u00e2jaakri ",
      "translation": "N\u00e3o \u00e9 pouco pequeno.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": 99.01,
      "stop": 101360.0,
      "transcription": "\u00efk\u00e2nsi pytinsi",
      "translation": "Casco muito grande mesmo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": 102.54,
      "stop": 109040.0,
      "transcription": "Jaam\u00e4 katir\u00ea a pan ka, at\u00e2ti m\u00e4 katir\u00ea sotinkj\u00e2 sokwa.",
      "translation": "Por isso voc\u00eas andar\u00e3o, em terra firme [at\u00e2ti m\u00e4] voc\u00eas coletar\u00e3o (sotinkj\u00e2) frutas.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": 110.145,
      "stop": 116615.0,
      "transcription": "Katir\u00ea sakre t\u00e4 r\u00ea a pa s\u00e4 tepp\u00e4\u00e4 kar\u00ea ho parah\u00ea, n\u00e4nterinko katir\u00eankj\u00e2 tepp\u00e4\u00e4.",
      "translation": "Voc\u00eas n\u00e3o andar\u00e3o em dire\u00e7\u00e3o ao remanso para voc\u00eas matarem peixinho com [timb\u00f3], na metade [do percurso que o rio faz] voc\u00eas colocar\u00e3o [no cesto] peixinho.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": 117.875,
      "stop": 120695.0,
      "transcription": "N\u00e4 katir\u00ea sokwaj\u00e4 pj\u00f4ntwar\u00e2n.",
      "translation": "Assim voc\u00eas far\u00e3o as coisas, jovens mulheres.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": 120.85,
      "stop": 124300.0,
      "transcription": "M\u00e4m\u00e4 ra r\u00ea int\u00ea kap\u00eanton, re a pa r\u00f6 ah\u00ea.",
      "translation": "Ent\u00e3o n\u00f3s aconselhamos (ap\u00eanton) em prol de voc\u00eas, para voc\u00eas n\u00e3o irem.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": 125.51,
      "stop": 130380.0,
      "transcription": "Jyy, jyy ja h\u00ebn ka m\u00e4m\u00e4 tititiakriti j\u00f6 kwa h\u00eb?",
      "translation": "Como \u00e9 aquela casa do tatu canastra gigante que se transforma? ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": 130.97,
      "stop": 135320.0,
      "transcription": "[ka...kati] Inta kati m\u00e4nkw\u00e2n.",
      "translation": "Chuva cair\u00e1 para [o tititiakriti].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": 136.12,
      "stop": 138190.0,
      "transcription": "Inta m\u00e4nkw\u00e2n, ti j\u00e4r\u00ef.",
      "translation": "Chuva cair\u00e1 para [ele].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": 138.65,
      "stop": 141880.0,
      "transcription": "Inta m\u00e4nkw\u00e2n, m\u00e4 p\u00eaank\u00e2n.",
      "translation": "Chuva cair\u00e1 para [ele], chuvisco (p\u00eaank\u00e2) para [ele].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": 142.13,
      "stop": 145590.0,
      "transcription": "M\u00e4m\u00e4 p\u00ear\u00e4 myn p\u00f4 kre p\u00ean, p\u00f4.",
      "translation": "Ent\u00e3o sai do buraco para c\u00e1, sai.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": 146.815,
      "stop": 148315.0,
      "transcription": "\u00efp\u00f4 m\u00e4 myn",
      "translation": "Sai para c\u00e1.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": 149.76,
      "stop": 158190.0,
      "transcription": "\u00efp\u00f4 m\u00e4m\u00e4 s\u00e2np\u00fc inta, ti s\u00e2npun inta, m\u00e4 t\u00e4nkw\u00e2n inta, m\u00e4m\u00e4 m\u00e4 j\u00e4s\u00ea, ti j\u00e4r\u00ef, inta m\u00e4.",
      "translation": "Sai e ent\u00e3o [ele] v\u00ea a chuva, ele v\u00ea a chuva, a chuva cai para ele, ent\u00e3o [tatu] brinca (j\u00e4s\u00eari) para a chuva.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": 158.78,
      "stop": 160310.0,
      "transcription": "m\u00e4 j\u00e4s\u00ea",
      "translation": "Brinca para [a chuva].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": 161.31,
      "stop": 165560.0,
      "transcription": "m\u00e4 j\u00efnkj\u00e2, m\u00e4m\u00e4n h\u00eb, tititiakriti h\u00eb. ",
      "translation": "Aquele tatu canastra gigante que se transforma far\u00e1 barulho (inkj\u00e2n) para [a chuva]. [S\u00f4kr\u00eb\u00eb: pois ele est\u00e1 contente]",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": 167.43,
      "stop": 174000.0,
      "transcription": "Haa, ti m\u00e4 swakin h\u00e4 inta h\u00eb? Paa, ti m\u00e4 swakin h\u00e4 ka inta h\u00eb, m\u00e4 swakin.",
      "translation": "Sim, a chuva o deixou feliz (swakin)? Sim, a chuva lhe deu felicidade, felicidade para [tititiakriti].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": 175.07,
      "stop": 178730.0,
      "transcription": "M\u00e4m\u00e4 r\u00e4m\u00e4 ti m\u00e4 j\u00ef\u00eftu.",
      "translation": "Por isso ele brincou (j\u00ef\u00eftu) para [a chuva]. [S\u00f4kr\u00eb\u00eb tem certeza que aqui j\u00ef\u00eftu N\u00c3O significa transformar]",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 41,
      "start": 179.205,
      "stop": 182165.0,
      "transcription": "ti m\u00e4 j\u00ef\u00eftu, ti j\u00e4r\u00ef, inta m\u00e4.",
      "translation": "Ele brincou (j\u00ef\u00eftu) para a chuva.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 42,
      "start": 182.92,
      "stop": 186600.0,
      "transcription": "r\u00ea t\u00e4 s\u00e2npun, ti j\u00e4r\u00ef, r\u00ea t\u00e4 s\u00e2npun",
      "translation": "Eles viram o que estavam com [brincadeira], eles viram o que estava [brincando].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 43,
      "start": 188.045,
      "stop": 189845.0,
      "transcription": "Jyy ka hon?",
      "translation": "Como eles far\u00e3o?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 44,
      "start": 190.34,
      "stop": 191610.0,
      "transcription": "Jyy ka hon?",
      "translation": "Como eles far\u00e3o?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 45,
      "start": 191.87,
      "stop": 200850.0,
      "transcription": "Kati s\u00e2np\u00fc, kati kwy, kati kwyjakwa kri t\u00e4, py kwyjah\u00eankj\u00f4n, kati kwy kri t\u00e4.",
      "translation": "Ele olhar\u00e1, ele ir\u00e1, ele iria em dire\u00e7\u00e3o \u00e0 aldeia, pensei que tinha a inten\u00e7\u00e3o de voltar mas [me engano] (kj\u00f4n), ele ir\u00e1 em dire\u00e7\u00e3o \u00e0 aldeia. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 46,
      "start": 202.065,
      "stop": 205295.0,
      "transcription": "P\u00ean kati py su r\u00e4py m\u00e4m\u00e4 t\u00e4 tititi suu.",
      "translation": "Ent\u00e3o ele dar\u00e1 uma volta em c\u00edrculo (r\u00e4py) naquela dire\u00e7\u00e3o, ao encontro de tatu canastra gigante que se transforma.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 47,
      "start": 205.865,
      "stop": 208685.0,
      "transcription": "Kati py su r\u00e4py kati py su p\u00f4.",
      "translation": "Ele dar\u00e1 uma volta em c\u00edrculo ao encontro, ele chegar\u00e1 ao encontro [de tititiakriti].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 48,
      "start": 209.78,
      "stop": 216800.0,
      "transcription": "Jut\u00e4 kri? M\u00e4m\u00e4n k\u00f4py ra pankj\u00e2n. Pj\u00e4r\u00e4h\u00ea ran kwaapj\u00e2n tititi h\u00eb? ",
      "translation": "Em que dire\u00e7\u00e3o est\u00e1 a aldeia? Ali, eu estou andando em v\u00e3o. Por que tatu canastra gigante que se transforma faz comigo [isso]. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 49,
      "start": 217.715,
      "stop": 220105.0,
      "transcription": "P\u00ean kati py kwyjakwan",
      "translation": "Ent\u00e3o ele iria novamente.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 50,
      "start": 221.025,
      "stop": 226635.0,
      "transcription": "kati py kwy m\u00e4m\u00e4 t\u00e4, kri t\u00e4, kwyjah\u00ea, kati py su pypa.",
      "translation": "Ele foi novamente naquela dire\u00e7\u00e3o, em dire\u00e7\u00e3o \u00e0 aldeia, para ir, ele novamente dar\u00e1 meia volta (pypa) ao encontro de [tititiakriti]. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 51,
      "start": 227.085,
      "stop": 230455.0,
      "transcription": "kati py su kwy, kati py su p\u00f4.",
      "translation": "Ele novamente ir\u00e1 ao encontro, ele novamente chegar\u00e1 ao encontro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 52,
      "start": 231.305,
      "stop": 233345.0,
      "transcription": "Kati py su p\u00f4.",
      "translation": "Ele novamente chegar\u00e1 ao encontro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 53,
      "start": 234.12,
      "stop": 241370.0,
      "transcription": "Jut\u00e4 ka kwy inkj\u00eb? Juu ka h\u00ebn inkj\u00eb? Pj\u00e4r\u00e4h\u00ea ra p\u00f4\u00f4 inkj\u00eb ja t\u00e4?",
      "translation": "Em que dire\u00e7\u00e3o eu vou? Como eu farei? Por que eu cheguei nesta dire\u00e7\u00e3o?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 54,
      "start": 241.93,
      "stop": 251130.0,
      "transcription": "Tinparinpe, ti j\u00e4r\u00ef, ja h\u00eb, roontom\u00e4nkan, ti j\u00e4r\u00efnpe ti j\u00e4r\u00ef. Inkjon. Pj\u00e4n? Jut\u00e4 ka kwy? Tij\u00e4rankj\u00e2, ti j\u00e4r\u00ef. ",
      "translation": "Ele n\u00e3o sabe, aquilo [faz], nos deixa o olho ruim (intom\u00e4nka) com [tititiakriti], ele n\u00e3o disse. N\u00e3o. O qu\u00ea? Em que dire\u00e7\u00e3o eu irei? Ele dissem em v\u00e3o.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 55,
      "start": 251.485,
      "stop": 256295.00000000003,
      "transcription": "P\u00ean py kwyjankj\u00e2, ti j\u00e4r\u00ef, ra py pa ankj\u00e2 ",
      "translation": "Ent\u00e3o novamente foi em v\u00e3o, eles andam novamente em v\u00e3o.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 56,
      "start": 257.015,
      "stop": 268905.0,
      "transcription": "Ta ra py su r\u00e4py, ti j\u00e4r\u00ef, ta, m\u00e4m\u00e4 t\u00e4 py ra py su pa, ra py su p\u00f4\u00f4. Jut\u00e4 kri? Jut\u00e4 kati m\u00eb s\u00e2npun h\u00e4 inpyti?   ",
      "translation": "Por si pr\u00f3prio novamente deu uma volta em c\u00edrculo (r\u00e4pyri) ao encontro de [tititiakriti], por si mesmo (ta), naquela dire\u00e7\u00e3o novamente eles novamente andaram ao encontro de [tititiakriti], eles novamente chegaram ao encontro de [tititiakriti]. Em que dire\u00e7\u00e3o est\u00e1 a aldeia? Em que dire\u00e7\u00e3o voc\u00eas olhar\u00e3o o sol?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 57,
      "start": 269.2,
      "stop": 273700.0,
      "transcription": "Jut\u00e4 kwy? M\u00e4m\u00e4 t\u00e4 kwy, kri t\u00e4 h\u00eb.",
      "translation": "Em que dire\u00e7\u00e3o vai [o sol]? Naquela dire\u00e7\u00e3o vai [o sol], em dire\u00e7\u00e3o \u00e0 aldeia.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 58,
      "start": 273.985,
      "stop": 276395.0,
      "transcription": "M\u00e4m\u00e4n k\u00f4pa s\u00efankj\u00e2n.",
      "translation": "Ali [o sol] est\u00e1 em v\u00e3o.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 59,
      "start": 277.715,
      "stop": 280525.0,
      "transcription": "Pj\u00e4r\u00e4h\u00ea jynkjo su m\u00eb a kj\u00e2\u00e2?",
      "translation": "Por que voc\u00eas dois destemidamente decidiram ir (kj\u00e2\u00e2) ao encontro de [tititiakriti]?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 60,
      "start": 281.125,
      "stop": 283155.0,
      "transcription": "A swas\u00efr\u00e4 piti?",
      "translation": "\u00c9 queixada que est\u00e1 fazendo barulho (piti)? ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 61,
      "start": 283.355,
      "stop": 287055.0,
      "transcription": "A swas\u00efr\u00e4 s\u00e2npiti? Jynkjo su m\u00eb a kj\u00e2\u00e2.",
      "translation": "\u00c9 queixada que est\u00e1 gritando (s\u00e2npiti)? voc\u00eas dois diciram ir destemidamente (inkjo) ao encontro de [tititiakriti].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 62,
      "start": 287.62,
      "stop": 291190.0,
      "transcription": "Ti poo r\u00e4nka, pa p\u00f4jah\u00ea pjo.",
      "translation": "Ele nos prejudicou com [o desnorteamento] para n\u00f3s n\u00e3o chegarmos.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 63,
      "start": 291.58,
      "stop": 293560.0,
      "transcription": "Pa p\u00f4jah\u00ea pjo kri t\u00e4.",
      "translation": "Para n\u00f3s n\u00e3o chegarmos na aldeia.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 64,
      "start": 293.925,
      "stop": 298305.0,
      "transcription": "Pa p\u00f4jah\u00ea pjo pa n\u00e4pj\u00e2 m\u00eb, pa junpj\u00e2 suu.  ",
      "translation": "Para n\u00f3s n\u00e3o chegarmos ao encontro de nossa m\u00e3e e de nosso pai.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 65,
      "start": 298.45,
      "stop": 300180.0,
      "transcription": "pa j\u00f6 p\u00e4\u00e4 suu",
      "translation": "Ao encontro de nossos filhos.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 66,
      "start": 300.44,
      "stop": 304330.0,
      "transcription": "m\u00e4m\u00e4 ti poontokj\u00f4kj\u00f4, m\u00e4m\u00e4 su pa p\u00f4. ",
      "translation": "Ent\u00e3o ele nos deixou desnorteados (tokj\u00f4kj\u00f4) [olho-mole], ent\u00e3o n\u00f3s chegamos ao encontro de [tititiakriti].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 67,
      "start": 305.57,
      "stop": 310490.0,
      "transcription": "Inkj\u00eb s\u00ea rankjya ka p\u00efr\u00ef inkj\u00eb h\u00eb, ka p\u00ef ka to inkj\u00eb h\u00eb.",
      "translation": "Se ficar com raiva [de tititiakriti] eu matarei, eu matarei, eu irei embora.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 68,
      "start": 310.67,
      "stop": 314250.0,
      "transcription": "\u00dc\u00e4h\u00e4 katir\u00ea py a pan. Inkjon, ka sunsw\u00e2rah\u00ea pjo. ",
      "translation": "L\u00e1 voc\u00eas retornar\u00e3o [para a aldeia]. N\u00e3o, n\u00e3o \u00e9 para voc\u00ea flechar.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 69,
      "start": 314.745,
      "stop": 317655.0,
      "transcription": "Inkj\u00eb h\u00eb ka sunsw\u00e2, ka sunsw\u00e2 jy s\u00ea rankjy.",
      "translation": "Eu flecharei, eu flecharei, eu fiquei com raiva para (s\u00ea) [flechar].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 70,
      "start": 318.065,
      "stop": 321745.0,
      "transcription": "s\u00ea ra kwyjam\u00e4, py ra p\u00f4\u00f4 pj\u00e4n kri t\u00e4.",
      "translation": "pois eu andei intencionadamente, eu quero chegar na aldeia.  ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 71,
      "start": 322.46,
      "stop": 327930.0,
      "transcription": "Kri t\u00e4 ra py p\u00f4\u00f4 pj\u00e4n, ra tyj\u00e4 ra pan, ra tyj\u00e4 ra r\u00f6kwy.",
      "translation": "Na aldeia eu quero chegar, eu ando com fome, eu procuro (r\u00f6kwy) com fome.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 72,
      "start": 328.33,
      "stop": 329060.0,
      "transcription": "Inkjon.",
      "translation": "N\u00e3o.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 73,
      "start": 329.37,
      "stop": 331740.0,
      "transcription": "M\u00e4m\u00e4 kati m\u00ef s\u00e2np\u00fcr\u00e4nkj\u00e2n.",
      "translation": "Ent\u00e3o n\u00f3s veremos em v\u00e3o.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 74,
      "start": 332.15,
      "stop": 334840.0,
      "transcription": "Jut\u00e4 kar\u00e2n kam\u00eb [t\u00f6npun]?",
      "translation": "Em que dire\u00e7\u00e3o voc\u00eas dois viram?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 75,
      "start": 335.02,
      "stop": 338650.0,
      "transcription": "S\u00ea m\u00eb anto h\u00eb j\u00e4ra, m\u00eb anto t\u00e2ta.",
      "translation": "Se voc\u00eas dois olharem (into), voc\u00eas dois olharem com aten\u00e7\u00e3o (into t\u00e2ti).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 76,
      "start": 339.35,
      "stop": 342030.0,
      "transcription": "Kam\u00eb s\u00e2npun t\u00e2ta inpyti",
      "translation": "Se voc\u00eas dois olharem atentos (s\u00e2npun t\u00e2ti) o sol.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 77,
      "start": 343.005,
      "stop": 345895.0,
      "transcription": "M\u00e4m\u00e4n k\u00f4py, py pa paah\u00ea kri t\u00e4.",
      "translation": "Ali, para n\u00f3s andarmos novamente em dire\u00e7\u00e3o \u00e0 aldeia.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 78,
      "start": 346.505,
      "stop": 351105.0,
      "transcription": "Haa, kati m\u00ef\u00efpj\u00e2n, inkj\u00eb s\u00ea roo r\u00e4jajan.",
      "translation": "Sim, n\u00f3s faremos, eles me [desnortearam] com pouca intensidade (r\u00e4ja).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 79,
      "start": 351.4,
      "stop": 356360.0,
      "transcription": "Inkj\u00eb ti raap\u00eari, m\u00e4m\u00e4 ra py su p\u00f4 h\u00eb, m\u00e4m\u00e4 m\u00ef py s\u00e2np\u00fc.",
      "translation": "Ele [fez] mais forte (raap\u00eari) comigo, ent\u00e3o eu cheguei novamente ao encontro [de tititiakriti], ent\u00e3o n\u00f3s o vimos novamente.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 80,
      "start": 356.67,
      "stop": 359950.0,
      "transcription": "R\u00ea s\u00e2npun pj\u00e4n pjo, inkj\u00eb ja t\u00e4 ra p\u00eanton.",
      "translation": "Eu n\u00e3o quero v\u00ea-lo, nesta dire\u00e7\u00e3o eu olho para me proteger dele (p\u00ea). ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 81,
      "start": 360.105,
      "stop": 361835.0,
      "transcription": "R\u00ea s\u00e2npun pj\u00e4n pjo.",
      "translation": "Eu n\u00e3o quero ver.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 82,
      "start": 362.8,
      "stop": 367000.0,
      "transcription": "Ti s\u00e2npun kin, ti j\u00e4r\u00ef, m\u00e4m\u00e4n h\u00eb, inkj\u00eb h\u00eb ka p\u00efr\u00ef.  ",
      "translation": "Ele o viu bem, aquele disse, eu matarei.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 83,
      "start": 367.49,
      "stop": 371200.0,
      "transcription": "Inkj\u00eb h\u00eb r\u00ea r\u00ea k\u00e4rinkj\u00fcr\u00e4h\u00ea pjo, ate ka su kwy.",
      "translation": "Eu n\u00e3o tenho a inten\u00e7\u00e3o de decidir (inkjun) para voc\u00eas, eu irei sozinho ao encontro de [tititiakriti].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 84,
      "start": 371.78,
      "stop": 373670.0,
      "transcription": "Ka p\u00efr\u00ef inkj\u00eb h\u00eb.",
      "translation": "Eu o matarei.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 85,
      "start": 374.1,
      "stop": 376200.0,
      "transcription": "Kati jyy roo hon, tapja.",
      "translation": "Ele far\u00e1 algo comigo, talvez.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 86,
      "start": 376.885,
      "stop": 378915.0,
      "transcription": "Kjon, kati m\u00ef pan.",
      "translation": "N\u00e3o, \"\"deixe ele estar\"\". [deixar em paz, n\u00e3o mexer com ele]",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 87,
      "start": 380.715,
      "stop": 382625.0,
      "transcription": "s\u00f6kwa p\u00f4.",
      "translation": "Parte dianteira do tronco (s\u00f6kwa) branca.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 88,
      "start": 383.185,
      "stop": 386545.0,
      "transcription": "s\u00f6kwa p\u00f4, tiipj\u00e2 pjo, tititi h\u00eb.",
      "translation": "Parte dianteira do tronco branca, tatu canastra n\u00e3o \u00e9 assim (tiipj\u00e2 pjo). ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 89,
      "start": 387.01,
      "stop": 387920.0,
      "transcription": "Kjon.",
      "translation": "N\u00e3o.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 90,
      "start": 388.15,
      "stop": 391940.0,
      "transcription": "Tititiakriti m\u00e4ra, tititiaj\u00efo m\u00e4ra",
      "translation": "Este \u00e9 tatu canastra gigante que se transforma (tititiakriti), este \u00e9 tatu canastra gigante que se transforma (tititiaj\u00efo). [S\u00f4kr\u00eb\u00eb: -kriti e -aj\u00efo s\u00e3o a mesma coisa]",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 91,
      "start": 391.96,
      "stop": 395230.0,
      "transcription": "m\u00e4ra h\u00eb swankjara ti rantokj\u00f4kj\u00f4, ti j\u00e4r\u00ef.",
      "translation": "Ele que desnorteou (intokj\u00f4kj\u00f4) os antepassados.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 92,
      "start": 395.95,
      "stop": 405230.0,
      "transcription": "Swankja pytinsi, pakjap\u00eankja, m\u00e4ra r\u00ef pa pa t\u00e4n. Juuri pa pa t\u00e4n? Itepam\u00e4, kr\u00eakj\u00e4sy h\u00e4, pa pa t\u00e4n. ",
      "translation": "Antigamente (swankja) mesmo, do in\u00edcio, no tempo em que n\u00f3s est\u00e1vamos em algum lugar (m\u00e4ra r\u00ef). No tempo em que n\u00f3s est\u00e1vamos onde? N\u00f3s ainda est\u00e1vamos na vegeta\u00e7\u00e3o densa (itepi), no local onde se joga o lixo (krekj\u00e4sy).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 93,
      "start": 406.145,
      "stop": 408285.0,
      "transcription": "Ja t\u00e4n r\u00ea s\u00fcn m\u00e4ra.",
      "translation": "Nesta \u00e9poca (ja t\u00e4n), eles contaram isso.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 94,
      "start": 409.04,
      "stop": 410690.0,
      "transcription": "Haa, inkj\u00eb ka p\u00efr\u00ef.",
      "translation": "Sim, eu matarei.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 95,
      "start": 411.01,
      "stop": 416380.0,
      "transcription": "Jy s\u00ea ho kwyy, ti j\u00e4r\u00ef, m\u00e4m\u00e4 kan, pank\u00ef ti su turi.",
      "translation": "Ele foi com [ca\u00e7a] intencionado, aquele cesto, ca\u00e7a ele carregou ao encontro de [tititiakriti].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 96,
      "start": 416.91,
      "stop": 419480.0,
      "transcription": "Inkj\u00eb h\u00eb ka p\u00efr\u00ef, m\u00e4ra ka pa p\u00efr\u00ef.",
      "translation": "Eu matarei, agora eu matarei aquele.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 97,
      "start": 420.08,
      "stop": 421590.0,
      "transcription": "Ta kati jyypjo.",
      "translation": "Ele acabar\u00e1 por si mesmo (ta).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 98,
      "start": 422.98,
      "stop": 428420.0,
      "transcription": "Kjon, m\u00e4m\u00e4 pan, jaap\u00ea kati p\u00ea pa pan, jaap\u00ea kati pjyn.",
      "translation": "N\u00e3o, ali est\u00e1, daqui n\u00f3s andaremos para nos proteger dele e dali ir\u00e1 o caminho. [S\u00f4kr\u00eb\u00eb: eles v\u00e3o para um lado e o caminho \u00e9/vai para outro lado]",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 99,
      "start": 428.755,
      "stop": 432985.0,
      "transcription": "Ja kati m\u00ef pynte, jaap\u00ea kati m\u00ef py pjyntw\u00ea h\u00e4, kati py pa pan.",
      "translation": "Isso n\u00f3s finalizaremos, daqui n\u00f3s [faremos] novamente caminho novo, n\u00f3s andaremos novamente. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 100,
      "start": 434.165,
      "stop": 434965.0,
      "transcription": "Py m\u00eb.",
      "translation": "Vamos voc\u00eas dois.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 101,
      "start": 435.66,
      "stop": 438170.0,
      "transcription": "P\u00ean su ho kwyy, ti j\u00e4r\u00ef.",
      "translation": "Ent\u00e3o eles foram com [algo] ao encontro de [tititiakriti].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 102,
      "start": 438.31,
      "stop": 444435.0,
      "transcription": "jy m\u00eb kwyy, ti j\u00e4r\u00ef, m\u00e4m\u00e4 n\u00ef, intot\u00e2ta: pa kwyy, ti j\u00e4r\u00ef, kri t\u00e4.",
      "translation": "Os dois foram, ali aquele que olha atento (intot\u00e2ta) disse: vamos em dire\u00e7\u00e3o \u00e0 aldeia.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 103,
      "start": 445.17,
      "stop": 446270.0,
      "transcription": "kri t\u00e4",
      "translation": "em dire\u00e7\u00e3o \u00e0 aldeia",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 104,
      "start": 446.755,
      "stop": 449205.0,
      "transcription": "s\u00ea kwyy, ti j\u00e4r\u00ef, m\u00e4m\u00e4n kan ho",
      "translation": "foi intencionadamente, com aquele cesto.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 105,
      "start": 449.915,
      "stop": 456485.0,
      "transcription": "jy py m\u00e4nkw\u00e2, ti j\u00e4r\u00ef, inta, jy py m\u00e4 atoo, ti j\u00e4r\u00ef, ti m\u00e4 j\u00e4suri.",
      "translation": "A chuva caiu novamente para [tititiakriti], ele [tititiakriti] saiu novamente para [a chuva], ele [tititiakriti] acordou para [a chuva].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 106,
      "start": 456.985,
      "stop": 458855.0,
      "transcription": "Jy m\u00e4 j\u00f4j\u00f4.",
      "translation": "[Tititiakriti] caiu v\u00e1rias vezes (j\u00f4j\u00f4) para a [chuva].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 107,
      "start": 459.115,
      "stop": 461205.0,
      "transcription": "akoko inta m\u00e4",
      "translation": "brincou (akoko) para [a chuva].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 108,
      "start": 462.115,
      "stop": 464955.0,
      "transcription": "ti s\u00ea watoo, ti j\u00e4r\u00ef, k\u00e2j\u00e2n, po",
      "translation": "Ele retirou intencionadamente flecha, flecha n\u00e3o dentada com ponta de taquara (po). [S\u00f4kr\u00eb\u00eb: havia 3 tipos de flecha: po, flecha n\u00e3o dentada de ponta de taquara para matar animais grandes; sw\u00e2si, flecha de ponta de madeira (n\u00e3o \u00e9 bambu) dentada para matar amimais grandes; sw\u00e2sijankj\u00e2, flecha com ponta escura de palmeira em formato cil\u00edndrico para matar peixes e animais pequenos. H\u00e1 hoje um quarto tipo de flecha, usado para pescar, com um gancho na ponta, que foi aprendido com os Kayabi] ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 109,
      "start": 465.21,
      "stop": 467230.0,
      "transcription": "pora ti s\u00ea m\u00eb watoo, ti j\u00e4r\u00ef",
      "translation": "Ele retirou intencionadamente duas flechas n\u00e3o dentadas com ponta de taquara (po).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 110,
      "start": 468.905,
      "stop": 477225.0,
      "transcription": "Ka sunsw\u00e2ri h\u00e4n. M\u00e4nkjakwyy, ti j\u00e4r\u00ef, pakre pakjap\u00e4\u00e4 pok\u00e2\u00e2 h\u00e4 m\u00e4nkjakwyy, jy m\u00e4 s\u00e4n, ti j\u00e4r\u00ef. ",
      "translation": "Eu flecharei.  Ele desceu para [tititiakriti], no barranco (pok\u00e2\u00e2) do igarap\u00e9 pequeno desceu para [tititiakriti], ficou em p\u00e9 para [tititiakriti].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 111,
      "start": 478.1,
      "stop": 480270.0,
      "transcription": "Pok\u00e2\u00e2ntwa h\u00e4 jy m\u00e4 s\u00e4n",
      "translation": "Em um lugar conveniente (intwa) do barranco ele ficou em p\u00e9 para [tititiakriti].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 112,
      "start": 480.96,
      "stop": 483310.0,
      "transcription": "N\u00e4nsi kati myn pypar\u00ef.",
      "translation": "Assim que ele der meia volta (pypar\u00ef) para c\u00e1.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 113,
      "start": 484.37,
      "stop": 487300.0,
      "transcription": "S\u00f6kre p\u00ean ka sunsw\u00e2ri, ti j\u00e4r\u00ef. ",
      "translation": "No pesco\u00e7o eu flecharei.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 114,
      "start": 488.57,
      "stop": 496040.0,
      "transcription": "Ti j\u00ef sam\u00e4r\u00ef, ti j\u00e4r\u00ef, ti m\u00e4 akoko, ti j\u00e4r\u00ef, inta m\u00e4, m\u00e4 s\u00e2npiti swas\u00efr\u00e4 j\u00e2npipj\u00e2n, ti j\u00e4r\u00ef.  ",
      "translation": "Ele vigiou (sam\u00e4r\u00ef) [o tatu], ele [tatu] brincou (akoko) para a chuva, imitou o som (j\u00e2npipj\u00e2n) do queixada para [a chuva].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 115,
      "start": 497.09,
      "stop": 499700.0,
      "transcription": "Swas\u00efr\u00e4 m\u00e4m\u00e4 t\u00e4 s\u00e2npiti.",
      "translation": "Do jeito mesmo (m\u00e4m\u00e4 t\u00e4) de queixada ele gritou (s\u00e2npiti). [S\u00f4kr\u00eb\u00eb: ele gritou igual quixada]",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 116,
      "start": 500.25,
      "stop": 504900.0,
      "transcription": "Inta m\u00e4 ti m\u00e4 pypan, ti j\u00e4r\u00ef, jy m\u00e4 s\u00e4n kin, ti j\u00e4r\u00ef, tititi. ",
      "translation": "Para a chuva ele deu meia volta, tatu canastra ficou em p\u00e9 bem para [o ca\u00e7ador].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 117,
      "start": 505.97,
      "stop": 513304.99999999994,
      "transcription": "[Ka] sunsw\u00e2ri. Ti s\u00ea sakr\u00e2n, ti s\u00ea sakr\u00e2n, ti su m\u00ebn.",
      "translation": "Eu flecharei. Ele puxou a corda do arco (sakr\u00e2n) intencionadamente, ele largou (m\u00ebn) ao encontro de [tititiakriti]. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 118,
      "start": 513.5,
      "stop": 515740.0,
      "transcription": "Pj\u00e4n ni ti r\u00e4nsw\u00e2ri m\u00e4m\u00e4n h\u00eb?",
      "translation": "Onde ele flechou? ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 119,
      "start": 516.255,
      "stop": 520325.00000000006,
      "transcription": "Ikre ri ti r\u00e4nsw\u00e2ri, k\u00e2 pepeti r\u00ef, ti r\u00e4nsw\u00e2ri. ",
      "translation": "Acima da clav\u00edcula (kre) ele flechou, no couro mole, ele flechou.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 120,
      "start": 521.045,
      "stop": 525355.0,
      "transcription": "M\u00e4m\u00e4n p\u00ean ti r\u00e4nsw\u00e2ri, ti j\u00e4r\u00ef, inkj\u00f4j\u00f4, ti j\u00e4r\u00ef, inkj\u00f4j\u00f4.",
      "translation": "Ent\u00e3o ele flechou, caiu v\u00e1rias vezes (j\u00f4j\u00f4), caiu v\u00e1rias vezes.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 121,
      "start": 525.895,
      "stop": 529915.0,
      "transcription": "ti py t\u00e4 sunsw\u00e2ri, ti j\u00e4r\u00ef, jaap\u00ea, m\u00e4m\u00e4 n\u00ef, s\u00f6krepi n\u00ef.",
      "translation": "Ele flechou novamente, daqui, ali, no pesco\u00e7o (s\u00f6krepi).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 122,
      "start": 529.98,
      "stop": 532840.0,
      "transcription": "A k\u00e2 pepeti kati sunsw\u00e2ri s\u00ef r\u00ef.",
      "translation": "N\u00e3o \u00e9 em couro mole que ele flechar\u00e1 no corpo. [S\u00f4kr\u00eb\u00eb: como o couro n\u00e3o \u00e9 mole, ele flechou no pesco\u00e7o].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 123,
      "start": 533.285,
      "stop": 538410.0,
      "transcription": "K\u00e2 pepeti ti sunsw\u00e2ri, kre r\u00ef tim\u00eb sunsw\u00e2ri, s\u00f6kre p\u00ean.",
      "translation": "Ele flechou em couro mole, no buraco acima da clav\u00edcula (kre) eles dois flecharam, no pesco\u00e7o. [S\u00f4kr\u00eb\u00eb: Krenpy deve ter errado a fala, antes ela dizia que era s\u00f3 um flechando e agora ela disse que eles dois flecharam].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 124,
      "start": 539.342,
      "stop": 541792.0,
      "transcription": "P\u00ean jy kwyjakwa, ti j\u00e4r\u00ef, m\u00e4m\u00e4.",
      "translation": "Ent\u00e3o ele foi, aquele, mas [n\u00e3o conseguiu completar sua a\u00e7\u00e3o] (akwa). [S\u00f4kr\u00eb\u00eb: ele n\u00e3o conseguiu chegar na aldeia, pois ficou perdido]",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 125,
      "start": 542.062,
      "stop": 546252.0,
      "transcription": "Ti p\u00efra jy pjas\u00e2n s\u00e2p\u00efrakwa, ti j\u00e4r\u00ef.",
      "translation": "Por causa isso aquele que matou subiu, mas [algo ocorreu] (akwa).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 126,
      "start": 548.132,
      "stop": 550712.0,
      "transcription": "Ti ho r\u00e4nka, ti j\u00e4r\u00ef, tititi h\u00eb. ",
      "translation": "O tatu canastra lhe fez mal. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 127,
      "start": 551.937,
      "stop": 561697.0,
      "transcription": "\u00dc\u00e4h\u00e4 ti m\u00ebn, ti j\u00e4r\u00ef, ate jy t\u00ebn, ti j\u00e4r\u00ef, m\u00e4m\u00e4, m\u00e4m\u00e4 n\u00ef r\u00f6\u00f6, ti j\u00e4r\u00ef, r\u00f6\u00f6, r\u00f6\u00f6...",
      "translation": "L\u00e1 ele jogou, ele caiu separadamente (ate), aquele, ali ficou deitado, deitado, deitado...",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 128,
      "start": 563.05,
      "stop": 568270.0,
      "transcription": "kypy r\u00f6\u00f6, jy t\u00e4 pyt\u00ebn, jy su ra p\u00f4\u00f4, ti j\u00e4r\u00ef.  ",
      "translation": "Acho que  ficou deitado, o sol foi descendo (pyt\u00ebn) \"\"para ele\"\" (t\u00e4), eles chegaram a seu encontro. [S\u00f4kr\u00eb\u00eb: deve ser esp\u00edrito dos mortos]",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 129,
      "start": 569.47,
      "stop": 577630.0,
      "transcription": "S\u00f6 twapj\u00e2 m\u00eb, s\u00f6 topj\u00e2pj\u00e2 m\u00eb, s\u00f6 t\u00f6 m\u00eb, s\u00f6 n\u00e4pj\u00e2 t\u00f6 m\u00eb, jy su ra p\u00f4\u00f4, ti j\u00e4r\u00ef. ",
      "translation": "Sua av\u00f3, seu av\u00f4, seu irm\u00e3o, sua outra m\u00e3e (n\u00e4pj\u00e2 t\u00f6), eles chegaram ao encontro dele.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 130,
      "start": 577.675,
      "stop": 580055.0,
      "transcription": "Pj\u00e4n h\u00eb ti ko waj\u00e4ram\u00e4 ka?",
      "translation": "O que foi que fez contigo? [S\u00f4kr\u00eb\u00eb: perguntando se foi cobra, tatu, on\u00e7a, etc.]",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 131,
      "start": 580.74,
      "stop": 584880.0,
      "transcription": "Ka m\u00e4r\u00e4h\u00e4 a r\u00f6 pytinsi. Pj\u00e4n h\u00eb? Ti j\u00e4r\u00ef, ti j\u00e4r\u00ef, topj\u00e2pj\u00e2 h\u00eb.",
      "translation": "Voc\u00ea est\u00e1 deitado mesmo a\u00ed (m\u00e4r\u00e4h\u00e4). O que foi [que te fez isso]? O av\u00f4 disse. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 132,
      "start": 585.355,
      "stop": 587595.0,
      "transcription": "Pj\u00e4n h\u00eb ti waj\u00e4r\u00ef inkj\u00eb t\u00e2npj\u00e2?",
      "translation": "O que foi que [te] fez isso meu neto?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 133,
      "start": 587.8,
      "stop": 590000.0,
      "transcription": "Ja h\u00eb, n\u00e4nka h\u00eb.",
      "translation": "Aquilo [fez], [aquilo] feio [fez].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 134,
      "start": 590.285,
      "stop": 593845.0,
      "transcription": "N\u00e4nka h\u00eb ti ra p\u00ea ho r\u00e4nka inkj\u00eb t\u00e2npj\u00e2.",
      "translation": "[Aquilo] feio fez mal ao meu neto. [S\u00f4kr\u00eb\u00eb: fala dos esp\u00edritos (kypaswakjara)]",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 135,
      "start": 594.235,
      "stop": 598475.0,
      "transcription": "Inkj\u00eb h\u00eb ka t\u00e4 r\u00f6ar\u00ef, ka t\u00e4 r\u00f6ar\u00ef inkj\u00eb h\u00eb.",
      "translation": "Eu matarei a pauladas (r\u00f6ar\u00ef), eu matarei a pauladas.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 136,
      "start": 598.72,
      "stop": 603100.0,
      "transcription": "Ti ra p\u00ea ho r\u00e4nka t\u00e4n, jy su kwyy, ti j\u00e4r\u00ef, m\u00e4m\u00e4 s\u00f6 topj\u00e2pj\u00e2.",
      "translation": "Enquanto ele lhe fez mal em preju\u00edzo [dos esp\u00edritos familiares], ele foi ao encontro, aquele seu av\u00f4.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 137,
      "start": 603.788,
      "stop": 606858.0,
      "transcription": "krit\u00f6n\u00e4nt\u00eara, jy su kwyy, ti j\u00e4r\u00ef",
      "translation": "esp\u00edrito (krit\u00f6n\u00e4nt\u00eara), ele foi ao encontro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 138,
      "start": 607.158,
      "stop": 610168.0,
      "transcription": "ti sik\u00e2ri, ti j\u00e4r\u00ef, ti sik\u00e2ri",
      "translation": "Ele bateu, ele bateu.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 139,
      "start": 611.738,
      "stop": 613778.0,
      "transcription": "ti t\u00e4 p\u00efrinpe",
      "translation": "ele matou mesmo aquele que estava com [as flechas no corpo] (t\u00e4).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 140,
      "start": 614.013,
      "stop": 615863.0,
      "transcription": "p\u00ean jy py k\u00f6 kwyy, ti j\u00e4r\u00ef.",
      "translation": "Ent\u00e3o ele foi novamente atr\u00e1s (k\u00f6) [de tititi]..",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 141,
      "start": 615.923,
      "stop": 618643.0,
      "transcription": "Ka h\u00eb ka ra p\u00ea ho r\u00e4nka inkj\u00eb t\u00e2npj\u00e2.",
      "translation": "Voc\u00ea fez mal ao meu neto em meu preju\u00edzo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 142,
      "start": 618.998,
      "stop": 621408.0,
      "transcription": "Jap\u00ean kati ra p\u00ea to.",
      "translation": "Doravante (jap\u00ean) ele vai embora em meu preju\u00edzo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 143,
      "start": 621.988,
      "stop": 623978.0,
      "transcription": "Jap\u00ean kati ra p\u00ea sujyn.",
      "translation": "Doravante ele se distanciar\u00e1 em meu preju\u00edzo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 144,
      "start": 624.758,
      "stop": 630298.0,
      "transcription": "Kati su p\u00f4, tapja, ipp\u00eb suu inkj\u00eb t\u00e2npj\u00e2, ti j\u00e4r\u00ef. ",
      "translation": "Talvez meu neto chegar\u00e1 ao encontro dos n\u00e3o-\u00edndios (ipp\u00eb). ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 145,
      "start": 630.903,
      "stop": 632503.0,
      "transcription": "R\u00f6\u00f6...",
      "translation": "[Neto] deitado...",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 146,
      "start": 632.918,
      "stop": 635068.0,
      "transcription": "P\u00ean jy py k\u00e2r\u00e4kriti, ti j\u00e4r\u00ef.",
      "translation": "Ent\u00e3o ele voltou \u00e0 consci\u00eancia (k\u00e2r\u00e4kriti).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 147,
      "start": 635.298,
      "stop": 640088.0,
      "transcription": "K\u00e2r\u00e4kriti jy s\u00f6j\u00ef\u00ef, jy s\u00f6j\u00ef\u00ef, jy s\u00f6j\u00ef\u00ef.",
      "translation": "Consciente (k\u00e2r\u00e4kriti) ele vomitou, ele vomitou, e le vomitou.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 148,
      "start": 640.478,
      "stop": 646148.0,
      "transcription": "P\u00ean jy s\u00e4n, ti j\u00e4r\u00ef, p\u00ean r\u00ea r\u00f6kw\u00e2ri, ti j\u00e4r\u00ef, krit\u00f6r\u00e4nt\u00ear\u00e2n, r\u00ea r\u00f6kw\u00e2ri. ",
      "translation": "Ent\u00e3o ele ficou em p\u00e9, ent\u00e3o os esp\u00edritos (krit\u00f6n\u00e4nt\u00ear\u00e2n) lhe massagearam (r\u00f6kw\u00e2ri), eles lhe massagearam.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 149,
      "start": 647.338,
      "stop": 653078.0,
      "transcription": "R\u00ea r\u00f6kw\u00e2ri p\u00e2rank\u00f4 ho, jy py k\u00e2\u00e2pjo, ti j\u00e4r\u00ef, jy py k\u00e2\u00e2pjo.",
      "translation": "Eles lhe massagearam com rem\u00e9dio l\u00edquido (p\u00e2rank\u00f4), ele voltou a estar consciente dos sentidos (k\u00e2\u00e2pjo).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 150,
      "start": 653.693,
      "stop": 656503.0,
      "transcription": "Jak\u00f4paakri, py py.",
      "translation": "Ali \u00e9 a aldeia, vamos.   ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 151,
      "start": 657.033,
      "stop": 660223.0,
      "transcription": "Jo ra kwyy, ti j\u00e4r\u00ef, r\u00ea m\u00e4np\u00e2n k\u00e2j\u00e2n. ",
      "translation": "Eles [esp\u00edritos] lhe carregaram, eles pegaram (inp\u00e2n) flecha para [ele].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 152,
      "start": 660.703,
      "stop": 665163.0,
      "transcription": "Jo ra kwyy, jo ra t\u00eap[i], jo ra t\u00eapi.",
      "translation": "Eles lhe levaram, eles [esp\u00edritos] se aproximaram com [ele], eles se aproximaram com [ele].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 153,
      "start": 665.938,
      "stop": 668498.0,
      "transcription": "Jo ra kwyy, ti j\u00e4r\u00ef, kri t\u00e4.",
      "translation": "Eles o levaram em dire\u00e7\u00e3o \u00e0 aldeia.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 154,
      "start": 669.343,
      "stop": 673233.0,
      "transcription": "Sakwa jap\u00ea\u00ea t\u00e4 jo ra p\u00f4jakwa, ti j\u00e4r\u00ef.  ",
      "translation": "Pr\u00f3ximo \u00e0 porta (sakwa jap\u00ea\u00ea) eles chegaram com [ele], mas [algo aconteceu] (akwa).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 155,
      "start": 673.763,
      "stop": 675083.0,
      "transcription": "Jo ra p\u00f4jakwa.",
      "translation": "Eles chegaram com [ele] mas [algo conteceu].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 156,
      "start": 675.338,
      "stop": 677978.0,
      "transcription": "M\u00e4m\u00e4n p\u00ean r\u00ea py sipyri, ti j\u00e4r\u00ef.",
      "translation": "Ent\u00e3o eles [seus familiares] lhe trouxeram pelo bra\u00e7o (sipyri) novamente.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 157,
      "start": 678.373,
      "stop": 682653.0,
      "transcription": "R\u00ea py sipyri m\u00e4m\u00e4 tititi p\u00efra, jy po ra kwyy, ti j\u00e4r\u00ef. ",
      "translation": "Eles novamente trouxeram pelo bra\u00e7o aquele que matou o tatu canastra, eles [familiares] novamente foram com [ele].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 158,
      "start": 683.828,
      "stop": 685198.0,
      "transcription": "Ka k\u00e4n s\u00fc.",
      "translation": "Eu te contarei.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 159,
      "start": 686.098,
      "stop": 690368.0,
      "transcription": "Ka k\u00e4n s\u00fc inkj\u00eb t\u00e2npj\u00e2, inkj\u00eb j\u00f6 p\u00e4\u00e4, inkj\u00eb t\u00f6.",
      "translation": "Eu te contarei, meu neto, meu filho, meu irm\u00e3o.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 160,
      "start": 690.778,
      "stop": 697958.0,
      "transcription": "M\u00e4m\u00e4 ka p\u00efr\u00ef ka h\u00eb, kati k\u00f6 m\u00e4npun kin h\u00e4 ka, kati sotim\u00e4npe h\u00e4n ka h\u00eb.",
      "translation": "Ent\u00e3o voc\u00ea matou, voc\u00ea olhe bem, voc\u00ea acerte as coisas (sotim\u00e4npe) [S\u00f4kr\u00eb\u00eb: acertar no sentido do xam\u00e3 olhar bem].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 161,
      "start": 698.743,
      "stop": 702813.0,
      "transcription": "Kati sokwaj\u00e4, kati antom\u00e4p\u00e4 kin h\u00e4n.",
      "translation": "Voc\u00ea far\u00e1, voc\u00ea fa\u00e7a bem xamanismo (intom\u00e4p\u00e4).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 162,
      "start": 704.303,
      "stop": 706443.0,
      "transcription": "Raap\u00ea k\u00e2p\u00ean s\u00e4.",
      "translation": "Voc\u00ea n\u00e3o mexa sexualmente (s\u00e2p\u00ean) em preju\u00edzo delas. [S\u00f4kr\u00eb\u00eb: esta palavra s\u00e2p\u00ean, que tamb\u00e9m significa \"\"trabalho\"\", \u00e9 usada para o xam\u00e3 n\u00e3o ter rela\u00e7\u00f5es sexuais com mulheres].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 163,
      "start": 706.698,
      "stop": 711308.0,
      "transcription": "ka ra nin s\u00e4 s\u00f6 kriti, m\u00e4 a p\u00eb\u00eb s\u00e4 s\u00f6 kriti m\u00e4.",
      "translation": "Voc\u00ea n\u00e3o transe com suas amantes, voc\u00ea n\u00e3o fale com tua amante.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 164,
      "start": 711.458,
      "stop": 716908.0,
      "transcription": "[A]ntom\u00e4p\u00e4 k\u00efn\u00e4h\u00ea kati waj\u00e4 ka h\u00eb, m\u00e4m\u00e4 ka ho r\u00e4nka ka h\u00eb.",
      "translation": "Para voc\u00ea ser um bom xam\u00e3 voc\u00ea far\u00e1, ent\u00e3o voc\u00ea fez mal [ao tatu].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 165,
      "start": 717.118,
      "stop": 722068.0,
      "transcription": "Kati a pan, ate kati a pan ka, a p\u00f4jah\u00ea pjo kri t\u00e4.",
      "translation": "Voc\u00ea andar\u00e1, voc\u00ea andar\u00e1 longe (ate), n\u00e3o \u00e9 para voc\u00ea chegar em dire\u00e7\u00e3o \u00e0 aldeia.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 166,
      "start": 722.518,
      "stop": 731218.0,
      "transcription": "A k\u00efkwa ah\u00ea pjo suty am\u00e4, a j\u00f6tah\u00ea pjo kansipj\u00e2 jak\u00e4n, inkjon, atyn kati a pan, kati raanpun h\u00e4n. ",
      "translation": "N\u00e3o \u00e9 para voc\u00ea deitar na esteira de dormir (suty), n\u00e3o \u00e9 para voc\u00ea dormir perto de tua esposa, n\u00e3o, voc\u00ea andar\u00e1 na mata, voc\u00ea lhes olhar\u00e1.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 167,
      "start": 731.783,
      "stop": 738623.0,
      "transcription": "Tom\u00e4p\u00e4 h\u00e4 kati a m\u00f6, inkj\u00eb kin wy inkj\u00eb m\u00e4 tom\u00e4p\u00e4, inkj\u00eb t\u00e2npj\u00e2, inkj\u00eb t\u00f6. ",
      "translation": "Como (h\u00e4) xam\u00e3 voc\u00ea ir\u00e1, para mim \u00e9 muito bom xam\u00e3, meu neto, meu irm\u00e3o. [S\u00f4kr\u00eb\u00eb: pessoal fala que quando voc\u00ea mata algum bicho ruim, que n\u00e3o presta, que n\u00e3o \u00e9 bom, a\u00ed voc\u00ea vai virar xam\u00e3 e vai ver todas as coisas, \u00e9 isso que aconteceu aqui com esta pessoa]",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 168,
      "start": 738.953,
      "stop": 743638.0,
      "transcription": "R\u00ea m\u00e4 j\u00e4r\u00ef, ti j\u00e4r\u00ef, m\u00e4m\u00e4 n\u00ef m\u00e4ra p\u00eb\u00eb, ti j\u00e4r\u00ef, krit\u00f6n\u00e4nt\u00eara, m\u00e4ra p\u00eb\u00eb.",
      "translation": "Eles lhe disseram, ali eles lhe falaram, os esp\u00edritos (krit\u00f6n\u00e4nt\u00eara) lhe falaram. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 169,
      "start": 744.16,
      "stop": 750150.0,
      "transcription": "Haa, m\u00e4m\u00e4 ka s\u00fc, inkj\u00ebm\u00ebr\u00e2n ka kam\u00e4r\u00ef, inkj\u00ebm\u00ebr\u00e2n ka k\u00e2np\u00fc, n\u00e4 kati j\u00e4. ",
      "translation": "Sim, voc\u00ea diz, n\u00f3s [esp\u00edritos] te vigiaremos-cuidaremos (sam\u00e4r\u00ef), n\u00f3s te olharemos, assim ser\u00e1.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 170,
      "start": 751.17,
      "stop": 753190.0,
      "transcription": "Haa, kaapj\u00e2n inkj\u00eb h\u00eb.",
      "translation": "Sim, eu farei.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 171,
      "start": 753.325,
      "stop": 756875.0,
      "transcription": "H\u00eb, ra s\u00e2np\u00fc inkj\u00eb, jat\u00e4 ka su kwyy.",
      "translation": "Ali, eu vejo, nesta dire\u00e7\u00e3o eu irei ao encontro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 172,
      "start": 757.115,
      "stop": 764965.0,
      "transcription": "H\u00eb ra pan. Ipp\u00eb pjo, papjoa pan. Pj\u00e4 r\u00e4 pan? Inne. ",
      "translation": "Ali eles est\u00e3o. N\u00e3o \u00e9 Branco (ipp\u00eb), \u00e9 \u00edndio n\u00e3o-panar\u00e1 (papjoa). Quem (pj\u00e4) s\u00e3o eles que est\u00e3o [ali]? N\u00e3o sei.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 173,
      "start": 765.585,
      "stop": 772215.0,
      "transcription": "Pj\u00e4n tapja? Ipp\u00eb r\u00ea p\u00eb\u00ebnpari pjo. Jy ja h\u00ebn ip\u00eb\u00eb h\u00eb?",
      "translation": "O que \u00e9? Eu n\u00e3o entendo a l\u00edngua do n\u00e3o-\u00edndio. Como \u00e9 esta fala?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 174,
      "start": 772.555,
      "stop": 782895.0,
      "transcription": "Jut\u00e4 pan\u00e4ra t\u00f6 ka ra t\u00f6 pj\u00e2ra, r\u00ea pin p\u00eb\u00ebjakj\u00fcra, r\u00ea pin p\u00eb\u00ebnpara, ka sakj\u00fcr\u00e4 kati m\u00e4 ha p\u00eb\u00eb h\u00e4n ka.",
      "translation": "Se em alguma dire\u00e7\u00e3o voc\u00ea encontrar outros pan\u00e4ra (pan\u00e4ra t\u00f6), se a nossa fala se parecer, se n\u00f3s nos compreendermos (pin p\u00eb\u00ebnpara), se voc\u00ea parecer com ele voc\u00ea converse com [eles]. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 175,
      "start": 783.26,
      "stop": 784340.0,
      "transcription": "Kati j\u00e4r\u00ef.",
      "translation": "Assim ser\u00e1.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 176,
      "start": 784.46,
      "stop": 787370.0,
      "transcription": "Tom\u00e4p\u00e4 h\u00eb ti sokj\u00e2np\u00fcr\u00e4nkanpe.",
      "translation": "Xam\u00e3 n\u00e3o olha as coisas um pouco mal.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 177,
      "start": 787.47,
      "stop": 798360.0,
      "transcription": "Tom\u00e4p\u00e4 kati s\u00e2npun kin ja, kati p\u00ea sotoap\u00f4, s\u00f6r\u00e4sw\u00e2 kati p\u00eankw\u00e2, s\u00f6r\u00e4sw\u00e2 ho kati p\u00ea a p\u00f4, n\u00e4 kati j\u00e4r\u00ef.",
      "translation": "O xam\u00e3 ver\u00e1 bem isso, voc\u00ea trar\u00e1 as coisas (sotoap\u00f4) em preju\u00edzo dele [do sopapjoa], seus adornos (r\u00e4sw\u00e2) voc\u00ea os pegar\u00e1 (inkw\u00e2ri) em preju\u00edzo [do sopapjoa], voc\u00ea trar\u00e1 seus adornos em preju\u00edzo deles, assim ser\u00e1.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 178,
      "start": 798.75,
      "stop": 803200.0,
      "transcription": "Ka sanpap\u00ebri h\u00e4n inkj\u00ebm\u00ebra, ka t\u00eapintot\u00e2ti h\u00e4n inkj\u00ebm\u00ebra. ",
      "translation": "N\u00f3s esperaremos atentos (sanpap\u00ebri), n\u00f3s esperaremos (t\u00eapintot\u00e2ti).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 179,
      "start": 803.52,
      "stop": 810030.0,
      "transcription": "n\u00e4 ka[ti] waj\u00e4r\u00ef inkj\u00eb t\u00e2npj\u00e2 m\u00eb, inkj\u00eb t\u00f6, r\u00ea m\u00e4 j\u00e4r\u00ef, m\u00e4 ra p\u00eb\u00eb. M\u00e4m\u00e4n p\u00ean...",
      "translation": "Assim voc\u00ea far\u00e1, meu neto, meu irm\u00e3o, eles lhe disseram, eles conversaram com [ele]. Ent\u00e3o...",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 180,
      "start": 810.84,
      "stop": 817020.0,
      "transcription": "jy ra p\u00ea sit\u00e2ti, ti j\u00e4r\u00ef, r\u00ea sapj\u00f6r\u00e4kwa, ti j\u00e4r\u00ef, r\u00ea sapj\u00f6r\u00e4nkj\u00e2, ra p\u00ea r\u00f6nkr\u00e2, r\u00eanteri.  ",
      "translation": "Ele ficou fren\u00e9tico (sit\u00e2ti) em preju\u00edzo deles, eles lhe seguraram (sapj\u00f6) mas [n\u00e3o conseguiram], eles lhe seguraram em v\u00e3o, ele era escorregadio (r\u00f6nkr\u00e2) em preju\u00edzo deles, eles desistiram (int\u00eari). ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 181,
      "start": 817.645,
      "stop": 819065.0,
      "transcription": "Jy too, ti j\u00e4r\u00ef.",
      "translation": "Ele foi embora. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 182,
      "start": 819.57,
      "stop": 820370.0,
      "transcription": "Jy too.",
      "translation": "Ele foi embora.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 183,
      "start": 821.71,
      "stop": 827200.0,
      "transcription": "P\u00ean jy too, ti j\u00e4r\u00ef, sapy ra pa, ja t\u00e4, ja t\u00e4 py su kwyy.   ",
      "translation": "Ent\u00e3o ele foi embora, eles foram lhe procurar, nesta dire\u00e7\u00e3o, nesta dire\u00e7\u00e3o foram novamente em busca dele.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 184,
      "start": 827.88,
      "stop": 832380.0,
      "transcription": "Ja papjoa ti s\u00e2np\u00fcr\u00e4swa, ipp\u00eb su jaakwy.",
      "translation": "Este \u00edndio n\u00e3o-panar\u00e1 (papjoa) viu primeiro, ao encontro do n\u00e3o-\u00edndio (ipp\u00eb) foi [aquele xam\u00e3].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 185,
      "start": 832.845,
      "stop": 834565.0,
      "transcription": "Kati pj\u00e4 p\u00ea pyr\u00ef.",
      "translation": "Ele [xam\u00e3] pegar\u00e1 algo em preju\u00edzo dele [ipp\u00eb].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 186,
      "start": 835.18,
      "stop": 838980.0,
      "transcription": "Pj\u00e4n kati p\u00ea py? Soti, s\u00f6 sotinkj\u00eati ipp\u00eb.  ",
      "translation": "O qu\u00ea ele [xam\u00e3] pegar\u00e1 em preju\u00edzo dele [ipp\u00eb]? Coisas, muitas s\u00e3o as coisas do n\u00e3o-\u00edndio (ipp\u00eb).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 187,
      "start": 840.355,
      "stop": 845875.0,
      "transcription": "Pr\u00eb\u00eb? Pr\u00eb\u00eb h\u00eb? Jup\u00ea r\u00e4 m\u00e4 t\u00f6 pan ipp\u00eb kati su p\u00f4.",
      "translation": "Quem? Quem [far\u00e1]? Onde moram alguns n\u00e3o-\u00edndios que ele chegar\u00e1 ao encontro?  ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 188,
      "start": 846.94,
      "stop": 850530.0,
      "transcription": "M\u00e4m\u00e4 m\u00ef s\u00e2npun. Ka pja m\u00eb s\u00e2npun n\u00f6 kar\u00e2n?",
      "translation": "Aquele que n\u00f3s vemos. Voc\u00eas dois n\u00e3o viram?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 189,
      "start": 850.58,
      "stop": 854200.0,
      "transcription": "Inkjon, r\u00ea m\u00eb s\u00e2npun pjo. Inkj\u00ebm\u00ebr\u00e2n r\u00ea si s\u00e2npun.",
      "translation": "N\u00e3o, n\u00f3s dois n\u00e3o vimos. N\u00f3s vimos mesmo (si).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 190,
      "start": 854.285,
      "stop": 856395.0,
      "transcription": "M\u00e4m\u00e4n su jaakwy, kati su p\u00f4.",
      "translation": "Foi ao encontro daquele, chegar\u00e1 ao encontro. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 191,
      "start": 856.765,
      "stop": 858325.0,
      "transcription": "Jy su p\u00f4\u00f4 m\u00f6r\u00ef.",
      "translation": "Ele estava chegando ao encontro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 192,
      "start": 859.39,
      "stop": 865370.0,
      "transcription": "P\u00ean kati s\u00e2npun, ate p\u00eb\u00eb katinparinteri, p\u00ean kati myn py kwy.",
      "translation": "Ent\u00e3o ele ver\u00e1, [se ele] falar diferente (ate) ele ouvir\u00e1 e o deixar\u00e1 (interi), ent\u00e3o ele voltar\u00e1 para c\u00e1.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 193,
      "start": 866.335,
      "stop": 877125.0,
      "transcription": "Jyytih\u00eb, juutih\u00eb kati s\u00f6tin ate, atyn, krit\u00f6n\u00e4nt\u00eara k\u00f6 pa, kukre s\u00e2\u00e2 pa? Juutih\u00eb, jur\u00e4h\u00e4 kati py p\u00f4?",
      "translation": "Quantas, quantas [noites] ele dormir\u00e1 longe (ate), na mata, andando com os esp\u00edritos (krit\u00f6n\u00e4nt\u00eara), andando de aldeia em aldeia (kukre s\u00e2\u00e2)? Quantas [noites], quando ele voltar\u00e1?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 194,
      "start": 877.625,
      "stop": 885195.0,
      "transcription": "Inkj\u00eb t\u00e2npj\u00e2, inkj\u00eb t\u00f6, inkj\u00eb j\u00f6 p\u00e4\u00e4, ti m\u00e4 j\u00e4r\u00ef, ti j\u00e4r\u00ef, krit\u00f6n\u00e4nt\u00ear\u00e2n.",
      "translation": "Meu neto, meu irm\u00e3o, meu filho, os esp\u00edritos (krit\u00f6n\u00e4nt\u00eara) lhe disseram.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 195,
      "start": 885.765,
      "stop": 897365.0,
      "transcription": "Kati pan, n\u00e4nsi kati m\u00e4 jyypjo ja, intom\u00e4p\u00e4, kati m\u00e4 jyypjora h\u00e4n, kati pakree p\u00f4 kri t\u00e4, m\u00e4m\u00e4n p\u00ean ka pynp\u00e2.",
      "translation": "Ele andar\u00e1, assim a vertigem (intom\u00e4p\u00e4) acabar para ele, se [a vertigem] acabar para ele, ele chegar\u00e1 lentamente em dire\u00e7\u00e3o \u00e0 aldeia, ent\u00e3o eles [os familiares da aldeia] o segurar\u00e3o novamente.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 196,
      "start": 898.14,
      "stop": 904270.0,
      "transcription": "Ka p\u00ea\u00eantonkjon py ho, py kin, pyssy ka m\u00e4 p\u00f4n.",
      "translation": "Eles fizeram press\u00e3o sobre os olhos dele com urucum em preju\u00edzo da [vertigem], urucum \u00e9 bom, castanha do Brasil eles ascender\u00e3o (p\u00f4) para ele.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 197,
      "start": 904.34,
      "stop": 908970.0,
      "transcription": "Ka m\u00e4 p\u00f4n kantoonkjon, kati py m\u00e4 tut\u00fc.",
      "translation": "Eles lhe ascender\u00e3o, eles lhe far\u00e3o press\u00e3o sobre os olhos [com urucum], ele ficar\u00e1 novamente quieto (tut\u00fcn) para [a vertigem]. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 198,
      "start": 909.48,
      "stop": 918500.0,
      "transcription": "T\u00fct\u00fcr\u00e4h\u00e4 kati sokj\u00e2np\u00fcr\u00f6kwan s\u00f6p\u00e2ri h\u00e4, kati t\u00e4 raanp\u00fc j\u00e4h\u00e4kjaapj\u00e2ra, kati ra p\u00ea sokjanp\u00e2. ",
      "translation": "Assim que ficar quieto ele olhar\u00e1 deitado as coisas com feiti\u00e7o, ele olhar\u00e1 os daqui que est\u00e3o com [feiti\u00e7o], ele pegar\u00e1 as coisas em preju\u00edzo deles.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 199,
      "start": 918.695,
      "stop": 921425.0,
      "transcription": "Kati ra p\u00ea sotinkw\u00e2r\u00e4n, kati j\u00e4r\u00ef [...].",
      "translation": "Voc\u00ea pegue as coisas em preju\u00edzo deles, voc\u00ea far\u00e1. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 200,
      "start": 921.935,
      "stop": 925695.0,
      "transcription": "Tititiakriti ti p\u00efra, jyntom\u00e4p\u00e4 kin.",
      "translation": "Aquele que matou o tatu gigante que se transforma se tornou um bom xam\u00e3.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 201,
      "start": 925.95,
      "stop": 929610.0,
      "transcription": "A jyntom\u00e4p\u00e4 kin? Paa, intom\u00e4p\u00e4 kin.",
      "translation": "\u00c9 um bom xam\u00e3? Sim, xam\u00e3 bom.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 202,
      "start": 930.345,
      "stop": 932255.0,
      "transcription": "Jy s\u00f6tinkj\u00eati.",
      "translation": "Ele dormiu muitas [noites].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 203,
      "start": 933.765,
      "stop": 938235.0,
      "transcription": "Ka m\u00e4 krin, ti j\u00e4r\u00ef, ink\u00e2py, ka m\u00e4 krin.",
      "translation": "Eles sentar\u00e3o para ele no Centro, eles sentar\u00e3o para ele.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 204,
      "start": 939.835,
      "stop": 945795.0,
      "transcription": "P\u00ean kati ra su ho ato, ti j\u00e4r\u00ef, kripi kati ato, ink\u00e2py kati ho ato.  ",
      "translation": "Ent\u00e3o ele aparecer\u00e1 (ato) com [cobra] ao encontro deles, na aldeia ele aparecer\u00e1 (ato), no Centro ele aparecer\u00e1 com [cobra].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 205,
      "start": 946.7,
      "stop": 950690.0,
      "transcription": "Kato p\u00f4, ti j\u00e4r\u00ef, n\u00e4nk\u00e4nn\u00e4, kati supj\u00e2ri.",
      "translation": "Ele trar\u00e1, cobra grande (n\u00e4nk\u00e4nn\u00e4), ele carregr\u00e1 nas costas (supj\u00e2ri).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 206,
      "start": 951.16,
      "stop": 957360.0,
      "transcription": "ti supj\u00e2ri, t\u00e4 s\u00ef\u00ef s\u00f6krepi n\u00ef, ja k\u00f6\u00f6, s\u00f6tontw\u00e2n. ",
      "translation": "Ele carregou ans costas, estava em seu pesco\u00e7o, por aqui [mostrando a parte do corpo], [cobra] retirando e colocando a l\u00edngua para fora (s\u00f6tontw\u00e2n).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 207,
      "start": 957.865,
      "stop": 959455.0,
      "transcription": "N\u00e4nk\u00e4\u00e4, ti j\u00e4r\u00ef.",
      "translation": "Cobra. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 208,
      "start": 960.2,
      "stop": 964690.0,
      "transcription": "W\u00e2\u00e2, jy py p\u00f4\u00f4, jy py p\u00f4\u00f4, r\u00ea m\u00e4 j\u00e4r\u00ef, jy py p\u00f4\u00f4, jy p\u00f4\u00f4.",
      "translation": "W\u00e2\u00e2, ele voltou, ele voltou, eles lhe disseram, ele voltou, ele chegou.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 209,
      "start": 964.89,
      "stop": 972530.0,
      "transcription": "H\u00eb, r\u00eanp\u00e2n! Kjon! \u00dc\u00e4tun r\u00ef m\u00ebn! Ra p\u00ea sunpa inkj\u00eb p\u00ea, n\u00e4nk\u00e4\u00e4.",
      "translation": "Aqui, voc\u00eas peguem! N\u00e3o! Jogue para l\u00e1! Eu tenho medo de cobra. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 210,
      "start": 972.765,
      "stop": 976825.0,
      "transcription": "Kjon, as\u00e2 pjo, as\u00e2 r\u00f6, m\u00ef!",
      "translation": "N\u00e3o, n\u00e3o \u00e9 brava, n\u00e3o \u00e9 brava, segura! ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 211,
      "start": 977.34,
      "stop": 987890.0,
      "transcription": "M\u00ef, r\u00ea pjanp\u00e2n! Kjon, r\u00eanp\u00e2n pj\u00e4n pjo, r\u00eanp\u00e2n pj\u00e4n pjo, ra p\u00ea sunpa inkj\u00ebm\u00ebra p\u00ea, ti ra k\u00e2ri pj\u00e4n pjo n\u00e4nk\u00e4\u00e4 h\u00eb.",
      "translation": "Segura, voc\u00eas segurem isso! N\u00e3o, n\u00f3s n\u00e3o queremos segurar, n\u00f3s n\u00e3o queremos segurar, n\u00f3s estamos com medo, eu n\u00e3o quero que a cobra me morda.  ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 212,
      "start": 988.29,
      "stop": 991500.0,
      "transcription": "\u00dc\u00e4 t\u00e4 py ho a kwyy, atyn kati py s\u00ef.",
      "translation": "Nesta dire\u00e7\u00e3o voc\u00ea a leve de volta, na mata voc\u00ea a deixar\u00e1 novamente. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 213,
      "start": 991.98,
      "stop": 995110.0,
      "transcription": "A atyn ka py s\u00ef? Atyn kati py s\u00ef.  ",
      "translation": "Na mata eu deixarei novamente? Na mata voc\u00ea deixar\u00e1 novamente.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 214,
      "start": 995.71,
      "stop": 999100.0,
      "transcription": "Kati waj\u00e4, r\u00eanp\u00e2n pj\u00e4n pjo.",
      "translation": "Voc\u00ea far\u00e1, eu n\u00e3o quero segurar.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 215,
      "start": 1000.4,
      "stop": 1004110.0,
      "transcription": "Hin, ka waapj\u00e2n, \u00fc\u00e4h\u00e4 ka py ho kwy ka py s\u00ef.",
      "translation": "Est\u00e1 bem, eu farei, l\u00e1 a levarei novamente eu a deixarei novamente.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 216,
      "start": 1005.27,
      "stop": 1011200.0,
      "transcription": "Kati py s\u00ef, [kati] myn py a p\u00f4, h\u00efa? Hin, ka py p\u00f4. ",
      "translation": "Voc\u00ea a deixar\u00e1 novamente, voc\u00ea voltar\u00e1 para c\u00e1, de acordo? De acordo, eu voltarei.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 217,
      "start": 1012.06,
      "stop": 1019960.0,
      "transcription": "Koom\u00e4 ra n\u00e4nkaat\u00e4n, su ra p\u00f4\u00f4 m\u00ebn pjo, ka ho kwyy, ka py s\u00ef, ka myn py kwy ja t\u00e4, ink\u00e2 t\u00e4.",
      "translation": "Agora eu ainda estou mal, eu ainda n\u00e3o \"\"voltei ao normal\"\" (p\u00f4\u00f4), eu levarei, eu deixarei novamente, eu voltarei nesta dire\u00e7\u00e3o, em dire\u00e7\u00e3o ao Centro. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 218,
      "start": 1020.435,
      "stop": 1022665.0,
      "transcription": "ink\u00e2py ka r\u00ea k\u00e4n p\u00ebn.",
      "translation": "No Centro eu falarei para voc\u00eas.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 219,
      "start": 1023.445,
      "stop": 1033185.0,
      "transcription": "Kati po kwy, ti j\u00e4r\u00ef, pjyjap\u00f4 h\u00e4, pjy wy h\u00e4 kati po kwy, kati py s\u00ef n\u00e4nk\u00e4\u00e4nn\u00e4 pytinsi.",
      "translation": "Ele levar\u00e1 novamente no caminho principal (pjyjap\u00f4), no caminho grande ele levar\u00e1, ele deixar\u00e1 novamente a cobra grande (n\u00e4nk\u00e4\u00e4nn\u00e4) mesmo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 220,
      "start": 1034.07,
      "stop": 1041030.0,
      "transcription": "A ti a k\u00e2ri pj\u00e4n n\u00f6? Inkjon, ti ra k\u00e2ri pj\u00e4r\u00e4ja pjo, n\u00e4nk\u00e4\u00e4, as\u00e2 r\u00f6. ",
      "translation": "Ela n\u00e3o quer te morder? N\u00e3o, ela n\u00e3o quer me morder nem um pouco, cobra, n\u00e3o \u00e9 brava.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 221,
      "start": 1041.5,
      "stop": 1047400.0000000001,
      "transcription": "Kin n\u00e4nk\u00e4\u00e4, ti j\u00e4r\u00ef. K\u00efr\u00e4ja pjo, ti ra k\u00e2ri n\u00e4nk\u00e4\u00e4 h\u00eb.",
      "translation": "Cobra boa, ele disse. N\u00e3o \u00e9 nem um pouco boa, a cobra nos morde.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 222,
      "start": 1048.095,
      "stop": 1049705.0,
      "transcription": "Kjon, as\u00e2 pjo.",
      "translation": "N\u00e3o, n\u00e3o \u00e9 brava.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 223,
      "start": 1049.955,
      "stop": 1050605.0,
      "transcription": "M\u00e4.",
      "translation": "Vamos.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 224,
      "start": 1050.88,
      "stop": 1056150.0,
      "transcription": "Juuri inkj\u00eb n\u00e4pj\u00e2? \u00dc\u00e4h\u00e4, kripi. Haa, inkwyy ka n\u00e4pj\u00e2...",
      "translation": "Onde est\u00e1 minha m\u00e3e? L\u00e1 na aldeia. Sim, tua m\u00e3e chora....",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 225,
      "start": 1056.68,
      "stop": 1066900.0,
      "transcription": "Inkwyy h\u00e4 ka junpj\u00e2, ka t\u00f6, ka kj\u00e4tunpj\u00e2, rankwyy, haa.",
      "translation": "Teu pai est\u00e1 chorando, teu irm\u00e3o, teu cunhado(a) (kj\u00e4tunpj\u00e2), eles choram, sim. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 226,
      "start": 1067.275,
      "stop": 1072875.0,
      "transcription": "M\u00e4. A ka raanpun? A ka raanpun n\u00f6? A ka raanpun n\u00f6?",
      "translation": "Vamos. Voc\u00ea lhes viu? Voc\u00ea n\u00e3o lhes viu? Voc\u00ea n\u00e3o lhes viu?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 227,
      "start": 1073.39,
      "stop": 1083080.0,
      "transcription": "Ka ra pj\u00e2rah\u00ea inkj\u00ebm\u00ebra ra raakren s\u00f6p\u00e2ri jap\u00ea, inkj\u00ebm\u00ebra ra ran s\u00fc s\u00f6p\u00e2ri, r\u00ea s\u00f6p\u00e2ri j\u00e2npun n\u00f6, m\u00e4m\u00e4 r\u00ea sokjat\u00e2ri r\u00f6 am\u00e4 inkj\u00ebm\u00ebr\u00e2n.",
      "translation": "Para voc\u00ea nos descobrir eles nos acusam (sakre) de feiti\u00e7aria, eles nos chamam de feiticeiros, eles n\u00e3o enxergam feiti\u00e7o, pois n\u00f3s n\u00e3o sabemos fazer (sokjat\u00e2ri) [feiti\u00e7o].   ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 228,
      "start": 1083.63,
      "stop": 1088710.0,
      "transcription": "Kjon, r\u00ea m\u00e4 pj\u00f6n. M\u00e4 myn katir\u00ea pj\u00f6, ink\u00e2 t\u00e4 katir\u00ea myn a p\u00f4. ",
      "translation": "N\u00e3o, voc\u00eas se reunam (pj\u00f6n) para ele. Para c\u00e1 voc\u00eas se reunir\u00e3o, em dire\u00e7\u00e3o ao Centro voc\u00eas chegar\u00e3o para c\u00e1.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 229,
      "start": 1089.095,
      "stop": 1094580.0,
      "transcription": "M\u00e4 myn, m\u00e4 myn! Ran k\u00e2\u00e2, ti j\u00e4r\u00ef, m\u00e4 myn jy su ra p\u00f4\u00f4, ti j\u00e4r\u00ef, inpyara.",
      "translation": "Vem, vem! Eles chamaram, os homens chegaram para c\u00e1 ao encontro dele.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 230,
      "start": 1094.992,
      "stop": 1096642.0,
      "transcription": "Inpyara m\u00eb inkjara.",
      "translation": "Homens e mulheres.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 231,
      "start": 1096.762,
      "stop": 1098232.0,
      "transcription": "Jy su ra p\u00f4\u00f4.",
      "translation": "Eles chegaram ao encontro dele.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 232,
      "start": 1098.932,
      "stop": 1104277.0,
      "transcription": "Ti m\u00e4 j\u00ef s\u00fcn, ti j\u00e4r\u00ef, m\u00e4m\u00e4 r\u00ea sakre[a], r\u00ea sakrea [h\u00eb], ti j\u00e4r\u00ef.",
      "translation": "Ela se contou para ele, aquela que eles acusaram, aquela que eles acusaram [contou]. [S\u00f4kr\u00eb\u00eb: o pessoal geralmente fala mais de mulheres feiticeiras e menos de homens, por isso eu ouvi e pensei em uma mulher].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 233,
      "start": 1104.547,
      "stop": 1116127.0,
      "transcription": "Ka k\u00f6np\u00e2 ka, ka h\u00eb ka ra p\u00ea p\u00e2rop\u00efr\u00ef ka, ka h\u00eb ka ra p\u00ea p\u00efr\u00ef inkj\u00eb n\u00e4pj\u00e2, ka h\u00eb ka ra p\u00ea p\u00efr\u00ef inkj\u00eb j\u00f6 p\u00e4\u00e4, inkj\u00eb junpj\u00e2 m\u00eb, inkj\u00eb n\u00e4pj\u00e2, ka ka k\u00f6p\u00e2.",
      "translation": "Voc\u00ea tem feiti\u00e7o, voc\u00ea matou com feiti\u00e7o em meu preju\u00edzo, voc\u00ea maotu minha m\u00e3e em meu preju\u00edzo, voc\u00ea matou meu filho em meu preju\u00edzo, [voc\u00ea matou] meu pai e minha m\u00e3e, voc\u00ea tem feiti\u00e7o.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 234,
      "start": 1116.532,
      "stop": 1119792.0,
      "transcription": "Ti m\u00e4 j\u00e4r\u00ef. Kjon, s\u00f6p\u00e2ri pjo ja. ",
      "translation": "Ele lhe disse. N\u00e3o, esta n\u00e3o \u00e9 feiticeira.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 235,
      "start": 1120.207,
      "stop": 1121777.0,
      "transcription": "Ja h\u00e4 pan.",
      "translation": "Esta se porta bem (h\u00e4 pan).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 236,
      "start": 1122.317,
      "stop": 1125247.0,
      "transcription": "Ja h\u00e4 pan, janko h\u00eb.",
      "translation": "Esta se comporta bem (h\u00e4 pan), j\u00e1 este(a) [faz feiti\u00e7o]. [S\u00f4kr\u00eb\u00eb: esta \u00e9 a fala do xam\u00e3]",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 237,
      "start": 1125.927,
      "stop": 1128357.0,
      "transcription": "Ja, kar\u00ea s\u00e2npun h\u00e4.",
      "translation": "Este(a), voc\u00eas vejam.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 238,
      "start": 1129.617,
      "stop": 1133117.0,
      "transcription": "Ja katir\u00ea [s\u00e2np\u00fc], into r\u00ef katir\u00ea s\u00e2np\u00fc, ti ra j\u00e4r\u00ef.  ",
      "translation": "Este(a) voc\u00eas ver\u00e3o, voc\u00eas olhem [em seus] olhos, ele lhes disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 239,
      "start": 1133.152,
      "stop": 1135652.0,
      "transcription": "R\u00ea s\u00e2np\u00fc, ti j\u00e4r\u00ef.",
      "translation": "Eles olharam.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 240,
      "start": 1136.227,
      "stop": 1137847.0,
      "transcription": "R\u00ea s\u00e2npun.",
      "translation": "Eles olharam.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 241,
      "start": 1138.792,
      "stop": 1147862.0,
      "transcription": "Ti p\u00e4p\u00e4\u00e4 ra pj\u00e2ri, ti j\u00e4r\u00ef, s\u00f6p\u00e2ri jap\u00ea r\u00ea raakreapj\u00e2ra, ate t\u00e4 ti py ran sw\u00e2ri, ti j\u00e4r\u00ef, m\u00e4m\u00e4 tom\u00e4p\u00e4 h\u00eb, tom\u00e4p\u00e4 kin tititi k\u00f6\u00f6. ",
      "translation": "Ele lhes descobriu a todos, aqueles que eles acusaram \u00e0 procura de feiti\u00e7o, ele separou os que ele absolveu da acusa\u00e7\u00e3o de feiti\u00e7aria (sw\u00e2ri), aquele xam\u00e3 [fez isso], xam\u00e3 bom por causa de tatu canastra. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 242,
      "start": 1149.112,
      "stop": 1157132.0,
      "transcription": "M\u00e4m\u00e4n p\u00ean jy py m\u00e4 swakin, ti j\u00e4r\u00ef, in\u00e4pj\u00e2 m\u00e4, jy py s\u00e2nsyri, jy py p\u00eb\u00eb, ja ti s\u00fcn.   ",
      "translation": "Ent\u00e3o ele novamente ficou bem disposto (swakin) para a m\u00e3e, ele voltou a sorrir, ele voltou a conversar, isso ele disse.  ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 243,
      "start": 1157.497,
      "stop": 1161007.0,
      "transcription": "P\u00ean jy su ra pa, ti j\u00e4r\u00ef, m\u00e4m\u00e4n suu.",
      "translation": "Ent\u00e3o eles andaram ao encontro daquilo, ao encontro daquilo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 244,
      "start": 1161.357,
      "stop": 1163287.0,
      "transcription": "R\u00ea s\u00e2npun, ti j\u00e4r\u00ef.",
      "translation": "Eles viram.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 245,
      "start": 1164.047,
      "stop": 1169477.0,
      "transcription": "\u00dc\u00e4 k\u00e2 s\u00e4, tititi. Pj\u00e4n h\u00eb ti p\u00efr\u00ef?",
      "translation": "L\u00e1 estava o casco (k\u00e2) [de] tatu canastra. O que matou [o tatu canastra]?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 246,
      "start": 1170.447,
      "stop": 1177397.0,
      "transcription": "A r\u00ea pa p\u00efr\u00ef? R\u00ea pa p\u00efr\u00ef. Pan \u00fc\u00e4h\u00e4 k\u00e2 s\u00e4, ik\u00e2 wy pytinsi, tititi.  ",
      "translation": "Eles j\u00e1 (pa) o mataram? Eles j\u00e1 o mataram. L\u00e1 est\u00e1 o casco (k\u00e2), casco grande mesmo [o de] tatu canastra.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 247,
      "start": 1178.037,
      "stop": 1184057.0,
      "transcription": "Pr\u00eb\u00eb h\u00eb ti p\u00efr\u00ef? Intom\u00e4p\u00e4 h\u00eb ti p\u00efr\u00ef. M\u00e4m\u00e4n pjas\u00e2r\u00e4 pan.",
      "translation": "Quem o matou? Xam\u00e3 o matou. Por causa disso aquele [xam\u00e3] est\u00e1.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 248,
      "start": 1184.912,
      "stop": 1196142.0,
      "transcription": "A jy wy? A jy k\u00e2 wy pytinsi? \u00cfk\u00e2 wy pytinsi, k\u00e2 s\u00e4, jy n\u00ef\u00ef ink\u00f4, jy n\u00ef\u00ef pakjap\u00e4\u00e4, jy n\u00ef\u00ef pytinsi.   ",
      "translation": "\u00c9 grande? O cacso \u00e9 muito grande? Casco muito grande, o casco est\u00e1 [l\u00e1], a \u00e1gua secou, o igarap\u00e9 pequeno secou, secou mesmo. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 249,
      "start": 1197.492,
      "stop": 1201712.0,
      "transcription": "M\u00ef s\u00e2npun p\u00e4p\u00e4\u00e4, p\u00e4p\u00e4\u00e4 m\u00ef s\u00e2np\u00fcr\u00e4h\u00ea su pa m\u00f6r\u00ef.",
      "translation": "Vamos todos ver, para n\u00f3s todos vermos n\u00f3s vamos ao encontro [de tatu canastra]. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 250,
      "start": 1202.007,
      "stop": 1204007.0,
      "transcription": "Jy su ra m\u00f6r\u00ef, ti j\u00e4r\u00ef, p\u00e4p\u00e4\u00e4.",
      "translation": "Todos eles foram ao encontro de [tatu].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 251,
      "start": 1205.182,
      "stop": 1210072.0,
      "transcription": "Jy su ra p\u00f4\u00f4. P\u00ebn k\u00e2 s\u00e4, ti j\u00e4r\u00ef, ti k\u00e2 r\u00e4kon, ti j\u00e4ri, ja.",
      "translation": "Eles chegaram ao encontro de [tatu]. Eis (p\u00ebn) o casco, ele dise, ele [algum animal] comeu/roeu (r\u00e4kon) [a carne dentro do] deste casco, ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 252,
      "start": 1211.582,
      "stop": 1217232.0,
      "transcription": "Katir\u00ea p\u00ea a t\u00e2ti h\u00e4n, kjan ti pantoos\u00f4r\u00e4.",
      "translation": "Voc\u00eas fiquem fortes para se proteger de [tatu], talvez (kjan)  ele destorteie nossos olhos  (intoos\u00f4n).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 253,
      "start": 1217.762,
      "stop": 1222342.0,
      "transcription": "Ti pantoakykyta, katir\u00ea p\u00ea a t\u00e2ti h\u00e4n. Hin. ",
      "translation": "Se ele deixar nossa vis\u00e3o girando (intoakykyti), voc\u00eas fiquem fortes para se proteger de [tatu]. Est\u00e1 bem.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 254,
      "start": 1223.077,
      "stop": 1227737.0,
      "transcription": "T\u00efr\u00ef pjo, jy ty, jyypjon, m\u00e4m\u00e4 ti p\u00efr\u00ef.",
      "translation": "N\u00e3o est\u00e1 vivo, ele morreu, acabou, ent\u00e3o ele matou.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 255,
      "start": 1228.742,
      "stop": 1235502.0,
      "transcription": "M\u00e4m\u00e4n pjas\u00e2n ti paanpun kin, ti ra pj\u00e2ri kin, tom\u00e4p\u00e4 h\u00eb.",
      "translation": "Ent\u00e3o por causa disso ele nos olha bem, o xam\u00e3 lhes descobre bem.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 256,
      "start": 1236.627,
      "stop": 1244287.0,
      "transcription": "Kin tom\u00e4p\u00e4, kin pytinsi, n\u00e4nkaaja pjo, ti paanpun k\u00efr\u00e4m\u00e4. ",
      "translation": "Xam\u00e3 bom, bom mesmo, n\u00e3o \u00e9 nem um pouco ruim, pois ele nos olha bem.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 257,
      "start": 1245.232,
      "stop": 1249462.0,
      "transcription": "Haa, n\u00e4h\u00e4, n\u00e4h\u00e4, m\u00e4, py r\u00ea, py. ",
      "translation": "Sim, est\u00e1 bem, est\u00e1 bem, vamos, vamos todos, vamos.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 258,
      "start": 1249.732,
      "stop": 1251722.0,
      "transcription": "M\u00e4m\u00e4 ti p\u00efr\u00ef. ",
      "translation": "Ent\u00e3o ele matou.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 259,
      "start": 1252.702,
      "stop": 1263712.0,
      "transcription": "M\u00e4ra h\u00eb ti pan kwaj\u00e4rap\u00ean, m\u00e4ra h\u00eb ti poo r\u00e4nkaap\u00ean, at\u00e4tun s\u00f4n pa paap\u00ean, at\u00e4tun s\u00f4n pa j\u00f6tap\u00ean atyn, m\u00e4m\u00e4 ti ho jyypjon. ",
      "translation": "Ele nos fazia (v-ap\u00ean), ele nos fazia mal, devido a isso (s\u00f4n) n\u00f3s and\u00e1vamos desordenadamente (at\u00e4tun), devido a isso (s\u00f4n) n\u00f3s dorm\u00edamos na mata desordenadamente (at\u00e4tun), ent\u00e3o ele [xam\u00e3] acabou com ele [tatu].",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 260,
      "start": 1263.932,
      "stop": 1269762.0,
      "transcription": "Kjon, pyti pjo, \u00efpyti pa pjo, ja t\u00e4 pa t\u00f6, t\u00f6ra [\u00fc]m\u00eb. ",
      "translation": "N\u00e3o, n\u00e3o \u00e9 um, n\u00e3o \u00e9 [somente] um que anda, nesta dire\u00e7\u00e3o h\u00e1 outro, outros dois l\u00e1.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 261,
      "start": 1270.392,
      "stop": 1272692.0,
      "transcription": "Ja t\u00e4 pa t\u00f6, t\u00f6.",
      "translation": "Nesta dire\u00e7\u00e3o h\u00e1 outro, outro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 262,
      "start": 1272.837,
      "stop": 1274207.0,
      "transcription": "n\u00e4 j\u00e4r\u00ef ja h\u00eb.",
      "translation": "Isso \u00e9 assim.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 263,
      "start": 1275.067,
      "stop": 1276737.0,
      "transcription": "\u00efpyti pjo.",
      "translation": "N\u00e3o [\u00e9 apenas] um.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 264,
      "start": 1277.457,
      "stop": 1279787.0,
      "transcription": "\u00efpyti ti p\u00efr\u00ef pjo",
      "translation": "Ele n\u00e3o matou [apenas] um.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 265,
      "start": 1281.437,
      "stop": 1288357.0,
      "transcription": "A jy s\u00f6 p\u00e4\u00e4 r\u00f6? Inkjon, inpy ti p\u00efr\u00ef, ja t\u00e4nko inkj\u00eanna, ja t\u00e4 m\u00eb pan.",
      "translation": "Ele [tatu] n\u00e3o tem filhos? N\u00e3o, ele matou [tatu] homem (inpy), nesta dire\u00e7\u00e3o h\u00e1 duas [tatu] mulheres, nesta dire\u00e7\u00e3o as duas est\u00e3o. [S\u00f4kr\u00eb\u00eb: h\u00e1 palavra para macho e f\u00eamea, mas aqui Krenpy deve ter usado homem (inpy) e mulher (inkj\u00ean) porque ficava mais f\u00e1cil de falar]",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 266,
      "start": 1288.727,
      "stop": 1292867.0,
      "transcription": "R\u00ea su a pa s\u00e4, m\u00e4m\u00e4 kati m\u00ef pan, n\u00f6 ti py p\u00efr\u00ef. ",
      "translation": "Voc\u00eas n\u00e3o andem ao encontro dele [tatu], ent\u00e3o deixa ele [tatu] estar [l\u00e1], sen\u00e3o (n\u00f6) ele [xam\u00e3] mata novamente.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 267,
      "start": 1293.482,
      "stop": 1300057.0,
      "transcription": "R\u00ea j\u00e4r\u00ef, ja, ja r\u00ea s\u00fcn swankjar\u00e2n, ja katir\u00ea ran sos\u00fcn kin.",
      "translation": "Eles disseram, isso, isso os antepassados disseram, isso voc\u00eas lhes contar\u00e3o bem.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 268,
      "start": 1300.274,
      "stop": 1303924.0,
      "transcription": "Katir\u00ea ran sotoapa kin h\u00e4n swankjara p\u00eb\u00eb.",
      "translation": "Voc\u00eas lhes [contem] do in\u00edcio ao fim (sotoapan) a fala dos antigos.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 269,
      "start": 1304.164,
      "stop": 1306694.0,
      "transcription": "Swan katir\u00ea ran s\u00fc kam\u00ebr\u00e2n.",
      "translation": "Futuramente voc\u00eas lhes contar\u00e3o.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 270,
      "start": 1307.034,
      "stop": 1311244.0,
      "transcription": "M\u00e4m\u00e4 ka sotinpa, ka \u00fc\u00e4tun ran sos\u00fc.",
      "translation": "Ent\u00e3o eles saber\u00e3o, eles lhes contar\u00e3o para a posteridade (\u00fc\u00e4tun).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 271,
      "start": 1311.644,
      "stop": 1316334.0,
      "transcription": "Ja r\u00ea s\u00fcn, m\u00e4m\u00e4 ra r\u00ea k\u00e4n s\u00fcn pj\u00f4ntuar[a]n, kar\u00ea sotinparah\u00ea.",
      "translation": "Isso eles contaram, ent\u00e3o eu conto para voc\u00eas jovens mulheres, para voc\u00eas saberem.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 272,
      "start": 1316.824,
      "stop": 1325744.0,
      "transcription": "R\u00ea t\u00e4 a p\u00f4ja, inkjan r\u00eakitekjati wy r\u00ea a jyypjora, ka syypj\u00e2 h\u00eb ti s\u00fcr\u00e4h\u00ea, ka t\u00e2npj\u00e2 h\u00eb ti s\u00fcr\u00e4h\u00ea.   ",
      "translation": "Se voc\u00eas chegarem [no futuro] com [esta fala], se voc\u00eas mulheres adultas acabarem, \u00e9 para a tua filha contar, \u00e9 para teu neto contar.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 273,
      "start": 1325.989,
      "stop": 1329149.0,
      "transcription": "Kati m\u00e4 s\u00fcr\u00e4p\u00f4 h\u00e4n a t\u00efr\u00ef t\u00e4n.",
      "translation": "Voc\u00ea lhe conte logo enquanto voc\u00ea estiver vivo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 274,
      "start": 1329.534,
      "stop": 1337954.0,
      "transcription": "Ja ti s\u00fcn twatun m\u00eb topytun h\u00eb, ja, m\u00e4m\u00e4 ra k\u00e4n s\u00fc inkj\u00eb [h\u00eb], ja r\u00ea s\u00fcr\u00e4h\u00ea jy su ra p\u00f4\u00f4 inkj\u00eb, tititiakriti [h\u00e4 kja]..",
      "translation": "Isso velha e velho contaram, isso, ent\u00e3o eu te conto, isso, para eu contar eu cheguei ao [teu] encontro, [para contar] sobre tatu gigante que se transforma.",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Kuss\u00e2 h\u00e4 kja",
    "speakers": "Kreenpy",
    "linguists": "Myriam Lapierre, Ella De Falco, Jessamine Jeter",
    "Indigenous researcher": "",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 1,
      "start": 11.53370393601308,
      "stop": 15826.293529984045,
      "transcription": "jap\u00ean kaasu\u0303 inkje\u0303 he\u0303 inkje\u0303 jo\u0303pa\u0303a\u0303",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": 15.826293529984044,
      "stop": 19469.57645405552,
      "transcription": "inkj\u00eb t\u00e2npj\u00e2, inkj\u00eb j\u00f6p\u00e4\u00e4",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": 19.46957645405552,
      "stop": 23357.528873109026,
      "transcription": "kar\u00eak\u00e4ns\u00fc swaankjaran j\u00f6 ja,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": 23.357528873109025,
      "stop": 29556.486891166744,
      "transcription": " tinkj\u00eb\u00eb s\u00fcn inkj\u00eb r\u00e4pj\u00e2 h\u00eb, tinkj\u00eb\u00eb s\u00fcn inkj\u00eb j\u00fcnpj\u00e2 h\u00eb ja kar\u00ea k\u00e4ns\u00fc,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": 29.55648689116674,
      "stop": 34133.34965752362,
      "transcription": "swaankjaran j\u00f6 ja.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": 34.133349657523624,
      "stop": 38104.16299062267,
      "transcription": "Tij\u00e4\u00e4 m\u00e4ra m\u00e4m\u00e4n h\u00e4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": 38.104162990622676,
      "stop": 41842.94628930537,
      "transcription": "jy r\u00ea ham\u00f6r\u00ef kam\u00ebra jy r\u00ea hankj\u00eati kam\u00ebra,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": 41.842946289305374,
      "stop": 44973.92907514261,
      "transcription": "tij\u00e4\u00e4 n\u00e4nk\u00e4\u00e4 r\u00e4pj\u00e2 h\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": 44.97392907514261,
      "stop": 47233.18493707827,
      "transcription": "N\u00e4nk\u00e4\u00e4 r\u00e4pj\u00e2 h\u00eb ti s\u00fcn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": 47.23318493707827,
      "stop": 52703.851594213374,
      "transcription": "py, py r\u00earak\u00f6\u00f6, pyssy m\u00efra k\u00f6 t\u00f6 kj\u00e4k\u00e2ri,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": 52.703851594213376,
      "stop": 55838.044692627875,
      "transcription": "inkj\u00eb j\u00f6p\u00e4\u00e4 py rak\u00f6\u00f6, sa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": 55.838044692627875,
      "stop": 63721.13184430956,
      "transcription": "jy rak\u00f6 hokwyy tij\u00e4\u00e4, wy tij\u00e4\u00e4 w\u00e2ntw\u00ea, wy tij\u00e4\u00e4. Ratup\u00e4\u00e4 pjo,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": 63.72113184430956,
      "stop": 66819.05086711528,
      "transcription": "kati t\u00f6 kj\u00e4syri h\u00e4n sa,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": 66.81905086711528,
      "stop": 71739.39251409662,
      "transcription": "katim\u00ef rak\u00f6 t\u00f6 kj\u00e4syy ti popap\u00f4 m\u00eb kwyy tij\u00e4\u00e4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": 71.73939251409662,
      "stop": 75675.9746977724,
      "transcription": "m\u00eb kwyy jah\u00e4 m\u00efs\u00e2n pjy syri m\u00e4m\u00e4 pjyn,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": 75.6759746977724,
      "stop": 77904.50156946012,
      "transcription": "tis\u00e2n ho pjy syri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": 77.90450156946012,
      "stop": 82885.13381054557,
      "transcription": "ti m\u00e4s\u00fcn ja t\u00e4 hopj\u00f6n h\u00eb r\u00f6s\u00ea pyn,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": 82.88513381054557,
      "stop": 86274.01760344907,
      "transcription": "kat\u00f6 h\u00eb kati t\u00f6 sy.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": 86.27401760344907,
      "stop": 91244.83043477149,
      "transcription": "H\u00ea ti s\u00e2np\u00fcn tij\u00e4\u00e4 s\u00f6p\u00e4\u00e4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": 91.24483043477149,
      "stop": 96253.86682973389,
      "transcription": "s\u00f6p\u00e4\u00e4npy h\u00eb tij\u00e4r\u00ef, t\u00f6 h\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": 96.2538668297339,
      "stop": 100308.27435657982,
      "transcription": "P\u00ean t\u00e4 sanp\u00e2n,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": 100.30827435657982,
      "stop": 102340.96054457282,
      "transcription": "m\u00e4 ho kwyy tij\u00e4r\u00ef,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": 102.34096054457282,
      "stop": 105821.57902046402,
      "transcription": "p\u00e2ri suu, m\u00e4 p\u00e2ri pyssy ti m\u00e4j\u00e4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": 105.82157902046403,
      "stop": 108797.72843584474,
      "transcription": "pyssyp\u00e2ri inkj\u00eati pyssy.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": 108.79772843584473,
      "stop": 112379.68214286948,
      "transcription": "T\u00f6 syri h\u00e4, t\u00f6 syri.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": 112.37968214286948,
      "stop": 118289.13416677488,
      "transcription": "Jy ho kwyy tij\u00e4\u00e4 p\u00e2ri t\u00e4, pyssyp\u00e2ri t\u00e4, jy ho kwyy.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": 118.28913416677487,
      "stop": 122412.57845793011,
      "transcription": "Jy m\u00e4, m\u00e4 ti m\u00e4j\u00e4\u00e4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": 122.41257845793011,
      "stop": 126529.19502352939,
      "transcription": "jy m\u00e4 toss\u00e4n n\u00e4nk\u00e4\u00e4 r\u00e4pj\u00e2.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": 126.5291950235294,
      "stop": 134176.22984237823,
      "transcription": "Jy m\u00e4 toss\u00e4n, jy kj\u00e4r\u00e4 too tij\u00e4r\u00ef, n\u00e4nk\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": 134.17622984237823,
      "stop": 140298.06887861626,
      "transcription": "Jy kj\u00e4r\u00e4 too, jys\u00e2, jymm\u00f6r\u00ef,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": 140.29806887861628,
      "stop": 147768.46444885153,
      "transcription": "jy py kwyy tij\u00e4\u00e4 n\u00e4pj\u00e2 jatt\u00e4, swatt\u00e4mm\u00f6\u00f6 tij\u00e4\u00e4 n\u00e4nk\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": 147.76846444885155,
      "stop": 151980.63550696644,
      "transcription": "Jy paty tij\u00e4\u00e4, jy r\u00f6\u00f6nkr\u00e2 h\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": 151.98063550696645,
      "stop": 159482.32796449534,
      "transcription": "Inkr\u00e2 h\u00e4 jy s\u00eak\u00f4ti tij\u00e4\u00e4 r\u00f6\u00f6, p\u00ean jy su swant\u00e4mm\u00f6\u00f6 tij\u00e4\u00e4 pyssy suu.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": 159.48232796449534,
      "stop": 171829.9507370069,
      "transcription": "Jy su, jy sup\u00f4\u00f4 tint\u00ean, swa jy tij\u00e4r\u00ef, ti kj\u00e4k\u00e2ri, ti kj\u00e4k\u00e2ri, ti kj\u00e4k\u00e2ri, tint\u00ean, tint\u00ean, tint\u00ean.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": 171.8299507370069,
      "stop": 175177.90445840714,
      "transcription": "To kj\u00e4sy.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": 175.17790445840714,
      "stop": 182616.75861302312,
      "transcription": "N\u00e4h\u00e4, n\u00e4h\u00e4 kaho kj\u00e4sy ka h\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": 182.6167586130231,
      "stop": 186921.2705405377,
      "transcription": "Ka honkj\u00eati n\u00e4h\u00e4, r\u00e4\u00e4nter\u00efn.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": 186.9212705405377,
      "stop": 192684.40024948298,
      "transcription": "H\u00efn tij\u00e4\u00e4, pjas\u00e2r\u00efmm\u00f6\u00f6 tij\u00e4\u00e4 n\u00e4nk\u00e4\u00e4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": 192.684400249483,
      "stop": 195715.38030487226,
      "transcription": "jy py r\u00f6\u00f6 tij\u00e4\u00e4 p\u00e2rinkr\u00e2 h\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": 195.71538030487227,
      "stop": 199945.5392233127,
      "transcription": "R\u00f6\u00f6 toppj\u00f6n tij\u00e4\u00e4 n\u00e4pj\u00e2 h\u00eb pyssy,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 41,
      "start": 199.9455392233127,
      "stop": 207591.02859687808,
      "transcription": "toppj\u00f6n pit\u00e4 s\u00f6p\u00e4\u00e4 m\u00eb, s\u00f6p\u00e4\u00e4 h\u00eb ti s\u00eaj\u00e4\u00e4 tij\u00e4\u00e4 t\u00f6 h\u00eb, n\u00e4nk\u00e4\u00e4 t\u00f6.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 42,
      "start": 207.5910285968781,
      "stop": 217713.7008570542,
      "transcription": "N\u00e4nk\u00e4\u00e4 t\u00f6 tim\u00e4j\u00e4r\u00ef, m\u00e4, ti hoppj\u00f6n, m\u00ffpymm\u00f6\u00f6 tij\u00e4\u00e4 kypa t\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 43,
      "start": 217.71370085705422,
      "stop": 224927.29295089954,
      "transcription": "M\u00ffpymm\u00f6r\u00ef, m\u00f6\u00f6r\u00ef, imm\u00f6r\u00ef, jy pysu kwyy tij\u00e4\u00e4 n\u00e4pj\u00e2.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 44,
      "start": 224.92729295089956,
      "stop": 227753.29624783614,
      "transcription": "Jy pym\u00e4 kwyy n\u00e4pj\u00e2,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 45,
      "start": 227.75329624783615,
      "stop": 232946.04079531407,
      "transcription": "jy py toss\u00e4n tij\u00e4\u00e4, jy pym\u00e4 toss\u00e4n,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 46,
      "start": 232.94604079531408,
      "stop": 237960.50169821587,
      "transcription": "p\u00ean jy py kj\u00e4s\u00e2\u00e2 tij\u00e4\u00e4 n\u00e4nk\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 47,
      "start": 237.96050169821586,
      "stop": 243912.10929739987,
      "transcription": "Jy pys\u00e2\u00e2 n\u00e4pj\u00e2 tuham\u00e4, jy pys\u00e2\u00e2 jy pys\u00ef\u00ef.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 48,
      "start": 243.91210929739987,
      "stop": 249156.09803449106,
      "transcription": "P\u00ean ti s\u00e2np\u00fcn tij\u00e4\u00e4 p\u00ea s\u00fcnpa tij\u00e4\u00e4 t\u00f6p\u00ea,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 49,
      "start": 249.15609803449107,
      "stop": 257330.034768554,
      "transcription": "p\u00ea s\u00fcnpa p\u00ean, ti kj\u00e4k\u00e2ri py hos\u00ef\u00ef tij\u00e4\u00e4, w\u00e2ntw\u00ea wy ho.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 50,
      "start": 257.330034768554,
      "stop": 262407.28723853274,
      "transcription": "Ti m\u00e4npe, m\u00e4, py,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 51,
      "start": 262.4072872385327,
      "stop": 266575.1479937452,
      "transcription": "py r\u00e4\u00e4nkj\u00e2, ti m\u00e4nkj\u00e2n tij\u00e4\u00e4 s\u00f6p\u00e4\u00e4 m\u00e4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 52,
      "start": 266.57514799374525,
      "stop": 269657.95476707164,
      "transcription": "tinkj\u00e2n tij\u00e4\u00e4 n\u00e4nk\u00e4\u00e4 r\u00e4pj\u00e2 h\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 53,
      "start": 269.65795476707166,
      "stop": 278548.14509907336,
      "transcription": "M\u00e4, py ho, p\u00ean, ho kwyy tij\u00e4\u00e4 hopp\u00f4\u00f4 tij\u00e4\u00e4 pytt\u00ebn p\u00ea.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 54,
      "start": 278.54814509907334,
      "stop": 285542.00915122224,
      "transcription": "Jopp\u00f4\u00f4, ha jy wap\u00f4\u00f4? Tij\u00e4\u00e4 inp\u00efnpj\u00e2 h\u00eb, haa jy m\u00eb horap\u00f4\u00f4, ha jy ratup\u00e4\u00e4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 55,
      "start": 285.54200915122226,
      "stop": 290153.98621641647,
      "transcription": "ka pjara k\u00f6 t\u00e4 soss\u00e2n hapar\u00f6n inkj\u00ebnp\u00efnpj\u00e2 ti m\u00e4j\u00e4\u00e4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 56,
      "start": 290.15398621641646,
      "stop": 292477.0561455513,
      "transcription": "k\u00e2j\u00e2r\u00e4 rasap\u00f4p\u00f4n.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 57,
      "start": 292.47705614555133,
      "stop": 296840.093866724,
      "transcription": "S\u00earaa kj\u00fcn h\u00e4, k\u00e2j\u00e2r\u00e4 ras\u00eawaj\u00e4 kw\u00e2ram\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 58,
      "start": 296.840093866724,
      "stop": 303201.6549828143,
      "transcription": "Haa s\u00eapa tij\u00e4\u00e4 s\u00f6p\u00e4\u00e4, ippa hatte.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 59,
      "start": 303.20165498281426,
      "stop": 308625.4868742986,
      "transcription": "Ti m\u00e4 s\u00fcn pjo, jyrippa tij\u00e4\u00e4 s\u00f6p\u00e4\u00e4npy, n\u00e4nk\u00e4\u00e4 j\u00f6 p\u00e4\u00e4npy.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 60,
      "start": 308.6254868742986,
      "stop": 322327.2261582139,
      "transcription": "Ippa hor\u00f6 kwyy tij\u00e4\u00e4 w\u00e2ntw\u00ea s\u00e2n, m\u00e4nkw\u00e2 hah\u00ea tij\u00e4\u00e4, juurinkw\u00e2n w\u00e2ntw\u00ea kah\u00e4n ha tunsin, ti m\u00e4j\u00e4\u00e4 tij\u00e4\u00e4 inp\u012bnpj\u00e2 h\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 61,
      "start": 322.32722615821393,
      "stop": 326089.1440074235,
      "transcription": "Inn\u00eb ti roop\u00efr\u00ef tij\u00e4\u00e4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 62,
      "start": 326.0891440074235,
      "stop": 334254.04091457115,
      "transcription": "p\u00ean jy py t\u00e4 haka tij\u00e4r\u00ef, jy haka jy pys\u00e2n rakj\u00e2\u00e2 tij\u00e4\u00e4 p\u00e4p\u00e4\u00e4 kjara.  ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 63,
      "start": 334.25404091457114,
      "stop": 339080.61068144697,
      "transcription": "P\u00e4p\u00e4\u00e4 kjara pyssy kati r\u00eapy kj\u00e4k\u00e2, kati r\u00eapy ku kj\u00e4k\u00e2ri h\u00e4n.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 64,
      "start": 339.08061068144696,
      "stop": 345116.79048922507,
      "transcription": "Kwa r\u00ea kj\u00e4 kj\u00e4k\u00e2r\u00e4, kwa r\u00ea kj\u00e4to h\u00e4, kati r\u00ea hopj\u00f6n.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 65,
      "start": 345.1167904892251,
      "stop": 348052.3149510581,
      "transcription": "R\u00ea j\u00e4\u00e4 tij\u00e4r\u00ef topyt\u00fcn h\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 66,
      "start": 348.0523149510581,
      "stop": 354349.9439230915,
      "transcription": "Ti t\u00e4rak\u00f4 tij\u00e4\u00e4 r\u00ea hopj\u00f6r\u00e4 h\u00ea, r\u00ea kj\u00e4np\u00f4ri jatt\u00e4 pyssy ra kj\u00e4np\u00f4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 67,
      "start": 354.34994392309153,
      "stop": 358737.4016452464,
      "transcription": " P\u00ean, jytt\u00e4 hakanpe, jy s\u00e2n ramm\u00f6\u00f6 tij\u00e4\u00e4, kw\u00e2ra.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 68,
      "start": 358.73740164524645,
      "stop": 362995.10910950706,
      "transcription": "Py, pypy rak\u00f6 s\u00e2n,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 69,
      "start": 362.99510910950704,
      "stop": 366122.34363207995,
      "transcription": "m\u00ef py rak\u00f6 t\u00f6 kj\u00e4syra h\u00ea,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 70,
      "start": 366.12234363207995,
      "stop": 369732.99664937967,
      "transcription": "to kj\u00e4sy n\u00e4np\u00e2n h\u00eb tij\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 71,
      "start": 369.7329966493797,
      "stop": 374136.2680749188,
      "transcription": "M\u00e4r\u00e4 h\u00e4 ti ho kj\u00e4sy n\u00e4np\u00e2n h\u00eb, ti pynt\u00ean.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 72,
      "start": 374.13626807491875,
      "stop": 381245.11485904694,
      "transcription": "Py rak\u00f6\u00f6, am, rakwyy pj\u00e4n pjo, am.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 73,
      "start": 381.24511485904696,
      "stop": 389772.98930722574,
      "transcription": "S\u00fcnpa n\u00e4pj\u00e2 tu p\u00ean jatoo n\u00e4nk\u00e4\u00e4nn\u00e4 pytinsi jatoo, s\u00fcnpj\u00e2.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 74,
      "start": 389.7729893072257,
      "stop": 397768.06940041395,
      "transcription": " Kam\u00e4 s\u00fcn s\u00e4, k\u00e2nsansi s\u00e4 kj\u00eb j\u00f6p\u00e4\u00e4, ti m\u00e4j\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 75,
      "start": 397.76806940041394,
      "stop": 402716.93877551024,
      "transcription": "P\u00ean jy kwyy tij\u00e4\u00e4 hate jy s\u00e2 kwyy tij\u00e4\u00e4, n\u00e4nk\u00e4\u00e4 ho.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 76,
      "start": 402.71693877551024,
      "stop": 412705.1997199415,
      "transcription": "P\u00ean, jarippa inp\u00efnpj\u00e2 m\u00eb s\u00f6p\u00e4\u00e4npy k\u00e2j\u00e2n ti sap\u00f4p\u00f4 hos\u00ef\u00ef tij\u00e4r\u00ef, ti m\u00e4 s\u00fcn tij\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 77,
      "start": 412.70519971994145,
      "stop": 426122.27647276,
      "transcription": "S\u00fcnpj\u00e2, pj\u00e4n, pj\u00e4n? Ka k\u00e4n s\u00fc inkj\u00eb h\u00eb, n\u00e4pj\u00e2 tu p\u00ean jatoo n\u00e4nk\u00e4\u00e4nn\u00e4 pytinsi tij\u00e4r\u00ef.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 78,
      "start": 426.12227647276,
      "stop": 432251.36732348666,
      "transcription": "M\u00e4m\u00e4n h\u00eb tint\u00ean pyssy, pyssy tint\u00ean.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 79,
      "start": 432.25136732348665,
      "stop": 438710.4840563135,
      "transcription": "Ha tiipj\u00e2? Paa tij\u00e4\u00e4 inkj\u00eb r\u00e4pj\u00e2 tu p\u00ean, h\u00ea. ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 80,
      "start": 438.71048405631353,
      "stop": 442531.07638757955,
      "transcription": "Jaa kata pan, ja ka sas\u00e2 pyti.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 81,
      "start": 442.53107638757956,
      "stop": 445313.0775331383,
      "transcription": "Kat\u00e4 sasw\u00e2rinte k\u00e2j\u00e2n.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 82,
      "start": 445.31307753313826,
      "stop": 450829.3337921544,
      "transcription": "Inkj\u00eb ka t\u00e4 s\u00e2np\u00fcr\u00e4 h\u00ea, ka tita pja s\u00e2np\u00fc.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 83,
      "start": 450.8293337921544,
      "stop": 465463.2960730534,
      "transcription": "Swa, swajy, inn\u00e4, kj\u00e4nsi, popoti, ti j\u00e4rankj\u00e2 n\u00e4pj\u00e2 tu ham\u00e4 n\u00e4nk\u00e4\u00e4 tij\u00e4r\u00ef.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 84,
      "start": 465.46329607305336,
      "stop": 469714.3713354383,
      "transcription": "H\u00ea, p\u00ean ti r\u00e4nsw\u00e2\u00e2 tij\u00e4\u00e4, k\u00e2j\u00e2n pyti.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 85,
      "start": 469.7143713354383,
      "stop": 474679.6028656526,
      "transcription": "Ti r\u00e4nsw\u00e2\u00e2 m\u00e4 tipre, tins\u00f4\u00f4 tij\u00e4\u00e4 kukre ham\u00e4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 86,
      "start": 474.6796028656526,
      "stop": 480133.3141707968,
      "transcription": "tins\u00f4\u00f4 top\u00f4\u00f4 k\u00e2j\u00e2n, top\u00f4\u00f4 k\u00e2j\u00e2n, m\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 87,
      "start": 480.1333141707968,
      "stop": 485969.7823823996,
      "transcription": "Jara r\u00eapan jy k\u00f6 t\u00e4 rakwyy r\u00eat\u00e4 s\u00e2np\u00fcr\u00e4 h\u00ea, inkj\u00ebnsipj\u00e2 k\u00f6\u00f6.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 88,
      "start": 485.9697823823996,
      "stop": 491485.56207157427,
      "transcription": "H\u00ea, w\u00e4 k\u00f6 t\u00e4 hakwyy, ti m\u00e4j\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 89,
      "start": 491.4855620715743,
      "stop": 493723.6984471818,
      "transcription": "P\u00ean k\u00f6 kwyy, juuri kja h\u00e4?",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 90,
      "start": 493.7236984471818,
      "stop": 501108.37845453713,
      "transcription": "M\u00e4r\u00e4 h\u00e4 kja taj\u00efn, m\u00e4j\u00e4 h\u00e4 pjyritin, jatt\u00e4\u00e4 pjyn p\u00e4p\u00e4\u00e4 kja, jatt\u00e4\u00e4 pjyritin.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 91,
      "start": 501.1083784545371,
      "stop": 503579.44055414316,
      "transcription": "H\u00ea, r\u00eanpari m\u00e4m\u00e4 kaapj\u00e2n.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 92,
      "start": 503.57944055414316,
      "stop": 509567.64345105144,
      "transcription": "M\u00e4np\u00ean k\u00f6 kwyy tij\u00e4r\u00ef, k\u00f6 t\u00e4 kwyy.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 93,
      "start": 509.5676434510514,
      "stop": 516414.41203562147,
      "transcription": "Jy sanpap\u00ebr\u00ef, ja h\u00e4 ti s\u00fcn, ja h\u00e4 ka k\u00f6 kwy.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 94,
      "start": 516.4144120356215,
      "stop": 523212.04558023217,
      "transcription": "P\u00ean k\u00f6 kwyy tij\u00e4\u00e4, jy py sanp\u00ebr\u00ef to kypa, j\u00f4j\u00f4 jap\u00ea pyssy, ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 95,
      "start": 523.2120455802321,
      "stop": 526359.0201882257,
      "transcription": "m\u00e4 j\u00f4j\u00f4, m\u00e4 j\u00f4j\u00f4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 96,
      "start": 526.3590201882257,
      "stop": 531029.8441324872,
      "transcription": "haa jak\u00f4py, k\u00f6 kwyy tij\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 97,
      "start": 531.0298441324871,
      "stop": 541616.566108424,
      "transcription": "M\u00e4, m\u00e4 t\u00e4ppa tij\u00e4a\u00e4 huw\u00e4 h\u00e4 hatte n\u00e4nk\u00e4\u00e4 r\u00e4pj\u00e2, ti r\u00f6wann\u00f6 hah\u00ea, huw\u00e4 h\u00e4ppa tij\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 98,
      "start": 541.616566108424,
      "stop": 547506.471561703,
      "transcription": "Ti s\u00e2np\u00fcn, ti hasusu tint\u00ean  tij\u00e4\u00e4 n\u00e4nk\u00e4\u00e4 h\u00eb pyssy.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 99,
      "start": 547.506471561703,
      "stop": 554013.3282965601,
      "transcription": "Tint\u00ean jy py s\u00ear\u00f6\u00f6 py summ\u00f6r\u00ef jatt\u00e4 kja suu,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 100,
      "start": 554.0133282965601,
      "stop": 560573.4472453967,
      "transcription": "ti pynt\u00ean, m\u00e4m\u00e4 tapja, m\u00e4ra inkj\u00eb h\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 101,
      "start": 560.5734472453967,
      "stop": 567883.2404877662,
      "transcription": "Inkj\u00ebnsipj\u00e2 j\u00f6p\u00e4\u00e4 tapja, n\u00e4nk\u00e4\u00e4 ti s\u00fcr\u00efnpe hah\u00e4 inkj\u00eb j\u00f6p\u00e4\u00e4 h\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 102,
      "start": 567.8832404877662,
      "stop": 571825.5453609944,
      "transcription": "Pj\u00e4r\u00e4 h\u00ea ti rap\u00ea\u00eapj\u00e2 inkj\u00eb j\u00f6p\u00e4\u00e4?",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 103,
      "start": 571.8255453609944,
      "stop": 576909.5003969285,
      "transcription": "Tij\u00ef\u00ef kj\u00eappytinsi inkj\u00ebnsipj\u00e2 h\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 104,
      "start": 576.9095003969285,
      "stop": 580853.0325506808,
      "transcription": "Ipp\u00eb\u00eb s\u00e4n tij\u00e4\u00e4 m\u00e4m\u00e4 n\u00e4nk\u00e4\u00e4 j\u00fcnpj\u00e2.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 105,
      "start": 580.8530325506808,
      "stop": 588688.8531565242,
      "transcription": "Ti s\u00e2np\u00fcn, tipp\u00ea hoppu tij\u00e4\u00e4 pyssy, n\u00e4h\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 106,
      "start": 588.6888531565243,
      "stop": 602161.1980894029,
      "transcription": "N\u00e4h\u00e4nter\u00efn, n\u00e4h\u00e4nter\u00efn, kaho kj\u00e4sy, kaho kj\u00e4sy, n\u00e4h\u00e4nte kati m\u00ffpy han kja kwy, ti m\u00e4j\u00e4\u00e4 tij\u00e4\u00e4 n\u00e4pj\u00e2 h\u00eb, n\u00e4nk\u00e4\u00e4r\u00e4pj\u00e2 h\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 107,
      "start": 602.1611980894029,
      "stop": 614104.3277648743,
      "transcription": "P\u00ean, kja kwyy, jy py s\u00ear\u00f6\u00f6 tij\u00e4\u00e4, p\u00ean toppj\u00f6n tij\u00e4\u00e4 pyssy, toppj\u00f6n, to kj\u00e4\u00e4pu sari.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 108,
      "start": 614.1043277648744,
      "stop": 622138.9964041188,
      "transcription": "Toppj\u00f6n m\u00ffpyn kja kwyy, p\u00e2ri ti r\u00f6pu, p\u00e2ri, pyssyp\u00e2ri ti r\u00f6pu.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 109,
      "start": 622.1389964041189,
      "stop": 628371.938087787,
      "transcription": "Jy m\u00ff kwyy tij\u00e4\u00e4 inp\u00efnpj\u00e2 p\u00e2ri k\u00f6\u00f6 t\u00e4 summ\u00f6\u00f6 tij\u00e4\u00e4, p\u00e2ri wy k\u00f6\u00f6.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 110,
      "start": 628.371938087787,
      "stop": 632802.5226493941,
      "transcription": "T\u00e4 summ\u00f6\u00f6, jy m\u00e4 s\u00e4n tij\u00e4r\u00ef,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 111,
      "start": 632.8025226493941,
      "stop": 636116.9395443187,
      "transcription": "jy m\u00e4 s\u00e4n tij\u00e4\u00e4 k\u00e2j\u00e2s\u00e2 ho.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 112,
      "start": 636.1169395443187,
      "stop": 641202.118236877,
      "transcription": "Jyy ka p\u00eahon inkj\u00eb h\u00eb, jyy ka p\u00eahon.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 113,
      "start": 641.202118236877,
      "stop": 645537.4905218162,
      "transcription": "Ka p\u00eap\u00efr\u00ef h\u00e4n, ka p\u00eak\u00e2ri pyn h\u00e4n.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 114,
      "start": 645.5374905218162,
      "stop": 655161.77755243,
      "transcription": "Tim\u00e4 j\u00e4\u00e4 ins\u00fcnpj\u00e2 h\u00eb, ti s\u00e2np\u00fcn, m\u00ffn sus\u00e2t\u00eapakkwa, jy py su kwyy n\u00e4pj\u00e2.`",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 115,
      "start": 655.1617775524301,
      "stop": 661350.5653184343,
      "transcription": "Jy su kwyjakwa n\u00e4pj\u00e2, pyssyp\u00e2ri t\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 116,
      "start": 661.3505653184343,
      "stop": 675788.7171465851,
      "transcription": "Pyssyp\u00e2ri t\u00e4 jy m\u00e4 kwyy, jy py m\u00e4 tota kwa, jy m\u00ffn su kj\u00e4r\u00e4toja kwa n\u00e4nk\u00e4\u00e4, jy su t\u00ebn s\u00fcnpj\u00e2 n\u00e4nk\u00e4\u00e4 j\u00fcnpj\u00e2.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 117,
      "start": 675.7887171465851,
      "stop": 683901.5715673827,
      "transcription": "Ti kusyri, ti kusyri, ti kusyri, ti kusyri.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 118,
      "start": 683.9015715673827,
      "stop": 689871.4728233886,
      "transcription": "Inkwyy tij\u00e4\u00e4 n\u00e4nk\u00e4\u00e4 r\u00e4pj\u00e2, inkwyy.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 119,
      "start": 689.8714728233887,
      "stop": 706765.5662368857,
      "transcription": "Kypyy, ti m\u00e4j\u00e4\u00e4 tij\u00e4\u00e4 ins\u00fcnpj\u00e2 h\u00eb, supa w\u00e2ntw\u00eanpe ho hakwyy, supa w\u00e2ntw\u00eanpe, pyraa s\u00eaho hakwyy tanta tiipj\u00e2 hanj\u00efn tanta, pyti rankjyr\u00efnkw\u00e2n.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 120,
      "start": 706.7655662368858,
      "stop": 711813.509695765,
      "transcription": "Tanta tiipj\u00e2 hanj\u00efn tanta, pyti rankjyt\u00ebr\u00efn.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 121,
      "start": 711.813509695765,
      "stop": 714111.357986277,
      "transcription": "Kaapj\u00e2 pytinsin.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 122,
      "start": 714.111357986277,
      "stop": 718032.425399675,
      "transcription": "Katipj\u00e2n soti tu ham\u00e4 s\u00ef\u00ef pytinsi.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 123,
      "start": 718.032425399675,
      "stop": 729122.5308082427,
      "transcription": "Inkwyy tij\u00e4\u00e4 n\u00e4nk\u00e4\u00e4r\u00e4pj\u00e2 j\u00f4j\u00f4 tij\u00e4\u00e4 n\u00e4nk\u00e4\u00e4 k\u00e2ripyn, ti waj\u00e4\u00e4 tij\u00e4\u00e4, ti waj\u00e4\u00e4, ti waj\u00e4\u00e4 ti k\u00e2ripyn.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 124,
      "start": 729.1225308082427,
      "stop": 733378.3181445947,
      "transcription": "Inkwyy tij\u00e4\u00e4 n\u00e4nk\u00e4\u00e4 r\u00e4pj\u00e2 m\u00e4pp\u00eb\u00eb tij\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 125,
      "start": 733.3783181445947,
      "stop": 735778.3563811294,
      "transcription": "Hakre hanka ka,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 126,
      "start": 735.7783563811294,
      "stop": 741145.1238182434,
      "transcription": "hakre hanka ha tu ham\u00e4 jy sotiipj\u00e2 pytinsi ka h\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 127,
      "start": 741.1451238182434,
      "stop": 744793.5607396107,
      "transcription": "Kaho r\u00e4nka ka kre, kaho r\u00e4nka.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 128,
      "start": 744.7935607396107,
      "stop": 749707.3793736179,
      "transcription": "Ka j\u00efr\u00efnpe r\u00f6 ti m\u00e4j\u00e4\u00e4, ti m\u00e4 has\u00e2, ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 129,
      "start": 749.707379373618,
      "stop": 753549.9035485918,
      "transcription": "inp\u00efnpj\u00e2 h\u00eb n\u00e4nk\u00e4\u00e4 r\u00e4pj\u00e2 m\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 130,
      "start": 753.5499035485917,
      "stop": 759943.6331602503,
      "transcription": "Kj\u00e4np\u00ea tim\u00e4 kj\u00e4kw\u00e2ri pyssyp\u00e2ri, tim\u00e4 ho kj\u00e4kw\u00e2ri k\u00e2jas\u00e2 ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 131,
      "start": 759.9436331602502,
      "stop": 764005.4787184031,
      "transcription": "M\u00e4m\u00e4n ho tok\u00e2ri pyr\u00e4 n\u00e4nk\u00e4\u00e4, ti kj\u00e4kw\u00e2ri.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 132,
      "start": 764.0054787184032,
      "stop": 769221.6908696773,
      "transcription": "Jy pja s\u00e2 kwyy tij\u00e4\u00e4, m\u00e4n kwyy s\u00e4n n\u00e4nk\u00e4\u00e4 r\u00e4pj\u00e2.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 133,
      "start": 769.2216908696773,
      "stop": 774092.1064216908,
      "transcription": "P\u00ea kwyy tij\u00e4\u00e4 inp\u00efnpj\u00e2, jy pypp\u00f4\u00f4 tij\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 134,
      "start": 774.0921064216908,
      "stop": 781468.9432468232,
      "transcription": "T\u00e4 kwyy inpyti, jy t\u00e4 pytt\u00ebn, tim\u00e4 s\u00fcn tij\u00e4\u00e4 s\u00f6p\u00e4\u00e4 m\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 135,
      "start": 781.4689432468232,
      "stop": 790083.1268196251,
      "transcription": "Inn\u00e4pj\u00e2 jap\u00ea r\u00ea pyppaa m\u00e4 r\u00eankri, n\u00e4pj\u00e2 jap\u00ea kati r\u00ea py hapan, w\u00e4h\u00e4 s\u00ean kwyy s\u00e4n.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 136,
      "start": 790.0831268196251,
      "stop": 792893.3433108219,
      "transcription": "M\u00e4m\u00e4 r\u00eapp\u00ea k\u00e2ri pyn.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 137,
      "start": 792.8933433108219,
      "stop": 799562.8227179953,
      "transcription": "N\u00e4nk\u00e4\u00e4, n\u00e4nk\u00e4\u00e4 h\u00eb tim\u00e4 r\u00e4sura p\u00ean pyssy, kj\u00ebnsipj\u00e2 m\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 138,
      "start": 799.5628227179952,
      "stop": 803502.3767615422,
      "transcription": "Kj\u00ebnsipj\u00e2 m\u00e4 tim\u00e4 soti r\u00ear\u00e4 p\u00ean pyssy,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 139,
      "start": 803.5023767615421,
      "stop": 807223.3610815275,
      "transcription": "m\u00e4r\u00e4m\u00e4 h\u00e4n n\u00f6 kwyy w\u00e2ntw\u00ea wy haj\u00e2n.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 140,
      "start": 807.2233610815275,
      "stop": 812674.6878079061,
      "transcription": "Jy t\u00e4 hakk\u00fcn, jy t\u00e4nta, m\u00e4n kw\u00e2 pjo, kjon. ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 141,
      "start": 812.674687807906,
      "stop": 816849.7800645338,
      "transcription": "Jaam\u00e4 r\u00eapp\u00ea k\u00e2ripyn, h\u00efn.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 142,
      "start": 816.8497800645338,
      "stop": 823124.9283091553,
      "transcription": "P\u00ean, jy rapa tij\u00e4\u00e4 s\u00f6p\u00e4\u00e4npy, jy kwyy, jy kwyy.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 143,
      "start": 823.1249283091553,
      "stop": 827805.7508207848,
      "transcription": "Jy kwyy, s\u00f6p\u00e4\u00e4npy sitepi, sitepi, sitepi, n\u00e4h\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 144,
      "start": 827.8057508207849,
      "stop": 834008.3235657304,
      "transcription": "So py rapa tij\u00e4\u00e4, jy rap\u00f4\u00f4 tij\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 145,
      "start": 834.0083235657304,
      "stop": 841643.7075953215,
      "transcription": "Jy so py rap\u00f4\u00f4, r\u00ea s\u00e2np\u00fcn tij\u00e4\u00e4, ti pjy tij\u00e4\u00e4, jy t\u00e4 ras\u00ea tij\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 146,
      "start": 841.6437075953214,
      "stop": 847062.9593796158,
      "transcription": "R\u00ea s\u00e2np\u00fcn, juuri r\u00e4pj\u00e2?",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 147,
      "start": 847.0629593796158,
      "stop": 855965.8224178364,
      "transcription": "N\u00e4pj\u00e2 m\u00e4m\u00e4 ti paanpa j\u00efr\u00efnpe, kj\u00ebr\u00e4pj\u00e2 h\u00eb, jy panpamm\u00f6r\u00ef.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 148,
      "start": 855.9658224178364,
      "stop": 861504.4827083221,
      "transcription": "Ti pjy wy tij\u00e4r\u00ef, pjy wy.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 149,
      "start": 861.5044827083221,
      "stop": 869011.5068179129,
      "transcription": "Ti j\u00e4r\u00ef tippy tij\u00e4\u00e4, n\u00e4nk\u00e4\u00e4 s\u00f6p\u00e4\u00e4, tij\u00e4\u00e4 tippyri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 150,
      "start": 869.011506817913,
      "stop": 878797.1543201848,
      "transcription": "M\u00e4m\u00e4n p\u00ean, r\u00ea s\u00e2np\u00fcn tij\u00e4\u00e4 m\u00e4 s\u00e2pj\u00e4r\u00ef tij\u00e4\u00e4 pyssyp\u00e2ri r\u00ef, s\u00e2pj\u00e4r\u00ef r\u00ea s\u00e2np\u00fcn tij\u00e4\u00e4 s\u00f6p\u00e4\u00e4npy h\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 151,
      "start": 878.7971543201849,
      "stop": 886214.1219458148,
      "transcription": "R\u00ea s\u00e2np\u00fcn jy rankwyy tij\u00e4\u00e4 s\u00f6p\u00e4\u00e4npy hapj\u00e2ra, rankwyy rapepeti.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 152,
      "start": 886.2141219458148,
      "stop": 888643.4104240066,
      "transcription": "R\u00ea s\u00e2np\u00fcn.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 153,
      "start": 888.6434104240067,
      "stop": 895100.6046114555,
      "transcription": "Pj\u00e4r\u00e4h\u00ea jy popp\u00f4\u00f4 r\u00f6 s\u00fcnpj\u00e2 n\u00e4pj\u00e2 ho?",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 154,
      "start": 895.1006046114554,
      "stop": 901914.7329205285,
      "transcription": "Jy papp\u00ean m\u00f6r\u00ef ipp\u00eb h\u00e4, ipp\u00eb h\u00e4 jymm\u00f6\u00f6 n\u00e4pj\u00e2.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 155,
      "start": 901.9147329205285,
      "stop": 907318.6347295877,
      "transcription": "M\u00e4m\u00e4 ti pjy wy, pyppy, pyppy m\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 156,
      "start": 907.3186347295878,
      "stop": 916713.6540797264,
      "transcription": "Jy py ram\u00f6r\u00ef tij\u00e4\u00e4, jy py rap\u00f4\u00f4, t\u00e4 rankwyy tij\u00e4\u00e4 m\u00f6ram\u00e4 rankwyy.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 157,
      "start": 916.7136540797264,
      "stop": 921693.4035599625,
      "transcription": "Pj\u00e4r\u00e4h\u00ea kappy sippyy r\u00f6 n\u00e4pj\u00e2, s\u00fcnpj\u00e2 h\u00eb?",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 158,
      "start": 921.6934035599626,
      "stop": 927151.6591865183,
      "transcription": "Pj\u00e4r\u00e4h\u00ea kappy sippy kapp\u00ea k\u00e2ripyn, kr\u00efnpe n\u00e4nk\u00e4\u00e4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 159,
      "start": 927.1516591865183,
      "stop": 930662.5329758245,
      "transcription": "kr\u00ef pjo n\u00e4nk\u00e4\u00e4, kjon.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 160,
      "start": 930.6625329758245,
      "stop": 939509.5194665547,
      "transcription": "N\u00e4nk\u00e4\u00e4 kr\u00efhaja pjo, ti pjy wy pytinsi pyssyp\u00e2ri p\u00ean, ti r\u00e4p\u00f6n pjy wy pytinsi.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 161,
      "start": 939.5095194665547,
      "stop": 943959.9824155861,
      "transcription": "Tij\u00e4\u00e4 kj\u00ebr\u00e4pj\u00e2 h\u00eb, s\u00fcnpj\u00e2 h\u00eb, ka h\u00eb kaho r\u00e4nka.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 162,
      "start": 943.9599824155862,
      "stop": 946774.1463761651,
      "transcription": "Kj\u00ebr\u00e4pj\u00e2 kaho n\u00e4nka.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 163,
      "start": 946.774146376165,
      "stop": 952054.095749613,
      "transcription": "M\u00e4m\u00e4n p\u00ean jynkwyy tij\u00e4\u00e4, inp\u00efnpj\u00e2 inkwyy.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 164,
      "start": 952.054095749613,
      "stop": 955290.5684682552,
      "transcription": "R\u00ea suppj\u00f6n tij\u00e4\u00e4 p\u00e4p\u00e4\u00e4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 165,
      "start": 955.2905684682552,
      "stop": 958940.0284353559,
      "transcription": "pj\u00e4r\u00e4h\u00ea kapp\u00ea k\u00e2ripyn n\u00e4nk\u00e4\u00e4? ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 166,
      "start": 958.9400284353559,
      "stop": 965682.2704838738,
      "transcription": "Kappy sapj\u00f4ri r\u00f6 ka h\u00eb, kappy pappyri r\u00f6 kansipj\u00e2, ka h\u00eb ka sarinteri.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 167,
      "start": 965.6822704838738,
      "stop": 968496.1741648702,
      "transcription": "Ka h\u00eb kar\u00e4nka, jyttoo.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 168,
      "start": 968.4961741648701,
      "stop": 971398.1185517323,
      "transcription": "Jyttoo, ipp\u00eb h\u00e4 jymm\u00f6r\u00ef.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 169,
      "start": 971.3981185517323,
      "stop": 977886.8044018314,
      "transcription": "Pykk\u00f4\u00f4m\u00e4 kati k\u00f6pa kwy, m\u00ef s\u00e2np\u00fcr\u00e4 h\u00ea, m\u00efppy sapj\u00f4ra h\u00ea, tim\u00e4j\u00e4\u00e4 tij\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 170,
      "start": 977.8868044018313,
      "stop": 981089.7331459771,
      "transcription": "P\u00ean, jy s\u00f6ti,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 171,
      "start": 981.0897331459771,
      "stop": 985790.5523771221,
      "transcription": "pykk\u00f4\u00f4m\u00e4 py su ramm\u00f6\u00f6 tij\u00e4\u00e4 p\u00e4p\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 172,
      "start": 985.7905523771221,
      "stop": 990395.5594240077,
      "transcription": "Jy py su ramm\u00f6r\u00ef, su ram\u00f6\u00f6 tij\u00e4\u00e4 pyssyp\u00e2ri t\u00e4,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 173,
      "start": 990.3955594240076,
      "stop": 994914.7429020412,
      "transcription": "r\u00ea s\u00e2np\u00fcn, ti k\u00f6 sakj\u00ean pyssyp\u00e2ri j\u00e4h\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 174,
      "start": 994.9147429020412,
      "stop": 999346.3405262452,
      "transcription": "Ti sakj\u00ean, ti sakj\u00ean, ti sakj\u00ean, r\u00ea s\u00e2np\u00fcn.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 175,
      "start": 999.3463405262452,
      "stop": 1004736.3747437963,
      "transcription": "R\u00ea s\u00e2np\u00fcn, pjy wy pytinsi, k\u00f6 ramm\u00f6r\u00ef,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 176,
      "start": 1004.7363747437963,
      "stop": 1006548.0635438665,
      "transcription": "suty pytira.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 177,
      "start": 1006.5480635438665,
      "stop": 1013227.0548177657,
      "transcription": "M\u00e4m\u00e4n p\u00ean k\u00f6 ramm\u00f6r\u00ef, jy suty tij\u00e4r\u00ef, m\u00e4m\u00e4n p\u00ean k\u00f6 ramm\u00f6\u00f6.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 178,
      "start": 1013.2270548177657,
      "stop": 1019799.4050979534,
      "transcription": "Jynkj\u00eakkukre, m\u00e4, py r\u00eappy, jy s\u00fcnpa ka.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 179,
      "start": 1019.7994050979534,
      "stop": 1029537.3995316352,
      "transcription": "S\u00fcnpa, pys\u00ea pamm\u00f6r\u00ef r\u00ef, huw\u00e4 p\u00ean kati k\u00f6 pa kwy, r\u00ea m\u00e4j\u00e4\u00e4 tij\u00e4\u00e4, r\u00ea m\u00e4j\u00e4\u00e4 tij\u00e4\u00e4 inpyhar\u00e2n.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 180,
      "start": 1029.5373995316352,
      "stop": 1035109.6835733054,
      "transcription": "M\u00e4m\u00e4n p\u00ean pys\u00ea ramm\u00f6\u00f6 tij\u00e4\u00e4 kri t\u00e4, jyppy rap\u00f4\u00f4 tij\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 181,
      "start": 1035.1096835733053,
      "stop": 1044734.5591499782,
      "transcription": "Ja ti s\u00fcn, inp\u00efnpj\u00e2 h\u00eb, ipp\u00eb h\u00e4 jymm\u00f6r\u00ef.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 182,
      "start": 1044.7345591499782,
      "stop": 1047433.9857636183,
      "transcription": "Happ\u00eb h\u00e4 tapja?",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 183,
      "start": 1047.4339857636182,
      "stop": 1051297.2999883753,
      "transcription": "Inn\u00eb pan\u00e4ra h\u00e4 tapja, ipp\u00eb h\u00e4 jymm\u00f6r\u00ef, ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 184,
      "start": 1051.2972999883752,
      "stop": 1054628.4706356346,
      "transcription": "haa, h\u00ebn, kati m\u00ef s\u00e2np\u00fc.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 185,
      "start": 1054.6284706356346,
      "stop": 1064351.490061347,
      "transcription": "Pykk\u00f4\u00f4m\u00e4, ti rans\u00fcn tij\u00e4\u00e4 topyt\u00fcn h\u00eb, pykk\u00f4\u00f4m\u00e4 ti r\u00ea k\u00f6 hamm\u00f6\u00f6, ka r\u00ea juuri pj\u00e2ra,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 186,
      "start": 1064.351490061347,
      "stop": 1067173.0953509565,
      "transcription": "pa j\u00f6pp\u00eb hah\u00e4, ipp\u00ebha.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 187,
      "start": 1067.1730953509566,
      "stop": 1071527.6782734795,
      "transcription": "Pa j\u00f6pp\u00eb hah\u00e4, p\u00efmm\u00e4 rapp\u00ebha kati t\u00e4nparo s\u00ef\u00ef h\u00e4n.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 188,
      "start": 1071.5276782734795,
      "stop": 1074218.7648658718,
      "transcription": "Kati r\u00ea t\u00e4npari k\u00efn h\u00e4n.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 189,
      "start": 1074.2187648658717,
      "stop": 1078357.9893368257,
      "transcription": "Ipp\u00eb\u00eb, kar\u00ea s\u00fcr\u00e4 h\u00ea, kati r\u00eanpa kj\u00e4 ham\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 190,
      "start": 1078.3579893368258,
      "stop": 1081719.050023125,
      "transcription": "H\u00efn n\u00eaj\u00e4\u00e4 tij\u00e4\u00e4, h\u00efn.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 191,
      "start": 1081.719050023125,
      "stop": 1086607.3331579405,
      "transcription": "Kati r\u00ea waj\u00e4, kati r\u00eankj\u00eb s\u00fc kj\u00ebm\u00e4 tij\u00e4\u00e4 topyt\u00fcn h\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 192,
      "start": 1086.6073331579405,
      "stop": 1099043.3723379467,
      "transcription": "M\u00e4m\u00e4n p\u00ean pykk\u00f4\u00f4m\u00e4 jy k\u00f6 rakwyy, jy k\u00f6 rakwyy, jy wy pytinsi kukrenkkj\u00eappytinsi, kuss\u00e2 j\u00f6.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 193,
      "start": 1099.0433723379467,
      "stop": 1103069.6563236797,
      "transcription": "Kuss\u00e2 j\u00f6 kukre.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 194,
      "start": 1103.0696563236797,
      "stop": 1109614.2100360666,
      "transcription": "Huw\u00e4 jy raar\u00ea\u00ea, p\u00ebn hakoko saa j\u00ef\u00efp\u00ea,",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 195,
      "start": 1109.6142100360667,
      "stop": 1117190.2422331907,
      "transcription": "pakre wy pytinsi h\u00e4 jynt\u00eari kuss\u00e2 r\u00eam\u00e4j\u00e4\u00e4, kuss\u00e2.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 196,
      "start": 1117.1902422331907,
      "stop": 1122715.7064406055,
      "transcription": "Pj\u00e4r\u00e4h\u00ea s\u00f6p\u00e4\u00e4 j\u00fcnpa tiipj\u00e2 pytinsi kuss\u00e2 h\u00eb?",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 197,
      "start": 1122.7157064406053,
      "stop": 1127305.5228450866,
      "transcription": "Paa tiho siik\u00f6 ink\u00f4wy h\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 198,
      "start": 1127.3055228450867,
      "stop": 1134724.637552499,
      "transcription": "K\u00f6 rakwy jakwa hakoko pytinsi, pr\u00efharankj\u00eappytinsi.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 199,
      "start": 1134.724637552499,
      "stop": 1144899.0293544144,
      "transcription": "Jynt\u00ea\u00ea jy rankwyy inp\u00efnpj\u00e2, s\u00f6p\u00e4\u00e4, s\u00f6t\u00f6, rankwyy kuss\u00e2 h\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 200,
      "start": 1144.8990293544143,
      "stop": 1151214.354731458,
      "transcription": "R\u00eaj\u00e4r\u00ef, m\u00e4m\u00e4n p\u00ean, m\u00e4, h\u00ea.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 201,
      "start": 1151.2143547314581,
      "stop": 1156859.065544743,
      "transcription": "M\u00e4m\u00e4 jy rap\u00eattoo kj\u00ebr\u00e4pj\u00e2, m\u00e4m\u00e4 jy sujy inkj\u00eb t\u00f6.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 202,
      "start": 1156.859065544743,
      "stop": 1164854.9541488644,
      "transcription": "Inp\u00efnpj\u00e2 h\u00eb ti rap\u00ea hor\u00e4nka, ti pynkj\u00eb\u00eb sipyri r\u00f6 inkj\u00eb m\u00e4, inkj\u00eb t\u00f6 tij\u00e4\u00e4 s\u00f6t\u00f6 h\u00eb.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 203,
      "start": 1164.8549541488644,
      "stop": 1170738.8566551812,
      "transcription": "Has\u00e2npe tij\u00e4\u00e4. Ha tiipj\u00e2? Haa tij\u00e4r\u00ef.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 204,
      "start": 1170.738856655181,
      "stop": 1177562.9985266884,
      "transcription": "Swankjar\u00e2n r\u00ea soss\u00fcn k\u00efn pytinsi, kati r\u00earans\u00fc ja.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 205,
      "start": 1177.5629985266885,
      "stop": 1181333.9194511403,
      "transcription": "Issi n\u00e4nk\u00e4\u00e4 n\u00e4pj\u00e2 kuss\u00e2 tij\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 206,
      "start": 1181.3339194511404,
      "stop": 1183125.1068902551,
      "transcription": "Issi kuss\u00e2.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 207,
      "start": 1183.1251068902552,
      "stop": 1185627.362738273,
      "transcription": "M\u00e4m\u00e4 kati r\u00ea m\u00e4j\u00e4\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 208,
      "start": 1185.6273627382732,
      "stop": 1192938.9766946961,
      "transcription": "M\u00e4m\u00e4n h\u00e4 jy rattoo, m\u00e4m\u00e4 saa j\u00ef\u00efp\u00eatt\u00e4, jy rattoo.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 209,
      "start": 1192.938976694696,
      "stop": 1196839.3290988237,
      "transcription": "J\u00fcrah\u00e4 ra t\u00f6pp\u00f4ja?",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 210,
      "start": 1196.8393290988238,
      "stop": 1203008.9236878117,
      "transcription": "J\u00fcrah\u00e4 m\u00ef p\u00efn t\u00eapa, m\u00e4m\u00e4 ipp\u00eb k\u00e2p\u00f4 tapja.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 211,
      "start": 1203.0089236878116,
      "stop": 1207837.5359811906,
      "transcription": "K\u00e2p\u00f4, k\u00e2teteti, r\u00ea s\u00e2np\u00fcn inkj\u00ebm\u00ebr\u00e2n pakre ham\u00e4.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 212,
      "start": 1207.8375359811905,
      "stop": 1214302.7156696978,
      "transcription": "Rasw\u00e2ri ink\u00f4jam\u00e4, r\u00ea j\u00e4r\u00ef.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 213,
      "start": 1214.3027156696978,
      "stop": 1227026.884534554,
      "transcription": "Ja r\u00ea s\u00fcn. Ja r\u00ea s\u00fcn, m\u00e4ja, m\u00e4m\u00e4 r\u00ea k\u00e4n s\u00fcn kj\u00eb j\u00f6p\u00e4\u00e4, kj\u00eb syypj\u00e2, kj\u00ebt\u00e2npj\u00e2.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 214,
      "start": 1227.026884534554,
      "stop": 1234715.284776186,
      "transcription": "Kati r\u00ea ranpari kin swankjaran j\u00f6 ja, r\u00eanpari kin ja, n\u00e4nk\u00e4\u00e4 kuss\u00e2.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 215,
      "start": 1234.715284776186,
      "stop": 1237973.5008868992,
      "transcription": "Haa ja r\u00eaho jyy pjon.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 216,
      "start": 1237.9735008868993,
      "stop": 1239965.4006789937,
      "transcription": "Haa.",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "speaker": "Kypakjä",
    "Outsider linguists": "Myriam Lapierre, Sunkulp Ananthanarayan",
    "Digitizers": "Taylor Nguyen, Megan Otani",
    "Date": "2025/08/15-17",
    "title": "Kypakjä modality elicitation"
  },
  "sentences": [
    {
      "transcription": "sökre kin, pëë kin",
      "translation": "good audio quality, good voice quality"
    },
    {
      "transcription": "kamëkakkjâri",
      "translation": "we 2 will ask you questions"
    },
    {
      "transcription": "pykkôômä kappôjn",
      "translation": "amanhã eu vou chegar."
    },
    {
      "transcription": "ka kati hapôjn pykkôômä",
      "translation": "amanhã você vai chegar."
    },
    {
      "transcription": "pykkôômä katipôjn mära",
      "translation": "amanhã ela vai chegar."
    },
    {
      "transcription": "inkjëra ka më tërïn, ka më pôjn pykkôômä",
      "translation": "tomorrow we (excl.) will go, we will arrive"
    },
    {
      "transcription": "inkjëra pykkôômä ka mä pôjn",
      "translation": "tomorrow we will arrive"
    },
    {
      "transcription": "pykkôômä kamëra katirê hapôjn",
      "translation": "tomorrow we will arrive"
    },
    {
      "transcription": "when there’s a lot 4-5-20",
      "translation": ""
    },
    {
      "transcription": "inkjëmëra inkjêtimëra kapôjn",
      "translation": "nós muitos vamos chegar."
    },
    {
      "transcription": "märapjâra kapôjn pykkôômä",
      "translation": "eles vão chegar amanhã"
    },
    {
      "transcription": "japjâra kapôjn pykkôômä",
      "translation": "eles vão chegar amanhã"
    },
    {
      "transcription": "pykkôômä japjâra katipapôjn",
      "translation": "tomorrow we (incl) will arrive"
    },
    {
      "transcription": "inkjë hë ka hapyrin ka.",
      "translation": "eu vou pegar você"
    },
    {
      "transcription": "inkjë hë ka haswârin ka",
      "translation": "eu vou convidar você"
    },
    {
      "transcription": "inkjë hë kappyrin mära",
      "translation": "eu vou pegar ela."
    },
    {
      "transcription": "ka hë kati rapyrin inkjë",
      "translation": "você vai me pegar"
    },
    {
      "transcription": "ka hë katipyrin mära",
      "translation": "você vai pegar / comprar ele"
    },
    {
      "transcription": "ka hë katipyrin kâjasâ päpääkja hä",
      "translation": "você vai comprar facão para a communidade"
    },
    {
      "transcription": "ka hë katimäppyrin kâjasâ tutiti mä",
      "translation": "você vai comprar facão para tutiti"
    },
    {
      "transcription": "kjẽ töppyri pẽkâ",
      "translation": "compra para mim vestido"
    },
    {
      "transcription": "inkjë mä kjëppyri pëkâ",
      "translation": "compra para mim vestido."
    },
    {
      "transcription": "kjë töppyri pëkâ tö",
      "translation": "compra outro vestido para mim"
    },
    {
      "transcription": "Saankôrä pan kri pi",
      "translation": "S está na aldeia."
    },
    {
      "transcription": "saankôrä kypy pan kri pi",
      "translation": "não sei se S está na aldeia"
    },
    {
      "transcription": "S deve estar na aldeia",
      "translation": ""
    },
    {
      "transcription": "moto san kukre rï, juttä kypyttojn saankôrä",
      "translation": "a moto do S está na casa, a onde que ele foi?"
    },
    {
      "transcription": "Saankôrä jyttoo tessuu",
      "translation": "S foi pescar."
    },
    {
      "transcription": "inkjë hë rasâpytirin saankôrä japê",
      "translation": "eu estou procurando S."
    },
    {
      "transcription": "tessuu kypyttojn , inkjon tapja",
      "translation": "eu acho que ele foi pescar, mas não sei"
    },
    {
      "transcription": "tessuu jyttoo",
      "translation": "ele foi pescar."
    },
    {
      "transcription": "puu tä jyttoo saankôrä / jykwyy saankôrä",
      "translation": "S foi para a roça."
    },
    {
      "transcription": "puu tänko jyttoo saankôrä",
      "translation": "ele foi mesmo para a roça."
    },
    {
      "transcription": "pjän kawajärïn haka haswa hahä",
      "translation": "o qué que você estava fazendo/fez ontem?"
    },
    {
      "transcription": "raanpapëränkjâ ka japê",
      "translation": "eu estava esperando você."
    },
    {
      "transcription": "pjän tijärï?",
      "translation": "o qué que ele disse"
    },
    {
      "transcription": "katinkwân tapja inta dezembro hahä",
      "translation": "deve ser (katinkwâjn) vai chover em dezembro."
    },
    {
      "transcription": "inkwâ hahê pjo inta julho hahä",
      "translation": "deve ser não vai chover em julho."
    },
    {
      "transcription": "jürähä katimï wajärin?",
      "translation": "quando que a gente vamos fazer."
    },
    {
      "transcription": "juttä ka mä hë?",
      "translation": "cómo que eu vou explicar / fazer?"
    },
    {
      "transcription": "mähë",
      "translation": "olha aí (rato)"
    },
    {
      "transcription": "mÿri hë nänsô",
      "translation": "aquí oh, rato."
    },
    {
      "transcription": "kati mïnsitepi kwaakritinsi jahä",
      "translation": "mamão pode crescer aquí"
    },
    {
      "transcription": "sujy pêramä",
      "translation": "porque está vindo de longe."
    },
    {
      "transcription": "kati mïnsitepi kwaakritinsi jahä, kwaakritinsi pjo",
      "translation": "mamão pode crescer aquí, mas não tem mamão"
    },
    {
      "transcription": "inkjë hë kappyrin moto serra.",
      "translation": ""
    },
    {
      "transcription": "maçä kwa hahê pjo jahä",
      "translation": "maçã não pode crescer aquí"
    },
    {
      "transcription": "maçä sokkwa kwa hahê pjo jähä",
      "translation": "maçã não vai ter fruta aquí"
    },
    {
      "transcription": "kypahänka hamä",
      "translation": "because the soil is bad."
    },
    {
      "transcription": "*kypahänka jamä",
      "translation": "-"
    },
    {
      "transcription": "*kypa hänka mämä",
      "translation": "-"
    },
    {
      "transcription": "sitepa hê pjo maçä",
      "translation": "não vai crescer maçã"
    },
    {
      "transcription": "kati tyn",
      "translation": "vai morrer."
    },
    {
      "transcription": "siteppjo jähä maçä",
      "translation": "aquí não cresce maçã"
    },
    {
      "transcription": "kwa pjo jäha maçä",
      "translation": "não cresce aque maçã"
    },
    {
      "transcription": "sitepi rö hahê pjo jähä ippë prï",
      "translation": "não vai crescer aquí criança do branco"
    },
    {
      "transcription": "paa känsitepi rö hahê pjo pëprï",
      "translation": ""
    },
    {
      "transcription": "jähä kati sitepin suri",
      "translation": "aquí vai crescer suri"
    },
    {
      "transcription": "sitepa hê pjo kôrinkre jöpää",
      "translation": "não vai crescer filho do kôrinkre."
    },
    {
      "transcription": "sitepa hê pjo kôrinkre jö pää, sönkwêrï",
      "translation": "não vai crescer o filho do kôrinkre em Sönkwê"
    },
    {
      "transcription": "sitepi röhahê pjo kôrinkre jöpää jähä",
      "translation": "não pode crescer aquí o filho do kôrinkre."
    },
    {
      "transcription": "rêpjori inkôpo",
      "translation": "eu fechei a torneira."
    },
    {
      "transcription": "inkô sôsôti rö hahê pjo",
      "translation": "não pode sair a água."
    },
    {
      "transcription": "jy hatoo inkôpo",
      "translation": "the water pipe burst/caome out."
    },
    {
      "transcription": "kati py sasârin inkôpo",
      "translation": "vai fechar de novo o water pipe."
    },
    {
      "transcription": "kôkjappepeta mä sä inkô",
      "translation": "tem água no balde."
    },
    {
      "transcription": "tö hamä kypy tö särïn inkô ",
      "translation": "deve ser no outro (balde) tem água."
    },
    {
      "transcription": "haa, mÿn hë särïn inkô",
      "translation": "sim, tem. água."
    },
    {
      "transcription": "rê sikakörä hê, rênswakörä hê",
      "translation": "para eu lavar as mãos, para eu escover os dentes."
    },
    {
      "transcription": "inkjë hë rênpari pjo mämärähä rê paanto si kwyn.",
      "translation": "eu não sabia na quele momento que eu tinha quebrado o osso de dedo de pê"
    },
    {
      "transcription": "kypy sâ pytinsin",
      "translation": "that must hurt a lot"
    },
    {
      "transcription": "ju pêkja?",
      "translation": "qual é?"
    },
    {
      "transcription": "direita ou isquerda",
      "translation": ""
    },
    {
      "transcription": "kjêêpêkja",
      "translation": "esquerda"
    },
    {
      "transcription": "twajïïpêkja",
      "translation": "direita."
    },
    {
      "transcription": "kôrinkre hë htokjyn kjêêpê",
      "translation": "K escreve da mão esquerda"
    },
    {
      "transcription": "Kjêpyti hë hokjyn twajïïpê",
      "translation": "K escreve da mão direita."
    },
    {
      "transcription": "Kjêêpê",
      "translation": "left,"
    },
    {
      "transcription": "twajïï",
      "translation": "right"
    },
    {
      "transcription": "kôkôpy",
      "translation": "correcto"
    },
    {
      "transcription": "jupê särïn microfone?",
      "translation": "which side is the mic standing?"
    },
    {
      "transcription": "jupê röjn pëëhakriti?",
      "translation": "which side is the recorder laying?"
    },
    {
      "transcription": "tö hamä kypy särïn",
      "translation": "deve ser no outro (balde) tem água"
    },
    {
      "transcription": "tö hamä kypy sä",
      "translation": "deve ser no outro tem água"
    },
    {
      "transcription": "tö sännö inkô",
      "translation": "não tem água."
    },
    {
      "transcription": "tösän pjo töhamä",
      "translation": "não tem água no outro."
    },
    {
      "transcription": "ka rakjari hä ka hë",
      "translation": "você mentiu para mim."
    },
    {
      "transcription": "kujasâri inkô inkjë mä",
      "translation": "enche a água para mim."
    },
    {
      "transcription": "ka sânpün ti hoppu tutiti hë inkô",
      "translation": "você viu tutiti encher a água."
    },
    {
      "transcription": "junkjêta mä tö särïn inkô?",
      "translation": "qual balde que tem água?"
    },
    {
      "transcription": "kypy tö särïn inkô hamä?",
      "translation": "será que tem água naquele?"
    },
    {
      "transcription": "prëë hë ti pen?",
      "translation": "quem que tomou tudo?"
    },
    {
      "transcription": "kypynkwân inta, samärïnkoo pytinsi",
      "translation": "deve ser está chovendo, porque Samãri está toda molhada."
    },
    {
      "transcription": "inkwâ hä inta, mämärämä jy sââ samäri inkoo",
      "translation": "deve ser está chovendo, por isso que samãri entrou molhada."
    },
    {
      "transcription": "*inkwâ rö hä inta",
      "translation": ""
    },
    {
      "transcription": "inkwâ pjo inta",
      "translation": "não está chovendo."
    },
    {
      "transcription": "katinkwâ rö ti inta?",
      "translation": "será que vai chover?"
    },
    {
      "transcription": "pyttenpê kati pôjn inta",
      "translation": "de tarde vai chegar a chuva."
    },
    {
      "transcription": "*pyttenpê kati pôjn hä inta.",
      "translation": ""
    },
    {
      "transcription": "pyhontwa pyttenpê kja hahê",
      "translation": "preparar para amanhã de tarde."
    },
    {
      "transcription": "ka kukrëë sän inpojï kâpjoo, jy kjo",
      "translation": "você não pode comer bife, já estragou"
    },
    {
      "transcription": "inpojï kâpjoo",
      "translation": "beef steak"
    },
    {
      "transcription": "inpojï ka krëë rö hamä, jy kjo",
      "translation": "the beef is rotten because you didn’t eat it"
    },
    {
      "transcription": "rê ho hamäkjy pjo",
      "translation": "eu descongelei"
    },
    {
      "transcription": "kati sï pepeti inpojï wâtâkköö",
      "translation": "the sun will melt the beef"
    },
    {
      "transcription": "innë kypy kin tapja inpojï",
      "translation": ""
    },
    {
      "transcription": "innë kypy kïrätan inpojï",
      "translation": "não sei, deve ser carne está boa ainda"
    },
    {
      "transcription": "ka wajära hê pjo inpojï kjäpo hamä",
      "translation": "não pode fazer com beijo a carne"
    },
    {
      "transcription": "ka wajäri sân inpojï kjäpo hamä",
      "translation": "não pode fazer com beijo a carne."
    },
    {
      "transcription": "pïnkôpyra mämänna",
      "translation": "those 2 are the same"
    },
    {
      "transcription": "ka wajäri rö hahê pjo inpojï",
      "translation": "você não pode preparar a carne"
    },
    {
      "transcription": "ka kukrëë rö hahê pjo inpojï käpjoo",
      "translation": "você não pode comer bife"
    },
    {
      "transcription": "#ti kukrëë rö hahê pjo inpojï kâpjoo totoka hë",
      "translation": "o macaco leão não pode comer bife (but this is infelicitous because the monkey is not human)"
    },
    {
      "transcription": "innä hahä kati hasâ rön totoka",
      "translation": "the lion monkey will not be agressive when it is full size."
    },
    {
      "transcription": "innä hahä totoka hasâ hahê pjo",
      "translation": "the totoka will not be agressive when it grows up."
    },
    {
      "transcription": "jypynkwâ",
      "translation": "cresceu de novo"
    },
    {
      "transcription": "#innä hahä kati hasâ rö hahê pjo totoka",
      "translation": "can’t say this because the monkey is not a person"
    },
    {
      "transcription": "sitepa hä kati hasâ rö hahê pjo Suri",
      "translation": "quando Ssuri vai crescer, ela não vai ser brava"
    },
    {
      "transcription": "#kypy hasâ rö ippë",
      "translation": "# acho que o branco não está bravo"
    },
    {
      "transcription": "raapên pjän, mämärämä ra söpää rö",
      "translation": "eu gosto de trabalhar, por isso que eu não tenho filho."
    },
    {
      "transcription": "raapêratän pjän hokjyhamnnä",
      "translation": "eu ainda estou com vontade de trabalhar"
    },
    {
      "transcription": "nänsi kanterin hokjyha, kasöpäjn",
      "translation": "quando eu terminar estudo, vou ter filho"
    },
    {
      "transcription": "puuwätün kja hamä, ka söpäjn",
      "translation": "muito no futuro vou ter filho."
    },
    {
      "transcription": "swan rasöpää hahê pjo inkjë",
      "translation": "no futuro, eu não vou ter filho."
    },
    {
      "transcription": "ja hahä rahokjy hatärïn, mämärämä rasöpää rö",
      "translation": "eu ainda estou estudando ainda, por isso que eu não tenho filho."
    },
    {
      "transcription": "ja hahä rahokjy hatärïn, mämärämä ra söpää pjo",
      "translation": "eu ainda estou estudando, por isso que eu não tenho filho."
    },
    {
      "transcription": "ja hahä rahokjy hatärïn mämärämä ra söpää pjänpjo",
      "translation": "eu ainda estou estudando, por isso que eu não quero filho"
    },
    {
      "transcription": "ti rahotitati sä",
      "translation": "se não vai me atrapalhar (the baby)"
    },
    {
      "transcription": "kwâramä ka söpäjn",
      "translation": "mais para a frente, eu vou ter filho."
    },
    {
      "transcription": "sitepa hä kati hokjyn hokjyha pasi tâti, tä hatoo jahä suri kati sâpêrin advogada hä",
      "translation": "quando suri vai crescer, ela vai entrar na faculdade. ella vai trabalhar como advogada."
    },
    {
      "transcription": "suri sitepa hä, mä kïrä hê pjo wêntwê",
      "translation": "quando ela vai crescer, ele não vai querer bebê"
    },
    {
      "transcription": "suri sitepa hä, söpää pjärä hê pjo",
      "translation": "quando suri vai crescer, ela não vai querer bebê"
    },
    {
      "transcription": "ha söpää rö hahê pjo ka, suri",
      "translation": "não pode ter filho."
    },
    {
      "transcription": "kati mïn söpäjn",
      "translation": "deixa ela ter filho"
    },
    {
      "transcription": "rankôô pïrï",
      "translation": "I’m thirsty."
    },
    {
      "transcription": "sê tuure",
      "translation": "eu vou mijar"
    },
    {
      "transcription": "sê kwyy re jattä",
      "translation": "eu vou para lá"
    },
    {
      "transcription": "kati py pïrï hä wântwê",
      "translation": "você pode matar bebê, você tem que matar bebê"
    },
    {
      "transcription": "hakjôkjähakriti",
      "translation": "a fruit from the woods that would kill me if I ate it"
    },
    {
      "transcription": "harênä sy",
      "translation": "another deadly fruit"
    },
    {
      "transcription": "ka rê kuri sä harênäsy",
      "translation": "não pode comer semente de harênã"
    },
    {
      "transcription": "*ka rê kuri sä harênäsy hä",
      "translation": ""
    },
    {
      "transcription": "*ka rê kuri sä hä harênäsy",
      "translation": ""
    },
    {
      "transcription": "ka rêkura hë pjo harênäsy",
      "translation": "não pode comer semente de harênã"
    },
    {
      "transcription": "ka rê kuri rö harênäsy",
      "translation": "vocês não comen semente de harênã"
    },
    {
      "transcription": "rê kuri pjo harênäsy",
      "translation": "eu não como semente de harênã"
    },
    {
      "transcription": "rê kura hë pjo harênäsy",
      "translation": "eu não vou comer semente de harênã"
    },
    {
      "transcription": "*rê kuri pjo sä harênäsy.",
      "translation": ""
    },
    {
      "transcription": "ka kuri rö hahê pjo harênä sy (kahë)",
      "translation": "você não pode comer semente de harênã"
    },
    {
      "transcription": "ha jykâpênnö hä ka",
      "translation": "porqué que você não está trabalhando?"
    },
    {
      "transcription": "haa, ranswanka",
      "translation": "sim, estou com preguiça."
    },
    {
      "transcription": "ha jykânpânnö kjätünkwân?",
      "translation": "você quer comer, cunhada?"
    },
    {
      "transcription": "ha jy kânpân pjännö hä?",
      "translation": "você não quer comer?"
    },
    {
      "transcription": "ha jy kânpânnö hä, kjätünkwân?",
      "translation": "você quer comer de novo, cunhada?"
    },
    {
      "transcription": "ha jy kâpên hä?",
      "translation": "você está trabalhando?"
    },
    {
      "transcription": "inkô inpjaa rö hahê pjo mäjattä",
      "translation": "a água não pode sair daqui"
    },
    {
      "transcription": "pjän jyränka mä inpjaa rö inkö?",
      "translation": "o qué que fez a água não sair?"
    },
    {
      "transcription": "hanpjaa rö hahê pjo",
      "translation": "você não pode correr"
    },
    {
      "transcription": "nänpânpre hë. ti jïn te kwyn sökjentita köö",
      "translation": "N quebrou a sua perna jogando bola."
    },
    {
      "transcription": "nänpânpre inpjaa rö hahê pjo",
      "translation": "N não pode correr"
    },
    {
      "transcription": "inpjaa hänka titikre",
      "translation": "não sabe correr direito titikre"
    },
    {
      "transcription": "titikre inpjaa rö hahê pjo, inpjaajänka hamä",
      "translation": "titikre não pode correr, porque ele não consegue correr direito"
    },
    {
      "transcription": "katâsünnïn, katäsürïn",
      "translation": "exemplo"
    },
    {
      "transcription": "tyramä sâpyriti",
      "translation": "devagar procurando"
    },
    {
      "transcription": "mÿrïnkjëmmën pënkree",
      "translation": "mada para mim música"
    },
    {
      "transcription": "tutiti jyttoo haty tä, tisapïrahê pjo sökjentita",
      "translation": "T foi para oa mato, não pode estar jogando bola."
    },
    {
      "transcription": "inkjë kankojn",
      "translation": "eu vou ficar molhado"
    },
    {
      "transcription": "intankwâha katirankojn",
      "translation": "se chover, eu vou ficar molhado; chuva vai me molhar."
    },
    {
      "transcription": "inkwâhanta kankojn",
      "translation": "quando chove, eu fico molhada."
    },
    {
      "transcription": "nänkjo pytinsiha, kanswankan",
      "translation": "quando está muito quente, eu fico com preguiça"
    },
    {
      "transcription": "nänkjo pytinsiha, kanswanka pytinsin",
      "translation": "quando está muito quente, eu fico com muita preguiça."
    },
    {
      "transcription": "nänkjo hatän, sâpên hä",
      "translation": "ainda que está muito quente, eu trabalho."
    },
    {
      "transcription": "*nänkjo hatän, sâpên",
      "translation": ""
    },
    {
      "transcription": "pykkôômä kati nänkjo pytinsin, raapên pjärä hê pjo",
      "translation": "amanhã vai ficar muito quente, eu não vou querer trabalhar."
    },
    {
      "transcription": "pykkôômä kati nänkjo pytinsin, raapêrä hê pjo",
      "translation": "amanhã vai ficar muito quente, eu não vou trabalhar."
    },
    {
      "transcription": "raapên pjännö wâtâti sâ hamä",
      "translation": "eu não quero trabalhar no sol muito quente."
    },
    {
      "transcription": "pykkôômä kati kwâtâti sân",
      "translation": "tomorrow the sun will be very hot."
    },
    {
      "transcription": "pïnjasêra sün",
      "translation": "he’s saying a joke"
    },
    {
      "transcription": "pïnjasêeri hä",
      "translation": "he’s saying a joke"
    },
    {
      "transcription": "jan haka haswa hahä raapên pjo, nänkjo pytinsi (hamä)",
      "translation": "ontem eu não trabalhei, porque estava muito quente."
    },
    {
      "transcription": "jan nänkjo pytinsi, mämärämä raapënnö",
      "translation": "ontem muito quente, por isso não trabalhei"
    },
    {
      "transcription": "kôsmä nänkjo pytinsi, mämärämä raapênnö",
      "translation": "hoje está muito quente, por isso que eu não estou trabalhando"
    },
    {
      "transcription": "koomä nänkjo pytinsi, mämärämä raapên pjännö",
      "translation": "hoje está muito quente, por isso não quero trabalhar"
    },
    {
      "transcription": "nänkjo hatän rasâpêrïn.",
      "translation": "ainda está muito quente, estou trabalhando"
    },
    {
      "transcription": "nãnkjon, rasâpêrïn",
      "translation": "está quente, e estou trabalhando."
    },
    {
      "transcription": "koomä nänkjo pytinsi, jyraapênnö hakwa, inkjë. jyraapên.",
      "translation": "hoje estava muito quente, quase que eu não fiz o meu trabalho. mas eu trabalhei."
    },
    {
      "transcription": "koomä nänkjo pytinsi, rêwajäri rö hakwa, jypyraapên",
      "translation": "hoje estava muito quente, quase que não fiz (o meu trabalho), mas eu trabalhei"
    },
    {
      "transcription": "kwâtâti sâ koomä",
      "translation": "hoje ^ [o sol] está muito quente"
    },
    {
      "transcription": "koomä nänkjo pytinsi, rêwajära kwa inkjëjö sâpên, rêwajäri pjo",
      "translation": "hoje está muito quente, quase que fiz o meu trabalho, mas não fiz"
    },
    {
      "transcription": "koomä inpyti nänkjo pytinsi, rênteri sâpên",
      "translation": "hoje o sol ficou muito quente, eu parei de trabalhar"
    },
    {
      "transcription": "*rênteri raapêrä hê",
      "translation": ""
    },
    {
      "transcription": "koomä inpyti nänkjo pytinsi kanterin sâpên.",
      "translation": "agora o sol está muito quente, eu vou parar de trabalhar."
    },
    {
      "transcription": "nänkjo pytinsi inpyti, raapên pjäränkjâ pytinsi",
      "translation": "o sol está muito quente, mas eu quero muito trabalhar"
    },
    {
      "transcription": "nänkjo pytinsi inpyti, raapên pjärä tan pytinsi",
      "translation": "o sol está muito quente, mas eu estou com muita vontade de trabalhar."
    },
    {
      "transcription": "Kjêpyti, kâpên pïmmähä, kati hanswanka pytinsin",
      "translation": "K, se você não parar de trabalhar, você vai ficar muito cansada."
    },
    {
      "transcription": "Mätu hankree pïmmäha, kati hanswanka wy pytinsin",
      "translation": "M se você não parar de dançar, você vai ficar muito cansada."
    },
    {
      "transcription": "kati röö pjän pïmmän",
      "translation": "ela não quer levantar"
    },
    {
      "transcription": "hankree röha, kati hakwyjn haty tä",
      "translation": "se você não tiver dançado, você iria para o mato."
    },
    {
      "transcription": "sâpariti",
      "translation": "procura aí"
    },
    {
      "transcription": "sâpyratiti",
      "translation": ""
    },
    {
      "transcription": "sapyntiti, sâpyntiti",
      "translation": ""
    },
    {
      "transcription": "ink",
      "translation": ""
    },
    {
      "transcription": "Kjêpyti, sâpariti pârasô japê",
      "translation": "K, procura aí dinheiro"
    },
    {
      "transcription": "hïn kasâpyritin",
      "translation": "sim, eu vou procurar"
    },
    {
      "transcription": "ha ka pjâri pârasö?",
      "translation": "achou dinheiro?"
    },
    {
      "transcription": "haa, rêppjâri",
      "translation": "sim, eu achei"
    },
    {
      "transcription": "inkjon, sâpyratita tän",
      "translation": "não, eu estou ainda procurando"
    },
    {
      "transcription": "kjon, rêpjara kwa",
      "translation": "não, eu quasi achei"
    },
    {
      "transcription": "Kjêpyti, sapariti kwaakriti japê",
      "translation": "K, procura aí mamão"
    },
    {
      "transcription": "hïn, sâpyriti re",
      "translation": "sim, eu vou procurar."
    },
    {
      "transcription": "sâpyrati, karamä immün, kâprëpamä, cellular hamä",
      "translation": ""
    },
    {
      "transcription": "ka sâpariti",
      "translation": "procurar aí você"
    },
    {
      "transcription": "kjon, ka sapariti",
      "translation": ""
    },
    {
      "transcription": "sâpyhariti",
      "translation": ""
    },
    {
      "transcription": "rêsâpyraritankjâ",
      "translation": "eu procurei, não achei"
    },
    {
      "transcription": "ka sâpyritin mapa hamä",
      "translation": "eu vou procurar no mapa"
    },
    {
      "transcription": "ka sâpyritin kâprëpa mä",
      "translation": "eu vou procurar na caixa."
    },
    {
      "transcription": "ka sâpyntitin mapa hamä",
      "translation": "eu vou procurar no mapa"
    },
    {
      "transcription": "ka sâpyntitin caneta japê kâprëpa mä",
      "translation": "eu vou procurar caneta na caixa."
    },
    {
      "transcription": "hïn sâpyntiti re",
      "translation": "sim, eu vou procurar"
    },
    {
      "transcription": "hüwähä sapariti",
      "translation": "lá você vai procurar"
    },
    {
      "transcription": "hüwähä sâpyntiti",
      "translation": "foi lá procurar."
    },
    {
      "transcription": "kôrinkre hë tisarën pimmäha, kati ho pintori rön",
      "translation": "se for K ler bastante / direto, não vai esquecer."
    },
    {
      "transcription": "Kjêpyti kâpên pïmmäha, Kati hanswanka pytinsin",
      "translation": "K se você trabalhar direto, você vai ficar muito cansada"
    },
    {
      "transcription": "Mätu, hankree pïmmäha, kati hanswanka wy pytinsin",
      "translation": "Mãtu, se você dançar direto, você vai ficar com muita preguiça."
    },
    {
      "transcription": "Mätu, katihankree pïmmän, kati hanswanka wy pytinsin",
      "translation": "M se você vai dançar direto, você vai ficar com muita preguiça."
    },
    {
      "transcription": "Mätu, kati hankree pïmmäha, kati hanswanka wy pytinsin.",
      "translation": "M se você vai dançar direto, você vai ficar com muita preguiça."
    },
    {
      "transcription": "?inkjë hë rêsânpürä nankää, ka pïrïn",
      "translation": "se eu vejo uma cobra, eu vou matar"
    },
    {
      "transcription": "inkjë hë rêsâ pürä nänkää, ka pïrïn tapja",
      "translation": "se eu vejo uma cobra, eu vou tentar matar."
    },
    {
      "transcription": "ka pïrï hän nänkää",
      "translation": "eu vou matar cobra (when the snake is close and you see it)"
    },
    {
      "transcription": "ka pïrï hä nänkää tapja",
      "translation": "eu vou tentar de matar cobra."
    },
    {
      "transcription": "karö nänkää, karö Kjêpyti",
      "translation": "deixa a cobra aí, deixa K aí"
    },
    {
      "transcription": "ka rö pïpïn",
      "translation": "deixa ela descansar (, não mexe)"
    },
    {
      "transcription": "pïpïn",
      "translation": "ninguém meixe."
    },
    {
      "transcription": "harö pïpïn",
      "translation": "não mexe, fica queto"
    },
    {
      "transcription": "rêsânpürä inkjëhë nänkää, ka pïrïn.",
      "translation": "se eu vejo cobra, eu mato."
    },
    {
      "transcription": "inkjë hë rêsânpün nänkää, mämännï rêpïrï.",
      "translation": "eu vi uma cobra, então eu matei"
    },
    {
      "transcription": "inkjë hë rêsânpün nänkää, mämärämä rêpïrï.",
      "translation": "eu vi uma cobra, por isso eu matei"
    },
    {
      "transcription": "inkjë hë rêsânpün ^ [nänkää], ka pïrïn tapja",
      "translation": "eu vi uma cobra, vou tentar de matar."
    },
    {
      "transcription": "inkjë hë rêsânpün nänkää, rê pïra kwa",
      "translation": "eu vi cobra, quasi eu matei"
    },
    {
      "transcription": "jy sasa pârasô, jy sasa karijô",
      "translation": "the tobacco is stail"
    },
    {
      "transcription": "sôn",
      "translation": "tiny pieces, crumbs."
    },
    {
      "transcription": "karijô sôn",
      "translation": "crumbs (like the bottom of a bag)."
    },
    {
      "transcription": "ka tö jânpün ka hë nänkää, ka pïrakwa",
      "translation": "você viu cobra, você tentou de matar"
    },
    {
      "transcription": "kati sânpün ka hë nänkää, ha kati pïrïn?",
      "translation": "se você ver cobra, você vai matar?"
    },
    {
      "transcription": "*innë ka pïrakwa tapja",
      "translation": "eu vou tentar matar."
    },
    {
      "transcription": "innë ka pïrïn tapja",
      "translation": "eu vou tentar matar."
    },
    {
      "transcription": "kôtiti",
      "translation": "pombinho (bird sp.)"
    },
    {
      "transcription": "tutuka",
      "translation": "(bird sp.)"
    },
    {
      "transcription": "ka hë ka pjârinsi nänkää, kati pari hän",
      "translation": "sempre que você achar cobra, tem que matar."
    },
    {
      "transcription": "ka hë ka sâpürä nänkää, ka sânpünnö hahê pjo",
      "translation": "if you see a snake, don’t look directly at it"
    },
    {
      "transcription": "rêwatö",
      "translation": "atirar."
    },
    {
      "transcription": "watö",
      "translation": "atira aí!"
    },
    {
      "transcription": "inkjë hë rêsânpürä swasïrä, ka tö pïrï",
      "translation": "quando eu vejo porco, eu mato"
    },
    {
      "transcription": "inkjë hë rêsânpün swasïrä rasöhatö pjo, mämärämä rê tö pïrïrö",
      "translation": "eu vi porco, mas não tinha a minha arma, por isso que eu não matei."
    },
    {
      "transcription": "inkjë hë rêsânpün swasïrä sêho rapa hatö ho, mämärämä rê tö pïrï",
      "translation": "eu vi porco, e eu tinha a minha"
    },
    {
      "transcription": "arma, por isso que eu matei.",
      "translation": ""
    },
    {
      "transcription": "tün sê ho ratö pa hatö ho, ta ra tö pïrï swasïrä",
      "translation": "se eu tiver a minha arma, eu teria matado queixada."
    },
    {
      "transcription": "pasyy mä jïkja hamä kamä sörïn pëë hakrippää",
      "translation": "eu vou dar a gravadora na mão do P."
    },
    {
      "transcription": "inkjë hë kasürïn panãra pëë hamä, ka hë kati sürïn ippëpëë hamä",
      "translation": "eu vou falar em Panãra e você vai traduzir para o Português."
    },
    {
      "transcription": "hatennö pjärä kôkjati pita mä Nänpôôröö tä",
      "translation": "você quer ir no carro para Nänpôôröö?"
    },
    {
      "transcription": "tün sê ho ratöpa hatösy ho, ta ra tö pïrï nänkjôô",
      "translation": "se eu tiver cartucho, eu teria matado queixada."
    },
    {
      "transcription": "tün sê ratënnö, ta ra tö pïrï nänkjôô",
      "translation": "se eu não tiver caido, eu teria matado queixada. (old people’s speech)."
    },
    {
      "transcription": "sê ratënnöha, ta ra tö pïrï nänkjôô",
      "translation": "se eu não tiver caido, eu teria matado queixado. (young people’s speech)"
    },
    {
      "transcription": "tün sê ratënnöha, ta ra tö pïrï nänkjôô",
      "translation": "se eu não river caido, eu teria matado queixada."
    },
    {
      "transcription": "tün sêppâ nänkää, ta ra tö pïrï",
      "translation": "se tiver cobra, ia matar gente"
    },
    {
      "transcription": "tünna sêppa rö nänkää, ta ra tö pïrï",
      "translation": "se tiver cobra, ia matar gente"
    },
    {
      "transcription": "ha jy kärïnkjêti nänkâ?",
      "translation": "você tem muito miçanga"
    },
    {
      "transcription": "ha jynkjë inkjêti",
      "translation": "yes, I have a lot"
    },
    {
      "transcription": "krejy",
      "translation": "profundo / deep (talking about the river)"
    },
    {
      "transcription": "krennö",
      "translation": "shallow"
    },
    {
      "transcription": "tijää",
      "translation": "this much, this big, this tall"
    },
    {
      "transcription": "innï hahä pakre, kati pan tepi",
      "translation": "quando o rio está seco, tem muito peixe."
    },
    {
      "transcription": "inkô hë tippu hahä, ippa pjo tepi",
      "translation": "quando o rio está cheio, não tem peixe"
    },
    {
      "transcription": "pakre hë tippu hahä, tepi ippa pjo",
      "translation": "quando o rio está cheio, não tem peixe."
    },
    {
      "transcription": "sikjaakriti",
      "translation": "escreve rápido."
    },
    {
      "transcription": "tippu hahä inkô hë, ippa pytinsi hahê pjo tepi",
      "translation": "quando o rio está cheio, não vai ter muito peixe"
    },
    {
      "transcription": "pÿn kati pan",
      "translation": "não vai ter muito"
    },
    {
      "transcription": "tippu hahä inkô hë, pÿn kati pan tepi",
      "translation": "quando o rio está cheio, tem pouco peixe."
    },
    {
      "transcription": "pytinsi",
      "translation": "lots (for mass nouns)"
    },
    {
      "transcription": "pÿn",
      "translation": "little (for mass nouns)"
    },
    {
      "transcription": "pÿrä ra kuri",
      "translation": "de vez em quando eu como"
    },
    {
      "transcription": "pÿrä ra sakô karijô",
      "translation": "de vez em quando eu fumo"
    },
    {
      "transcription": "innï hahä pakre, ippa pytinsi rö tepi",
      "translation": "quando o rio está seco, não vai ter muito peixe."
    },
    {
      "transcription": "*innï hahä pakre, ippa pÿnnö tepi",
      "translation": ""
    },
    {
      "transcription": "innï hahä pakre, kati pon inkjêtinkjâ tepi",
      "translation": "quando o rio está seco, vai ter muito pouco peixe."
    },
    {
      "transcription": "inkjêtinkjâ",
      "translation": "muito pouco"
    },
    {
      "transcription": "katäsünnïn",
      "translation": "eu vou dar exemplo"
    },
    {
      "transcription": "kakäntäsünnïn",
      "translation": "eu vou te dar exemplo"
    },
    {
      "transcription": "ka kukrëë röha sö, katihatyjän",
      "translation": "se você não comer, vai ficar com fome"
    },
    {
      "transcription": "ka kukrëëha sö, kati hatyjää rön",
      "translation": "se você comer, não vai ficar com fome"
    },
    {
      "transcription": "kâppârä, kati hatyjää rön",
      "translation": "se você comer, não vai ficar com fome."
    },
    {
      "transcription": "kânpârä ippôrinpytijï, kati hatyjää rön",
      "translation": "se você tiver almoçado no meio-dia, não vai ficar com fome"
    },
    {
      "transcription": "koomä kânpârä, kati hatyjää rön pyttenpê",
      "translation": "se você almoçar agora, não vai ficar com fome de tarde."
    },
    {
      "transcription": "kânpânnöha, kati py hatyjän pyttenpê",
      "translation": "se você não almoçar, vai ficar com fome de novo de tarde."
    },
    {
      "transcription": "kiti kakankjon, ka sânnö hahê pjo sâpên",
      "translation": "você está pouco doente, não pode atrasar o trabalho."
    },
    {
      "transcription": "kankjo wyha, mämä kati sôrïn sâpên",
      "translation": "se ele tem muita febre, vai atrasar no trabalho."
    }
  ]
},{
  "metadata": {
    "title": "Paripoa1a",
    "speakers": "?",
    "linguists": "Myriam Lapierre, Bernat Bardagil-Mas",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 0,
      "start": "10040",
      "stop": "10910",
      "transcription": "a jy kin",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 1,
      "start": "13600",
      "stop": "16740",
      "transcription": "swankjara jõ mpe ka sũũ inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": "17125",
      "stop": "19305",
      "transcription": "rawâ pakja pêj kja sõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": "19400",
      "stop": "23460",
      "transcription": "pan pêj kô.... ka....",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": "24975",
      "stop": "27735",
      "transcription": "pâri wy sanpêj(tipus d'arbre)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": "27830",
      "stop": "29460",
      "transcription": "jy ra wâ inkjẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": "29590",
      "stop": "32550",
      "transcription": "aty jy ra wâri jãri inkjẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": "33325",
      "stop": "36765",
      "transcription": "jy py ra pôô kri tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": "36920",
      "stop": "38970",
      "transcription": "mãmã ni jy tẽ sõntoti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": "39210",
      "stop": "40850",
      "transcription": "sõtoti tijãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": "41105",
      "stop": "42965",
      "transcription": "ti sũũri inkjẽ nâpiâ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": "43290",
      "stop": "44780",
      "transcription": "inkjẽ twapiâ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": "45810",
      "stop": "47950",
      "transcription": "tijãri inkjẽ topjâpjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": "48046",
      "stop": "50723",
      "transcription": "tajũmahã ipẽ hẽ tiria kôti ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": "50738",
      "stop": "52812",
      "transcription": "ka ti rê soti mã jĩ sũ kĩri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": "52896",
      "stop": "56293",
      "transcription": "ipẽ mã kamera jõ nkwâ ti kjẽ jãri inkjẽ nâpiâ mẽ kjẽ ntwâpiâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": "59705",
      "stop": "62675",
      "transcription": "inkjẽ jũmpiâ, inkjẽ topjâpjâ kâkjori",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": "62782",
      "stop": "65378",
      "transcription": "tijãri tân rê sanpũ inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": "65643",
      "stop": "67584",
      "transcription": "towpytũ kâkjori",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": "67845",
      "stop": "69522",
      "transcription": "jy ra pê ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": "69771",
      "stop": "73485",
      "transcription": "prĩ tân jy ra pê ty inkjẽ topjâpjâ tũn kâkjori",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": "74727",
      "stop": "79715",
      "transcription": "inkjẽ ntwapjâ Kôjã rê sanpũ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": "79772",
      "stop": "81499",
      "transcription": "tijãri si tepi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": "81675",
      "stop": "86288",
      "transcription": "tijãri si jy ra tep akwa inkjẽ, jy ra pê ty inkjẽ twapiâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": "86384",
      "stop": "89578",
      "transcription": "inkwy inkjẽ inkjẽ twapiâ japêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": "91829",
      "stop": "96317",
      "transcription": "mãmã pêj ra pa, panĩ ka",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": "98113",
      "stop": "101897",
      "transcription": "inkjẽ jõ kukre tõ amã, kukre tõ amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": "101942",
      "stop": "107135",
      "transcription": "jy ra ho pôô inkjẽ nâpiâ Pysypâri tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": "107431",
      "stop": "114738",
      "transcription": "rê kuri inkjẽ hẽ pysy, rê kuri prĩ tân, rê ku rê kuuu, jy ra tepi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": "115465",
      "stop": "120374",
      "transcription": "mãmã pêj jy ra mpimpiâ inkjẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": "120697",
      "stop": "123322",
      "transcription": "haa, jy ra mpimpiâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": "124386",
      "stop": "128408",
      "transcription": "mãmã pêj ro pa inkjẽ mpimpiâ ti ra rĩ rõ amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": "128908",
      "stop": "131215",
      "transcription": "si tepi mẽ pjow rê nĩ tijãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": "131294",
      "stop": "133930",
      "transcription": "soti nkjow ti rĩ inkjẽ mpimpia hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": "134061",
      "stop": "135504",
      "transcription": "ti rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": "136219",
      "stop": "137856",
      "transcription": "(mãmã) pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": "138168",
      "stop": "140122",
      "transcription": "rê rânka (separou) inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": "140207",
      "stop": "142082",
      "transcription": "pysyparantêra",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": "142229",
      "stop": "146025",
      "transcription": "pêj py r ho mõri kukre tõ tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": "146625",
      "stop": "150227",
      "transcription": "jy rampju pisankô(lagoa?) jõ kõ amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": "150386",
      "stop": "152988",
      "transcription": "pisankô jõ kõ jy rampju",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 41,
      "start": "153488",
      "stop": "157578",
      "transcription": "tijãri jy rampju pisakâ jõ inkô rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 42,
      "start": "158300",
      "stop": "161834",
      "transcription": "pêj ro pa inkjẽ nâpiâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 43,
      "start": "162385",
      "stop": "168829",
      "transcription": "jy ra rõ kwatisô amã pa ramã ka... nânpêjsô amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 44,
      "start": "168987",
      "stop": "172965",
      "transcription": "ti ranpju jy ra rõ nânpêjsô amã ate",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 45,
      "start": "173152",
      "stop": "175971",
      "transcription": "ate inkjẽ mpimpiâ suty(estora) amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 46,
      "start": "176442",
      "stop": "177908",
      "transcription": "apêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 47,
      "start": "180408",
      "stop": "184897",
      "transcription": "jy ranpju jy pjow, mãmã pêj py mẽ ra rõ inkjẽ mpimpia mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 48,
      "start": "184931",
      "stop": "187431",
      "transcription": "rê py mẽ pĩ têpi(estar junts) inkjẽ mpimpiâ mẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 49,
      "start": "188153",
      "stop": "190710",
      "transcription": "pêj no paa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 50,
      "start": "190857",
      "stop": "194823",
      "transcription": "pĩsasâ jõ inkô pêj jy py ra ho to kukre tõ tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 51,
      "start": "195897",
      "stop": "198545",
      "transcription": "pa tã ka Jowpyjypo tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 52,
      "start": "198738",
      "stop": "204306",
      "transcription": "Jowpyjypo rĩ rê inkjẽ sũũ inkwa(corrida de tora)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 53,
      "start": "204329",
      "stop": "210931",
      "transcription": "rê inkẽ kâri ti ra si pyri inkjẽ mpimpiâ hẽ inkâ tã inpyara su",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 54,
      "start": "211374",
      "stop": "213954",
      "transcription": "rê inkjẽ ho kjy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 55,
      "start": "214068",
      "stop": "218818",
      "transcription": "rê mã mpe jy ra kwy aty tã inkwa(tora) su",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 56,
      "start": "218926",
      "stop": "220790",
      "transcription": "jy ra kwy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 57,
      "start": "221658",
      "stop": "224453",
      "transcription": "ra jĩ inkwa hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 58,
      "start": "224550",
      "stop": "227470",
      "transcription": "mãmã pêj rê ma mpe inka mã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 59,
      "start": "227685",
      "stop": "232049",
      "transcription": "mãmã pêj rê ra... rê mpâri inkwa inpyarã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 60,
      "start": "232146",
      "stop": "234821",
      "transcription": "mãmã pêj jy myn a tẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 61,
      "start": "234821",
      "stop": "239401",
      "transcription": "aty pej myn a tẽẽẽ, jy ra pôô kri tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 62,
      "start": "239651",
      "stop": "241526",
      "transcription": "rê na re inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 63,
      "start": "241685",
      "stop": "245355",
      "transcription": "itsê pytinsi inkjẽ pjuntwêj tân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 64,
      "start": "245594",
      "stop": "247719",
      "transcription": "jy ra pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 65,
      "start": "248135",
      "stop": "254158",
      "transcription": "mãmã pêj rê ikjẽn(cridar) inpyarân, rê ikjẽn rê ikjẽn, mãmã pêj jy ra tẽ kri tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 66,
      "start": "254283",
      "stop": "258238",
      "transcription": "rê rõ pjãri(abocar aigua) inkô ho inkjẽ jy ra swâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 67,
      "start": "258414",
      "stop": "259755",
      "transcription": "jy ra jĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 68,
      "start": "260022",
      "stop": "261601",
      "transcription": "pjã nõ pêj (sense menjar)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 69,
      "start": "261874",
      "stop": "263578",
      "transcription": "jy ra jĩ inkjẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 70,
      "start": "263989",
      "stop": "265653",
      "transcription": "mãmã pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 71,
      "start": "266883",
      "stop": "270345",
      "transcription": "jy jy pjow, mãmã pêj jy ra jõ tijãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 72,
      "start": "270910",
      "stop": "274528",
      "transcription": "rê inkjẽ sũ inkjẽ mã sâkjâri(festa do jabuti) wyyy pytinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 73,
      "start": "274529",
      "stop": "277588",
      "transcription": "rê inkjẽ sari(embolicar en un cistell) inkjẽ mã akwyti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 74,
      "start": "278329",
      "stop": "280491",
      "transcription": "nânkjô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 75,
      "start": "280862",
      "stop": "282480",
      "transcription": "tôrinsi(tatu)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 76,
      "start": "282711",
      "stop": "284123",
      "transcription": "tititi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 77,
      "start": "284148",
      "stop": "285678",
      "transcription": "pâtiti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 78,
      "start": "285696",
      "stop": "286961",
      "transcription": "rê inkjẽ wajãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 79,
      "start": "287486",
      "stop": "289523",
      "transcription": "rê jãra kjâ inkjẽ mã (ho feien per mi)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 80,
      "start": "290160",
      "stop": "293125",
      "transcription": "so kja târi pjow too (no sap cantar) inkjẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 81,
      "start": "293359",
      "stop": "297587",
      "transcription": "soti kjomera(altres del mateix clan) kwakjatantera ra too inkjẽ jâ kjâ ramã(la seva festa)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 82,
      "start": "297903",
      "stop": "304043",
      "transcription": "inkjẽ nâpiâ, inkjẽ nâpiâ, inkjẽ twapia ito krĩ kripi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 83,
      "start": "304808",
      "stop": "306866",
      "transcription": "jy ra to inpyara aty tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 84,
      "start": "306907",
      "stop": "307590",
      "transcription": "mãmã pêj jy ho ra pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 85,
      "start": "307916",
      "stop": "309241",
      "transcription": "rê turi(carregar) inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 86,
      "start": "309750",
      "stop": "314082",
      "transcription": "pan kĩ wy rê turi ho ra mõri inkâ tããã, rê sari(deixar)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 87,
      "start": "314635",
      "stop": "315590",
      "transcription": "haa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 88,
      "start": "315789",
      "stop": "319126",
      "transcription": "rê jãra nkjâ inkjẽ jõ hẽ, swankjara jõ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 89,
      "start": "333540",
      "stop": "336424",
      "transcription": "kwasôtantera inkjẽ jũmpiâ Kwasôsô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 90,
      "start": "336645",
      "stop": "337949",
      "transcription": "kwasotantera",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 91,
      "start": "338153",
      "stop": "340474",
      "transcription": "ti ra pê pĩri txucarramãe hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 92,
      "start": "341358",
      "stop": "344175",
      "transcription": "prĩ tân ti ra pê pĩri inkjẽ jumpiâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 93,
      "start": "346253",
      "stop": "348280",
      "transcription": "aty ti pĩri ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 94,
      "start": "348280",
      "stop": "350418",
      "transcription": "aty ra mõri apêj kri tõ tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 95,
      "start": "350427",
      "stop": "351798",
      "transcription": "tã rêjãri kukre tõ tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 96,
      "start": "351813",
      "stop": "352830",
      "transcription": "tõ ra mõri apêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 97,
      "start": "352862",
      "stop": "355979",
      "transcription": "ti ra pari rãnteri atyn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 98,
      "start": "359974",
      "stop": "363022",
      "transcription": "asâ mpe pytinsi txucarramae",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 99,
      "start": "367259",
      "stop": "368590",
      "transcription": "mãmã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 100,
      "start": "375478",
      "stop": "379471",
      "transcription": "inkjow jy pôô pjow kri tã, atyn ti ra pari ka",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 101,
      "start": "379730",
      "stop": "383303",
      "transcription": "atyn ra jõ to mõri apêj kri tã ra jõti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 102,
      "start": "383675",
      "stop": "385026",
      "transcription": "mãmã pêj py ra jõti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 103,
      "start": "385192",
      "stop": "386371",
      "transcription": "py ra jõti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 104,
      "start": "386964",
      "stop": "388571",
      "transcription": "ti ra pari nãnteri(al mig del bosc)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 105,
      "start": "388909",
      "stop": "390123",
      "transcription": "ti ra pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 106,
      "start": "390137",
      "stop": "396039",
      "transcription": "mãmã pêj ra mpja(correr) inkjara kri tã... Jy py ra jõti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 107,
      "start": "397351",
      "stop": "400551",
      "transcription": "mãmã pêj jy aka, mãmã pêj py ra jõti kri tã....",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 108,
      "start": "400620",
      "stop": "402275",
      "transcription": "jy ra pôô kri tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 109,
      "start": "403116",
      "stop": "407164",
      "transcription": "ti ra pari txucarramae ahê panãra uãhã ty kr~i",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 110,
      "start": "407248",
      "stop": "411730",
      "transcription": "mãmã pêj jy ra mõri inpyara m~e inkjara rê ra m~i rahê (per enterrar)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 111,
      "start": "412344",
      "stop": "415330",
      "transcription": "inpy ti para pjyra(guerrers, adults)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 112,
      "start": "417557",
      "stop": "420578",
      "transcription": "tijãra kjâ inkj~e nâpiâ h~e ti s~u~u",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 113,
      "start": "420730",
      "stop": "422633",
      "transcription": "inkj~e twapiâ p~i kjâ Kôjã h~e",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 114,
      "start": "423937",
      "stop": "428123",
      "transcription": "rê ranp~u pjow inkj~e topjâpjâ ia jy ty inkj~e topjâpjâ t~u Kâkjori towpat~u",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 115,
      "start": "428441",
      "stop": "430675",
      "transcription": "towpât~u pytinsi jy ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 116,
      "start": "440019",
      "stop": "441302",
      "transcription": "haa ti pyri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 117,
      "start": "441323",
      "stop": "444516",
      "transcription": "mãmã ni ti ra pari r~i ti pyri Pyrô txucarramae h~e",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 118,
      "start": "445061",
      "stop": "445688",
      "transcription": "Pyrô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 119,
      "start": "446640",
      "stop": "447902",
      "transcription": "mã m~e ka...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 120,
      "start": "448454",
      "stop": "450199",
      "transcription": "Kjytankô jõpãã m~e",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 121,
      "start": "450592",
      "stop": "451620",
      "transcription": "ti rõwan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 122,
      "start": "452006",
      "stop": "452868",
      "transcription": "pr~i",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 123,
      "start": "453143",
      "stop": "458482",
      "transcription": "pêj ti si pyri mã ka Pyrô tõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 124,
      "start": "459958",
      "stop": "462668",
      "transcription": "jy ho to jy ty tijãri txucarramae ar~i",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 125,
      "start": "462751",
      "stop": "466875",
      "transcription": "sõsê sâri(plorar) inkwâ tijãri jy ty tijãri txucarramae ar~i",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 126,
      "start": "467095",
      "stop": "469426",
      "transcription": "mãmã pêj, mã ka",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 127,
      "start": "470343",
      "stop": "472943",
      "transcription": "Kjytakriti jõpãã p~i kjâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 128,
      "start": "473958",
      "stop": "476841",
      "transcription": "jy pôô jakwa tõ txucarramae jõ nkwa tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 129,
      "start": "477026",
      "stop": "480185",
      "transcription": "mãmã pêj jy sa kãn sõpãã ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 130,
      "start": "480249",
      "stop": "481749",
      "transcription": "py ti wa to(va neixer) jakwa tijãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 131,
      "start": "481764",
      "stop": "483382",
      "transcription": "ti p~iri nanpjiu ia...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 132,
      "start": "483444",
      "stop": "486253",
      "transcription": "nanpiujakriti h~e tijãri Kitakriti jõpãã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 133,
      "start": "487735",
      "stop": "491235",
      "transcription": "mãmã pan Kjytakriti tânpiâ tijãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 134,
      "start": "491440",
      "stop": "492757",
      "transcription": "sucarramae arĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 135,
      "start": "493543",
      "stop": "495293",
      "transcription": "ja tã ti ra pari rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 136,
      "start": "501855",
      "stop": "503995",
      "transcription": "ti pyri sucarramae aprĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 137,
      "start": "504190",
      "stop": "506212",
      "transcription": "haa, ti pyri sucarramae aprĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 138,
      "start": "506220",
      "stop": "510669",
      "transcription": "inkwy(chorar) tijãri nâpiâ hã inkwyyy rê py sa rĩn teri tijãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 139,
      "start": "511683",
      "stop": "514271",
      "transcription": "mã sãn(deixar) tijãri hatyn inkwy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 140,
      "start": "518624",
      "stop": "519521",
      "transcription": "ôw",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 141,
      "start": "520418",
      "stop": "521705",
      "transcription": "rê sanpũ pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 142,
      "start": "521756",
      "stop": "523432",
      "transcription": "tijãri tân rêjãri ti ra pari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 143,
      "start": "523774",
      "stop": "524972",
      "transcription": "rê sanpũ pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 144,
      "start": "525104",
      "stop": "527715",
      "transcription": "ta ra pjâ ta pja inkjẽ sucarramae hẽ inkjẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 145,
      "start": "528014",
      "stop": "531323",
      "transcription": "inkjẽrã piâ(mare) hẽ kypy(vamos), pyyy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 146,
      "start": "531389",
      "stop": "532352",
      "transcription": "pakwy(caminar junts sols)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 147,
      "start": "532566",
      "stop": "533948",
      "transcription": "kan ho tijãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 148,
      "start": "533996",
      "stop": "537010",
      "transcription": "ti turi(cesto vazio) inkjẽ nâpiâ hẽ kan, ate inkja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 149,
      "start": "538344",
      "stop": "541131",
      "transcription": "mãmã ramã jy ra tĩri(viure) inkjẽ, Krenpy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 150,
      "start": "541718",
      "stop": "542740",
      "transcription": "Turêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 151,
      "start": "543960",
      "stop": "545431",
      "transcription": "Pawy(mulher Kupêri)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 152,
      "start": "545801",
      "stop": "548566",
      "transcription": "japjâra jy ra tĩri sucarramae hẽ jũnpa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 153,
      "start": "548991",
      "stop": "550263",
      "transcription": "inkjẽmera nâpiâmera kõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 154,
      "start": "550285",
      "stop": "553057",
      "transcription": "ti su pjâri inkjẽ nâpiâ hẽ jy ho to, kri tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 155,
      "start": "553491",
      "stop": "555778",
      "transcription": "jy ra kôti(viver) inkjẽmera",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 156,
      "start": "563006",
      "stop": "565234",
      "transcription": "paa, tijãri ka",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 157,
      "start": "568851",
      "stop": "573564",
      "transcription": "tijãri, inkjẽ jõ nkwa rĩ Pâriwysã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 158,
      "start": "573882",
      "stop": "580258",
      "transcription": "tijãri, pa nĩ ka, Pisakâjõnkô(riu més alla de Guaranta)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 159,
      "start": "580545",
      "stop": "585402",
      "transcription": "paa, pa nĩ su jy ra tepi kaa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 160,
      "start": "586110",
      "stop": "589213",
      "transcription": "Jowpyjypo rĩ jy ra tepi jy ranpju rêjãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 161,
      "start": "593921",
      "stop": "597792",
      "transcription": "kri wy rêjãri, rankjêti rêjãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 162,
      "start": "597843",
      "stop": "605103",
      "transcription": "inkjêti rêjãri prĩara, sitepara, twatũmara, inpyara, tijãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 163,
      "start": "605155",
      "stop": "608051",
      "transcription": "ti ra pari pjã hẽ nankjoanka hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 164,
      "start": "608246",
      "stop": "612324",
      "transcription": "jy pãpã ty rê ra krẽ rõ kypa amã kri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 165,
      "start": "612636",
      "stop": "614948",
      "transcription": "mã krĩ, sâ mĩri(enterrar) pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 166,
      "start": "615045",
      "stop": "617136",
      "transcription": "jamã kypa amã inkjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 167,
      "start": "617512",
      "stop": "618369",
      "transcription": "inkjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 168,
      "start": "619466",
      "stop": "620726",
      "transcription": "mã krĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 169,
      "start": "625272",
      "stop": "626636",
      "transcription": "kjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 170,
      "start": "627155",
      "stop": "628974",
      "transcription": "kypa amã rê su ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 171,
      "start": "629207",
      "stop": "632713",
      "transcription": "sasê pjow inkjow ipẽ pã rõ tân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 172,
      "start": "633109",
      "stop": "637226",
      "transcription": "kowma su rê kôti ipẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 173,
      "start": "637537",
      "stop": "642096",
      "transcription": "tijãramã rê kôti ipẽ inkjẽmerã jahã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 174,
      "start": "642381",
      "stop": "643901",
      "transcription": "Guarantã rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 175,
      "start": "644311",
      "stop": "647168",
      "transcription": "ti pjy ku syri ankjâ(camí) ipẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 176,
      "start": "647220",
      "stop": "649986",
      "transcription": "ti ra san sôri kâjasâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 177,
      "start": "650558",
      "stop": "652155",
      "transcription": "nankâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 178,
      "start": "652246",
      "stop": "653480",
      "transcription": "pasiâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 179,
      "start": "653558",
      "stop": "654922",
      "transcription": "kâjasâpasê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 180,
      "start": "655377",
      "stop": "656636",
      "transcription": "pẽkâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 181,
      "start": "656675",
      "stop": "658143",
      "transcription": "rê san kjã pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 182,
      "start": "658351",
      "stop": "660026",
      "transcription": "rê pôri(cremar al foc) aguja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 183,
      "start": "660519",
      "stop": "664922",
      "transcription": "asâ, rê tĩri rê sokjatâri rõ ...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 184,
      "start": "678154",
      "stop": "682362",
      "transcription": "paa, kin, jy ra pêj tã tẽ pẽakriti wêintwêj pãã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 185,
      "start": "682532",
      "stop": "684363",
      "transcription": "inkwy pjãn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Jopy h\u00e4 kja",
    "speakers": "P\u00e2tti",
    "linguists": "Myriam Lapierre, Sunkulp Ananthanarayan",
    "Indigenous researcher": "P\u00earank\u00f4 (transcription, translation)",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 1,
      "start": 83.06796000851041,
      "stop": 85227.5783518842,
      "transcription": "ka k\u00e4ns\u00fcn ",
      "translation": "eu vou contar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": 85.2275783518842,
      "stop": 88089.70004950288,
      "transcription": "ti ra p\u00eb\u00ebnpara h\u00e4",
      "translation": "voc\u00eas v\u00e3o escutar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": 88.08970004950288,
      "stop": 90852.44252150979,
      "transcription": "h\u00ea, rapa t\u00e4n inkj\u00eb",
      "translation": "aonde eu viviam",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": 90.85244252150979,
      "stop": 92561.76520203204,
      "transcription": "ra pj\u00f4ntw\u00ea t\u00e4n.",
      "translation": "Quando estava jovem andava na ca\u00e7ada",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": 92.56176520203203,
      "stop": 97632.24297725715,
      "transcription": "ra pj\u00f4ntw\u00ea t\u00e4n [rapa] rapa [m\u00eb] swas\u00eari m\u00e4",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": 97.63224297725715,
      "stop": 101118.81034836035,
      "transcription": "r\u00ea soppj\u00e2ri taj\u00efn",
      "translation": "eu encontrei coisas",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": 101.11881034836034,
      "stop": 103890.75146510488,
      "transcription": "r\u00ea pj\u00e2ri,",
      "translation": "se encontramos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": 103.89075146510488,
      "stop": 106659.19191124618,
      "transcription": "r\u00ea p\u00efri jopy",
      "translation": "eu matei on\u00e7a",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": 106.65919191124618,
      "stop": 109575.00181079423,
      "transcription": "r\u00ea p\u00efri jopy",
      "translation": "eu matei on\u00e7a",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": 109.57500181079423,
      "stop": 114043.45416587779,
      "transcription": "sotinpe h\u00e4 pjo, r\u00ea pja t\u00e4 j\u00efs\u00fcn m\u00e4ra h\u00e4",
      "translation": "na verdade,eu n\u00e3o podia contar para voc\u00eas",
      "notes": "m\u00e4ra h\u00e4 = voc\u00eas",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": 114.04345416587779,
      "stop": 115748.7292695846,
      "transcription": "jopp\u00e4\u00e4 ti p\u00efri",
      "translation": "matou on\u00e7a pequena",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": 115.7487292695846,
      "stop": 119075.06836076577,
      "transcription": "r\u00ea honkj\u00eati inkj\u00eb h\u00eb jopy",
      "translation": "eu matei muitos as on\u00e7as",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": 119.07506836076577,
      "stop": 124958.9967887212,
      "transcription": "m\u00e4m\u00e4n p\u00ean jy py rakwyy",
      "translation": "ent\u00e3o, eu vou embora",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": 124.9589967887212,
      "stop": 130298.90115725905,
      "transcription": "m\u00e4m\u00e4n p\u00ean m\u00ffn kj\u00e2mm\u00f6ri",
      "translation": "ent\u00e3o,est\u00e1 vindo, a on\u00e7a",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": 130.29890115725905,
      "stop": 135990.73537015336,
      "transcription": "ti s\u00f6joppj\u00e2 taj\u00efn hyrih\u00eb r\u00ea s\u00fcnsw\u00e2ri",
      "translation": "parecem animais ficara perto,n\u00f3s flechamos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": 135.99073537015335,
      "stop": 138856.5574797675,
      "transcription": "p\u00ean kj\u00e2ty",
      "translation": "ja morreram",
      "notes": "kj\u00e2ty = swankjara p\u00eb\u00eb for tip\u00efri",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": 138.8565574797675,
      "stop": 142588.17157678443,
      "transcription": "t\u00e4 r\u00eankj\u00e4ri inkj\u00eb h\u00eb, ra tepinkwapy",
      "translation": "assim,come\u00e7ei quando eu fiquei adulto ",
      "notes": "r\u00eankj\u00e4ri = when was kid",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": 142.58817157678442,
      "stop": 146086.22621898315,
      "transcription": "raat\u00e2tt\u00e4n, rapa t\u00e4n, has\u00ea ham\u00e4 rapa t\u00e4n.",
      "translation": "estava firme andava no mato abaixo sujo",
      "notes": "raat\u00e2tt\u00e4n = when i was strong; has\u00ea = mato sujo",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": 146.08622621898314,
      "stop": 148958.5289035922,
      "transcription": "r\u00ea rak\u00f6 soppari sotanka",
      "translation": "n\u00f3s matavamos outros animais ruins",
      "notes": "sotanka here means animals but can also mean other Indigenous",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": 148.9585289035922,
      "stop": 155360.14150273692,
      "transcription": "m\u00e4m\u00e4n p\u00ean, jy m\u00e4nkj\u00f6 rakwyy, m\u00e4ra m\u00e4",
      "translation": "ent\u00e3o, n\u00f3s seguimos andando para  ele",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": 155.36014150273692,
      "stop": 157494.35572962387,
      "transcription": "soppapjo m\u00eb p\u00ffn",
      "translation": "poucas  parentes tambem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": 157.49435572962386,
      "stop": 159637.4004041764,
      "transcription": "rak\u00f6ppa m\u00e4m\u00e4, m\u00e4m\u00e4.",
      "translation": "ent\u00e3o,andava comigo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": 159.63740040417642,
      "stop": 162663.45852794245,
      "transcription": "soppapjo m\u00eb p\u00ffn rak\u00f6ppa.",
      "translation": "os parentes andavam com n\u00f3s",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": 162.66345852794245,
      "stop": 168756.02487597457,
      "transcription": "m\u00e4 rakwyy swas\u00eari m\u00e4",
      "translation": "andando na ca\u00e7ada",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": 168.75602487597456,
      "stop": 171429.63409000024,
      "transcription": "m\u00e4nkj\u00f6 rakwyy",
      "translation": "ent\u00e3o, andando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": 171.42963409000023,
      "stop": 176576.35111154776,
      "transcription": "ti t\u00e4 raanp\u00fcn pyssy h\u00e4, jap\u00ean r\u00ea kj\u00e4to [kj\u00e4to] hakoko ",
      "translation": "Eles viram castanha batendo barulho pela dire\u00e7\u00e3",
      "notes": "r\u00ea kj\u00e4to hakoko = split nut (ti kusy, ti jop\u00f4\u00f4 pyssy)",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": 176.57635111154775,
      "stop": 180719.88456322838,
      "transcription": "rakwy, ti j\u00e4r\u00efr\u00e4 h\u00ea pjy s\u00e2ti",
      "translation": "andando, perto de dire\u00e7\u00e3o o caminho",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": 180.7198845632284,
      "stop": 184673.02376944915,
      "transcription": "m\u00e4nkj\u00f6 rakwyy",
      "translation": "ent\u00e3o, andando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": 184.67302376944914,
      "stop": 188131.78246882133,
      "transcription": "p\u00e2r\u00e4kja r\u00ea p\u00efri pjo m\u00e4m\u00e4",
      "translation": "n\u00e3o s\u00e3o do mato, matei esta",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": 188.13178246882134,
      "stop": 190376.81364065455,
      "transcription": "h\u00ef kriti",
      "translation": "cria\u00e7\u00e3o",
      "notes": "h\u00ef kriti = cria\u00e7\u00e3o do mato",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": 190.37681364065455,
      "stop": 193447.31951589652,
      "transcription": "krit\u00eb ta ra kj\u00e4 kw\u00e2ri",
      "translation": "a cria\u00e7\u00e3o quase me matou",
      "notes": "krit\u00eb = kriti h\u00eb",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": 193.44731951589654,
      "stop": 195127.2128313352,
      "transcription": "krit\u00eb ta rakr\u00eb\u00eb",
      "translation": "a cria\u00e7\u00e3o quase me comeu",
      "notes": "kriti = kriti h\u00eb; ta rakr\u00eb\u00eb = quase comeu",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": 195.1272128313352,
      "stop": 198444.36526049188,
      "transcription": "p\u00ean rakwyy",
      "translation": "ent\u00e3o, andando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": 201.8575615235957,
      "stop": 204571.6693954614,
      "transcription": "r\u00ea pjypj\u00e2ri hakwyti",
      "translation": "ent\u00e3o, encontrei trilha do jabuti",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": 204.57166939546138,
      "stop": 209670.9023668454,
      "transcription": "p\u00ean r\u00eankj\u00e2n s\u00fcnsw\u00e2ri iss\u00ea",
      "translation": "ent\u00e3o,eu deixei o arco",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": 209.6709023668454,
      "stop": 215107.9933406142,
      "transcription": "k\u00f6 rakwyy s\u00ef m\u00e4m\u00e4, ti m\u00eb p\u00efnjas\u00eari.",
      "translation": "eu foi anadando para fazer acero",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": 215.1079933406142,
      "stop": 220227.99885879896,
      "transcription": "m\u00e4m\u00e4n p\u00ean r\u00ea r\u00efnpari hatte p\u00ean",
      "translation": "escutei do pouco longe",
      "notes": "hatte = hyrih\u00eb (~50 m)",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": 220.22799885879897,
      "stop": 228808.63075100913,
      "transcription": "n\u00e4nsi ipp\u00eb\u00eb pankj\u00e2, [kar\u00ea, n\u00e4nsi sy] n\u00e4nsi sopp\u00eb\u00eb pjo, s\u00efs\u00e2r\u00ef, ti sotontwa pjo, swankjar\u00e2n",
      "translation": "viram dificil ouvirem,voces viram essas,viram coisas ouviram conseguia entender pelo antigo ",
      "notes": "very mumbly bumbly, tough to hear with multiple misspeaks (so probably ultimately not quite grammatical) [GLOSSING IS FUTILE]",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": 228.80863075100913,
      "stop": 232583.97514410352,
      "transcription": "r\u00ea soppaa rapj\u00e2r\u00e2n taj\u00efn, sotanka paa rapj\u00e2r\u00e2n",
      "translation": "Voces s\u00e3o matadores de predatores ruins ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": 232.5839751441035,
      "stop": 235812.5929017116,
      "transcription": "n\u00e4nsi p\u00eb\u00eb pjo, p\u00ean pan,",
      "translation": "viram dificil ouvirem gente",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 41,
      "start": 235.8125929017116,
      "stop": 238496.62680617714,
      "transcription": "py rasu rat\u00ebn",
      "translation": "Eu fui viajando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 42,
      "start": 238.49662680617715,
      "stop": 240885.7119299322,
      "transcription": "h\u00ef jatt\u00e4 kypy kjy",
      "translation": "ser\u00e1 trabalhando junto",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 43,
      "start": 240.8857119299322,
      "stop": 242670.15205323073,
      "transcription": "panka pr\u00efhara",
      "translation": "As crian\u00e7as est\u00e3o aqui",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 44,
      "start": 242.67015205323074,
      "stop": 245324.69107962525,
      "transcription": "r\u00eankj\u00e4ri kj\u00e4 pan m\u00e4 ransw\u00e2ri pr\u00efhara",
      "translation": " assim que, eu estava preocupado com as crian\u00e7as.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 45,
      "start": 245.32469107962524,
      "stop": 246597.80108443028,
      "transcription": "pr\u00eb\u00eb h\u00eb tij\u00e4ri",
      "translation": "Quem e foram.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 46,
      "start": 246.59780108443027,
      "stop": 249174.00093849254,
      "transcription": "h\u00ef jatt\u00e4 kypy r\u00ea m\u00ffn hapan h\u00ef",
      "translation": "Sera ficaram muitos longe andando.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 47,
      "start": 249.17400093849253,
      "stop": 252093.99386752644,
      "transcription": "su ho t\u00ebr\u00e4p\u00f4 iss\u00ea suu",
      "translation": "correndo levando o arco.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 48,
      "start": 252.09399386752645,
      "stop": 255420.41922689832,
      "transcription": "py surap\u00f4\u00f4",
      "translation": "voltou chegando.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 49,
      "start": 255.4204192268983,
      "stop": 257883.24154583097,
      "transcription": "p\u00eb\u00eb pa",
      "translation": "conversando e andando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 50,
      "start": 257.88324154583097,
      "stop": 260419.8010599412,
      "transcription": "ja ham\u00e4 r\u00f6\u00f6 pakrep\u00e4\u00e4",
      "translation": "Igarapezinho esta aqui",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 51,
      "start": 260.4198010599412,
      "stop": 263097.33910175,
      "transcription": "jak\u00f4py jy p\u00ean rap\u00efri s\u00f6s\u00eankr\u00e2",
      "translation": "Andando pelo dire\u00e7\u00e3o de afluencia.",
      "notes": "fork to different river distributary. Consultant's notes (P\u00earank\u00f4) suggest that this is used as a road, and its meeting is that of an intersection on a path. (p\u00ean is being used ablatively within the verb complex)",
      "words": [
        ""
      ]
    },
    {
      "id": 52,
      "start": 263.09733910175,
      "stop": 264203.3970294143,
      "transcription": "s\u00eahap\u00f4 k\u00f6\u00f6",
      "translation": "seguimos no rumo.",
      "notes": "along the other path (\"\"caminho\"\")",
      "words": [
        ""
      ]
    },
    {
      "id": 53,
      "start": 264.2033970294143,
      "stop": 266105.816664997,
      "transcription": "jaap\u00ea r\u00f6\u00f6 t\u00f6",
      "translation": "Aqui temos outro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 54,
      "start": 266.105816664997,
      "stop": 268981.56727692427,
      "transcription": "[j\u00e2] jan ti raapan",
      "translation": "ja fui passaram ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 55,
      "start": 268.9815672769243,
      "stop": 271326.41008357273,
      "transcription": "jan ti raapan",
      "translation": "ja fui passaram",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 56,
      "start": 271.32641008357274,
      "stop": 274403.4281518722,
      "transcription": "p\u00eb\u00eb pa tij\u00e4\u00e4ri",
      "translation": "Dialogando perto",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 57,
      "start": 274.40342815187216,
      "stop": 276792.51327562716,
      "transcription": "p\u00eb\u00eb pa",
      "translation": "Dialogando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 58,
      "start": 276.7925132756272,
      "stop": 281477.0021987987,
      "transcription": "ti m\u00ffn raakj\u00fcn m\u00e4m\u00e4n h\u00eb kj\u00e4nsiha h\u00eb jopy h\u00eb",
      "translation": "Ent\u00e3o, foram aproximou cabe\u00e7a grande  de on\u00e7a.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 59,
      "start": 281.4770021987987,
      "stop": 284500.22720108123,
      "transcription": "m\u00ffn ti m\u00ffn raakj\u00fcn s\u00e2p\u00efri jan",
      "translation": "J\u00e1 foram aproximou subindo pelo trilha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 60,
      "start": 284.50022720108126,
      "stop": 286790.2055461005,
      "transcription": "paak\u00f6\u00f6",
      "translation": "rastreando p\u00e9",
      "notes": "together?",
      "words": [
        ""
      ]
    },
    {
      "id": 61,
      "start": 286.7902055461005,
      "stop": 289562.7240847791,
      "transcription": "ti p\u00e2raj\u00f6ri",
      "translation": "Mexeram galhos.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 62,
      "start": 289.5627240847791,
      "stop": 291923.8417735899,
      "transcription": "ta r\u00ea p\u00ffnkw\u00e2 iss\u00ea",
      "translation": "J\u00e1 peguei logo o arco.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 63,
      "start": 291.9238417735899,
      "stop": 294858.58214165934,
      "transcription": "m\u00e4ra s\u00e4 intakjakriti k\u00f6\u00f6",
      "translation": "Fiquei desperado na madeira branca pelo posi\u00e7\u00e3o",
      "notes": "intakjakriti = name of a kind of wood that grows in the rainy season",
      "words": [
        ""
      ]
    },
    {
      "id": 64,
      "start": 294.8585821416593,
      "stop": 297763.82763165765,
      "transcription": "[m\u00e4ra] m\u00e4ra s\u00e4 m\u00ffn imm\u00f6ri",
      "translation": "Desperando ,aproximou andando",
      "notes": "m\u00ffrimm\u00f6ri, m\u00ffn imm\u00f6ri, ??",
      "words": [
        ""
      ]
    },
    {
      "id": 65,
      "start": 297.76382763165765,
      "stop": 299901.1353898729,
      "transcription": "sanpann\u00f6 h\u00e4 m\u00f6rap\u00ean",
      "translation": "Brincando seguindo andando.",
      "notes": "m\u00f6r\u00e4p\u00ean? m\u00f6r\u00e4 p\u00ean?",
      "words": [
        ""
      ]
    },
    {
      "id": 66,
      "start": 299.9011353898729,
      "stop": 301916.27906650864,
      "transcription": "m\u00e4ra jynkj\u00f4n",
      "translation": "Pensava que fiquei distancia",
      "notes": "jy inkj\u00f4n",
      "words": [
        ""
      ]
    },
    {
      "id": 67,
      "start": 303.0128450263686,
      "stop": 304590.7864192713,
      "transcription": "sanpann\u00f6 p\u00f4",
      "translation": "Brincando seguindo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 68,
      "start": 306.0360700286511,
      "stop": 310180.10039763356,
      "transcription": "t\u00e2tam\u00e4 su r\u00eaj\u00efn t\u00eahokin m\u00e4m\u00e4",
      "translation": "Ent\u00e3o, conseguiu acertar ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 69,
      "start": 310.18010039763357,
      "stop": 312561.39048620075,
      "transcription": "p\u00ea ta m\u00e4su kiti",
      "translation": "aproximou pouco",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 70,
      "start": 312.56139048620076,
      "stop": 315289.6667077728,
      "transcription": "r\u00ea s\u00efr\u00f6p\u00efri",
      "translation": "ent\u00e3o, acertaram vertebral",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 71,
      "start": 315.2896667077728,
      "stop": 317605.01463635016,
      "transcription": "r\u00ea s\u00efr\u00f6p\u00efri",
      "translation": "ent\u00e3o, acertaram vertebral",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 72,
      "start": 317.6050146363502,
      "stop": 319772.8881745723,
      "transcription": "p\u00ean jy t\u00ebn pakjapp\u00e4\u00e4",
      "translation": "ent\u00e3o, corremos pelo igarapezinho",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 73,
      "start": 319.7728881745723,
      "stop": 322825.8363255214,
      "transcription": "[to kr\u00f6] pokkree ham\u00e4",
      "translation": "no buraco, de bambu",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 74,
      "start": 322.8258363255214,
      "stop": 324816.7405953172,
      "transcription": "p\u00ean jy s\u00e2 s\u00f4nn\u00f6 hankj\u00e2",
      "translation": "ent\u00e3o, ficou mexendo",
      "notes": "NOT jyhankj\u00e2",
      "words": [
        ""
      ]
    },
    {
      "id": 75,
      "start": 324.8167405953172,
      "stop": 326969.86669450375,
      "transcription": "t\u00e2tam\u00e4 r\u00eaj\u00efn t\u00ea m\u00e4npe m\u00e4 [p]",
      "translation": "conseguiu acertar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 76,
      "start": 326.96986669450376,
      "stop": 329137.74023272586,
      "transcription": "jan ta r\u00e4 kj\u00e4kw\u00e2ri",
      "translation": "nesse dia pegara",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 77,
      "start": 329.1377402327259,
      "stop": 331187.6342586638,
      "transcription": "jan ta r\u00e4kr\u00eb\u00eb",
      "translation": "nesse tempo comera",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 78,
      "start": 331.1876342586638,
      "stop": 335283.4994686696,
      "transcription": "r\u00ea sap\u00f4p\u00f4 m\u00e4m\u00e4nn\u00ef r\u00f6j\u00e2n",
      "translation": "ent\u00e3o, flechando por enquanto deitado.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 79,
      "start": 335.28349946866956,
      "stop": 338171.42449884594,
      "transcription": "ho rak\u00f4",
      "translation": "tomando ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 80,
      "start": 338.17142449884597,
      "stop": 343731.43728583434,
      "transcription": "m\u00e4m\u00e4n p\u00ean \"\"jutt\u00e4 ka hakwyy?\"\"",
      "translation": "ent\u00e3o, aonde  eu vou andar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 81,
      "start": 343.7314372858343,
      "stop": 346666.1776539037,
      "transcription": "s\u00e2kinp\u00ea jy rakwyy janpj\u00e2",
      "translation": "por enquanto eu estava com sa\u00fadavel.",
      "notes": "s\u00e2/s\u00ea from consultant",
      "words": [
        ""
      ]
    },
    {
      "id": 82,
      "start": 346.66617765390373,
      "stop": 348406.3754600956,
      "transcription": "k\u00f4py pa jy kwyy",
      "translation": "eu vou nesse trilha.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 83,
      "start": 348.4063754600956,
      "stop": 350603.7438763888,
      "transcription": "py jatoo kri k\u00f4py r\u00eankj\u00e4n h\u00e4kwa",
      "translation": "eu vou chegar certo na aldeia, pensava que.",
      "notes": "ja not jy ha? py ja too = apareceu de novo",
      "words": [
        ""
      ]
    },
    {
      "id": 84,
      "start": 350.6037438763888,
      "stop": 353200.82058976794,
      "transcription": "rakwyy",
      "translation": "andando.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 85,
      "start": 353.9335166936039,
      "stop": 358111.7177885977,
      "transcription": "jy rahomm\u00f6ri, jy rahomm\u00f6ri",
      "translation": "j\u00e1 come\u00e7ei, j\u00e1 come\u00e7ei.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 86,
      "start": 358.1117177885977,
      "stop": 360148.3918186269,
      "transcription": "m\u00e4m\u00e4n r\u00eankj\u00eb s\u00ea p\u00efri jopy",
      "translation": "ent\u00e3o eu matei a on\u00e7a",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 87,
      "start": 360.1483918186269,
      "stop": 362227.78072263586,
      "transcription": "jopykriti h\u00eb r\u00eankj\u00eb s\u00ea p\u00efri",
      "translation": "eu matei cria\u00e7\u00e3o de on\u00e7a.",
      "notes": "[jopkriti] = jokkriti",
      "words": [
        ""
      ]
    },
    {
      "id": 88,
      "start": 362.2277807226359,
      "stop": 364012.2208459344,
      "transcription": "jy rahomm\u00f6ri",
      "translation": "ja come\u00e7ei.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 89,
      "start": 364.0122208459344,
      "stop": 366504.53804293805,
      "transcription": "[pun] jy rat\u00ebn",
      "translation": "(cai) eu cai",
      "notes": "pun = sound effect",
      "words": [
        ""
      ]
    },
    {
      "id": 90,
      "start": 366.50453804293807,
      "stop": 369623.20008328126,
      "transcription": "kypy ra r\u00f6",
      "translation": "devo estar deitado",
      "notes": "he thinks to himself, i must be laying",
      "words": [
        ""
      ]
    },
    {
      "id": 91,
      "start": 369.6232000832813,
      "stop": 372557.9404513507,
      "transcription": "kypy s\u00ea r\u00f6",
      "translation": "ainda deitado",
      "notes": "unsure of transl",
      "words": [
        ""
      ]
    },
    {
      "id": 92,
      "start": 372.5579404513507,
      "stop": 376569.2438690134,
      "transcription": "ra supp\u00f4\u00f4 kj\u00ebr\u00e4pj\u00e2",
      "translation": " Chegou, minha m\u00e3e.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 93,
      "start": 376.5692438690134,
      "stop": 381662.76356758573,
      "transcription": "kj\u00ebr\u00e4pj\u00e2 pytinsi jy ra supp\u00f4\u00f4 kjati",
      "translation": "Minha m\u00e3e verdadeiro chegou primeiro",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 94,
      "start": 381.6627635675857,
      "stop": 385674.0669852484,
      "transcription": "pj\u00e4n h\u00eb ti kawaj\u00e4ra krii tij\u00e4\u00e4",
      "translation": "O que aconteceu com vc, n\u00e3o mentir.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 95,
      "start": 385.67406698524843,
      "stop": 389405.16906123614,
      "transcription": "m\u00ffn h\u00eb r\u00eankj\u00e4ri inkj\u00eb h\u00eb",
      "translation": "Porque aconteceu com voc\u00ea. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 96,
      "start": 389.40516906123617,
      "stop": 393187.4658581781,
      "transcription": "jy ra k\u00e4r\u00efn kwyy kj\u00ebr\u00e4pj\u00e2",
      "translation": "Minha m\u00e3e chorou por causa de mi.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 97,
      "start": 393.1874658581781,
      "stop": 395827.257445537,
      "transcription": "m\u00e4m\u00e4n p\u00ean ti m\u00eb p\u00efn jaj\u00efn",
      "translation": "Ent\u00e3o, aproximou junto",
      "notes": "another spirit is coming",
      "words": [
        ""
      ]
    },
    {
      "id": 98,
      "start": 395.82725744553704,
      "stop": 398717.7554964999,
      "transcription": "p\u00f4\u00f4 t\u00f6 [kj\u00ebr\u00e4p] kj\u00ebj\u00fcnpj\u00e2",
      "translation": "Minha m\u00e3e chegou, meu pai chegou",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 99,
      "start": 398.7177554964999,
      "stop": 400829.4658942381,
      "transcription": "ti rankwa tooja t\u00f6ha",
      "translation": "Fui fazer enfrente",
      "notes": "many relatives came",
      "words": [
        ""
      ]
    },
    {
      "id": 100,
      "start": 400.82946589423807,
      "stop": 404295.1140675863,
      "transcription": "m\u00e4m\u00e4nn\u00e2n ti pen m\u00eb raj\u00efn",
      "translation": "Ent\u00e3o, os dois aproximaram juntos.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 101,
      "start": 404.2951140675863,
      "stop": 407006.2152505308,
      "transcription": "jy m\u00ebnkw\u00e2",
      "translation": "ir desceram",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 102,
      "start": 407.00621525053083,
      "stop": 409573.797085839,
      "transcription": "m\u00e4m\u00e4n p\u00ean",
      "translation": "Ent\u00e3o, passando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 103,
      "start": 409.573797085839,
      "stop": 412906.71830786753,
      "transcription": "h\u00ea raapj\u00f6n",
      "translation": "E juntaram",
      "notes": "n~r",
      "words": [
        ""
      ]
    },
    {
      "id": 104,
      "start": 412.90671830786755,
      "stop": 416477.1259975913,
      "transcription": "m\u00e4m\u00e4n pj\u00e2har\u00e2n taj\u00efn raty hapj\u00e2r\u00e2n r\u00ea rappj\u00f6",
      "translation": "Ent\u00e3o,foram lamentavel pessoas segurou. ",
      "notes": "maybe m\u00e4m\u00e4npj\u00e2r\u00e2n; he killed a jaguar and the spirits came to haunt him",
      "words": [
        ""
      ]
    },
    {
      "id": 105,
      "start": 416.4771259975913,
      "stop": 419087.4227068792,
      "transcription": "rankj\u00eatt\u00f6 hapj\u00e2r\u00e2n",
      "translation": "S\u00e3o outros meus irm\u00e3os. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 106,
      "start": 419.0874227068792,
      "stop": 421566.79708270973,
      "transcription": "kj\u00ebr\u00e4pj\u00e2 t\u00f6 hapj\u00e2r\u00e2n",
      "translation": "S\u00e3o outras minhas  tias.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 107,
      "start": 421.56679708270974,
      "stop": 424962.3279100623,
      "transcription": "kj\u00eb k\u00f4s\u00f4pj\u00e2 hapj\u00e2r\u00e2n ratys\u00e2 tej\u00efn",
      "translation": "pr\u00f3prios irm\u00e3s foram lamentavel.",
      "notes": "come back and normalize t_j\u00efn",
      "words": [
        ""
      ]
    },
    {
      "id": 108,
      "start": 424.9623279100623,
      "stop": 427906.619027042,
      "transcription": "r\u00ea raapj\u00f6 jy rankwyy",
      "translation": "ser juntaram ir choraram.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 109,
      "start": 427.906619027042,
      "stop": 430826.6119560758,
      "transcription": "raak\u00e4n rankwyy",
      "translation": "est\u00e3o chorando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 110,
      "start": 430.82661195607585,
      "stop": 435171.9097814304,
      "transcription": "pj\u00e4n h\u00eb, pj\u00e4n h\u00eb",
      "translation": "o que fui o que fui",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 111,
      "start": 435.1719097814304,
      "stop": 438342.60917406814,
      "transcription": "japjo r\u00ea raj\u00ef s\u00fcn",
      "translation": "eu n\u00e3o poderia contar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 112,
      "start": 438.3426091740682,
      "stop": 441811.08396307455,
      "transcription": "rahak\u00e4n rankwyy peppjo",
      "translation": "todos choraram para mim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 113,
      "start": 441.81108396307457,
      "stop": 444524.6127456111,
      "transcription": "r\u00ea raapj\u00f6n pytinsi",
      "translation": "todos ser juntaram para ele",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 114,
      "start": 444.52461274561114,
      "stop": 446766.22347901086,
      "transcription": "j\u00e2n jop\u00eb kwaa",
      "translation": "quem e a on\u00e7a",
      "notes": "jop\u00eb = jopy h\u00eb",
      "words": [
        ""
      ]
    },
    {
      "id": 115,
      "start": 446.7662234790109,
      "stop": 449823.2929750605,
      "transcription": "jop\u00eb kwaankj\u00e4ri raa s\u00ea ranto",
      "translation": "socorro a on\u00e7a fizeram assim,que olhou",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 116,
      "start": 449.8232929750605,
      "stop": 451858.4395619629,
      "transcription": "rahak\u00e4n ras\u00ea",
      "translation": "ficaram juntos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 117,
      "start": 451.8584395619629,
      "stop": 453952.57590500737,
      "transcription": "r\u00ea raanp\u00fcn [h\u00e4n]",
      "translation": "ent\u00e3o,olhram sim",
      "notes": "[h\u00e4n] = susto",
      "words": [
        ""
      ]
    },
    {
      "id": 118,
      "start": 453.9525759050074,
      "stop": 456902.0637121123,
      "transcription": "r\u00ea raanp\u00fcn peppjo r\u00ea",
      "translation": "ainda, est\u00e3o olhando ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 119,
      "start": 456.9020637121123,
      "stop": 460264.47981221194,
      "transcription": "jurinkwaj\u00e4ri, jurinkwaj\u00e4ri r\u00eankj\u00e4ri",
      "translation": "cad\u00ea quem fizeram,cad\u00ea quem fizeram assim pensei",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 120,
      "start": 460.26447981221196,
      "stop": 462211.37003549666,
      "transcription": "jurinkwaj\u00e4",
      "translation": "cad\u00ea,quem fez",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 121,
      "start": 462.21137003549666,
      "stop": 465927.7246724488,
      "transcription": "ti s\u00ea k\u00e2ri ka k\u00f4",
      "translation": "cortamos varas de galhos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 122,
      "start": 465.92772467244885,
      "stop": 470617.41028574575,
      "transcription": "jy su rattoo",
      "translation": "foram indo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 123,
      "start": 470.61741028574573,
      "stop": 475314.04830289015,
      "transcription": "jan, jan ta raty inkj\u00eb, jan ta raty.",
      "translation": " antepassado ja tinha morrerem, no passado morria",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 124,
      "start": 475.31404830289017,
      "stop": 478352.0207442083,
      "transcription": "jan r\u00ea ra p\u00efrakwa",
      "translation": "antepassado quase morria",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 125,
      "start": 478.3520207442083,
      "stop": 480534.6417214659,
      "transcription": "ja ho",
      "translation": "com este",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 126,
      "start": 480.5346417214659,
      "stop": 483668.05120084475,
      "transcription": "t\u00e2ta m\u00e4 su r\u00eaj\u00efn t\u00ea m\u00e4npe m\u00e4 su",
      "translation": " conseguiu acertarem correto",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 127,
      "start": 483.66805120084473,
      "stop": 485998.14656845765,
      "transcription": "r\u00ea rankwaj\u00e4 r\u00e4nkj\u00e2",
      "translation": "estavam mexendo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 128,
      "start": 485.9981465684576,
      "stop": 487354.9109597259,
      "transcription": "jah\u00eb, m\u00e4m\u00e4n h\u00eb",
      "translation": "ent\u00e3o com essa",
      "notes": "come back to split pronoun",
      "words": [
        ""
      ]
    },
    {
      "id": 129,
      "start": 487.3549109597259,
      "stop": 489522.784497948,
      "transcription": "r\u00ea ho r\u00f6kj\u00ean ten jopy",
      "translation": "passaram eva na on\u00e7a",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 130,
      "start": 489.522784497948,
      "stop": 491661.1631580991,
      "transcription": "ho r\u00f6kj\u00ean",
      "translation": "v\u00e3o passando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 131,
      "start": 491.6611631580991,
      "stop": 494862.8848719348,
      "transcription": "m\u00e4m\u00e4 ra t\u00e4 j\u00efs\u00fcn jan",
      "translation": "ent\u00e3o vou contar antes",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 132,
      "start": 494.8628848719348,
      "stop": 498116.67768567894,
      "transcription": "jan [r\u00ea] jan r\u00ea p\u00efri kriti, kriti",
      "translation": "no passado no passado matei cria\u00e7\u00e3o, cria\u00e7\u00e3o",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 133,
      "start": 498.11667768567895,
      "stop": 502512.90772010165,
      "transcription": "ti kin ho rakjari, kj\u00ebr\u00e4pj\u00e2 h\u00eb, ti kin ho rakjari s\u00f6p\u00e4\u00e4 jap\u00ea",
      "translation": "minha m\u00e3e me assustou, minha m\u00e3e me assustou pensava que meu filho",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 134,
      "start": 502.5129077201016,
      "stop": 505152.6993074605,
      "transcription": "ti ho ra kj\u00e4kw\u00e2ri",
      "translation": "quase me atacou",
      "notes": "ti ho => too",
      "words": [
        ""
      ]
    },
    {
      "id": 135,
      "start": 505.1526993074605,
      "stop": 507970.98760637257,
      "transcription": "kj\u00ebr\u00e4pj\u00e2 h\u00eb ti ho rakjari",
      "translation": "minha m\u00e3e me assustou",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 136,
      "start": 507.97098760637255,
      "stop": 511584.110170076,
      "transcription": "[ti ra] ti raaso",
      "translation": "passou passou dire\u00e7\u00e3o",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 137,
      "start": 511.58411017007603,
      "stop": 514051.0582771979,
      "transcription": "m\u00e4m\u00e4n p\u00ean",
      "translation": "ent\u00e3o iremos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 138,
      "start": 514.0510582771979,
      "stop": 516292.6690105976,
      "transcription": "pjas\u00e2n rap\u00f4\u00f4",
      "translation": "iremos chegando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 139,
      "start": 516.2926690105976,
      "stop": 518681.75413435255,
      "transcription": "p\u00e4\u00e4, pyr\u00ebn ho",
      "translation": "v\u00e3o embora",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 140,
      "start": 518.6817541343526,
      "stop": 521029.42355665914,
      "transcription": "pyr\u00ebn ho, r\u00eankj\u00e4\u00e4",
      "translation": "podemos ir assim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 141,
      "start": 521.0294235566591,
      "stop": 526215.3254070386,
      "transcription": "r\u00ea raapj\u00e2ri pj\u00f6npj\u00f6 s\u00ea p\u00e4\u00e4 pytinsi ho",
      "translation": "iremos carregando com embira pequena",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 142,
      "start": 526.2153254070386,
      "stop": 530359.3557760208,
      "transcription": "[ha] m\u00e4ra r\u00ea ho pytt\u00ebn, r\u00ea ra ho pytt\u00ebn",
      "translation": "era proximos distancias foram tarde",
      "notes": "r\u00ea ho pytt\u00ebn = 3/4pm has come",
      "words": [
        ""
      ]
    },
    {
      "id": 143,
      "start": 530.3593557760208,
      "stop": 532379.9831944834,
      "transcription": "[hu] kj\u00e4 hankj\u00e2",
      "translation": "era perto",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 144,
      "start": 532.3799831944834,
      "stop": 534636.3413669188,
      "transcription": "hapon",
      "translation": "rumo plano",
      "notes": "flat, clean trail",
      "words": [
        ""
      ]
    },
    {
      "id": 145,
      "start": 534.6363413669187,
      "stop": 539945.4194197075,
      "transcription": "[p\u00e2] raap\u00ea ty pr\u00eapr\u00ea\u00ea",
      "translation": "ir desmaiar sempre",
      "notes": "pr\u00eapr\u00ea\u00ea = desmaiar (faint=die and come back)",
      "words": [
        ""
      ]
    },
    {
      "id": 146,
      "start": 539.9454194197075,
      "stop": 544076.2297927812,
      "transcription": "jap\u00ean ti raho pytt\u00ebn pytinsi",
      "translation": "ja horario passando era tarde",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 147,
      "start": 544.0762297927812,
      "stop": 548529.9563815095,
      "transcription": "maja h\u00e4 rak\u00e4n t\u00e4 j\u00efs\u00fcn inkj\u00eb h\u00eb jopy",
      "translation": "e assim eu contarei sobre on\u00e7a",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 148,
      "start": 548.5299563815096,
      "stop": 552814.7459897343,
      "transcription": "[p\u00ean ra] m\u00e4m\u00e4n p\u00ean",
      "translation": "e assim ent\u00e3o assim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 149,
      "start": 552.8147459897343,
      "stop": 555852.8083006616,
      "transcription": "r\u00ea raho pjyr\u00e4\u00e4 krekj\u00e4 t\u00e4",
      "translation": "conseguimos dire\u00e7\u00e3o de trilha escurecendo",
      "notes": "pjyr\u00e4ri = trilhas (outras)",
      "words": [
        ""
      ]
    },
    {
      "id": 150,
      "start": 555.8528083006616,
      "stop": 558167.5224423206,
      "transcription": "krekj\u00e4 t\u00e4 r\u00ea raho pjyr\u00e4\u00e4",
      "translation": "quase escureceu conseguiu chega trilha ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 151,
      "start": 558.1675224423205,
      "stop": 560337.5669501257,
      "transcription": "h\u00e4\u00e4nk\u00f4",
      "translation": "cade \u00e1gua",
      "notes": "falsetto? reported speech?",
      "words": [
        ""
      ]
    },
    {
      "id": 152,
      "start": 560.3375669501257,
      "stop": 561610.659728038,
      "transcription": "h\u00efnk\u00f4\u00f4",
      "translation": "cade \u00e1gua",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 153,
      "start": 561.6106597280381,
      "stop": 563375.629261053,
      "transcription": "h\u00efnk\u00f4\u00f4 r\u00eankj\u00e4\u00e4",
      "translation": "cade \u00e1gua assim",
      "notes": "because he's very thirsty",
      "words": [
        ""
      ]
    },
    {
      "id": 154,
      "start": 563.3756292610531,
      "stop": 567426.3790089561,
      "transcription": "ink\u00f4 m\u00e4 kujas\u00e2ri, ink\u00f4 m\u00e4 kujas\u00e2ri",
      "translation": "coloque \u00e1gua,coloque \u00e1gua",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 155,
      "start": 567.4263790089561,
      "stop": 570840.582367903,
      "transcription": "inkj\u00eb sankj\u00e2n kak\u00f4 rak\u00f6n",
      "translation": "por mi colocava \u00e1gua para beber",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 156,
      "start": 570.8405823679029,
      "stop": 571968.0494310508,
      "transcription": "r\u00ea rak\u00f6n",
      "translation": "tomamos \u00e1gua",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 157,
      "start": 571.9680494310508,
      "stop": 574601.0367671878,
      "transcription": "t\u00e4 r\u00efnkj\u00e4ri",
      "translation": "estava assim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 158,
      "start": 574.6010367671878,
      "stop": 576163.4688128076,
      "transcription": "t\u00e4 r\u00efnkj\u00e4ri inkj\u00eb h\u00eb",
      "translation": "eu estarei assim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 159,
      "start": 578.5110697615199,
      "stop": 581415.5475284589,
      "transcription": "m\u00e4m\u00e4n p\u00ean",
      "translation": "assim estara",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 160,
      "start": 581.4155475284589,
      "stop": 583975.6290409062,
      "transcription": "raho rakwyy",
      "translation": " seguimos andando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 161,
      "start": 583.9756290409063,
      "stop": 586637.550303814,
      "transcription": "pyri ho hopap\u00f4\u00f4 j\u00e2n",
      "translation": "iremos chegando logo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 162,
      "start": 586.637550303814,
      "stop": 588199.9823494337,
      "transcription": "raho rakwyy",
      "translation": " seguimos andando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 163,
      "start": 588.1999823494338,
      "stop": 590389.2223928462,
      "transcription": "jy raho ra r\u00eank\u00f4 h\u00e4",
      "translation": "seguindo atravesando pelo rio",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 164,
      "start": 590.3892223928462,
      "stop": 592014.47767706,
      "transcription": "pym\u00eb m\u00eb kujas\u00e2ri ink\u00f4",
      "translation": "possiveis colocarem \u00e1gua",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 165,
      "start": 592.01447767706,
      "stop": 592900.5007993422,
      "transcription": "py rak\u00f6n",
      "translation": "tomamos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 166,
      "start": 592.9005007993421,
      "stop": 596806.5809133914,
      "transcription": "n\u00e4nkj\u00e2n kypy m\u00e4 s\u00e2t\u00eapin",
      "translation": "vindo proximos chegando perto",
      "notes": "s\u00e2t\u00eapin = chegando (s\u00e2 PLAC, t\u00eapi approach)",
      "words": [
        ""
      ]
    },
    {
      "id": 167,
      "start": 596.8065809133915,
      "stop": 599671.0396636943,
      "transcription": "ra k\u00e4kkwan inkj\u00eb",
      "translation": "enquanto eu fiquei deitado",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 168,
      "start": 599.6710396636944,
      "stop": 604509.1385843364,
      "transcription": "[j\u00e4nt\u00eari] j\u00e4nt\u00eari k\u00e2s\u00f4ha pinkj\u00e2",
      "translation": "filho e k\u00e2s\u00f4ha lembrando essa",
      "notes": "pinkj\u00e2 = falecido",
      "words": [
        ""
      ]
    },
    {
      "id": 169,
      "start": 604.5091385843364,
      "stop": 606563.4473850587,
      "transcription": "m\u00e4m\u00e4 m\u00ffn raa t\u00e4kwyy",
      "translation": "ent\u00e3o,vem aqui",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 170,
      "start": 606.5634473850587,
      "stop": 608617.7561857809,
      "transcription": "kwyy m\u00ffn raa t\u00e4kwyy",
      "translation": "vem para encontrar",
      "notes": "he's coming to find it; ky~kwy",
      "words": [
        ""
      ]
    },
    {
      "id": 171,
      "start": 608.6177561857809,
      "stop": 612147.6952518108,
      "transcription": "h\u00e4 tij\u00e4ri",
      "translation": "vem pr\u00f3ximos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 172,
      "start": 612.1476952518108,
      "stop": 614954.2861485721,
      "transcription": "r\u00f6 rakwyy jakwa",
      "translation": "vem quase andando",
      "notes": "andando junto",
      "words": [
        ""
      ]
    },
    {
      "id": 173,
      "start": 616.6613878280456,
      "stop": 618800.0091084071,
      "transcription": "jy rap\u00ea k\u00e2\u00e2",
      "translation": "ai gritou ",
      "notes": "gritou",
      "words": [
        ""
      ]
    },
    {
      "id": 174,
      "start": 618.800009108407,
      "stop": 621982.7410531881,
      "transcription": "[ho reeeeee]",
      "translation": "cade gritou gritou",
      "notes": "calling out to see where the other person",
      "words": [
        ""
      ]
    },
    {
      "id": 175,
      "start": 621.9827410531881,
      "stop": 627595.9228467109,
      "transcription": "[pum] m\u00e4m\u00e4nn\u00ef r\u00ea ramm\u00ebn [haa haa haa]",
      "translation": "jogou no ch\u00e3o, ent\u00e3o desmaio socorro,socorro",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 176,
      "start": 627.5959228467109,
      "stop": 629476.6280868087,
      "transcription": "[haa] r\u00eankj\u00e4ri inkj\u00eb h\u00eb",
      "translation": "ai socorro assim eu fiquei",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 177,
      "start": 629.4766280868088,
      "stop": 630707.6335005128,
      "transcription": "ratty",
      "translation": "desmaio",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 178,
      "start": 630.7076335005128,
      "stop": 633643.1135417947,
      "transcription": "[haa haa haa]",
      "translation": "socorro,socorro,socorro",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 179,
      "start": 633.6431135417947,
      "stop": 636825.8454865757,
      "transcription": "[haa] r\u00eankj\u00e4ri. m\u00e4m\u00e4n p\u00ean,",
      "translation": "ai socorro fiquei , ent\u00e3o assim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 180,
      "start": 636.8258454865758,
      "stop": 639349.230265559,
      "transcription": "[raho py ra] py ra j\u00ef",
      "translation": "ir fiquei levantando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 181,
      "start": 639.3492302655591,
      "stop": 642126.8872355497,
      "transcription": "ta. py ra j\u00ef ta",
      "translation": "sim sentei mesmo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 182,
      "start": 642.1268872355497,
      "stop": 644296.9317433549,
      "transcription": "p\u00efmm\u00e4 rak\u00e2pp\u00f4\u00f4",
      "translation": "comunicando assoviando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 183,
      "start": 644.2969317433549,
      "stop": 646892.3734702544,
      "transcription": "r\u00ea ho t\u00e2ta m\u00e4 r\u00ea paa",
      "translation": "muito medroso aproximando andando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 184,
      "start": 646.8923734702544,
      "stop": 649418.2367817753,
      "transcription": "paa r\u00ea ho t\u00e2ta m\u00e4 r\u00ea paa r\u00ea rankj\u00e4\u00e4",
      "translation": "porque muito medroso aproximou chegar foi assim",
      "notes": "r\u00ea paa = medroso",
      "words": [
        ""
      ]
    },
    {
      "id": 185,
      "start": 649.4182367817752,
      "stop": 655497.4279785942,
      "transcription": "japj\u00e2ra, haswa py rappa hapj\u00e2ra. m\u00e4m\u00e4n p\u00ean",
      "translation": "s\u00e3o para voc\u00eas alma de fundo que vivem. ent\u00e3o assim ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 186,
      "start": 655.4974279785943,
      "stop": 659635.9093810777,
      "transcription": "pyra k\u00e2p\u00efn p\u00efmm\u00e4 ra k\u00e2pp\u00f4\u00f4",
      "translation": " cada duplo assoviando por outro",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 187,
      "start": 659.6359093810778,
      "stop": 661810.8406065941,
      "transcription": "py p\u00efn surapp\u00f4\u00f4",
      "translation": "voltaram encontrarem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 188,
      "start": 661.8108406065941,
      "stop": 665174.3133134068,
      "transcription": "h\u00fcw\u00e4t\u00fcn [py ra k\u00e2] jy ra k\u00e2kwyy kaj\u00efn",
      "translation": "gritando pouco distancias andando assim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 189,
      "start": 665.1743133134067,
      "stop": 666315.3089064631,
      "transcription": "j\u00e4nt\u00eari pinkj\u00e2",
      "translation": "lembro filho ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 190,
      "start": 668.164163656312,
      "stop": 669405.5405410626,
      "transcription": "py rak\u00e2\u00e2 juujy",
      "translation": "gritoram pouco longe",
      "notes": "gritou longe (400-600m)",
      "words": [
        ""
      ]
    },
    {
      "id": 191,
      "start": 669.4055405410626,
      "stop": 670383.713268636,
      "transcription": "py r\u00eapy ho",
      "translation": "vamos levaremos",
      "notes": "pyr\u00ea - vamos (wants with other py though)",
      "words": [
        ""
      ]
    },
    {
      "id": 192,
      "start": 670.383713268636,
      "stop": 671279.3640116497,
      "transcription": "py r\u00eapy ho",
      "translation": "vamos levaremos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 193,
      "start": 671.2793640116497,
      "stop": 673417.5164962393,
      "transcription": "[m\u00e4r\u00e4h\u00eb] jatt\u00e4 ka kwyy kwaa",
      "translation": "voc\u00eas, vou andar sozinho",
      "notes": "kukkwa = andando sozinho",
      "words": [
        ""
      ]
    },
    {
      "id": 194,
      "start": 673.4175164962394,
      "stop": 675824.2281598641,
      "transcription": "jatt\u00e4 ka kwyy kwaa r\u00eankj\u00e4ri",
      "translation": "eu vou andar sozinho foi assim",
      "notes": "eu vou andar sozinho",
      "words": [
        ""
      ]
    },
    {
      "id": 195,
      "start": 675.8242281598641,
      "stop": 678454.2429675367,
      "transcription": "ha r\u00ea ra reej\u00efn",
      "translation": "sempre voces saltam",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 196,
      "start": 678.4542429675366,
      "stop": 681307.5609192568,
      "transcription": "r\u00ea ra ho sajap\u00ea",
      "translation": "come\u00e7ou o bra\u00e7o aberto",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 197,
      "start": 681.3075609192567,
      "stop": 685327.0175121146,
      "transcription": "m\u00e4 kwyy jy rap\u00f4\u00f4",
      "translation": "ir andando e cheguei",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 198,
      "start": 685.3270175121146,
      "stop": 687643.9901043025,
      "transcription": "jy rapp\u00f4\u00f4",
      "translation": "ir cheguei",
      "notes": "geminate???",
      "words": [
        ""
      ]
    },
    {
      "id": 199,
      "start": 687.6439901043026,
      "stop": 690770.2341209698,
      "transcription": "r\u00eamm\u00ebn iss\u00ea",
      "translation": "joguei o arco",
      "notes": "[nr]\u00ean\u00ebts\u00ea",
      "words": [
        ""
      ]
    },
    {
      "id": 200,
      "start": 690.7702341209698,
      "stop": 694789.6907138276,
      "transcription": "[p\u00fcm] jy rat\u00ebn suty ham\u00e4",
      "translation": "cair no  ch\u00e3o de tradicional",
      "notes": "suty ~ kwati suu (palha) (i don't understand what he's saying here); traditional style of mattrress",
      "words": [
        ""
      ]
    },
    {
      "id": 201,
      "start": 694.7896907138277,
      "stop": 697419.7055215002,
      "transcription": "haa rar\u00f6\u00f6 p\u00efmm\u00e4 kypy rar\u00f6\u00f6",
      "translation": "ficamos muitos so deitados ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 202,
      "start": 697.4197055215002,
      "stop": 699603.1140410773,
      "transcription": "[kha] t\u00e4 r\u00eankj\u00e4ri inkj\u00eb h\u00eb",
      "translation": "assim, eu fiquei assim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 203,
      "start": 699.6031140410773,
      "stop": 701364.7277330089,
      "transcription": "t\u00e4 r\u00eankj\u00e4ri",
      "translation": "assim foram",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 204,
      "start": 701.3647277330089,
      "stop": 703498.5133316865,
      "transcription": "r\u00ea sott\u00f6 p\u00efri pjo ja",
      "translation": "eu n\u00e3o matei isto",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 205,
      "start": 703.4985133316865,
      "stop": 708237.5022775868,
      "transcription": "n\u00e4jaa m\u00e4m\u00e4 [r\u00ea s] r\u00eanpar\u00e4nkj\u00e2, p\u00ebpyti",
      "translation": "assim foram essa,eu matava gente de bichos (p\u00ebpyti)",
      "notes": "p\u00ebpyti = forest dwarves??? short people-like things that live in the forest. v scary, aggressive",
      "words": [
        ""
      ]
    },
    {
      "id": 206,
      "start": 708.2375022775868,
      "stop": 710416.9187009068,
      "transcription": "[ja r\u00ea] ja r\u00ea honkj\u00eati",
      "translation": "muito tempo matei muito",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 207,
      "start": 710.4169187009068,
      "stop": 712600.3272204839,
      "transcription": "jopy, kj\u00e4nkj\u00eata p\u00e2r\u00e4kja",
      "translation": "a on\u00e7a cabe\u00e7a grande do mato",
      "notes": "p\u00e2r\u00e4kja = one of the forest",
      "words": [
        ""
      ]
    },
    {
      "id": 208,
      "start": 712.6003272204839,
      "stop": 714163.4492288175,
      "transcription": "ja r\u00ea ho sa",
      "translation": "ser\u00e1 colocando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 209,
      "start": 714.1634492288175,
      "stop": 715925.0629207491,
      "transcription": "intw\u00ffn ka kriti",
      "translation": "atr\u00e1s de cria\u00e7\u00e3o",
      "notes": "ka kriti = it will be my pet",
      "words": [
        ""
      ]
    },
    {
      "id": 210,
      "start": 715.925062920749,
      "stop": 718679.1350306702,
      "transcription": "jah\u00eb taa ra kj\u00e4kw\u00e2ri, taa ra p\u00efri",
      "translation": "estas quase me atacou era para morrerS",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 211,
      "start": 718.6791350306702,
      "stop": 724187.2792505125,
      "transcription": "[ja p] ja r\u00ea p\u00efri, [ja] ja r\u00ea ho r\u00f6 sisu kriti",
      "translation": "assim eu matei cria\u00e7\u00e3o no ultimo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 212,
      "start": 724.1872792505125,
      "stop": 727164.6545044812,
      "transcription": "m\u00e4m\u00e4n p\u00ean pjas\u00e2n rapa",
      "translation": "ent\u00e3o fiquei vivendo parado",
      "notes": "pjas\u00e2nn\u00e4ppa",
      "words": [
        ""
      ]
    },
    {
      "id": 213,
      "start": 727.1646545044813,
      "stop": 730613.4475069952,
      "transcription": "m\u00e4m\u00e4n p\u00ean pjas\u00e2n rapa",
      "translation": "ent\u00e3o fiquei vivendo parado",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 214,
      "start": 730.6134475069952,
      "stop": 737281.551894854,
      "transcription": "m\u00e4... kankj\u00e2n k\u00e4n homm\u00f6 m\u00e4ra",
      "translation": "bom vou contar para vc ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 215,
      "start": 737.281551894854,
      "stop": 742194.2210639026,
      "transcription": "m\u00e4m\u00e4 ka s\u00fcn, m\u00e4ra ta r\u00ea rap\u00ean",
      "translation": "ent\u00e3o vou para voces entenderem",
      "notes": "commentary about the fact that he hadn't seen this; the extra r\u00e4/t\u00e4 might be an old people thing; this ta is short for suresies",
      "words": [
        ""
      ]
    },
    {
      "id": 216,
      "start": 742.1942210639025,
      "stop": 749588.036277925,
      "transcription": "haa jah\u00e4 suu ra t\u00e4 rankwaj\u00e4ri ja, ja",
      "translation": "ent\u00e3o fazia muito esta",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 217,
      "start": 749.588036277925,
      "stop": 754227.7793820264,
      "transcription": "h\u00fcw\u00e4 s\u00f6kren h\u00eb",
      "translation": "sinal de corte",
      "notes": "h\u00eb = evidential, equiv of m\u00e4rah\u00eb",
      "words": [
        ""
      ]
    },
    {
      "id": 218,
      "start": 754.2277793820264,
      "stop": 761094.375453483,
      "transcription": "h\u00eb jah\u00e4 suu rat\u00e4 rankwaj\u00e4ri m\u00e4m\u00e4 kar\u00ea ku",
      "translation": "ali v\u00e3o atacarem para fazerem ir ao comerem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 219,
      "start": 761.0943754534829,
      "stop": 765808.5529389335,
      "transcription": "s\u00e2ti [jaa] jah\u00e4 rat\u00e4 rankwaj\u00e4",
      "translation": "o amendoim,est\u00e3o essa faziam assim",
      "notes": "peanuts are very important?; ratt\u00e4 r\u00e4nkwaj\u00e4 = fix up/make okay",
      "words": [
        ""
      ]
    },
    {
      "id": 220,
      "start": 765.8085529389335,
      "stop": 767917.5270771615,
      "transcription": "ha jah\u00e4 ka t\u00e4ns\u00f4?",
      "translation": "podem encostar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 221,
      "start": 767.9175270771615,
      "stop": 770522.7304243842,
      "transcription": "jah\u00e4 ka t\u00e4ns\u00f4",
      "translation": "podem encostar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 222,
      "start": 770.5227304243842,
      "stop": 773202.368152956,
      "transcription": "jah\u00e4 ka t\u00e4ns\u00f4",
      "translation": "podem encostar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 223,
      "start": 773.2023681529561,
      "stop": 776601.5382345705,
      "transcription": "m\u00e4r\u00ea r\u00ea ra k\u00e2kk\u00e2ri ja, m\u00e4ja",
      "translation": "era para fazer escalafica\u00e7\u00e3o",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 224,
      "start": 776.6015382345705,
      "stop": 781498.2196524151,
      "transcription": "jah\u00e4 pytt\u00e4n [ra k\u00e2] r\u00ea ra kr\u00e2syri ja",
      "translation": "aqui era jovem fez escalafica\u00e7\u00e3o",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 225,
      "start": 781.4982196524152,
      "stop": 784090.607194135,
      "transcription": "s\u00e2pj\u00e2 jakj\u00f4 h\u00eb",
      "translation": "proprio tio dele",
      "notes": "s\u00e2pj\u00e2 = s\u00f6 t\u00f6npy (his brother); it's not kjakj\u00f4, it's just a lot of saliva",
      "words": [
        ""
      ]
    },
    {
      "id": 226,
      "start": 784.0906071941349,
      "stop": 785281.5572957224,
      "transcription": "jakj\u00f4",
      "translation": "Iaki\u00f4 (nome)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 227,
      "start": 785.2815572957225,
      "stop": 786869.4907645058,
      "transcription": "swankja",
      "translation": "antigo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 228,
      "start": 786.8694907645058,
      "stop": 790938.5702782631,
      "transcription": "haa, s\u00e2pj\u00e2 jakj\u00f4 h\u00eb ti ra kr\u00e2syri ja m\u00fch\u00eb",
      "translation": "ent\u00e3o, o tio fez escalafica\u00e7\u00e3o assim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 229,
      "start": 790.9385702782631,
      "stop": 793816.699690433,
      "transcription": "m\u00fch\u00eb",
      "translation": "essa",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 230,
      "start": 793.816699690433,
      "stop": 797215.8697720473,
      "transcription": "m\u00e4m\u00e4n p\u00ean",
      "translation": "ent\u00e3o essa",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 231,
      "start": 797.2158697720473,
      "stop": 802029.293099297,
      "transcription": "ra r\u00f6kwyy taj\u00efn m\u00eb, ra r\u00f6kwyy",
      "translation": "seguimndo andando com essa",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 232,
      "start": 802.029293099297,
      "stop": 804436.0047629217,
      "transcription": "[m\u00e4ra] m\u00e4raran",
      "translation": "voces veram",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 233,
      "start": 804.4360047629217,
      "stop": 808065.7984341196,
      "transcription": "ra pjynp\u00fcr\u00e4nkj\u00e2n r\u00eapy rat\u00f6ppj\u00e2ri pjo ja, inkjon",
      "translation": "sempre viram trilhas n\u00e3o verem nada",
      "notes": "ra pjynnp\u00fcr\u00e4nkj\u00e2n = nunca vi mais a trilha",
      "words": [
        ""
      ]
    },
    {
      "id": 234,
      "start": 808.0657984341195,
      "stop": 811762.7060411307,
      "transcription": "t\u00e4n m\u00e4h\u00eb m\u00e4m\u00e4n, m\u00e4m\u00e4n jy k\u00e2kj\u00ean pija",
      "translation": "ent\u00e3o essa foram desmatamento",
      "notes": "pija = PROX DEMONSTR?",
      "words": [
        ""
      ]
    },
    {
      "id": 235,
      "start": 811.7627060411307,
      "stop": 814740.0812950995,
      "transcription": "m\u00e4m\u00e4h\u00eb k\u00e2kj\u00ean inkjon t\u00e4n rakwyy m\u00eb",
      "translation": " foram desmatamento, quando viviam em floresta protegido",
      "notes": "k\u00e2kj\u00ean kjon t\u00e4n = back when no pants",
      "words": [
        ""
      ]
    },
    {
      "id": 236,
      "start": 814.7400812950995,
      "stop": 817171.6044191739,
      "transcription": "rapp\u00f4\u00f4",
      "translation": "chegou",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 237,
      "start": 817.171604419174,
      "stop": 819876.0536081956,
      "transcription": "ja m\u00e4 rarapp\u00ea",
      "translation": "asim decido para escalafica\u00e7\u00e3o",
      "notes": "rarapp\u00ea = chest scarification (s\u00f6kwap\u00ea)",
      "words": [
        ""
      ]
    },
    {
      "id": 238,
      "start": 819.8760536081957,
      "stop": 820880.8214491985,
      "transcription": "ja",
      "translation": "essa",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 239,
      "start": 824.1732192013953,
      "stop": 825359.3863675882,
      "transcription": "rap\u00f4\u00f4",
      "translation": "chegou",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 240,
      "start": 825.3593863675882,
      "stop": 827245.0573617684,
      "transcription": "haty p\u00ean",
      "translation": "do mato ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 241,
      "start": 827.2450573617684,
      "stop": 829261.2369787298,
      "transcription": "m\u00e4m\u00e4ram\u00e4 rarapp\u00ean m\u00e4h\u00eb",
      "translation": "ent\u00e3o mesmo dia fazer escalafic\u00e7\u00e3o",
      "notes": "mesmo dia fez o escarifica\u00e7\u00e3o; unsure if m\u00e4ra ham\u00e4",
      "words": [
        ""
      ]
    },
    {
      "id": 242,
      "start": 829.2612369787298,
      "stop": 831955.2427509618,
      "transcription": "rapp\u00ean",
      "translation": "arranha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 243,
      "start": 831.9552427509618,
      "stop": 834758.9377817825,
      "transcription": "rarapp\u00ean",
      "translation": "fizemos arranha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 244,
      "start": 834.7589377817825,
      "stop": 841110.6716569159,
      "transcription": "t\u00e4 r\u00eankwaj\u00e4ri swankjar\u00e2n, inkj\u00eb h\u00eb r\u00ea sotaranp\u00fcn jah\u00e4, n\u00f6np\u00ean h\u00e4",
      "translation": "o antigo faziam assim, eu vir proprio pelo observa\u00e7ao uso de escalafica\u00e7\u00e3o",
      "notes": "swankjara r\u00eankwaj\u00e4ri = p\u00eb\u00ebntw\u00ea \"\"r\u00eawaj\u00e4ri\"\"; unsure of r\u00ea",
      "words": [
        ""
      ]
    },
    {
      "id": 245,
      "start": 841.1106716569159,
      "stop": 843492.571860091,
      "transcription": "r\u00ea rak\u00f4 raap\u00ean inkj\u00eb",
      "translation": "eu fiquei arranhei junto",
      "notes": "eu trabalhei",
      "words": [
        ""
      ]
    },
    {
      "id": 246,
      "start": 843.492571860091,
      "stop": 844832.3907243769,
      "transcription": "rak\u00e2s\u00e2 ",
      "translation": "doendo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 247,
      "start": 844.8323907243769,
      "stop": 846941.3648626048,
      "transcription": "[ha] ja ka r\u00eankj\u00e4r\u00ef",
      "translation": "aiiiii fiquei assim",
      "notes": "isso que t\u00f4 falando pra vcs; orthographically nasalize i?",
      "words": [
        ""
      ]
    },
    {
      "id": 248,
      "start": 846.9413648626048,
      "stop": 849273.6421448804,
      "transcription": "ra k\u00e2s\u00e2npe",
      "translation": "fico doendo mesmo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 249,
      "start": 849.2736421448803,
      "stop": 851233.7475204098,
      "transcription": "ra k\u00e2s\u00e2 titati kr\u00ef",
      "translation": "fico sentido doendo sim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 250,
      "start": 851.2337475204098,
      "stop": 853338.7295623809,
      "transcription": "s\u00e2nn\u00f6 pjo kin",
      "translation": "sentimos muito doe sim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 251,
      "start": 853.338729562381,
      "stop": 855398.0807797094,
      "transcription": "n\u00e4 ta r\u00ea m\u00e4 has\u00ea t\u00e2ti",
      "translation": "sera voces aguentes",
      "notes": "stop and tie it down",
      "words": [
        ""
      ]
    },
    {
      "id": 252,
      "start": 855.3980807797094,
      "stop": 859740.0863584138,
      "transcription": "ha, rapj\u00f4ntw\u00ea t\u00e4n [rak\u00f6 rap] rak\u00f6 rapa",
      "translation": "bom, quando estava jovem andava",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 253,
      "start": 859.7400863584138,
      "stop": 862320.4782451867,
      "transcription": "ja ham\u00e4 r\u00ea rapp\u00ean m\u00e4h\u00eb",
      "translation": "nesse semana iniciou arranha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 254,
      "start": 862.3204782451868,
      "stop": 867152.5255900286,
      "transcription": "[ra] s\u00e2np\u00fcr\u00e4m\u00e4 m\u00e4ra cachimbo",
      "translation": "sim vimos base cachimbo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 255,
      "start": 867.1525255900286,
      "stop": 870284.9570495533,
      "transcription": "r\u00ea s\u00e2np\u00fcr\u00e4nkj\u00e2 ham\u00e4",
      "translation": "estaremos vimos nada",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 256,
      "start": 870.2849570495533,
      "stop": 872319.496806432,
      "transcription": "t\u00e4 r\u00eankwaj\u00e4ri",
      "translation": "assim faziam",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 257,
      "start": 872.3194968064321,
      "stop": 874289.1090043614,
      "transcription": "t\u00e4 ra rankwaj\u00e4ri swankjar\u00e2n",
      "translation": "assim os antigos faziam",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 258,
      "start": 874.2891090043614,
      "stop": 876388.6180504686,
      "transcription": "r\u00ea rap\u00ea h\u00eb",
      "translation": "assim arranhava",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 259,
      "start": 876.3886180504686,
      "stop": 879623.5730010555,
      "transcription": "swankjar\u00e2n r\u00ea sotoraanp\u00fcn",
      "translation": "os antigos observiam as coisas",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 260,
      "start": 879.6235730010555,
      "stop": 882352.8336505269,
      "transcription": "ra sap\u00f4p\u00f4 sikkreek\u00f4",
      "translation": "v\u00e3o perfurarem orelha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 261,
      "start": 882.3528336505269,
      "stop": 884858.7911559507,
      "transcription": "sikkreek\u00f4",
      "translation": "brinco",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 262,
      "start": 886.6495005338558,
      "stop": 887910.6007912687,
      "transcription": "sotoraanp\u00fcn",
      "translation": " vimos coisas",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 263,
      "start": 887.9106007912687,
      "stop": 888977.4935906075,
      "transcription": "swankjara",
      "translation": "os antigos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 264,
      "start": 888.9774935906075,
      "stop": 890863.1645847878,
      "transcription": "r\u00ea raak\u00e2jap\u00f4p\u00f4 m\u00e4h\u00eb",
      "translation": "si perfurando ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 265,
      "start": 890.8631645847878,
      "stop": 892649.5897371691,
      "transcription": "sak\u00e2",
      "translation": "boca",
      "notes": "bottom lip piercing",
      "words": [
        ""
      ]
    },
    {
      "id": 266,
      "start": 893.989408601455,
      "stop": 896985.4168427523,
      "transcription": "swankjar\u00e2n raa k\u00e2jap\u00f4p\u00f4",
      "translation": "os antigos perfuraram a boca",
      "notes": "doesn't have ja, rather ho?",
      "words": [
        ""
      ]
    },
    {
      "id": 267,
      "start": 896.9854168427522,
      "stop": 900186.0952407687,
      "transcription": "kjakk\u00e2kj\u00ean rappa pjo",
      "translation": "ficaram todos perfuro",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 268,
      "start": 900.1860952407687,
      "stop": 904712.402832343,
      "transcription": "[ruh\u00f4] ja, ja ham\u00e4 [su kj\u00ea] [ka kjakk\u00e2] kjakk\u00e2kj\u00ean ja ham\u00e4",
      "translation": "aqui come\u00e7ou sem perfura\u00e7\u00e3o na boca nessa aqui",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 269,
      "start": 904.7124028323431,
      "stop": 906537.8291159021,
      "transcription": "ja ham\u00e4 inkjon",
      "translation": "aqui n\u00e3o ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 270,
      "start": 906.5378291159021,
      "stop": 908991.5217955301,
      "transcription": "ja ham\u00e4 jy r\u00f6\u00f6ri h\u00eb",
      "translation": "aqui ficou sem mexer ver",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 271,
      "start": 908.99152179553,
      "stop": 910851.1521627258,
      "transcription": "[kr\u00e2] kr\u00e2ssyri m\u00eb",
      "translation": "reto femoral escalafica\u00e7\u00e3o",
      "notes": "geminate /s/ as [ks]",
      "words": [
        ""
      ]
    },
    {
      "id": 272,
      "start": 910.8511521627258,
      "stop": 913137.677595533,
      "transcription": "n\u00f6p\u00ean m\u00eb",
      "translation": "arranharem nem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 273,
      "start": 913.137677595533,
      "stop": 916115.0528495018,
      "transcription": "ja r\u00eankwaj\u00e4ri",
      "translation": "fizemos assim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 274,
      "start": 916.1150528495018,
      "stop": 918099.969685481,
      "transcription": "swankjar\u00e2n",
      "translation": "os anceistrais",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 275,
      "start": 918.099969685481,
      "stop": 919787.1489960634,
      "transcription": "r\u00ea ran n\u00e4nkaat\u00ea\u00ea",
      "translation": "ficaram muito feio",
      "notes": "rann\u00e4nkaa?; n\u00e4nkaa t\u00ea\u00ea has to do with the killing someone then getting scarified",
      "words": [
        ""
      ]
    },
    {
      "id": 276,
      "start": 919.7871489960634,
      "stop": 921151.779320799,
      "transcription": "rak\u00e2kkj\u00ebn",
      "translation": "perfurou boca",
      "notes": "said after the bottom lip skin is taken out",
      "words": [
        ""
      ]
    },
    {
      "id": 277,
      "start": 921.151779320799,
      "stop": 922372.8129512991,
      "transcription": "sikkreek\u00f4",
      "translation": "orelha de brico",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 278,
      "start": 922.3728129512991,
      "stop": 924980.0646755946,
      "transcription": "[ra] m\u00e4m\u00e4 jy p\u00e4p\u00e4\u00e4 rakre",
      "translation": "ent\u00e3o ai todos tem perfuro ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 279,
      "start": 924.9800646755946,
      "stop": 926410.6520543707,
      "transcription": "rakre p\u00e4p\u00e4\u00e4 jah\u00e4",
      "translation": "ser todos tem perfuro",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 280,
      "start": 926.4106520543708,
      "stop": 927634.8909437167,
      "transcription": "ipp\u00eb ham\u00e4",
      "translation": "vivemos com brancos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 281,
      "start": 927.6348909437168,
      "stop": 930240.0942909395,
      "transcription": "ipp\u00eb ham\u00e4 jy rakre p\u00e4p\u00e4\u00e4",
      "translation": "no contato brancos todos n\u00e3o tem perfur\u00e3o",
      "notes": "depois do contato n\u00e3o ficamos com essas coisas",
      "words": [
        ""
      ]
    },
    {
      "id": 282,
      "start": 930.2400942909395,
      "stop": 935003.8946972897,
      "transcription": "rar\u00ea k\u00e4ns\u00fcn, ja ra k\u00e4ns\u00fcn",
      "translation": "assim eu conto,essa eu conto",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 283,
      "start": 935.0038946972896,
      "stop": 939569.2034200417,
      "transcription": "m\u00e4m\u00e4 kypy jyypjon tapja",
      "translation": "ent\u00e3o, acho acabou sim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 284,
      "start": 939.5692034200417,
      "stop": 942546.5786740106,
      "transcription": "[n\u00e4\u00e4]",
      "translation": "sim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 285,
      "start": 942.5465786740106,
      "stop": 945240.0959787109,
      "transcription": "kj\u00e4np\u00ea kankj\u00e2n t\u00e4ns\u00f4",
      "translation": "mesmo vou contar para continua",
      "notes": "gonna tell another story",
      "words": [
        ""
      ]
    },
    {
      "id": 286,
      "start": 945.2400959787109,
      "stop": 946852.840907944,
      "transcription": "[h\u00eb]",
      "translation": "esse",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 287,
      "start": 946.852840907944,
      "stop": 950276.8224500081,
      "transcription": "swankjar\u00e2n r\u00ea raak\u00e2ri ja",
      "translation": "os antigamentos ser cortem assim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 288,
      "start": 950.2768224500081,
      "stop": 953403.0664666754,
      "transcription": "ponpo ho",
      "translation": "uso taquarinho",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 289,
      "start": 953.4030664666753,
      "stop": 956281.1958788452,
      "transcription": "ponpo ho r\u00ea raak\u00e2ri",
      "translation": "taquarinho uso para cortar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 290,
      "start": 956.2811958788452,
      "stop": 958315.7356357238,
      "transcription": "swankjar\u00e2n",
      "translation": "os antigamentos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 291,
      "start": 958.3157356357239,
      "stop": 960251.0295508036,
      "transcription": "r\u00ea sota raanp\u00fcn inkj\u00eb h\u00eb",
      "translation": "eu vejo na cultura conhecimento",
      "notes": "sota = sot-a",
      "words": [
        ""
      ]
    },
    {
      "id": 292,
      "start": 960.2510295508037,
      "stop": 963261.7605339868,
      "transcription": "r\u00ea rak\u00f6 raak\u00e2ri inkj\u00eb h\u00eb",
      "translation": "eu tamb\u00e9m cortei ",
      "notes": "inkj\u00eb h\u00eb realized as inkj\u00eb\u00eb",
      "words": [
        ""
      ]
    },
    {
      "id": 293,
      "start": 963.2617605339868,
      "stop": 965621.9982072117,
      "transcription": "ponpo ho",
      "translation": "uso taquarinho",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 294,
      "start": 965.6219982072117,
      "stop": 968202.3900939847,
      "transcription": "ponpo ho r\u00ea raak\u00e2ri",
      "translation": "uso taquarinho para cortarem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 295,
      "start": 968.2023900939847,
      "stop": 971403.0684920013,
      "transcription": "r\u00ea rak\u00f6 raak\u00e2ri, r\u00ea t\u00e4 raanp\u00fcn",
      "translation": "eu tamb\u00e9m cortei , vimos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 296,
      "start": 971.4030684920012,
      "stop": 974181.952062372,
      "transcription": "ponpo ho r\u00ea raak\u00e2ri inkjar\u00e2n",
      "translation": "as mulheres uso taquarinho para corterem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 297,
      "start": 974.181952062372,
      "stop": 977159.3273163409,
      "transcription": "inkjar\u00e2n r\u00ea raak\u00e2ri",
      "translation": " as mulheres cortem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 298,
      "start": 977.1593273163409,
      "stop": 982091.604816551,
      "transcription": "haa ja ra k\u00e4ns\u00fcn, ja ra k\u00e4ns\u00fcn",
      "translation": "sim estou contando, estou contando ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 299,
      "start": 982.091604816551,
      "stop": 984473.505013359,
      "transcription": "ha n\u00e4h\u00e4?",
      "translation": "assim e ",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Poka 2017",
    "speakers": "Poka",
    "linguists": "Myriam Lapierre, Bernat Bardagil-Mas",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 0,
      "start": "196313",
      "stop": "199831",
      "transcription": "rê sanpũ aprĩ tân Peixoto rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 1,
      "start": "200656",
      "stop": "203582",
      "transcription": "rê ranpũ prĩ tân",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": "204981",
      "stop": "208629",
      "transcription": "jy ra tepi Peixoto rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": "209981",
      "stop": "214093",
      "transcription": "ra pa, jy ra su pô avião",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": "214213",
      "stop": "215787",
      "transcription": "mũnkja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": "216139",
      "stop": "220454",
      "transcription": "ti jy a ky ti ra rĩ mẽn pan",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": "222147",
      "stop": "225054",
      "transcription": "pjã, pan ka...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": "226443",
      "stop": "229536",
      "transcription": "ia sõkjêntita",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": "229591",
      "stop": "232036",
      "transcription": "ti ra ri nẽn pompoakriti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": "232246",
      "stop": "234960",
      "transcription": "ti nẽn jakôpâ kri kôpâ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": "235012",
      "stop": "236129",
      "transcription": "pan nĩ...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": "236291",
      "stop": "237629",
      "transcription": "kjo rãnkjẽri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": "238187",
      "stop": "240486",
      "transcription": "mãmã ti nẽn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": "240745",
      "stop": "243278",
      "transcription": "jy pôô mũnkja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": "244096",
      "stop": "247109",
      "transcription": "ti ja kyti ti ranpũn",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Pysy number elicitation",
    "speaker": "Pysy",
    "type": "elicitation",
    "linguists": "Myriam Lapierre, Jessa Jeter, Sunkulp Ananthanarayan, Ella De Falco",
    "date": "2025/08/19,23,28"
  },
  "sentences": [
    {
      "transcription": "inkjë hë rêsânpün pyti swasïrä/swasïrä nakjôô",
      "translation": "eu vi um porco"
    },
    {
      "transcription": "inkjë rapan hatyttä rasânpürïnsïn pyti swasïrä",
      "translation": "cada vez quando eu vou para o mato eu sempre vejo um porco"
    },
    {
      "transcription": "inkjë jyrakwyy swasêrimä rêsânpün pytira swasïrä",
      "translation": "eu fui a caçar e eu vi dois porcos"
    },
    {
      "transcription": "inkjë jyrakwyy swasêrimä rêsânpün pytira swasïrära",
      "translation": "eu fui a caçar e eu vi dois porcos"
    },
    {
      "transcription": "inkjë jyrakwyy swasêrimä rêmësânpün pytira swasïrära",
      "translation": "eu fui a caçar e eu vi dois porcos"
    },
    {
      "transcription": "inkjë jyrakwyy swasêrimä rêmësânpün pytira swasïrä",
      "translation": "eu fui a caçar e eu vi dois porcos"
    },
    {
      "transcription": "inkjë jyrakwyy swasêrimä rêmësânpün swasïrä",
      "translation": "eu fui a caçar e eu vi dois porcos"
    },
    {
      "transcription": "rêmësânpün pytira swasïrä",
      "translation": "eu e (por exemplo Sêwâ) vi um porco"
    },
    {
      "transcription": "rêmësânpün swasïrä",
      "translation": "eu e (por exemplo Sêwâ) vi dois porcos"
    },
    {
      "transcription": "inkjë rapamëswasêrimä ramësânpün insïn pytira swasïrä(ra)",
      "translation": "quando eu saiu pra caçar eu sempre vejo dois porco"
    },
    {
      "transcription": "inkjë rapamëswasêrimä ramësânpün pytira swasïrä(ra)",
      "translation": "quando eu saiu pra caçar eu sempre vejo dois porco"
    },
    {
      "transcription": "inkjë rakwyy swasêrimä rêsânpün nöpjö swasïrä",
      "translation": "eu fui caçar e eu vi três porcos"
    },
    {
      "transcription": "inkjë rakwyy swasêrimä rêsânpün swasïrä",
      "translation": "could be any number (asked 1, 2, 3, 20)"
    },
    {
      "transcription": "rapan inkjë swasêrimä rapürïnsïn swasïrä",
      "translation": "(did we get a back-translation?)"
    },
    {
      "transcription": "rapan inkjë swasêrimä rasânpürïnsïn nöpjo swasïrä",
      "translation": "works as above for 3"
    },
    {
      "transcription": "rapan inkjë swasêrimä rapürïnsïn swasïrä",
      "translation": "eu sempre vejo porco (underspecified for number)"
    },
    {
      "transcription": "inkjë jyrakwyy swasêrimä rêsânpün inkjêtinkjâ swasïrä",
      "translation": "eu fui caçar e eu vi monte de porco"
    },
    {
      "transcription": "inkjêtaja",
      "translation": "4 (says he uses it)"
    },
    {
      "transcription": "rapamëinkjë swasêrimä rasânpürï nöpjö swasïrä",
      "translation": "quando eu saiu pra caçar eu sempre vejo porco (não tem número pra saber quantos)"
    },
    {
      "transcription": "rapamëinkjë swasêrimä rasânpürïnsïn swasïrä",
      "translation": "quando eu saiu pra caçar eu sempre vejo porco (não tem número pra saber quantos; sânpürïnsïn = definite, the very same pigs)"
    },
    {
      "transcription": "o Sêwâ vai pro rio. eu vi ele banhar o próximo dia",
      "translation": "mära rêsânpürïnsïn - eu sempre vejo ele"
    },
    {
      "transcription": "se é que um dia e Sêwâ, Kypakjän, then Sôpôha",
      "translation": "inkjë rapan "
    },
    {
      "transcription": "mära rasânpürïnsïn",
      "translation": "eu sempre vejo aquele mesmo cara"
    },
    {
      "transcription": "mära rasânpürïnsïn inpy/inkjên",
      "translation": "eu sempre vejo aquele mesmo cara"
    },
    {
      "transcription": "inkjë hë raranpürïnsïn inpyhara",
      "translation": "eu sempre vejo (qualquer) homem (different men every time)"
    },
    {
      "transcription": "eu vi swasïränkjêti",
      "translation": "eu vi muitos porcos {is inkjêti at the same morphological spot as mëra?}"
    },
    {
      "transcription": "nöpjö swasïrämëra",
      "translation": "(acceptable too for a few porcos)"
    },
    {
      "transcription": "nöpjö",
      "translation": "poucos; esp quando vc não contou"
    },
    {
      "transcription": "inkjë rakwyy swasêrimä, rêsânpün inkjêpytinsi swasïrä",
      "translation": "eu fui caçar e eu vi muitos porcos"
    },
    {
      "transcription": "inkjë jyrakwyy swasêrimä, rêpïri pyti swasïrä",
      "translation": "eu fui caçar e eu matei um porco"
    },
    {
      "transcription": "inkjëra jymërakwyy swasêrimä, rêmëpïri pyti swasïrä",
      "translation": "nós dois fuimos pra caçar, y matamos um porco"
    },
    {
      "transcription": "rapan inkjë swasêrimä raparïsïn pÿn swasïrä",
      "translation": "quando caço eu sempre mato um porco"
    },
    {
      "transcription": "rapan inkjë swasêrimä raparïnsïn pyti swasïrä",
      "translation": "quando caço eu sempre mato um porco"
    },
    {
      "transcription": "inkjëra ramëpansïn swasêrimä ramëparïnsïn pyti swasïrä",
      "translation": "cada vez nós dois sempre caça, a gente mata um porco"
    },
    {
      "transcription": "inkjëra ramëpansïn swasêrimä ramëparïnsïn pÿn swasïrä",
      "translation": "cada vez nós dois sempre caça, a gente mata um porco"
    },
    {
      "transcription": "inkjë jyrakwyy swasêrimä rêpïri pyti swasïrä. mämänpên jytü pyrakwyy mämänpên rêpypïri pyti. mänpên rêpyhimën.",
      "translation": "eu fui caçar, e matei um porco. eu fui mais pra frente, e eu matei mais um. depois voltei"
    },
    {
      "transcription": "jytüpyrakwyy",
      "translation": "eu fui de novo"
    },
    {
      "transcription": "mänpên rêpyhimën",
      "translation": "e voltei"
    },
    {
      "transcription": "inkjë hë rêmëpïri pytira swasïra. ÿhë, hüwätün",
      "translation": "eu matei dois porcos. primeiro, segundo"
    },
    {
      "transcription": "inkjë rakwyy swasêrimä rêmëpïri pytira swasïrära",
      "translation": "eu fui caçar e eu matei dois porcos"
    },
    {
      "transcription": "rêpari swasïrä nöpjö",
      "translation": "eu fui caçar, eu matei três porcos"
    },
    {
      "transcription": "%rêpïri swasïrä nöpjö",
      "translation": "eu fui caçar eu matei três porcos"
    },
    {
      "transcription": "swasêriamä rapammë mäpari nöpjö swasïrä",
      "translation": "cada vez eu caço eu sempre mato três swasïrä"
    },
    {
      "transcription": "inkjë rakwyy swasêrimä rêpari inkjêti swasïrä",
      "translation": "eu fui caçar e eu matei muitos porcos"
    },
    {
      "transcription": "swasêrimä rapammë raparïnsïn inkjêti swasïrä",
      "translation": "cada vez quando eu for caçar eu sempre mato muito porco"
    },
    {
      "transcription": "inkjë rakwyy swasêrimä rêpari nöpjö swasïrä",
      "translation": "eu fui caçar eu matei quatro porco"
    },
    {
      "transcription": "*inkjë rakwyy swasêrimä rêpïri nöpjö swasïrä",
      "translation": "pïri needs to be one or two"
    },
    {
      "transcription": "inkjë rakwyy swasêrimä rêpari nöpjö swasïrä",
      "translation": "eu fui caçar e matei 5-6"
    },
    {
      "transcription": "*inkjë rakwyy swasêrimä rêpari nöpjö swasïrämëra",
      "translation": "eu fui caçar e matei 5-6 porco"
    },
    {
      "transcription": "inkjë rakwyy tessuu rêsünswâri pyti teppää",
      "translation": "eu fui a pescar, eu peguei um peixinho"
    },
    {
      "transcription": "inkjë rakwyy tessuu rêmësünswâri pytira teppäära",
      "translation": "eu fui a pescar, eu peguei dois peixinhos"
    },
    {
      "transcription": "inkjë rakwyy tessuu rêsapôpô inkjêti teppää (prompt: 20)",
      "translation": "eu fui a pescar, eu peguei muitos peixinhos"
    },
    {
      "transcription": "*inkjë jyrakwyy tessuu rêsapôpô pyti teppäära",
      "translation": "eu fui a pescar, eu peguei um peixinho"
    },
    {
      "transcription": "inkjë jyrakwyy rêsapôpô nöpjö teppää",
      "translation": "eu fui a pescar, eu peguei três peixinhos"
    },
    {
      "transcription": "*inkjë jyrakwyy rêsapôpô nöpjö teppäämëra",
      "translation": "eu fui a pescar, eu peguei três peixinhos"
    },
    {
      "transcription": "*inkjë jyrakwyy rêsapôpô inkjêti teppäämëra",
      "translation": "eu fui a pescar, eu peguei muitos peixinhos"
    },
    {
      "transcription": "rapamë tessuu inkjë rêsapôpô ïnsïn pyti teppää",
      "translation": "cada vez quando eu fui pescar, eu sempre peguei um peixinho (both pan and pôpô are PLAC here)"
    },
    {
      "transcription": "inkjë rakwyy tessuu rêsünswâri pyti tepinnä",
      "translation": "eu fui pescar e peguei um peixe grande"
    },
    {
      "transcription": "inkjë rakwyy tessuu rêmësünswâri pytira tepinnä",
      "translation": "eu fui pescar e peguei does peixes grande"
    },
    {
      "transcription": "inkjë rakwyy tessuu rêmësünswâri pytira tepinnära",
      "translation": "eu fui pescar e peguei dois peixes grande"
    },
    {
      "transcription": "inkjë rakwyy tessuu rêsapôpô nöpjö tepinnä",
      "translation": "eu fui pescar e peguei tres peixes grandes"
    },
    {
      "transcription": "inkjë rakwyy tessuu rêsapôpô inkjêppytinsi tepinnä",
      "translation": "eu fui pescar e peguei muitos peixes grandes"
    },
    {
      "transcription": "*inkjë rakwyy tessuu rêsapôpô inkjêppytinsi tepinnämëra",
      "translation": "eu fui pescar e peguei muitos peixes grandes"
    },
    {
      "transcription": "tessuu rapamë rasapôpô ïnsïn pyti tepinnä",
      "translation": "cada vez quando eu fui pescar, eu sempre pego um peixe grande"
    },
    {
      "transcription": "inkjë jysuhorämmöri tessuu jymärarikjati (primeiro), rêsünswâri pyti tepinnä; jytüpysuhorammöri jypymärariti, rêpysünswâri pyti tepinnä",
      "translation": "eu fui a pescar, primeiro eu parei e peguei um peixe; depois eu fui de novo e parei de novo, e peguei um peixi mais"
    },
    {
      "transcription": "jysuhorammöri tessuu jymärarati rêsapôpô inkjêti tepi, jytü(n?)pysuhorammöri jypymärariti rêsapôpô inkjêti tepi",
      "translation": "eu fui a pescar, primeiro eu parei e peguei muitos peixes; depois eu fui de novo e parei de novo, e peguei de novo muitos peixes"
    },
    {
      "transcription": "pyti jyppôô inkjên, rêranswâri pârankô ho",
      "translation": "uma mulher veio (no posto), e eu vacinei ela"
    },
    {
      "transcription": "jymëppôô pytira inkjênnä, rêmëranswâri kâjâräsura ho",
      "translation": "chegaram duas meninas, eu vacinei (elas) {this might actually be rä}"
    },
    {
      "transcription": "kâjâräsuri",
      "translation": "needle/syringe, nail (is the use with -a instead of -i for the use with ho INST like...a thing?)"
    },
    {
      "transcription": "jyrappôô nöpjö inkjara râranpôpô kâjâräsura ho",
      "translation": "3 women"
    },
    {
      "transcription": "jyrappôô inkjêti inkjara râranpôpô kâjâräsura ho",
      "translation": "4 women"
    },
    {
      "transcription": "jyrappôô inkjêppytinsi inkjara raranpôpô",
      "translation": "muitas (prompt: 20)"
    },
    {
      "transcription": "hakünköö rapôô inkjara rarapôpô",
      "translation": "cada ano mulheres chegam e eu vacino elas"
    },
    {
      "transcription": "hakünköö inkjên rasapôpô ïnsïn",
      "translation": "cada ano uma mulher (em particular) chega e eu vacino ela {if there's a woman, i will vaccinate her?}"
    },
    {
      "transcription": "hakünköö (pytira) inkjênnä ramësapôpô ïnsïn",
      "translation": "cada ano eu vacino quelas duas mulheres"
    },
    {
      "transcription": "inkjë jyratoo pôttä rêsânpün issypää",
      "translation": "eu sai fora e vi um fogo pequeno"
    },
    {
      "transcription": "inkjë jyratoo pôttä rêsânpün issypää pyti",
      "translation": "eu sai fora e vi um fogo pequeno"
    },
    {
      "transcription": "inkjë jyratoo rêsâpün pytira issypää ra",
      "translation": "eu sai fora e vi dois fogos pequenos"
    },
    {
      "transcription": "kjorinpê",
      "translation": "arroz"
    },
    {
      "transcription": "pyti kjorinpê",
      "translation": "um pacote arroz (doesn't work to describe a plate of rice)"
    },
    {
      "transcription": "inkjë jyrakwyy rêkukrëë kiti kjorinpe",
      "translation": "eu fui e eu comi poquinho arroz"
    },
    {
      "transcription": "inkjë jyrakwyy sörïnkwattä rêkukrëë wy kjorinpe",
      "translation": "eu fui na cozinha e eu comi muito arroz"
    },
    {
      "transcription": "*inkjë jyrakwyy sörïnkwattä rêkukrëë wy kjorinpemëra",
      "translation": "eu fui na cozinha e eu comi muito arroz"
    },
    {
      "transcription": "*inkjë jyrakwyy sörïnkwattä rêkukrëë inkjêti kjorinpe",
      "translation": "eu fui na cozinha e eu comi muito arroz"
    },
    {
      "transcription": "*inkjë jyrakwyy sörïnkwattä rêkukrëë inkjêppytinsi kjorinpe",
      "translation": "eu fui na cozinha e eu comi muito arroz"
    },
    {
      "transcription": "rêkukrëë wy kjorinpe",
      "translation": "eu comi muitos pratos"
    },
    {
      "transcription": "rêkukrëë wy pyti kjorinpe",
      "translation": "eu comi muito arroz (at once/in one sitting; prato grande/cheio)"
    },
    {
      "transcription": "rêkukrëë wy kjorinpe pyti",
      "translation": "eu comi muito arroz (at once/in one sitting)"
    },
    {
      "transcription": "inkjë rappamë söjönkwattä rakurïn kiti kjorinpe",
      "translation": "cada vez q eu vou pra cozinha, eu como um pouco arroz"
    },
    {
      "transcription": "inkjë rappamë söjönkwattä rakurïn wy kjorinpe",
      "translation": "cada vez q eu vou pra cozinha, eu como muito arroz"
    },
    {
      "transcription": "inkjë rappamë söjönkwattä rakurïn wy kjorinpe pyti",
      "translation": "cada vez q eu vou pra cozinha, eu como um prato cheio de arroz"
    },
    {
      "transcription": "Kjêpyti jyhopôô sö aluno ho NSPT tä",
      "translation": "Kjêpyti touxe o aluno dela para NSPT (as always, this is plural)"
    },
    {
      "transcription": "Kjêpytimëra jyrapôô NSPT tä",
      "translation": "São Kjêpyti vieram pra NSPT (não tenho nome e não sabe quem é {this is singleton right?})"
    },
    {
      "transcription": "Kjêpytimëra kappôjn NSPT tä",
      "translation": "Kjêpyti et al vão chegar a NSPT {this is geminate right? myriam thinks short, i think it's long, pysy thinks it's long}"
    },
    {
      "transcription": "Kjêpytimëra kammörïn (pa ttä) KTK tä",
      "translation": "{only myriam gave pa ttä} Kjêpyti (et al) vão para KTK"
    },
    {
      "transcription": "pattä",
      "translation": "pra lá (pattä means something like over to that place; generally actually followed by the place's name)"
    },
    {
      "transcription": "Kjêpytimëra rêsanpäpë Pysy ja pên",
      "translation": "{i think i got the spelling wrong}"
    },
    {
      "transcription": "Pêkjä më Pârakrissan më jymëraswâ kwâsittä",
      "translation": "Pê & Pâ foram a Kwâsi"
    },
    {
      "transcription": "Pêkjä më Pârakrissan më jymërakwyy kwâsittä",
      "translation": "Pê & Pâ foram a Kwâsi"
    },
    {
      "transcription": "Pêkjära jymëkwyy kwâsittä",
      "translation": "Pê & Pâ foram pra Kwâsi"
    },
    {
      "transcription": "Pêkjä jykwyy kwâsitta",
      "translation": "Pê went to Kwâsi"
    },
    {
      "transcription": "Pêkjämëra jyrappa kwâsittä",
      "translation": "Pê et al foram pra kwâsi"
    },
    {
      "transcription": "Kjêpytimëra pyrapôô pjo NSPT tä",
      "translation": "Kjêpyti não vieram para NSPT"
    },
    {
      "transcription": "Pêkjära mëkwyy pjo kwâsitta",
      "translation": "Pê+1 não foram pra Kwasi"
    },
    {
      "transcription": "Kjêpyti më sö alunos (hë) rêkuri sö hanka",
      "translation": "Kjêpyti e os alunos dela comeram comida ruim {K took out the hë; he gave without and with}"
    },
    {
      "transcription": "Kjêpytimërân rêkuri sö hanka",
      "translation": "K et al comeram comida ruim"
    },
    {
      "transcription": "mamanpên jypäpäräsïränkô",
      "translation": "then they all got diarrhea"
    },
    {
      "transcription": "jypäpäratusâ, jyrasïränkô, jypäpä rasöjïï",
      "translation": "they had tummy aches, they had diarrhea, they all vomited"
    },
    {
      "transcription": "jukôpy karäkwâri pysy inkâpy",
      "translation": "aonde vc cagou no pysy at the inkâ"
    },
    {
      "transcription": "Pêkjärân timë kuri sö hanka, mämänpên...",
      "translation": "Pê+1 comeram comida ruim (sö hanka, sönprë = food gone bad; sönprë could also mean that there's dirt/dust all over it)"
    },
    {
      "transcription": "*jymëpytira sïränkô",
      "translation": "can incorporate 'all' (päpää) but not 'two'"
    },
    {
      "transcription": "*pytira jymësïränkô",
      "translation": "os dois pegou diarrheia"
    },
    {
      "transcription": "rêsânpün K ï/më sö hokjyhantê (më)",
      "translation": "eu vi K e os seus alunos (the ï was just a nasal portuguese 'e')"
    },
    {
      "transcription": "rêsânpün Kmëra",
      "translation": "eu vi K et al"
    },
    {
      "transcription": "rêraanpün Kmëra",
      "translation": "eu vi K et al"
    },
    {
      "transcription": "rêmësânpün pârakrissannä",
      "translation": "eu vi Pâ+1"
    },
    {
      "transcription": "rêsânpün pârakrissannä",
      "translation": "eu vi Pâ+1"
    },
    {
      "transcription": "pode usar tö e töra",
      "translation": "you can use one or the other (about both of the two options being acceptable)"
    },
    {
      "transcription": "karaakwâri rö hahê pjo",
      "translation": "não pode cagar em mim"
    },
    {
      "transcription": "não karaakwâri inkjë",
      "translation": "não pode cagar em mim"
    },
    {
      "transcription": "* ha kakukrëë pârasômëra",
      "translation": "did you eat vegetables (needs PLAC kuri)"
    },
    {
      "transcription": "ha kakuri pârasômëra",
      "translation": "did you eat vegetables"
    },
    {
      "transcription": "*ha katökrëë pârasôra",
      "translation": "if it's just two kinds of veg, still not acceptable"
    },
    {
      "transcription": "ha ka tökrëë pârasô?",
      "translation": "vc comem repolho/salada? ('will you eat cabbage')"
    },
    {
      "transcription": "kjorinpemëra",
      "translation": "like a rice with various things in it"
    },
    {
      "transcription": "ha ka kuri kjorinpemëra?",
      "translation": "vc come arroz com tudo misturado"
    },
    {
      "transcription": "ha ka kuri kjorinpe?",
      "translation": "vc come arroz? (still takes PLAC)"
    },
    {
      "transcription": "nasisi inpojïmëra",
      "translation": "beef and stuff is yummy"
    },
    {
      "transcription": "haswa",
      "translation": "mortar"
    },
    {
      "transcription": "kôpasâ",
      "translation": "pestle"
    },
    {
      "transcription": "*ha kakuri inpojïra?",
      "translation": "vc comeu as carnes?"
    },
    {
      "transcription": "ju kôpy pa hasaarïn haswa",
      "translation": "aonde está o pilão"
    },
    {
      "transcription": "ju kôpy pa hasaarïn haswara",
      "translation": "aonde está o pilão e almofariz (where are the mortar and pestle), aonde estão o os dois pilões"
    },
    {
      "transcription": "inkjë hë rêwajän issê kâjân",
      "translation": "eu fiz arco e flecha"
    },
    {
      "transcription": "inkjë hë rawajän issê kâjân",
      "translation": "eu estou fazendo arco e flecha"
    },
    {
      "transcription": "inkjë hë rawajän issêmëra",
      "translation": "eu estou fazendo um monte de arcos"
    },
    {
      "transcription": "inkjë hë rawajän issêmëra",
      "translation": "i'm making bows and arrows"
    },
    {
      "transcription": "inkjë hë rawajärï issê inkjêti",
      "translation": "eu estou fazendo muitos arcos"
    },
    {
      "transcription": "inkjë hë rawajän issêmëra inkjêti",
      "translation": "eu estou fazendo muitos arcos (e flechas) (can get PL or assoc)"
    },
    {
      "transcription": "inkjë hë rawajän kâjâmmëra inkjêti",
      "translation": "eu estou fazendo muitos flechas (e arcos) (can get PL or assoc)"
    },
    {
      "transcription": "kasêtönpân hatö, hatö sy më?",
      "translation": "vc pegou o espingue e cartucho tb? (sê bc one should generally? or PLAC)"
    },
    {
      "transcription": "*kasêtönpân hatömëra?",
      "translation": "vc pegou o espingue e cartucho tb?"
    },
    {
      "transcription": "kasêsanpân hatö?",
      "translation": "vc pegou espingue (se tem muito)?"
    },
    {
      "transcription": "kasênpân",
      "translation": "vc pegou espingue (se tem um)?"
    },
    {
      "transcription": "sêsanpân hatö",
      "translation": "vai lá pegar armas"
    },
    {
      "transcription": "sêsanpân hatö",
      "translation": "carrega esse arma (if he gives it to me and heads off to hunt; sa = PLAC, perhaps...maybe for root sa that don't supplete for pluractionality)"
    },
    {
      "transcription": "watoo issïn",
      "translation": "tirar o bucho (kjytijï, swasïräjï (eg))"
    },
    {
      "transcription": "sâsüra hë tiwatoo ikkjytijïn",
      "translation": "S tirou o bucho de anta"
    },
    {
      "transcription": "*issïn mëra",
      "translation": "issïn is already in general and means 'guts' generally"
    },
    {
      "transcription": "pega um issïn pra mim",
      "translation": "grab me the small intestine"
    },
    {
      "transcription": "pega um issïnpo pra mim",
      "translation": "grab me the large intestine"
    },
    {
      "transcription": "jopy hë tipïrï Kôrinkre",
      "translation": "the jaguar killed Kô (ppl rarely use tipïri for this)"
    },
    {
      "transcription": "jopy hë tikjäkwâri swasïrä/kô/ikkjyti",
      "translation": "a onça matou o porco/kô (ikkôn)/anta; quando onça morde na cabeça e matou (this is just the general way they kill so it implies general killing)"
    },
    {
      "transcription": "jopyrân timëkjäkwâri ikkjyti",
      "translation": "as duas onças mataram a anta"
    },
    {
      "transcription": "Kuupêri tikjäkwârakwa jopyhë",
      "translation": "onça quase matou Kuupêri (also pronounced it as joppë)"
    },
    {
      "transcription": "nöpjö jopy hë tipïri/tikjäkwâri ikkjyti",
      "translation": "três onças mataram anta"
    },
    {
      "transcription": "nöpjö jopy hë tipari ikkjyti",
      "translation": "se for inkjêti ikkjyti (PL object begets PLAC)"
    },
    {
      "transcription": "nöpjö jopy hë rêkjäkwâri ikkjyti",
      "translation": "três onças matou anta (myriam gave this, but he gave back tikjäkwâri)"
    },
    {
      "transcription": "nöpjö jopy hë tikjäkwâri ikkjyti",
      "translation": "três onças matou anta"
    },
    {
      "transcription": "nöpjö jopy hë tikjäkwââri ikkjyti",
      "translation": "se for muita anta (is this a length? stress? difference? using long â to represent this but wtf)"
    },
    {
      "transcription": "pyti jopy hë tikjäkwâri ikkjyti",
      "translation": "one jaguar killed many"
    },
    {
      "transcription": "pyti hë jopy hë tikjäkwâri ikkjyti",
      "translation": "one jaguar killed many"
    },
    {
      "transcription": "tipari ikkjyti",
      "translation": "matou anta (muitos)"
    },
    {
      "transcription": "tipïri ikkjyti",
      "translation": "matou anta (só um)"
    },
    {
      "transcription": "pytirân jopy hë tipari inkjêti ikkjyti",
      "translation": "2 onças mataram muito anta"
    },
    {
      "transcription": "pytirân jopy hë tikjäkwââri inkjêti ikkjyti",
      "translation": "2 onças mataram muito anta"
    },
    {
      "transcription": "pytira jopyhë tikjäkwââri inkjêti ikkjyti",
      "translation": "2 onças mataram muito anta"
    },
    {
      "transcription": "pytirân jopy hë tikjäkwâri pyti ikkjyti",
      "translation": "2 onças mataram muito anta"
    },
    {
      "transcription": "jopy hë tikjäkwâri pyti ikkjyti",
      "translation": "uma onça matou uma anta"
    },
    {
      "transcription": "tikjäkwyri",
      "translation": "hammers a nail in"
    },
    {
      "transcription": "pytirân jopy hë timëkjäkwââri pytira ikkjytira",
      "translation": "2 onças mataram 2 antas"
    },
    {
      "transcription": "%pytirân jopyrân timëkjäkwâri pytira ikkjytira",
      "translation": "two jaguars killed two antas"
    },
    {
      "transcription": "nöpjö jopymërân tikjäkwââri ikkjytimëra",
      "translation": "três onças mataram três anta ('acho que e três, três anta')"
    },
    {
      "transcription": "jopymërân tikjäkwâri ikkjyti",
      "translation": "onças matou uma anta"
    },
    {
      "transcription": "nöpjö jopy hë tikjäkwâri pyti ikkjyt",
      "translation": "onças matou uma anta (given for 5 jaguars, backtranslated to 4)"
    },
    {
      "transcription": "inkjêti jopyhë tikjäkwââri ikkjyti",
      "translation": "seis onças mataram a anta"
    },
    {
      "transcription": "inkjêppytinsi (hë) jopyhë tikjäkwââri/tipïri ikkjyti",
      "translation": "muitas onças mataram a anta"
    },
    {
      "transcription": "inkjêti jopy hë taapaari ikkjyti",
      "translation": "dez onças mataram muitas antas"
    },
    {
      "transcription": "inkjêti jopy hë taakjäkwâri ikkjyti",
      "translation": "dez onças mataram muitas antas"
    },
    {
      "transcription": "inkjêti jopyhë tikjäkwâri pyti ikkjyti",
      "translation": "    dez onças mataram uma anta"
    },
    {
      "transcription": "rêsânpün inkjë hë isswyn mÿnrasukwyy inkjë suu",
      "translation": "eu vi um passaro voando para mim {is it mÿnnärasukwyy}"
    },
    {
      "transcription": "inkjë hë rêsânpün pytira isswyn mÿnrasumëkwyy inkjë suu",
      "translation": "eu vi dois passarinhos voando na minha direção"
    },
    {
      "transcription": "inkjë hë rêsânpün pytira isswynnä mÿnrasumëkwyy inkjë suu",
      "translation": "eu vi dois passarinhos voando na minha direção"
    },
    {
      "transcription": "kjë hë rêsânpün nöpjö isswyn mÿnrasurökwyy inkjë suu",
      "translation": "eu vi três pássaros voando na minha direção"
    },
    {
      "transcription": "kjë hë rêsânpün inkjêtinkjâ isswyn mÿnrasurökwyy inkjë suu",
      "translation": "eu vi cinco pássaros voando na direção"
    },
    {
      "transcription": "inkjë hë tarasânpün isswyn mÿnnäsurökwyy inkjë suu",
      "translation": "eu vi pássaro (deve?) voando na minha direção"
    },
    {
      "transcription": "inkjë hë tarasânpün inkjêppytinsi isswyn mÿnnäsurökwyy inkjë suu",
      "translation": "eu vi muitos pássarinhos voando na minha direção"
    },
    {
      "transcription": "Tuhïkâri",
      "translation": "abusive lesbian monkey's name"
    },
    {
      "transcription": "Tuhïkârira jy më sânpân",
      "translation": "macaco e galinha comeram"
    },
    {
      "transcription": "inkjë hë rê sânpün tuhïkârira",
      "translation": "eu vi macaco e galinha"
    },
    {
      "transcription": "inkjë hë rê sânpün tuhïkâri më kôtita",
      "translation": "eu vi macaco e galinha"
    },
    {
      "transcription": "inkjë hë rê sânpün ikkônnä",
      "translation": "eu vi macaco e galinha"
    },
    {
      "transcription": "tuhïkârirân timëraanpün",
      "translation": "macaco e galinha me viram"
    },
    {
      "transcription": "ha jy raanpân Sôpôhamëra?",
      "translation": "os macacos comeram?"
    },
    {
      "transcription": "Sôpôha mërân rê raanpün inkjë",
      "translation": "the monkeys looked at me"
    },
    {
      "transcription": "sâpêri, sakô",
      "translation": "wind"
    },
    {
      "transcription": "kwaakriti mërân rê raanpün inkjë",
      "translation": "os macacos me viram "
    },
    {
      "transcription": "inkjë hë rê sânpün kwaakritimëra",
      "translation": "i saw the monkeys"
    },
    {
      "transcription": "sikjaproja",
      "translation": "spoon"
    },
    {
      "transcription": "pro",
      "translation": "flat"
    },
    {
      "transcription": "sikâkâränsêha",
      "translation": "fork"
    },
    {
      "transcription": "kâjasâpää",
      "translation": "knife"
    },
    {
      "transcription": "*Juri sikjaproja mëra",
      "translation": "Where are the utensils?"
    },
    {
      "transcription": "Juri sikjaproja më sikâkâränsêha më kâjasâpää",
      "translation": "where are the spoon, fork, and knife"
    },
    {
      "transcription": "kâjasâ pää pynswasyha",
      "translation": "serrated knife"
    },
    {
      "transcription": "kjêpyti, inkjë jyho rapôô pawkwa ho",
      "translation": "Kj, eu trouxe banana"
    },
    {
      "transcription": "juntihë pakwa?",
      "translation": "quantas bananas?"
    },
    {
      "transcription": "pyti pakwa / inkjêti pakwa / nöpjö pakwa",
      "translation": "uma banana / muitas bananas / algumas bananas"
    },
    {
      "transcription": "K, inkjë hë jy ho rapôô tepi/tepi ho",
      "translation": "K e eu trouxe peixe"
    },
    {
      "transcription": "juntihë tepi",
      "translation": "quantos peixes?"
    },
    {
      "transcription": "pyti tepi / pytira tepi / nöpjö tepi / inkjêti tepi",
      "translation": "1/2/few/many fish"
    },
    {
      "transcription": "Sêppu, inkjë jy ho rapôô pâri ho kôkjati pita hamä",
      "translation": "S, e eu trouxe madeira no caminhão"
    },
    {
      "transcription": "juntihë pâri?",
      "translation": "quanta madeira?"
    },
    {
      "transcription": "inkjêt pâri",
      "translation": "muita madeira"
    },
    {
      "transcription": "ha jy hansipjâ kjêrö?",
      "translation": "vc é casado/vc tem mulher?"
    },
    {
      "transcription": "haa, jy ransinpjâ",
      "translation": "sim, eu sou casado/eu tenho mulher"
    },
    {
      "transcription": "juntihë kansipjâ?",
      "translation": "quantas mulheres que vc tem?"
    },
    {
      "transcription": "hajïnjönkwa",
      "translation": "banheiro"
    },
    {
      "transcription": "inkjë hë rêsânpün pyti pusu (hajïnjönkwa hamä)",
      "translation": "eu vi um mosquito no banheiro"
    },
    {
      "transcription": "pusu pa hy: muriçoca",
      "translation": "dawn/dusk mosquito"
    },
    {
      "transcription": "inkjë hë rê më sânpün pytira pusu",
      "translation": "eu vi 2 mosquitos"
    },
    {
      "transcription": "%inkjë hë rê më sânpün pytira pusura",
      "translation": "eu vi 2 mosquitos"
    }
  ]
},{
  "metadata": {
    "title": "Pysy modality Elicitation 2023",
    "speakers": "Pysy",
    "linguists": "Myriam Lapierre, Ella De Falco, Sunkulp Ananthanarayan",
    "date": "June/July? 2023",
    "type": "elicitation"
  },
  "sentences": [
    {
      "transcription": "Saankôrä hä kypy sarërï tapja hokjya",
      "translation": "Deve ser Sankoora está lendo mensagens"
    },
    {
      "transcription": "Huwahä kypy pam Tepakriti pârankôjönkwa rï ",
      "translation": "Deve ser Tepakriti deve estár na farmacia."
    },
    {
      "transcription": "Mära hä kypy rö ponpo kjäkôn kja hamä",
      "translation": "deve ser gilete está naquela última sacola"
    },
    {
      "transcription": "mära hä kypy rö ponpo pakkjapên kja hamä",
      "translation": "deve ser está naquela primeira"
    },
    {
      "transcription": "mära hä kypy rö ponpo ippôri kja hamä",
      "translation": "deve ser o gilete está naquele do meio"
    },
    {
      "transcription": "kypyppa pjo Krerö kukre hamä",
      "translation": "deve ser Krerö não está en casa."
    },
    {
      "transcription": "kypyppa pjo Krerö kukre rï ",
      "translation": "deve ser Krerö não está en casa."
    },
    {
      "transcription": "Kypyppa pjo tapja Krerö kukre hamä",
      "translation": "não sei se Krerö está em casa"
    },
    {
      "transcription": "innë, Jopy kypy kwyjn tapja tessuu inkô tä",
      "translation": "eu não sei, deve ser Jopy foi pescar no rio"
    },
    {
      "transcription": "Jopy kypy kwyjn tapja tessuu inkô tä",
      "translation": "deve ser o Jopy foi pescar no rio"
    },
    {
      "transcription": "ja hahä kypy kjyjn tapja Brasília rï ",
      "translation": "deve ser está frio em Brasília"
    },
    {
      "transcription": "koomä kypy kjyjn tapja Brasília rï",
      "translation": "deve ser está frio em Brasília agora/hoje"
    },
    {
      "transcription": "märahä intokâttâjn Tepakriti, mämäramä sössy pô(jn)",
      "translation": "deve ser o Tepakriti está, acordado, por isso ele está ligando a luz"
    },
    {
      "transcription": "märahä",
      "translation": "deve ser estar aí"
    },
    {
      "transcription": "Tepakriti kypyntokâtlâjn, mämäramä sössy pô",
      "translation": "Tepakriti deve estar acordado aindo (não dorme ainda), por isso a luz dele está ligada."
    },
    {
      "transcription": "suppôô kin pjo Bep'ere pârankô suu",
      "translation": "Bep'ere não deve ser estar tomando direito o remédio"
    },
    {
      "transcription": "Suppôja hê pjo tapja Bep’ere koomä pârankô suu",
      "translation": "deve ser hoje Bep’ere não vai vir tomar remédio"
    },
    {
      "transcription": "Kati py su pôô tapja Bep’ere koomä, pârankô suu",
      "translation": "deve ser hoje Bep’ere vai vir tomar remédio"
    },
    {
      "transcription": "innë, kati py su pôô tapja Bep’ere koomä, pârankô suu",
      "translation": "deve ser hoje Bep’ere vai vir tomar remédio"
    },
    {
      "transcription": "mära hä topintori sönkresê kjêpyti hë",
      "translation": "pode ser Kjepyti perdeu o colar"
    },
    {
      "transcription": "Mära hä tisïrï jukôpy",
      "translation": "deve ser ela deixou nalgum lugar"
    },
    {
      "transcription": "Mära hä kypy hatojn jattä",
      "translation": "pode ser que ele saiu da frente da casa"
    },
    {
      "transcription": "mära hä kypymmöri mäjatittä",
      "translation": "pode ser que ele saiu da frente da casa"
    },
    {
      "transcription": "mära hä kypyppa kukre kjäti ",
      "translation": "pode ser ele está atrás da casa"
    },
    {
      "transcription": "mära hä kypy hatojn jattä, mära hä kypy hatojn mäjattä",
      "translation": "deve ser ele saiu para cá, ou ele saiu para lá"
    },
    {
      "transcription": "mära hä kypy hatojn kukre toti tä, mära hä kypy hatojn kukre swa tä",
      "translation": "deve ser saiu atrás da casa, ou saiu para a frente da casa"
    },
    {
      "transcription": "Kypy too tapja Sâsürä Sökârasä tä.",
      "translation": "deve ser Sâsürä foi para Sökâräsä"
    },
    {
      "transcription": "Sâsürä jy tën jïïpê Sökârasätä",
      "translation": "Sâsürä foi direto (sem parar) para Sökârasä"
    },
    {
      "transcription": "(innë), kypy too tapja sâsürä sökârasä tä",
      "translation": "não sei, deve ser Sâsürä foi para Sökârasä"
    },
    {
      "transcription": "Kypyppa pjo tapja Kôpyn ",
      "translation": "deve ser Kôpyn não está aí"
    },
    {
      "transcription": "Kypyppa pjo tapja Kôpyn, juri sä(rïn) sö moto?",
      "translation": "deve ser K não está, cadê a moto dele?"
    },
    {
      "transcription": "märahä jyttoo",
      "translation": "deve ser ele já foi embora"
    },
    {
      "transcription": "Tutiti ippa hahê pjo kukre rï",
      "translation": "Tutiti deve ser não está en casa."
    },
    {
      "transcription": "Tutiti ippa hahê pjo kukre rï, jïïpê kati pan puu tä",
      "translation": "T não deve estar en casa, sempre ela tem que ir para a roça"
    },
    {
      "transcription": "Tutiti ippa hahê pjo kukre rï, jïïpê kati pan inpyti köö puu tä",
      "translation": "Tutiti deve ser não está em casa, sempre ela vai pra roça nessa hora"
    },
    {
      "transcription": "Kati sankjân hä moto kjäkâ",
      "translation": "tem que usar capacete"
    },
    {
      "transcription": "visitantes kati py pôjn 6 hora rï ",
      "translation": "visitante pode sair 6 horas"
    },
    {
      "transcription": "visitantes kati py hatojn 6 hora rï",
      "translation": "visitante tem que sair ás 6 horas"
    },
    {
      "transcription": "Inkjë hë tärãĩjĩtopê toja hê",
      "translation": "eu deveria pintar meu rosto para dançar"
    },
    {
      "transcription": "Ka rê tä têpi rö ipjo, nänkjo hä ",
      "translation": "não pode chegar perto"
    },
    {
      "transcription": "mära tapja nänkjo, covid",
      "translation": "essa doença deve ser covid"
    },
    {
      "transcription": "Kati sên sikja sörïn sâpêrä hê",
      "translation": "lava as mãos para você trabalhar"
    },
    {
      "transcription": "Kamërân kati rêsên sikja sörïn sö hahê",
      "translation": "Deveria vcs lavar as mãos pra fazer comida"
    },
    {
      "transcription": "Kamërân kati rêsê sankjârïn sakrehapu sâpêrä hê",
      "translation": "Y all should use a mask in order to work"
    },
    {
      "transcription": "Tetâta hë kati wajäriïn ippeënkân",
      "translation": "Tetââta can do the recording"
    },
    {
      "transcription": "Tetâta hë tiwajäriï pjärä ippeënkjân, inkjon tapja",
      "translation": "Tetââta could do the recording but(/or) doesn't have to"
    },
    {
      "transcription": "Pÿrä hä kati rê su hankjân",
      "translation": "One at a time you can go in"
    },
    {
      "transcription": "ha kati tökrëë kjäpo?",
      "translation": "are you going to eat beijú?"
    },
    {
      "transcription": "ha kati më tökrëë kjäpo?",
      "translation": "are y'all going to eat beijú?"
    },
    {
      "transcription": "Hê, ka kukrëë pjärä kjäpo, ou kati sê haswâra mä",
      "translation": "You can eat beiju or you can bathe."
    },
    {
      "transcription": "Ka kukrëë pjärä kjäpo, ou kati swâra mä",
      "translation": "You can eat beiju or you can bathe."
    },
    {
      "transcription": "Kati kukrëë kjäpo ou kati sê haswâri hä",
      "translation": "se você vai comer beiju ou você pode banhar"
    },
    {
      "transcription": "tuukô heë kati py sanpâ wêntwê, suppôô pjo ti py sanpârä hê wêntwê",
      "translation": "Tuuko has permission to pick the baby up, but can't manage to pick up the baby"
    },
    {
      "transcription": "Ka tä sanpânnö hahê pjo wêntwê",
      "translation": "You do not have permission to carry the baby"
    },
    {
      "transcription": "Ja pên kati py sanpârin wêntwê",
      "translation": "You now have permission to carry the baby"
    },
    {
      "transcription": "huwähä kati sa pâsâjn",
      "translation": "You can enter there"
    },
    {
      "transcription": "Pysy kati sapykwyjn, susââ pjo, ti tãpjori sakwa.",
      "translation": "Pysy has permission to enter, he isn't able to, the door is closed"
    },
    {
      "transcription": "Ka hẽ kati põrĩn tepi",
      "translation": "você pode assar peixe"
    },
    {
      "transcription": "Ka hẽ kati pô tepi",
      "translation": "você pode assar peixe"
    },
    {
      "transcription": "ka hẽ katinkjẽ sakrejn, juttä ro hon rẽ pôra hê tepi",
      "translation": "você pode me ensinar como assar peixe"
    },
    {
      "transcription": "ta rappôri tapja inkjẽ hẽ tepi, rênpari pjo tepi rêppôra hê",
      "translation": "eu poderia assar peixe, mas eu não sei assar peixe."
    },
    {
      "transcription": "inkjẽ hẽ tãra jĩntoopê, rêntoopê hahê pjo",
      "translation": "Eu deveria pintar meu rosto, mas não vou pintar"
    },
    {
      "transcription": "tãra jokjy, nãhã rê jokjy hahê pjo",
      "translation": "Eu deveria pintar, mas não preciso pintar"
    },
    {
      "transcription": "kamẽrân karêsankjân sakre hapuha, inkjon tapja",
      "translation": "Vocês poderiam usar máscara, mas não precisa usar"
    },
    {
      "transcription": "Moto kjãkâ kati sankjârin ho hãanpjaja hê moto ho",
      "translation": "você poderia usar capacete para você dirigir moto"
    },
    {
      "transcription": "ka hẽ kati sê sankjârĩn moto kjãkâ, moto hahê",
      "translation": "você tem que usar capacete para você dirigir moto."
    },
    {
      "transcription": "ka hẽ kati sê sankjârĩn moto kjãkâ, moto hanpjaja hê",
      "translation": "você tem que usar capacete para você dirigir moto."
    },
    {
      "transcription": "hanpja rõ hahê pjo kjãkâkjên, moto hamã",
      "translation": "você não pode dirigir moto sem capacete"
    },
    {
      "transcription": "ka sânpũnnõ hahê pjo ka krippjâ",
      "translation": "você não pode olhar seu sogro"
    },
    {
      "transcription": "mã happẽẽ rõ hahê pjo ka krippjânkjên mã",
      "translation": "você não pode falar para sua sogra"
    },
    {
      "transcription": "krerõhantêrân rêkura hê pjo sãkkjâri",
      "translation": "K não pode comer comida (da resta)"
    },
    {
      "transcription": "swasâja hê pjo, jyy pjon inpyti",
      "translation": "vocês não pode entrar, já acabou o horario de visita."
    },
    {
      "transcription": "(su)ha sâja hê pjo. 6 hora rĩ",
      "translation": "vocês não pode entrar depois das 6 horas."
    },
    {
      "transcription": "ka kati hatërïn kypa kjäkâtâtä",
      "translation": "você tem que ir na BR"
    },
    {
      "transcription": "Nänsêpotiti hë kati pê hopô hän sokjentita sönkâräsä pê",
      "translation": "NSPT tem que fazer gol pra SKRS perder"
    },
    {
      "transcription": "Nänsêpotiti hë kati sê hopôjn sokjentita, tinpârä hê ippëpää",
      "translation": "NSPT tem que fazer gol para pegar trofeo"
    },
    {
      "transcription": "kahë kati mäsürïn tupyn mä ti pja käntö wajära hê sikkreekô ka mä",
      "translation": " você tem que falar para Tupyn para ela fazer outros brincos para você"
    },
    {
      "transcription": "rêhammöra hë Nänpôôröö tä, kôkjati pita mä kati rê hammörïn Nänpôôröö tä",
      "translation": "para vocês ir para N, vocês tem que ir no carro para N."
    },
    {
      "transcription": "märämä kati rê hammörïn Valdemiro hamä",
      "translation": "deveria vocês ir no carro do Valdemiro"
    },
    {
      "transcription": "Inkjë ka py sapyntitin kjasê jopê",
      "translation": "eu deveria procurar cinto"
    },
    {
      "transcription": "Inkjë ka py sapyntitin kjasê japê, mämä rasuppôô kïrïn inkjë suu",
      "translation": "eu vou procurar aquele cinto que serve bem (that fits me well)"
    },
    {
      "transcription": "Kjë hë ka mïrïn kreejää kjê hamä",
      "translation": "I will bake taro on the earth oven"
    },
    {
      "transcription": "Kjë hë ka kusari kreejââ inkô hamä",
      "translation": "I will boil taro in the water"
    },
    {
      "transcription": "Kjë hë kapôrin kreejââ issy hamä",
      "translation": "I will grill taro on the fire"
    },
    {
      "transcription": "Inkjë hë ka kusarin kreejââ inkô jamä",
      "translation": "eu posso cozinhar cará na água"
    },
    {
      "transcription": "Japjârân kati mï wajärïn ippëë sala 6 hamä",
      "translation": "a gente pode fazer reunião na sala 6."
    },
    {
      "transcription": "Japjârân kati mï wajärïn ippëë, pjärämä? Sala 5 hamä ou sala 6 hamä?",
      "translation": "nós vamos fazer reunião na sala 5 ou na sala 6?"
    },
    {
      "transcription": "Tö pyri kôtita Del Mouro hamä",
      "translation": "pode comprar frango no del M."
    },
    {
      "transcription": "Tö pyri kôtita Casa Aurora hamä",
      "translation": "pode comprar frango no Casa A."
    },
    {
      "transcription": "Rê sê kunkwâri kôtita Del Mouro hamä",
      "translation": "vocês pode comprar frango de Del Moro"
    },
    {
      "transcription": "Sê më tö pyri kôtita Del Mouro hamä",
      "translation": "Vocês (2) pode comprar frango no DM"
    },
    {
      "transcription": "Rë hammörï pjärä kôkjatipitomä, rê py hammöra hê pjo kôkjati pitamä Nänpööröö tä",
      "translation": "vocês poderiam ir de carro, mas não precisa ir de carro para N."
    },
    {
      "transcription": "Hatënnö pjärä kôkjati pita mä Nänpööröö tä",
      "translation": "não precisa ir de carro para N"
    },
    {
      "transcription": "Inkjon pjy tö",
      "translation": "não tem outra estrada"
    },
    {
      "transcription": "Kati hatërin Sinopi tä pjy kjä kâtâti hä, inkjon pjy tö. Mämä pyti.",
      "translation": "Você pode ir para Sinopi no BR. Não tem outro, aquele é único."
    },
    {
      "transcription": "Hatënnö hahê pjo pjy tö hä",
      "translation": "Não pode ir no outro estada"
    },
    {
      "transcription": "Nänsêpotiti mëra rê hatoo rö hahê pjo",
      "translation": "NSPT não pode perder"
    },
    {
      "transcription": "Ra sââ jatoonpe",
      "translation": "Eu tô com muito vontade de mijar"
    },
    {
      "transcription": "Inkjë ka sakriti(n)",
      "translation": "Eu preciso espirrar"
    },
    {
      "transcription": "Inkjë ka sakriti wyn",
      "translation": "Eu vou espirrar muito"
    },
    {
      "transcription": "Inkô katinpja jattä",
      "translation": "Agua vai passa por aqui"
    },
    {
      "transcription": "Inkô kati pê pjorin",
      "translation": "Fecha (registro da) água"
    },
    {
      "transcription": "Mäja kôpy kati pê pjorin, mämän pên inkô katinpja mäjattä",
      "translation": "Fecha (registro) aquí, e a água vai passar para cá"
    },
    {
      "transcription": "Pakwa tejy më, kypamä tuha pjâ pjo Xingu rï",
      "translation": "Pakwa tejy & kypamä didn't grow in the Xingu"
    },
    {
      "transcription": "Kypamätuha kati pjân Tapajuna jö kypa hamä",
      "translation": "Banana pode crescer muito na terra do Tapajuna"
    },
    {
      "transcription": "Kypamätuha pjâ hahê pjo kâsapi jö kypa hamä",
      "translation": "O banana não pode crescer na terra do Kayabi"
    },
    {
      "transcription": "Kjêpyti hë wajärï pjärïn kjäpo kânpo, mä sê soti pjo",
      "translation": "Kjêpyti quer fazer bolo mas não tem mistura pra fazer bolo"
    },
    {
      "transcription": "Kyêpyti hë kati wajä kjäpo kânpo",
      "translation": "Kjêpyti pode fazer bolo"
    },
    {
      "transcription": "Kjêpyti hë kati wajä kjäpo kânpo, mä sê soti pjo",
      "translation": "Kjêpyti pode fazer bolo, mas não tem nada para fazer"
    },
    {
      "transcription": "Kôpyn kati py pan",
      "translation": "Kôpyn pode andar"
    },
    {
      "transcription": "Kôpyn jy py pa",
      "translation": "Kôpyn consegue andar"
    },
    {
      "transcription": "Kôpyn jy py pa, inkjon, timä süri pjo tôtô hë",
      "translation": "Kôpyn consegue andar, mas doutor falou para ele não andar"
    },
    {
      "transcription": "Kjë krippjâ sâpêrä tän, söpää japjârân rê mä sün pjo sâpêrä hê",
      "translation": "minha sogra ainda faz comida, os filhos não deixam ela trabalhar"
    },
    {
      "transcription": "Kjë krippjâ ti sotinkwâratän, söpää japjârân rê mä sün pjo sâpê rä hê",
      "translation": "minha sogra ainda faz comida, os filhos dela não deixam ela trabalhar"
    },
    {
      "transcription": "Kjë krippjâ ti sotinkwâra tän",
      "translation": "minha sogra ainda faz comida"
    },
    {
      "transcription": "Kjë krippjâ hë ti wajära tän sö",
      "translation": "minha sogra ainda faz comida"
    },
    {
      "transcription": "Valdemiro jö kôkjati pita mä rankjân 5 mëra",
      "translation": "no carro do Valdemiro cabe 5 pessoas"
    },
    {
      "transcription": "Valdemiro jö kôkjati pita mä rankjân 5 mëra, rankjân 4 mëra",
      "translation": "no carro do Valdemiro cabe 5 pessoas, não pode ser 5, tem que ser 4"
    },
    {
      "transcription": "inta katinkwân tapja nöpjö sokjentita hä",
      "translation": "deve ser chuva vai chover ou 5 ou 6 meses."
    },
    {
      "transcription": "inta katinkwân 6 meses hahä",
      "translation": "deve ser chuva vai chover até 6 meses."
    },
    {
      "transcription": "innë, katinkwân tapja inta 5 meses hahä",
      "translation": "não sei, deve chuva vai chover até 5 meses."
    },
    {
      "transcription": "innë, katinkwâ rö hahê tapja inta 6 meses",
      "translation": "não sei, deve ser a chuva não vai chover 6 meses."
    },
    {
      "transcription": "Katinkwâ rö hahê tapja inta 6 meses",
      "translation": "deve ser a chuva não vai chover 6 meses."
    },
    {
      "transcription": "inkwâ rö hahê pjo inta hakärä hä",
      "translation": "deve ser a chuva não pode chover na época da seca."
    },
    {
      "transcription": "Kôpyn ippa pjo",
      "translation": "Kôpyn não consegue andar"
    },
    {
      "transcription": "inkô inpja rö hahê pjo mäjattä",
      "translation": "água não pode passar para cá"
    },
    {
      "transcription": "mäja rajï pyri pjärïn, paakâ kjäpô, (kjë kin) ",
      "translation": "esse tênis eu quero comprar (por que eu gostei muito)."
    },
    {
      "transcription": "kjë hë kaj̃ï pyrin, (kjë kïrä mä)",
      "translation": "eu vou comprar (porque eu gostei muito)"
    },
    {
      "transcription": "kjë hë ka sapjôrin mära inkjên",
      "translation": "eu vou casar esta mulher."
    },
    {
      "transcription": "inkjë ra tën pjärïn rê tä raanpärä hë sokjentita hä nänsêpotiti tä",
      "translation": "Eu quero ir pra mim ver o jogo na aldeia NSPT"
    },
    {
      "transcription": "inkjë ka tërïn rêsânpürä hê sokjentita",
      "translation": "eu vou para mim ver o jogo"
    },
    {
      "transcription": "kjë näpjâ mÿnkjâjn ti raanpärä hê inkjë",
      "translation": "minha tia quer vir para acá para me visitar."
    }
  ]
},{
  "metadata": {
    "title": "Saankôrä pyri Elicitation 2024",
    "speakers": "Saankôrä",
    "linguists": "Myriam Lapierre, Ella De Falco, Jessa Jeter, Sunkulp Ananthanarayan",
    "date": "Aug 29-Sept 1, 2024",
    "type": "elicitation"
  },
  "sentences": [
    {
      "transcription": "inkjë jyrapôô krittä",
      "translation": "eu cheguei na aldeia"
    },
    {
      "transcription": "inkjë kappôjn krittä",
      "translation": "Eu estou chegando para a aldeia"
    },
    {
      "transcription": "inkjë kappô krittä",
      "translation": "Eu estou chegando na a aldeia"
    },
    {
      "transcription": "inkjë jyrapôô krittä kôkjatipita hamä",
      "translation": "eu cheguei na aldei no carro"
    },
    {
      "transcription": "%inkjë rapôjn",
      "translation": "eu sempre chego na aldeia."
    },
    {
      "transcription": "inkjë rapan Negro rï",
      "translation": "eu estou no Negro"
    },
    {
      "transcription": "jyrapôô mörï",
      "translation": "eu estou quase chegando"
    },
    {
      "transcription": "jyrappôô mö inkjë krittä",
      "translation": "eu estou quase chegando na aldeia"
    },
    {
      "transcription": "pykôômä kappôjn krittä",
      "translation": "amanhã eu vou chegar na aldeia"
    },
    {
      "transcription": "pykkôômä katihapôjn ka krittä?",
      "translation": "amanhã vc vai chegar na aldeia"
    },
    {
      "transcription": "pykôômä katippôjn krittä mära",
      "translation": "amanhã ele vai chegar na aldeia"
    },
    {
      "transcription": "pykkôômä katipappôjn ka më inkjë krittä",
      "translation": "amanhã eu e vc vamos chegar na aldeia"
    },
    {
      "transcription": "pykkôômä inkjë më Pârakrissan kamëppôjn krittä",
      "translation": "amanhã eu e Pârakrissan vamos chegar na aldeia"
    },
    {
      "transcription": "pykkôômä inkjë më Pârakrissan kamëppô krittä",
      "translation": "amanhã eu e Pârakrissan vamos chegar na aldeia"
    },
    {
      "transcription": "pykkôômä ka më P katimëhapôjn krittä",
      "translation": "amanhã vc e P vão chegar na aldeia"
    },
    {
      "transcription": "pykkôômä märara katimëppôjn krittä",
      "translation": "amanhã eles dois vão chegar na aldeia"
    },
    {
      "transcription": "pykkôômä katipapôjn japjâra krittä",
      "translation": "amanhã nós todos vamos chegar na aldeia"
    },
    {
      "transcription": "pykkôômä inkjëmëra P, K, Pê kappôjn krittä",
      "translation": "amanhã nós vamos chegar na aldeia"
    },
    {
      "transcription": "pykkôômä katirêhapôjn krittä",
      "translation": "amanhã vocês vão chegar na aldeia"
    },
    {
      "transcription": "pykkôômä kappôjn märapjâra krittä",
      "translation": "amanhã eles vão chegar na aldeia"
    },
    {
      "transcription": "pykkôômä kappô krittä",
      "translation": "1SG"
    },
    {
      "transcription": "pykkôômä katihapô ka krittä",
      "translation": "2SG"
    },
    {
      "transcription": "pykôômä katippô krittä mära",
      "translation": "3SG"
    },
    {
      "transcription": "pykkôômä katipapô ka më inkjë krittä",
      "translation": "1DU.INCL"
    },
    {
      "transcription": "pykkôômä inkjë më Pârakrissan kamëppô krittä",
      "translation": "1DU.EXCL"
    },
    {
      "transcription": "pykkôômä ka më P katimëhapô krittä",
      "translation": "2DU"
    },
    {
      "transcription": "pykkôômä märara katimëppô krittä",
      "translation": "3DU"
    },
    {
      "transcription": "pykkôômä katipapô japjâra krittä",
      "translation": "1PL.INCL"
    },
    {
      "transcription": "pykkôômä kappô krittä inkjëmëra",
      "translation": "1PL.EXCL"
    },
    {
      "transcription": "pykkôômä katirêhapô krittä",
      "translation": "2PL"
    },
    {
      "transcription": "pykkôômä kappô märapjâra krittä",
      "translation": "3PL"
    },
    {
      "transcription": "jan haka haswa hahä jyrapôô krittä",
      "translation": "ontem eu cheguei na aldeia"
    },
    {
      "transcription": "jan jyhapôô ka krittä",
      "translation": "ontem vc chegou na aldeia"
    },
    {
      "transcription": "jan haka haswa hahä jyppôô mära krittä",
      "translation": "ontem ele chegou na aldeia"
    },
    {
      "transcription": "jan haka haswa hahä inkjë më ka jypapôô krittä",
      "translation": "ontem eu e vc chegamos na aldeia"
    },
    {
      "transcription": "jan inkjë më P jymërapôô krittä",
      "translation": "eu e P chegamos na aldeia"
    },
    {
      "transcription": "jan kara jymëhapôô krittä",
      "translation": "ontem vcs dois chegaram na aldeia"
    },
    {
      "transcription": "jymëppôô krittä märara",
      "translation": "ontem eles dois chegaram na aldeia"
    },
    {
      "transcription": "jan inkjëmëra jyrapôô",
      "translation": "ontem nós chegamos"
    },
    {
      "transcription": "?jan jypïrörapôô",
      "translation": "ontem nós estavamos chegando"
    },
    {
      "transcription": "jan haka haswa hahä japjâra jypïrörapôô",
      "translation": "ontem nós chegamos na aldeia"
    },
    {
      "transcription": "jan japjâra jypapôô krittä",
      "translation": "ontem nós chegamos na aldeia"
    },
    {
      "transcription": "?jan haka haswa hahä japjâra jypïröpapôô",
      "translation": "ontem nós chegamos na aldeia"
    },
    {
      "transcription": "jan jyrapôô krittä",
      "translation": "eles chegaram na aldeia"
    },
    {
      "transcription": "jan kamëra jyrêhapôô krittä",
      "translation": "vocês chegaram na aldeia"
    },
    {
      "transcription": "jyrapôô",
      "translation": "I arrived"
    },
    {
      "transcription": "jyppôô",
      "translation": "they.sg arrived"
    },
    {
      "transcription": "ka hë ka rappyri",
      "translation": "vc me pegou"
    },
    {
      "transcription": "ka hë karanpân",
      "translation": "vc me pegou"
    },
    {
      "transcription": "ka hë kappyri mära",
      "translation": "vc pegou ela"
    },
    {
      "transcription": "ka hë karapyri inkjëmëra",
      "translation": "vc pegou nós"
    },
    {
      "transcription": "ka hë karapyri japjâra",
      "translation": "vc pegou eles"
    },
    {
      "transcription": "jyrêpäpääpyrakin?",
      "translation": "are y'all all better?"
    },
    {
      "transcription": "ha, jypäpääpyrakin",
      "translation": "yeah we're all better"
    },
    {
      "transcription": "ka hë kamëppyri märara",
      "translation": "vc pegou elas duas"
    },
    {
      "transcription": "ka hë kamërapyri inkjëra",
      "translation": "vc pegous nós dois"
    },
    {
      "transcription": "inkjë hë rêjïppyri",
      "translation": "eu me peguei eu mesmo"
    },
    {
      "transcription": "ka hë karapappyri",
      "translation": "vc me pegou o meu braço"
    },
    {
      "transcription": "*ka hë kapapyri",
      "translation": "vc pegou o braço dele"
    },
    {
      "transcription": "*ka hë karêhappyri kamëra",
      "translation": " "
    },
    {
      "transcription": "ka hë katirappyri japjâra",
      "translation": "vc vai pegar elas"
    },
    {
      "transcription": "karân kamërappyri inkjë",
      "translation": "vcs dois me pegaram"
    },
    {
      "transcription": "karân kamërappyri inkjëra",
      "translation": "vcs dois pegaram nós dois"
    },
    {
      "transcription": "karân kamëmërappyri inkjëra",
      "translation": "vcs dois pegaram nós dois"
    },
    {
      "transcription": "karân kamërapyri inkjëmëra",
      "translation": "vcs dois pegaram a gente"
    },
    {
      "transcription": "karân karapyri inkjëmëra",
      "translation": "vcs dois pegaram a gente"
    },
    {
      "transcription": "karân kamëppyri mära",
      "translation": "vcs dois pegaram ela"
    },
    {
      "transcription": "karân kamëppyri märara",
      "translation": "vcs dois pegaram elas duas"
    },
    {
      "transcription": "karân kamëmëppyri märara",
      "translation": "vcs dois pegaram elas duas"
    },
    {
      "transcription": "karân kapäpäämëppyri japjâra",
      "translation": "vcs dois pegaram todos eles"
    },
    {
      "transcription": "karân kapäpäämërappyri japjâra",
      "translation": "vcs dois pegaram todos eles"
    },
    {
      "transcription": "karân karamëppyri japjâra",
      "translation": "vcs dois pegaram aqueles"
    },
    {
      "transcription": "*karân kamërappyri japjâra",
      "translation": "vcs dois pegaram aqueles"
    },
    {
      "transcription": "kamërân karêrapyri inkjë",
      "translation": "vcs me pegaram"
    },
    {
      "transcription": "kamërân karêrappyri mämänpjâra",
      "translation": "vcs pegaram essas coisas"
    },
    {
      "transcription": "*kamërân karêrappyri japjâra Pê, Pâ, Kô",
      "translation": "vcs pegaram Pê, Pâ, Kô"
    },
    {
      "transcription": "kamërân karêrapyri japjâra",
      "translation": "vcs pegaram Pê, Pâ, Kô"
    },
    {
      "transcription": "kamërân karêrapyri inkjëra",
      "translation": "vcs pegaram nós dois"
    },
    {
      "transcription": "kamërân karêrapyri inkjëmëra",
      "translation": "vcs pegaram nós"
    },
    {
      "transcription": "kamërân karêmërapyri inkjëra",
      "translation": "vcs pegaram nós dois"
    },
    {
      "transcription": "*kamërân karêramëpyri inkjëra",
      "translation": " "
    },
    {
      "transcription": "*kamërân kamërêrapyri inkjëra",
      "translation": " "
    },
    {
      "transcription": "kamërân karêppyri mära",
      "translation": "vcs pegaram ela"
    },
    {
      "transcription": "kamërân karêmëppyri märara",
      "translation": "vcs pegaram elas duas"
    },
    {
      "transcription": "kamërân karêppyri ja",
      "translation": "vcs pegaram isso"
    },
    {
      "transcription": "kamërân karêmëppyri jara",
      "translation": "vcs pegaram essas duas coisas"
    },
    {
      "transcription": "kahë kappyri mäja",
      "translation": "vc pegou isso"
    },
    {
      "transcription": "kahë kamëppyri jara",
      "translation": "vc pegou essas duas coisas"
    },
    {
      "transcription": "kahë kankwâri japjâra",
      "translation": "vc pegaram essas (objetos)"
    },
    {
      "transcription": "kahë kappyri japjâra",
      "translation": "vc comprou essas coisas"
    },
    {
      "transcription": "jökjä",
      "translation": "R$50"
    },
    {
      "transcription": "kjäräsänsi",
      "translation": "R$100"
    },
    {
      "transcription": "tottoka",
      "translation": "R$20"
    },
    {
      "transcription": "nänpân",
      "translation": "R$10"
    },
    {
      "transcription": "hakwyti",
      "translation": "R$2"
    },
    {
      "transcription": "pöpö",
      "translation": "R$5"
    },
    {
      "transcription": "sotihakriti/sotihanka",
      "translation": "R$200"
    },
    {
      "transcription": "kjën",
      "translation": "moeda"
    },
    {
      "transcription": "kjën sy",
      "translation": "moeda"
    },
    {
      "transcription": "py pre",
      "translation": "R$1000"
    },
    {
      "transcription": "pytira pre",
      "translation": "R$2000"
    },
    {
      "transcription": "inkjë hë rêkwän pâri",
      "translation": "I broke the stick/tree"
    },
    {
      "transcription": "kahë karapyri märapjâra",
      "translation": "vc pegou eles"
    },
    {
      "transcription": "karân kamëppyri mäja",
      "translation": "vcs dois pegaram isso"
    },
    {
      "transcription": "karân kamëppyri mäjara",
      "translation": "vcs dois pegaram essas duas (coisas)"
    },
    {
      "transcription": "karân kamënkwâri märäkjamëra",
      "translation": "vcs dois pegaram "
    },
    {
      "transcription": "karân kamënkwâri märäkja",
      "translation": "vcs dois pegaram "
    },
    {
      "transcription": "karân kamëppyri märäkja(mëra)",
      "translation": "vcs dois pegaram aqueles dois"
    },
    {
      "transcription": "inkjë hë rêhapyri ka",
      "translation": "eu peguei vc"
    },
    {
      "transcription": "inkjë hë rêmëhapyri kara",
      "translation": "eu peguei vcs dois"
    },
    {
      "transcription": "inkjë hë rêrêhapyri kamëra",
      "translation": "eu peguei vcs"
    },
    {
      "transcription": "inkjë hë rêppyri mära",
      "translation": "eu peguei ela"
    },
    {
      "transcription": "inkjë hë rêmëppyri märara",
      "translation": "eu peguei elas duas"
    },
    {
      "transcription": "inkhë hë rêrapyri märapjâra",
      "translation": "eu peguei eles"
    },
    {
      "transcription": "inkjë hë rêppyri mäja",
      "translation": "eu peguei esse"
    },
    {
      "transcription": "inkjë hë rêmëppyri mäjara",
      "translation": "eu peguei essas duas coisas"
    },
    {
      "transcription": "inkjë hë rênkwâri märäkja(mëra)",
      "translation": "eu peguei aquelas (coisas)"
    },
    {
      "transcription": "inkjë hë rêrappyri märäkja(mëra)",
      "translation": "eu peguei aquelas (coisas)"
    },
    {
      "transcription": "jarân katimïkârïn",
      "translation": "nós dois vamos derrubar"
    },
    {
      "transcription": "jara katipakwy tessu",
      "translation": "nós dois vamos pescar"
    },
    {
      "transcription": "inkjërân rêmëhapyri ka",
      "translation": "nós dois pegamos vc"
    },
    {
      "transcription": "inkjërân rêmëhapyri kara",
      "translation": "nós dois pegamos vcs dois"
    },
    {
      "transcription": "%inkjërân rêmëmëhapyri kara",
      "translation": "nós dois pegamos vcs dois"
    },
    {
      "transcription": "inkjërân rêrêmëhapyri kamëra",
      "translation": "nós dois pegamos vcs"
    },
    {
      "transcription": "inkjërân rêmëhapyri kamëra",
      "translation": "nós dois pegamos vcs"
    },
    {
      "transcription": "nänpre, intwê, swam",
      "translation": "past, present?, future?"
    },
    {
      "transcription": "inkjërân rêmëppyri mäja",
      "translation": "nós dois pegamos isso"
    },
    {
      "transcription": "inkjërân rêmëppyri mäjara",
      "translation": "nós dois pegamos issos dois"
    },
    {
      "transcription": "%inkjërân rêmëmëppyri mäjara",
      "translation": "nós dois pegamos issos dois"
    },
    {
      "transcription": "inkjërân rêmënkwâri mäja päpää",
      "translation": "nós dois pegamos todo isso"
    },
    {
      "transcription": "inkjërân rêramëppyri ja päpää",
      "translation": "nós dois pegamos todo isso"
    },
    {
      "transcription": "*inkjërân rêmërappyri ja päpää",
      "translation": "nós dois pegamos todo isso"
    },
    {
      "transcription": "inkjërân rêmëppyri mära",
      "translation": "nós dois pegamos ela"
    },
    {
      "transcription": "inkjërân rêmëppyri märara",
      "translation": "nós dois compramos essas duas coisas"
    },
    {
      "transcription": "%inkjërân rêmëmëppyri märara",
      "translation": "nós dois pegamos elas duas"
    },
    {
      "transcription": "?rêmëpyri",
      "translation": "nós pegamos eles"
    },
    {
      "transcription": "jarân timëpapyri",
      "translation": "eles dois pegaram nós dois"
    },
    {
      "transcription": "mïppyri Tititkre",
      "translation": "let's get T"
    },
    {
      "transcription": "%inkjërân rêmëppyri Kôrinkre",
      "translation": "nós dois pegamos Kô"
    },
    {
      "transcription": "%inkjërân rêmëppyri Kô më Pâ",
      "translation": "nós dois pegamos Kô & Pâ"
    },
    {
      "transcription": "%inkjërân rêmëmëppyri Kô më Pâ",
      "translation": "nós dois pegamos Kô & Pâ"
    },
    {
      "transcription": "%inkjërân rêrappyri japjâra",
      "translation": "nós dois pegamos eles"
    },
    {
      "transcription": "nänsêpijïn",
      "translation": "bat shit"
    },
    {
      "transcription": "jarân katimïnpyri mära",
      "translation": "nós dois (vc e eu) vamos pegar ele"
    },
    {
      "transcription": "%jarân mïppyri mära",
      "translation": "nós dois pegamos esse"
    },
    {
      "transcription": "%jarân mïppyri Kj",
      "translation": "nós dois pegamos Kjêpyti"
    },
    {
      "transcription": "%jarân mïppyri kôkjati",
      "translation": "nós dois pegamos o balde"
    },
    {
      "transcription": "jarân mïrapyri märapjâra",
      "translation": "nós dois pegamos elas"
    },
    {
      "transcription": "jarân mïmëppyri märara",
      "translation": "nós dois pegamos elas duas"
    },
    {
      "transcription": "jarân mïmëppyri mäjara pytira",
      "translation": "nós dois pegamos essas duas coisas"
    },
    {
      "transcription": "jarân mïmëppyri mäja pytira",
      "translation": "nós dois pegamos essas duas coisas"
    },
    {
      "transcription": "jarân mïnkwâri mäjapjâra/japjâra",
      "translation": "nós dois pegamos essas coisas"
    },
    {
      "transcription": "japjârân mïnpân mära",
      "translation": "nós pegamos ela"
    },
    {
      "transcription": "jarân mïppyri mäjapjâra",
      "translation": "nós dois pegamos essas coisas"
    },
    {
      "transcription": "japjârân mïppyri mära",
      "translation": "nós pegamos ela"
    },
    {
      "transcription": "japjârân Pârakrissân rêppyri mära",
      "translation": "?"
    },
    {
      "transcription": "nöpjömërân japjârân mïppyri Pêkjära",
      "translation": "nós três pegamos Pê and Pâ"
    },
    {
      "transcription": "japjârân mïmëppyri Pêkjära",
      "translation": "nós pegamos Pê and Pâ"
    },
    {
      "transcription": "japjârân mïrankwâri märapjâra",
      "translation": "nós pegamos eles"
    },
    {
      "transcription": "japjârân mïrappyri märapjâra",
      "translation": "nós pegamos eles"
    },
    {
      "transcription": "japjârân mïppyri märapjâra",
      "translation": "nós pegamos eles"
    },
    {
      "transcription": "japjârân mïppyri mäja pëhakriti",
      "translation": "nós pegamos essa gravador"
    },
    {
      "transcription": "japjârân mïmëppyri mäja pëhakritira",
      "translation": "nós pegamos essas dois gravadores"
    },
    {
      "transcription": "japjârân mïnkwâri mäja pëhakriti",
      "translation": "nós pegamos essas gravadores"
    },
    {
      "transcription": "japjârân mïrankwâri mäja pëhakriti",
      "translation": "nós pegamos essas gravadores"
    },
    {
      "transcription": "japjârân mïrappyri ja pëhakriti",
      "translation": "nós compramos essas gravadores (one or two)"
    },
    {
      "transcription": "japjârân mïrappyri mämänpjâra pëhakriti",
      "translation": "nós compramos essas gravadores"
    },
    {
      "transcription": "sikkrekrân",
      "translation": "pull by the ear"
    },
    {
      "transcription": "sikkrepyri",
      "translation": "pull someone's ear"
    },
    {
      "transcription": "%inkjëmërân rêppyri Pê",
      "translation": "nós pegamos Pê"
    },
    {
      "transcription": "inkjëmërân rêppyri Pâ më Pê",
      "translation": "nós pegamos Pê e Pâ"
    },
    {
      "transcription": "inkjëmërân rêmëppyri Pâ më Pê",
      "translation": "nós pegamos Pê e Pâ"
    },
    {
      "transcription": "*inkjë, Kj, Pê rênkwâri Pâ",
      "translation": "we grabbed Pâ"
    },
    {
      "transcription": "inkjëmërân rêrapyri märapjâra inkjara",
      "translation": "nós pegamos essas mulheres"
    },
    {
      "transcription": "inkjëmërân rêrankwâri märapjâra inkjara",
      "translation": "nós pegamos essas mulheres"
    },
    {
      "transcription": "inkjëmërân rêppyri pëhakrippää",
      "translation": "nós pegamos o gravador"
    },
    {
      "transcription": "inkjëmërân kasanpâri sotimëra",
      "translation": "nós pegamos coisas (muitas)"
    },
    {
      "transcription": "inkjë hë kanpârïn ja",
      "translation": "eu vou pegar (grab)"
    },
    {
      "transcription": "inkjë hë kappyri",
      "translation": "eu vou pegar"
    },
    {
      "transcription": "inkjëmërân katöjanpârïn sotimëra",
      "translation": "nós vamos pegar essas coisas"
    },
    {
      "transcription": "inkjërân rêmëppyri pëhakrippäära",
      "translation": "nós dois pegamos os dois gravadores "
    },
    {
      "transcription": "inkjëmërân rêmëppyri pëhakrippara",
      "translation": "nós pegamos os dois gravadores "
    },
    {
      "transcription": "inkjëmërân rêppyri pëhakrippamëra",
      "translation": "nós pegamos os gravadores"
    },
    {
      "transcription": "inkjëmërân rêrappyri pëhakrippamëra",
      "translation": "nós pegamos os gravadores"
    },
    {
      "transcription": "inkjëmërân kahappy ka",
      "translation": "nós vamos prender vc"
    },
    {
      "transcription": "inkjëmërân kahatën ka",
      "translation": "nós vamos prender vc"
    },
    {
      "transcription": "inkjëmërân rêhapyri ka",
      "translation": "nós pegamos vc"
    },
    {
      "transcription": "inkjëmërân rêmëhapyri kara pytira",
      "translation": "nós pegamos vcs dois"
    },
    {
      "transcription": "%inkjëmërân rêhapyri kara pytira",
      "translation": "nós pegamos vcs dois"
    },
    {
      "transcription": "inkjëmërân karêhapyrïn kamëra",
      "translation": "nós vamos pegar vcs"
    },
    {
      "transcription": "%inkjëmërân rêrêhapyri kamëra",
      "translation": "nós pegamos vcs"
    },
    {
      "transcription": "*inkjëmërân rêhapyri kamëra",
      "translation": "nós pegamos vcs"
    },
    {
      "transcription": "Pê hë tirapyri inkjë",
      "translation": "Pê me pegou"
    },
    {
      "transcription": "Pê hë tipapyri jara",
      "translation": "Pê nós pegou nós dois"
    },
    {
      "transcription": "%Pê hë timëpapyri jara (ka më inkjë)",
      "translation": "Pê nós pegou nós dois"
    },
    {
      "transcription": "Pê hë tipappyri jara Kô më inkjë",
      "translation": "Pê pegou nós dois"
    },
    {
      "transcription": "%Pê hë timërapyri mära më inkjë",
      "translation": "Pê pegou nós dois"
    },
    {
      "transcription": "Pê hë timërapyri inkjëra",
      "translation": "Pê pegou nós dois"
    },
    {
      "transcription": "Pê hë tipapyri japjâra",
      "translation": "Pê pegou nós"
    },
    {
      "transcription": "Pê hë tirapyri inkjëmëra",
      "translation": "Pê pegou nós"
    },
    {
      "transcription": "Pê hë ti hapyri ka",
      "translation": "Pê pegou vc"
    },
    {
      "transcription": "Pê hë ti mëhapyri kara",
      "translation": "Pê pegou vcs dois"
    },
    {
      "transcription": "Pê hë ti rêhapyri kamëra",
      "translation": "Pê pegou vcs"
    },
    {
      "transcription": "Pê hë tippyri Pâ",
      "translation": "Pê pegou Pâ"
    },
    {
      "transcription": "Kô hë timëppyri Pârakrissanna",
      "translation": "Kô pegou Pâ & Pê"
    },
    {
      "transcription": "Kô hë tirapyri Pârakrissanmëra",
      "translation": "Kô pegou Pâ et al"
    },
    {
      "transcription": "Kô hë tippyri pëhakriti",
      "translation": "Kô comprou/pegou gravador"
    },
    {
      "transcription": "Kô hë tinpân pëhakriti",
      "translation": "Kô pegou gravador"
    },
    {
      "transcription": "Kô hë timëppyri pytira pëhakriti",
      "translation": "Kô comprou/pegou dois gravadores"
    },
    {
      "transcription": "*Kô hë tippyri inkjêppëhakriti",
      "translation": "Kô comprou/pegou muitos gravadores"
    },
    {
      "transcription": "Kô hë tirappyri inkjêppëhakriti",
      "translation": "Kô comprou/pegou muitos gravadores"
    },
    {
      "transcription": "%Pê-rân timëppyri pëhakriti",
      "translation": "Pê & Pâ comparam gravador"
    },
    {
      "transcription": "Mararân timëppyri pëhakriti",
      "translation": "Elas comparam gravador"
    },
    {
      "transcription": "Pê-rân timëppyri mäjara pëhakriti",
      "translation": "Pê & Pâ compraram essas dois gravadores"
    },
    {
      "transcription": "%Pê-rân timëmëppyri mäjara pëhakriti",
      "translation": "Pê & Pâ compraram esses dois gravadores"
    },
    {
      "transcription": "Pê & Pâ timëppyri mäja pëhakriti",
      "translation": "Pê & Pâ compraram esse gravador"
    },
    {
      "transcription": "%Pê-rân timëppyri mäja pëhakritimëra",
      "translation": "Pê & Pâ compraram esses gravadores"
    },
    {
      "transcription": "Pê & Pâ rân timëppyri Kô",
      "translation": "Pê & Pâ pegaram Kô"
    },
    {
      "transcription": "%Pê & Pâ rân timëppyri Kô-ra",
      "translation": "Pê & Pâ pegaram Kô & friend"
    },
    {
      "transcription": "%Pê & Pâ rân timëmëppyri Kô-ra",
      "translation": "Pê & Pâ pegaram Kô & friend"
    },
    {
      "transcription": "Pê-rân timëppyri Kô-ra",
      "translation": "Pê & Pâ pegaram the balls of a monkey"
    },
    {
      "transcription": "*Pê-rân timërappyri Kj-mëra",
      "translation": "Pê & Pâ pegaram Kj et al"
    },
    {
      "transcription": "Pê-rân timërapyri Kj-mëra",
      "translation": "Pê & Pâ pegaram Kj et al"
    },
    {
      "transcription": "pënkjäräntê",
      "translation": "microfone"
    },
    {
      "transcription": "%Pê-rân timërapyri inkjë",
      "translation": "Pê & Pâ me pegaram "
    },
    {
      "transcription": "*Pê-rân timërappyri inkjë",
      "translation": "Pê & Pâ me pegaram "
    },
    {
      "transcription": "%Pê-rân timëpappyri inkjëra",
      "translation": "Pê & Pâ nos pegaram"
    },
    {
      "transcription": "Pê-rân timëpapyri japjâra",
      "translation": "Pê & Pâ nos pegaram"
    },
    {
      "transcription": "%Pê-rân timëpapyri jara",
      "translation": "Pê & Pâ nos pegaram os dois"
    },
    {
      "transcription": "%Pê-rân timëmëpapyri jara",
      "translation": "Pê & Pâ nos pegaram os dois"
    },
    {
      "transcription": "%Pê-rân timërapyri inkjëra",
      "translation": "Pê & Pâ nos pegaram os dois"
    },
    {
      "transcription": "%Pê-rân timëmërapyri jara",
      "translation": "Pê & Pâ nos pegaram os dois"
    },
    {
      "transcription": "Pê-rân timërapyri inkjëmëra",
      "translation": "Pê & Pâ nos pegaram"
    },
    {
      "transcription": "Pê më Pâ rân tirêmëhapyri kamëra",
      "translation": "Pê & Pâ pegaram vcs"
    },
    {
      "transcription": "Pê më Pâ hë timëhapyri ka",
      "translation": "Pê & Pâ pegaram vc"
    },
    {
      "transcription": "Pê Pâ rân timëhapyri kara pytira",
      "translation": "Pê & Pâ pegaram vcs dois"
    },
    {
      "transcription": "Pê më märarân timërapyri inkjë",
      "translation": "Pê & another got me"
    },
    {
      "transcription": "%Pê-mërân rêrapyri inkjë",
      "translation": "Pê et al me pegaram"
    },
    {
      "transcription": "%Pê-mërân rêmërapyri inkjëra",
      "translation": "Pê et al pegaram nós dois"
    },
    {
      "transcription": "Pê-mërân timërapyri inkjëra",
      "translation": "Pê et al pegaram nós dois"
    },
    {
      "transcription": "%Pê-mërân rêmëpapyri jara (ka më inkjë)",
      "translation": "Pê et al pegaram nós dois (vc e eu)"
    },
    {
      "transcription": "%Pê-mërân rêpapyri jara (ka më inkjë)",
      "translation": "Pê et al pegaram nós dois (vc e eu)"
    },
    {
      "transcription": "*Pê-mërân rêpapyri inkjëmëra",
      "translation": " "
    },
    {
      "transcription": "%Pê-mërân rêrapyri inkjëmëra",
      "translation": "Pê et al pegaram a gente"
    },
    {
      "transcription": "%Pê-mërân rêpapyri japjâra",
      "translation": "Pê et al pegaram a gente"
    },
    {
      "transcription": "*Pê-mërân rêrêpappyri japjâra",
      "translation": " "
    },
    {
      "transcription": "Pê-mërân rêhapyri ka",
      "translation": "Pê et al pegaram vc"
    },
    {
      "transcription": "Pê-mërân rêmëhapyri kara",
      "translation": "Pê et al pegaram vcs dois"
    },
    {
      "transcription": "*Pê-mërân rêmëmëhapyri kara",
      "translation": " "
    },
    {
      "transcription": "Pê-mërân rêrêhapyri kamëra",
      "translation": "Pê et al pegaram vcs"
    },
    {
      "transcription": "Pê-mërân rêppyri Kj",
      "translation": "Pê et al pegaram Kj"
    },
    {
      "transcription": "Pê-mërân rêmëppyri Kj-ra",
      "translation": "Pê et al pegaram Kj & friend"
    },
    {
      "transcription": "Pê-mërân rêrapyri Kj-mëra",
      "translation": "Pê et al pegaram Kj et al"
    },
    {
      "transcription": "Pê-mërân rêppyri pëhakriti",
      "translation": "Pê et al compraram o gravador"
    },
    {
      "transcription": "Pê-mërân rêppyri pytira pëhakriti",
      "translation": "Pê et al compraram dois gravadores"
    },
    {
      "transcription": "%Pê-mërân rêmëppyri pytira pëhakriti",
      "translation": "Pê et al compraram dois gravadores"
    },
    {
      "transcription": "Pê-mërân rênkwâri inkjêti pëhakriti",
      "translation": "Pê et al compraram muitos gravadores"
    },
    {
      "transcription": "%Pê-mërân rêppyri inkjêti pëhakriti",
      "translation": "Pê et al compraram muitos gravadores"
    },
    {
      "transcription": "%Pê-mërân rêrappyri inkjêti pëhakriti",
      "translation": "Pê et al compraram muitos gravadores"
    },
    {
      "transcription": "Sasê hankre",
      "translation": "corda"
    },
    {
      "transcription": "Sasê hankre hë tirapyri inkjë",
      "translation": "Corda me pegou"
    },
    {
      "transcription": "Sasê hankre hë tihapyri ka",
      "translation": "Corda pegou vc"
    },
    {
      "transcription": "Sasê hankre hë tippyri Pê",
      "translation": "Corda pegou Pê"
    },
    {
      "transcription": "Sasê hankre hë tippyri pëhakriti",
      "translation": "Corda pegou o gravador"
    },
    {
      "transcription": "Sasê hankre hë tipapyri ka më inkjë",
      "translation": "Corda pegou vc e eu"
    },
    {
      "transcription": "%Sasê hankre hë timëpapyri jara",
      "translation": "Corda pegou vc e eu"
    },
    {
      "transcription": "%Sasê hankre hë timërapyri inkjëra",
      "translation": "Corda pegou a gente"
    },
    {
      "transcription": "Sasê hankre hë timëhapyri kara (pytira)",
      "translation": "Corda pegou vcs dois"
    },
    {
      "transcription": "%Sasê hankre hë timëppyri Pê-ra",
      "translation": "Corda pegou Pê & friend"
    },
    {
      "transcription": "Sasê hankre hë timëppyri pytira pëhakriti",
      "translation": "Corda pegou dios gravadores"
    },
    {
      "transcription": "Sasê hankre hë tipapyri japjâra",
      "translation": "Corda pegou a gente"
    },
    {
      "transcription": "%Sasê hankre hë tirapyri inkjëmëra",
      "translation": "Corda pegou a gente"
    },
    {
      "transcription": "Sasê hankre hë tirêhapyri kamëra",
      "translation": "Corda pegou vcs"
    },
    {
      "transcription": "Sasê hankre hë tirapyri Pê-mëra",
      "translation": "Corda pegou Pê et al"
    },
    {
      "transcription": "Sasê hankre hë tippyri pëhakriti",
      "translation": "Corda pegou os gravadores"
    },
    {
      "transcription": "Sasê hankre hë tippyri pëhakritimëra",
      "translation": "Corda pegou os gravadores"
    },
    {
      "transcription": "*Sasê hankre hë tirappyri pëhakritimëra",
      "translation": ""
    },
    {
      "transcription": "Sasê hankre hë tirapyri pëhakritimëra",
      "translation": "Corda pegou os gravadores"
    },
    {
      "transcription": "Sasê hankre rân timërapyri inkjë",
      "translation": "As duas cordas me pegaram"
    },
    {
      "transcription": "Sasê hankre rân timëhapyri ka",
      "translation": "As duas cordas pegaram vc"
    },
    {
      "transcription": "Sasê hankre rân timëppyri Pê",
      "translation": "As duas cordas pegaram Pê"
    },
    {
      "transcription": "Sasê hankre rân timëppyri pëhakriti",
      "translation": "As duas cordas pegaram o gravador"
    },
    {
      "transcription": "Sasê hankre rân timëpapyri kjë më ka",
      "translation": "As duas cordas pegaram eu e vc"
    },
    {
      "transcription": "%Sasê hankre rân timëmëpapyri jara",
      "translation": "As duas cordas pegaram nós dois"
    },
    {
      "transcription": "%Sasê hankre rân timëmërapyri inkjëra",
      "translation": "As duas cordas pegaram nós dois"
    },
    {
      "transcription": "%Sasê hankre rân timërapyri inkjëra",
      "translation": "As duas cordas pegaram nós dois"
    },
    {
      "transcription": "*Sasê hankre rân tirapyri inkjëra",
      "translation": " "
    },
    {
      "transcription": "Sasê hankre rân timëhapyri kara",
      "translation": "As duas cordas pegaram vcs dois"
    },
    {
      "transcription": "%Sasê hankre rân timëmëhapyri kara",
      "translation": "As duas cordas pegaram vcs dois"
    },
    {
      "transcription": "Sasê hankre rân timëppyri Pê-ra",
      "translation": "As duas cordas pegaram Pê & friend"
    },
    {
      "transcription": "%Sasê hankre rân timëmëppyri Pê-ra",
      "translation": "As duas cordas pegaram Pê & friend"
    },
    {
      "transcription": "Sasê hankre rân timëppyri pëhakritira",
      "translation": "As duas cordas pegaram os dois gravadores"
    },
    {
      "transcription": "%Sasê hankre rân timëmëppyri pëhakritira",
      "translation": "As duas cordas compraram/pegaram os dois gravadores"
    },
    {
      "transcription": "Sasê hankre rân tipapyri japjâra",
      "translation": "As duas cordas pegaram a gente"
    },
    {
      "transcription": "%Sasê hankre rân timëpapyri japjâra",
      "translation": "As duas cordas pegaram a gente"
    },
    {
      "transcription": "%Sasê hankre rân timërapyri inkjëmëra",
      "translation": "As duas cordas pegaram a gente"
    },
    {
      "transcription": "Sasê hankre rân tirêmëhapyri kamëra",
      "translation": "As duas cordas pegaram vcs"
    },
    {
      "transcription": "*Sasê hankre rân tirêhapyri kamëra",
      "translation": "As duas cordas pegaram vc"
    },
    {
      "transcription": "Sasê hankre rân tirapyri Pê-mëra",
      "translation": "As duas cordas pegaram os Pê"
    },
    {
      "transcription": "Sasê hankre rân timësanpân pëhakriti",
      "translation": "As duas cordas pegaram muitos gravadores"
    },
    {
      "transcription": "%Sasê hankre rân timërapyri pëhakriti mëra",
      "translation": "As duas cordas pegaram os gravadores"
    },
    {
      "transcription": "%Sasê hankre rân tirapyri Pê-mëra",
      "translation": "As duas cordas pegaram os Pê"
    },
    {
      "transcription": "sasê hankre mërân rêrapyri",
      "translation": "As cordas me pegaram"
    },
    {
      "transcription": "sasê hankre mërân rêhapyri ka",
      "translation": "as cordas pegaram vc"
    },
    {
      "transcription": "sasê hankre mërân rêppyri Pê",
      "translation": "as cordas pegaram Pê"
    },
    {
      "transcription": "Sasê hankre mërân rêppyri pëhakriti",
      "translation": "As cordas pegaram o gravador"
    },
    {
      "transcription": "%Sasê hankre mërân rêpapyri inkjë më ka/jara",
      "translation": "As cordas pegaram eu e vc"
    },
    {
      "transcription": "%Sasê hankre mërân rêmërapyri inkjëra",
      "translation": "As cordas nos pegaram nós dois"
    },
    {
      "transcription": "%Sasê hankre mërân rêrapyri inkjëra",
      "translation": "As cordas nos pegaram nós dois"
    },
    {
      "transcription": "Sasê hankre mërân rêmëhapyri kara",
      "translation": "As cordas pegaram vcs dois"
    },
    {
      "transcription": "Sasê hankre mërân rêmëppyri Pêkjä",
      "translation": "As cordas pegaram Pê and friend"
    },
    {
      "transcription": "%Sasê hankre mërân rêmëppyri Pêkjä-ra",
      "translation": "As cordas pegaram Pê and friend"
    },
    {
      "transcription": "Sasê hankre mërân rêmëppyri pëhakritira",
      "translation": "As cordas pegaram os dois gravadores"
    },
    {
      "transcription": "Sasê hankre mërân rêpappyri japjâra päpää",
      "translation": "As cordas pegaram todos nós"
    },
    {
      "transcription": "Sasê hankre mërân rêrappyri inkjëmëra",
      "translation": "As cordas pegaram todos nós"
    },
    {
      "transcription": "Sasê hankre mërân rêrêhapyri kamëra",
      "translation": "As cordas pegaram vcs"
    },
    {
      "transcription": "Sasê hankre mërân rêrapyri Kô-mëra",
      "translation": "As cordas pegaram Kô et al"
    },
    {
      "transcription": "Sasê hankre mërân rêppyri pëhakritimëra",
      "translation": "As cordas pegaram os gravadores"
    },
    {
      "transcription": "Sasê hankre mërân rêrapyri pëhakritimëra",
      "translation": "As cordas compraram os gravadores"
    },
    {
      "transcription": "inkjë hë rêjïpyri",
      "translation": "eu me peguei mesmo"
    },
    {
      "transcription": "inkjë hë rêjïppyri",
      "translation": "fui eu que comprei"
    },
    {
      "transcription": "inkjë hë rêjïpappyri",
      "translation": "eu me peguei o meu braço"
    },
    {
      "transcription": "ka hë kajïpyri",
      "translation": "vc pegou vc mesmo"
    },
    {
      "transcription": "mara hë tijïpyri",
      "translation": "ela se pegou ela mesma"
    },
    {
      "transcription": "ka hë kappyri sasê hankre ka hë",
      "translation": "vc mesmo comprou corda"
    },
    {
      "transcription": "*sasê hankre tijïp(p)yri",
      "translation": "corda pegou ela mesma"
    },
    {
      "transcription": "ka më inkjë rân pÿräha timïpankwâri",
      "translation": "vc e eu cada um pegou nossos braços"
    },
    {
      "transcription": "inkjë më karân pÿräha katimïpankwân",
      "translation": "?"
    },
    {
      "transcription": "%jarân mïjïpyri",
      "translation": "nós dois pegou nossa própria carne"
    },
    {
      "transcription": "%jarân mïmëjïpyri",
      "translation": "nós dois pegou nossa própria carne"
    },
    {
      "transcription": "%inkjërân rêmëjïpyri",
      "translation": "nós dois pegou nossa própria carne"
    },
    {
      "transcription": "rêmëjïppyri",
      "translation": "nós dois compramos os nossos próprios"
    },
    {
      "transcription": "inkjërân rêmëjïpyri",
      "translation": "nós dois pegaram nós dois mesmo"
    },
    {
      "transcription": "jarân rêmëjïpyri",
      "translation": "nós dois pegaram nós dois mesmo"
    },
    {
      "transcription": "karân kamëjïpyri",
      "translation": "vcs dois pegaram vcs mesmo"
    },
    {
      "transcription": "kamëjäpjö",
      "translation": "vcs dois abraçaram vcs mesmos"
    },
    {
      "transcription": "rêjïnkjwâri inkjëmërân",
      "translation": "nós pegamos nós mesmos"
    },
    {
      "transcription": "inkjëmërân rêmëjïpyri",
      "translation": "nós todos abraçamos nós mesmo"
    },
    {
      "transcription": "märarân timëjïpyri",
      "translation": "eles se abraçaram"
    },
    {
      "transcription": "märarân timëjïppyri sasê",
      "translation": "eles dois compraram rede"
    },
    {
      "transcription": "%japjârân mïjïpyri",
      "translation": "cada um pegamos nós mesmos"
    },
    {
      "transcription": "%kamërân karêjïpyri",
      "translation": "y'all grabbed y'all's selves"
    },
    {
      "transcription": "%japjârân rêjïpyri",
      "translation": "todos pegaram uma foto de todos"
    },
    {
      "transcription": "%mäjapjârân rêjïppyri",
      "translation": "todos pegaram uma foto de cada um"
    },
    {
      "transcription": "%mäjapjârân rêjïppyri",
      "translation": "foram eles que compraram"
    },
    {
      "transcription": "%mära hë tijïppyri (kâprëpa)",
      "translation": "foi ele mesmo que pegou (eg um livro)"
    },
    {
      "transcription": "%jarân mïjïppyri",
      "translation": "nós mesmos compramos"
    },
    {
      "transcription": "%inkjërân rêmëjïpyri mäja",
      "translation": "nós dois compramos para nós essa)"
    },
    {
      "transcription": "%inkjë hë rêjïppyri mäja",
      "translation": "fui eu que comprei"
    },
    {
      "transcription": "inkjë hë rêjïnkwâri quatro kypa",
      "translation": "i bought four plots"
    },
    {
      "transcription": "%karân kamëjïppyri",
      "translation": "vcs dois foram q compraram"
    },
    {
      "transcription": "%mararân timëjïppyri kâprëpa",
      "translation": "foram eles dois que compraram o livro"
    },
    {
      "transcription": "kamërân kamëjïppyri kâprëpa",
      "translation": "foram vcs que compraram o livro"
    },
    {
      "transcription": "inkjëmërân rêjïppyri kâprëpa",
      "translation": "fuimos nós que compramos o livro"
    },
    {
      "transcription": "japjârân mïjïppyri kâprëpa",
      "translation": "fuimos nós que compramos o livro"
    },
    {
      "transcription": "inkjërân rêmëpïnpyri",
      "translation": "nós dois pegamos "
    },
    {
      "transcription": "inkjërân rêmëpïnpapyri",
      "translation": "nós dois pegamos nós no braço"
    },
    {
      "transcription": "inkjërân rêmëpïnteppyri",
      "translation": "nós dois pegamos nós na perna"
    },
    {
      "transcription": "jarân mïmëpïnpyri",
      "translation": "nós dois pegamos each other"
    },
    {
      "transcription": "jarân mïmëpïnteppyri",
      "translation": "nós dois pegamos each other na perna"
    },
    {
      "transcription": "%karân kamëpïnpyri",
      "translation": "vcs dois se pegaram um para outro"
    },
    {
      "transcription": "karân kamëpïnteppyri",
      "translation": "vcs dois se pegaram um para outro nas pernas"
    },
    {
      "transcription": "märarân timëpïnpyri",
      "translation": "eles dois se pegaram each other"
    },
    {
      "transcription": "märarân timëpïnteppyri",
      "translation": "eles dois se pegaram each other nas pernas"
    },
    {
      "transcription": "inkjëmërân rêpïnpyri",
      "translation": "nós nos pegamos each other"
    },
    {
      "transcription": "inkjëmërân rêpïnteppyri",
      "translation": "nós nos pegamos each other nas pernas"
    },
    {
      "transcription": "japjârân mïpïnpyri",
      "translation": "nós nos pegamos each other"
    },
    {
      "transcription": "japjârân mïpïnteppyri",
      "translation": "nós nos pegamos each other nas pernas"
    },
    {
      "transcription": "kamërân karêpïnpyri",
      "translation": "vcs se pegaram each other"
    },
    {
      "transcription": "kamërân karêpïntepyri",
      "translation": "vcs se pegaram nas pernas"
    },
    {
      "transcription": "märapjârân rêpïnpyri",
      "translation": "eles se pegaram"
    },
    {
      "transcription": "märapjârân rêpïnteppyri",
      "translation": "eles se pegaram nas pernas"
    }
  ]
},{
  "metadata": {
    "title": "Ippë história",
    "speakers": "Sêhakjã",
    "linguists": "Myriam Lapierre, Bernat Bardagil-Mas",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 0,
      "start": "25672",
      "stop": "26435",
      "transcription": "Sypysâapâri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 1,
      "start": "27488",
      "stop": "34806",
      "transcription": "mãmã pêj jy ra pôô Sypysâapâri pêj pa tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": "38374",
      "stop": "40124",
      "transcription": "joopyntonõ jõ inkô tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": "41113",
      "stop": "44181",
      "transcription": "joopyntonõ jõ inkô tã jy ra pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": "44635",
      "stop": "49920",
      "transcription": "mãmã pêj jy ro ho tẽ Pysypâri tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": "50237",
      "stop": "52306",
      "transcription": "mãmã nĩ jy ra tepi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": "52976",
      "stop": "57567",
      "transcription": "mẽj jãhã mãmã nĩ jy Guarantã, mãmã nĩ jy ranpju",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": "59328",
      "stop": "61033",
      "transcription": "nêj sasêri inkwa ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": "61363",
      "stop": "64419",
      "transcription": "inkwa ho paa, inkwa \"tora\"",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": "65079",
      "stop": "66783",
      "transcription": "sutĩ pytinsi inkwa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": "67482",
      "stop": "69266",
      "transcription": "mãmã nĩ jy asã[gravidou]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": "69931",
      "stop": "71487",
      "transcription": "jy pêj ty sõpãã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": "74771",
      "stop": "75953",
      "transcription": "Tokakjêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": "77204",
      "stop": "78681",
      "transcription": "Tokakjêj jy ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": "79078",
      "stop": "82249",
      "transcription": "ũãhã Diauarum rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": "83624",
      "stop": "86169",
      "transcription": "mãmã pêj nê sa pjôri[casou] inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": "94203",
      "stop": "98590",
      "transcription": "kjow, pyti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": "99965",
      "stop": "100636",
      "transcription": "haa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": "101306",
      "stop": "102942",
      "transcription": "jy ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": "101505",
      "stop": "102391",
      "transcription": "tõ jy ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": "103624",
      "stop": "105612",
      "transcription": "nê sa pjôri inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": "105999",
      "stop": "108397",
      "transcription": "prĩ hã rê tân sa pjôri Kankjya",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": "109851",
      "stop": "112101",
      "transcription": "jy ra tân si tepi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": "113112",
      "stop": "114522",
      "transcription": "rê sopari inkjẽ hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": "115181",
      "stop": "117602",
      "transcription": "rê sõ pôwn nõnpejn[derrubou o mel]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": "117783",
      "stop": "120522",
      "transcription": "rê pari kjyti, kwakriti, ikkôw",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": "122522",
      "stop": "123431",
      "transcription": "jy asã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": "124443",
      "stop": "126113",
      "transcription": "jy asã, jy sõpãã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": "126807",
      "stop": "128409",
      "transcription": "sõpãã inkjêt pytinsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": "128749",
      "stop": "131232",
      "transcription": "inpyara \"cinco\"",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": "131232",
      "stop": "134028",
      "transcription": "kjara \"três\"",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": "136988",
      "stop": "137909",
      "transcription": "kjêti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": "143510",
      "stop": "146726",
      "transcription": "haa, rê sanpũ joopytonõ jõ inkô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": "147078",
      "stop": "151180",
      "transcription": "joopyntonõ jõ inkô pêj jy ro tẽ kjẽ nãpjâ tijãri tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": "151965",
      "stop": "155464",
      "transcription": "mãmã pêj Pysypâri tã ro tẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": "155499",
      "stop": "157953",
      "transcription": "mãmã nĩ jy ra pôô tijãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": "158016",
      "stop": "159414",
      "transcription": "jy ra tepi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": "160829",
      "stop": "166772",
      "transcription": "mãmã pêj ra paa... jy myn py ra mõri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": "169215",
      "stop": "171760",
      "transcription": "mãmã nĩ jy Guarantã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": "171851",
      "stop": "173613",
      "transcription": "mãmã nĩ jy ranpju",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": "173727",
      "stop": "176045",
      "transcription": "rê kjẽ kâri inkwa[corrida de tora para ela]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 41,
      "start": "177033",
      "stop": "180374",
      "transcription": "mãmã nĩ jy ra sã inkwa jũnpaa [medo da tora]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 42,
      "start": "195340",
      "stop": "196692",
      "transcription": "paa, mãmã râhã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 43,
      "start": "196874",
      "stop": "201988",
      "transcription": "mãmã râhã, mãmã nĩ ra pa, jy ra ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 44,
      "start": "202045",
      "stop": "206284",
      "transcription": "pãpã jy ra ty mãmã râhã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 45,
      "start": "206954",
      "stop": "210181",
      "transcription": "ti kôti[fer amics] kjẽ jũnpjâ hẽ Nãsuri hẽ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 46,
      "start": "210749",
      "stop": "212135",
      "transcription": "ti kôti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 47,
      "start": "212760",
      "stop": "216033",
      "transcription": "mãmã nĩ a mã ra pa ipẽ amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 48,
      "start": "217397",
      "stop": "221136",
      "transcription": "jy ra... tââ[sobreviure] nõpjõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 49,
      "start": "221283",
      "stop": "222897",
      "transcription": "nõpjõ jy ra tââ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 50,
      "start": "222943",
      "stop": "225568",
      "transcription": "jy ra krĩ[viveu] ja pêj nõpjõ twatũmãra",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 51,
      "start": "225818",
      "stop": "227636",
      "transcription": "mãmã jy ra ty kowmã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 52,
      "start": "228954",
      "stop": "229716",
      "transcription": "jy ra...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 53,
      "start": "229352",
      "stop": "230886",
      "transcription": "jy ra su pôô Claudio mẽ Orlando",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 54,
      "start": "230727",
      "stop": "232500",
      "transcription": "haa, nẽ sanpũ Claudio",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 55,
      "start": "233555",
      "stop": "235771",
      "transcription": "prẽ? Orlando tapja",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 56,
      "start": "233635",
      "stop": "235669",
      "transcription": "jy ra suu pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 57,
      "start": "236362",
      "stop": "238226",
      "transcription": "haa, mãmã rê sanpun",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 58,
      "start": "239022",
      "stop": "243306",
      "transcription": "jy pãpã ra ty pytinsi, mãmã pêj ti ra pãri[puxaram para o X] Xingu tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 59,
      "start": "244306",
      "stop": "246431",
      "transcription": "pãpã jy pjow nõ ahê pjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 60,
      "start": "246953",
      "stop": "249522",
      "transcription": "ũãhã ti jãri, ja tã mĩ no jôti [portem-los tots cap al X]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 61,
      "start": "249925",
      "stop": "251379",
      "transcription": "avião wy amã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 62,
      "start": "251647",
      "stop": "253578",
      "transcription": "avião wy jy ra suu pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 63,
      "start": "253743",
      "stop": "255538",
      "transcription": "ti ra pãri Diauarum tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 64,
      "start": "258340",
      "stop": "260431",
      "transcription": "jy ra pôô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 65,
      "start": "260527",
      "stop": "263459",
      "transcription": "jy ra paa mã râhã Diauarum rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 66,
      "start": "264613",
      "stop": "267249",
      "transcription": "mãmã pêj jy ro mõri Suyá ũã tũm",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 67,
      "start": "269789",
      "stop": "271187",
      "transcription": "paa, ikkin",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 68,
      "start": "271698",
      "stop": "274198",
      "transcription": "kin, mãmã nĩ ra paa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 69,
      "start": "274283",
      "stop": "277318",
      "transcription": "jy ra suu pôô Suya, jy ro mõri ũã tũm",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 70,
      "start": "277363",
      "stop": "278772",
      "transcription": "ka sânpun Syja jinkwa?",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 71,
      "start": "280652",
      "stop": "283596",
      "transcription": "jahã rõ kô mẽ, jahã paa Suya",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 72,
      "start": "283800",
      "stop": "285425",
      "transcription": "Diauarum jãhã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 73,
      "start": "286879",
      "stop": "288163",
      "transcription": "pa Diauarum rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 74,
      "start": "288760",
      "stop": "290669",
      "transcription": "môtô amã rampja ũãhã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 75,
      "start": "292556",
      "stop": "293442",
      "transcription": "mãmã pêj",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 76,
      "start": "293084",
      "stop": "295914",
      "transcription": "ra paa pêj panãra Suya kõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 77,
      "start": "296982",
      "stop": "300357",
      "transcription": "mãmã pêj jy py ra mõri, jy py ra pa jâhã Kasapi jĩnkwa rĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 78,
      "start": "301677",
      "stop": "303416",
      "transcription": "mãmã pêj py ra mõri ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 79,
      "start": "304183",
      "stop": "305552",
      "transcription": "jy ra paa pêj tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 80,
      "start": "306123",
      "stop": "308051",
      "transcription": "kypaanka pytinsi jahã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 81,
      "start": "308618",
      "stop": "312964",
      "transcription": "rê so kre ty pakwa, ittu, sâti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 82,
      "start": "313059",
      "stop": "314142",
      "transcription": "kin pjow kypa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 83,
      "start": "314665",
      "stop": "315701",
      "transcription": "kypaanka",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 84,
      "start": "315736",
      "stop": "317641",
      "transcription": "kypa, pâ kra kõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 85,
      "start": "318059",
      "stop": "320261",
      "transcription": "mãmã pêj py ra mõri Manisawa kõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 86,
      "start": "320333",
      "stop": "322166",
      "transcription": "py ra paa pêj ja tã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 87,
      "start": "322743",
      "stop": "324564",
      "transcription": "rê py jĩ kjã npari",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 88,
      "start": "325034",
      "stop": "329022",
      "transcription": "py sa pa kwy ja tã, pa jõ kypa tã ti jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 89,
      "start": "329677",
      "stop": "331439",
      "transcription": "pêj jy py ra rêê",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 90,
      "start": "329683",
      "stop": "331302",
      "transcription": "pêj jy py sa py ra kõ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 91,
      "start": "331403",
      "stop": "332534",
      "transcription": "py ra rê jãhã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 92,
      "start": "332855",
      "stop": "334117",
      "transcription": "jãhã kypa kin",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 93,
      "start": "335028",
      "stop": "338837",
      "transcription": "jãhã kin sâti, pakwa, ittu, mõsy",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 94,
      "start": "339497",
      "stop": "342259",
      "transcription": "kin jãhã, ta rê jãri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 95,
      "start": "349928",
      "stop": "350749",
      "transcription": "inkjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 96,
      "start": "352951",
      "stop": "355356",
      "transcription": "sõkresê ikkônswanko re tĩri[usou]",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 97,
      "start": "355290",
      "stop": "356956",
      "transcription": "joopswa rê tĩri sõkresê hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 98,
      "start": "357057",
      "stop": "358629",
      "transcription": "sikrkô ho ra paa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 99,
      "start": "358682",
      "stop": "360742",
      "transcription": "joopy swa re tĩri sõkresê hã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 100,
      "start": "361492",
      "stop": "363420",
      "transcription": "sikrekô ho ra paa ja ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Snake story",
    "speakers": "Sêhakjã",
    "linguists": "Myriam Lapierre, Bernat Bardagil-Mas",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 0,
      "start": "786",
      "stop": "1448",
      "transcription": "paa",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 1,
      "start": "2171",
      "stop": "2816",
      "transcription": "nãkã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": "2860",
      "stop": "4858",
      "transcription": "nãkã re+ho+pa+ri ĩkjẽ hẽ kârijô ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": "5831",
      "stop": "6597",
      "transcription": "kjytijĩ ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": "6757",
      "stop": "7354",
      "transcription": " kârijô ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": "7393",
      "stop": "8094",
      "transcription": "kjytijĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": "8352",
      "stop": "9989",
      "transcription": "ĩkjẽ+merã panarã kjytijĩ",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": "11106",
      "stop": "13331",
      "transcription": "aty tã ra+pa ĩkjẽ aty ni",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": "14303",
      "stop": "15695",
      "transcription": "pêj kwâ nãkã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": "16489",
      "stop": "17820",
      "transcription": " mãmã kwâ se ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": "17852",
      "stop": "19057",
      "transcription": " sê+ho+pôw kârijô",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": "21072",
      "stop": "22041",
      "transcription": "kârijôte",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": "22578",
      "stop": "23978",
      "transcription": "mãmã pêj nê+s+akô+ri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": "24857",
      "stop": "25704",
      "transcription": "nê+s+akô+ri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": "25715",
      "stop": "26857",
      "transcription": " mãmã pêj jy+ty",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": "27113",
      "stop": "27949",
      "transcription": "jy+ty nãkã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": "27950",
      "stop": "28558",
      "transcription": "jy+tâti",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": "31517",
      "stop": "32194",
      "transcription": "nãkã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": "32241",
      "stop": "34783",
      "transcription": "nãkã nã mẽ pã mẽ nã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": "34950",
      "stop": "36680",
      "transcription": " rê+nãnã+ri e nãkã",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": "36720",
      "stop": "38010",
      "transcription": " ti+ra+ĩsari piow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": "38170",
      "stop": "39320",
      "transcription": "kjow",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": "39380",
      "stop": "40030",
      "transcription": "nãkã grande?",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": "40150",
      "stop": "41570",
      "transcription": "e, nãkã grande",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": "41675",
      "stop": "42225",
      "transcription": "brava?",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": "42550",
      "stop": "43830",
      "transcription": "brava também",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": "44870",
      "stop": "47010",
      "transcription": "não mordeu eu, não",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": "47350",
      "stop": "52710",
      "transcription": "ela machucou assim, cabeça pra lá, a ponta dela",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": "53090",
      "stop": "54710",
      "transcription": "rê+nãnã+ri",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": "55620",
      "stop": "58920",
      "transcription": "mãmã pê nê+rõwã kô ho",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": "61270",
      "stop": "62140",
      "transcription": "nkĩ pytĩnsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": "62270",
      "stop": "63280",
      "transcription": "nkĩ pytĩnsi",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Sokren Elicitation 20230619",
    "speakers": "Sokren",
    "linguists": "Myriam Lapierre, Ella De Falco, Jessa Jeter",
    "type": "elicitation"
  },
  "sentences": [
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "inkjëjunpjâ katipôjn intwyn",
      "translation": "meu pai vai chegar mais tarde",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "inkëjunpjâ ippôja hê pjo intwyn",
      "translation": "meu pai não vai chegar mais tarde",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "ha katipôjn inkjëjunpjâ swan?",
      "translation": "será que o meu pai vai chegar mais tarde?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "ha kati pô tapja inkjëjunpjâ swam?",
      "translation": "será que meu pai vai chegar mais tarde?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "ha kati pôjn tapja?",
      "translation": "será que ela vai chegar?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "*ha kati pôja hê pjo inkjëjunpjâ?",
      "translation": "will my father not arrive later?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "*inkjëjunpjâ katipôja intwyn?",
      "translation": "with question intonation: will my father arrive later?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "inkjëjunpjâ katipô tapja intwyn?",
      "translation": "will my father arrive later?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "mära kati tëra swam",
      "translation": "ela vai primeiro",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "prëë kati tërä swam?",
      "translation": "quem vai (viajar) primeiro?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "prëë hë kati hoswan?",
      "translation": "quem que vai fazer primeiro?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "prëë hë timmën pâripää swasïräsuu?",
      "translation": "quem jogou a vara no porco?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "pjän timmën swasïräsuu?",
      "translation": "o qué que ele jogou no porco?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "pjän ho timmën pâripää?",
      "translation": "no qué que ele jogou varinha?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "pjän kowajäri swasïrä?",
      "translation": "o qué que fez com o porco?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "pjän kahowajäri swasïrä?",
      "translation": "o qué que fez com o porco?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "pjärä hê kasummën pâripää swasïrä suu?",
      "translation": "porqué que você jogou varinha no porco?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "pjärä hä tisummën pâripää swasïrä suu?",
      "translation": "quando que ele jogou a varinha no porco?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "jürähä tisummën pâripää swasïrä suu?",
      "translation": "quando/qué dia que ele jogou varinha no porco?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "pjärïnpyti rï timmën pâripää swasïräsuu?",
      "translation": "what time did he throw a stick at the boar?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "jukôpy timmën pâripää swasïräsuu?",
      "translation": "aonde que ele jogou varinha no porco?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Junkjêti pâripää tisummën swasïrä suu?",
      "translation": "Qual varinha que ele jogou no porco?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Junkjêti tisummën pâripää swasïrä suu?",
      "translation": "Qual varinha que ele jogou no porco?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Junkjêti pâripää timmën swasïräsuu?",
      "translation": "Qual varinha que ele jogou no porco?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Junkjêssu tisummën pâripää swasïrä suu?",
      "translation": "Em qual porco que ele jogou a varinha?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Junti hë hamä tisummën pâripää swasïrä suu?",
      "translation": "Cómo que ele jogou varinha no porco?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "*timmën pâripää juri?",
      "translation": "ele jogou varinha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "timmën pâripää, juri tapja?",
      "translation": "ele jogou varinha, não sei aonde.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "juri kypymmë tapja, pâripää",
      "translation": "Não sei aonde que ele jogou a varinha.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "timmën pâripää, jupôpy tapja?",
      "translation": "he threw the stick, I don’t know where.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Jukôpy kypymmë tapja pâripää?",
      "translation": "Não sei aonde que ele jogou varinha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "innë. Juntihë hamä tisummën pâripää swasïrä suu?",
      "translation": "I don’t know. How did he throw the stick at the pig?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "*juntihë hamä tapja kypymmë pâripää",
      "translation": "how did he throw the stick?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "juntihë hamä kypysummë tapja pâripää swasïrä suu?",
      "translation": "cómo qué elle jogou a varinha no porco?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "jürähä kypysummë tapja pâripää swasïrä suu?",
      "translation": "Não sei qué dia que foi que ele jogou a varinha no porco.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Jukôpy kypysummë tapja pâripää swasïräsuu?",
      "translation": "Não sei que dia que foi que ele jogou a varinha no porco.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "*pâripää tisummën swasirä suu junkjêti?",
      "translation": "which boar did he throw the stick at?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "pâripää tisummën swasïrä suu. junkjêssu tapja?",
      "translation": "he threw a stick at the boar. ",
      "notes": "I don’t know which boar.",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Ha jy kin tapja mära?",
      "translation": "Será que ele é gente boa?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Ha jy kin mära?",
      "translation": "Será que ele está bem?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Ha jy akä pa?",
      "translation": "Será que ele está com você?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Ha jy ka akä pa?",
      "translation": "Será que ele está com você?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Ha jy ka akä pa, joopykââ?",
      "translation": "Is the cat with you?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Kajunpjâ, ha jy akä pa pa?",
      "translation": "O seu pai está com você?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Kajunpjâ, ha jy ka akä pa?",
      "translation": "O seu pai está com você?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Ka syypjâ, ha jynkwyy?",
      "translation": "Does your daughter cry?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Ha jynkwyy ka syypjâ?",
      "translation": "Does your daughter cry?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Ha ka syypjâ jynkwyy?",
      "translation": "Foi a sua filha qué chorou.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Ha jytoo Sinopi tä?",
      "translation": "Did he go to Sinop?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Ha Sinopi tä jytoo?",
      "translation": "Ele foi para Sinop?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Kajöpjää mä, ha jy mä kin sokkwaz?",
      "translation": "Your daughter, does she like apples?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "kajö pää, ha jy mä kin tikrëë hahê sokkwa?",
      "translation": "Your daughter, does she like to eat fruit?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "ratyjä pjo",
      "translation": "não estou com fome",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "jy ratyjä",
      "translation": "estou com fome",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Ha jy hatyjää?",
      "translation": "Are you hungry?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "ka, kaatyjä",
      "translation": "you’re hungry",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "pjännïïsï inpyti?",
      "translation": "Que hora tem?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "pjän tisün?",
      "translation": "What did she say?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "märahë tiraakjâri, pjännïsï inpyti?",
      "translation": "Ela perguntou para mim, ‘qué hora tem?’",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "mära jynkjë söswâri kjäpôtissân.",
      "translation": "Ela me pediu bolacha.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "mära jynkjë söswâri issy sân.",
      "translation": "Ela me pediu isqueiro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "mära jynkjë söswâri inkôsân",
      "translation": "Ela me pediu água.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Ha jy suppôô inpyti sâpên suu?",
      "translation": "Já chegou a hora de trabalhar?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Ka hë katipjorin swakja",
      "translation": "você vai fechar a porta",
      "notes": "não é pergunta",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "prëë hë kati pjorin sakwa?",
      "translation": "quem que vai fechar a porta?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "twatüharârinko",
      "translation": "only the old women",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Sokren (Elicitation 20240621)",
    "speakers": "Sokren",
    "linguists": "Myriam Lapierre, Ella De Falco, Jessa Jeter",
    "type": "elicitation"
  },
  "sentences": [
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "conselho hë tisantori atoojahê pârankôhontê",
      "translation": "o conselhou pediu demissão do profissional dau saúde",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Kjë hë rêkrëë söopyj",
      "translation": "eu comi carne",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Kjëjunpjâ hë tiwajäri rêkrëë söjoopy",
      "translation": "meu pai me fez comer carne",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "prï hë tisasâri",
      "translation": "criança se vestiu",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "prïarân rêsankjân",
      "translation": "as crianças se vestiran",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "twapjâ hë tirasankjân prïaram",
      "translation": "vovo vestiu as crianças",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "twapjâhë timäsasâri prïmä",
      "translation": "vovo vestiu a criança",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "twapjâ hë tirakjäröpypam prïara",
      "translation": "vovo convenceu a criança",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "twapjâ hë tikjäröpypam prï tisasârahê",
      "translation": "vovo convenceu a criança para se vestir",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "twapjâ hë tikjäröpypam prï tisasârahê pëkâ",
      "translation": "vovo convenceu a criança se vestir um vestido",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "tirakrân",
      "translation": "ela me puxou",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Pârakrisan hë tirakrân",
      "translation": "Pâ me puxou",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "mära hë tirakrân rakwyja hê",
      "translation": "ela me puxou para mim andar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "mära hë tikjëësün rakwyja hê",
      "translation": "ela pediu/permitiu para mim andar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Kapê hë tiraswaapê inkjë sutytä raröja hê",
      "translation": "Kapê me segurando/levando no colchão para deitar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Kapê hë tiraswaapê (inkjë) rakwyjahê",
      "translation": "Kapê me adujou para mim andar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "Kapê hë tinkjësün rakwyjahë",
      "translation": "Kapê told/permtitted me to walk ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "kjë hë rêmäsün hatojahê mära (kukre pên)",
      "translation": "eu fale para ele sair (da casa)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "kjë hë rêmäsün mära mä hatoja hê",
      "translation": "eu falei para ele para ele sair",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "kjë hë rêwajäri hatoja hê (kukre pên)",
      "translation": "eu fiz para ele sair (da casa)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "kjë hë rêwajäri prï kahahê",
      "translation": "eu fiz alguma coisa para a criança tosser",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "kjë hë rêwajäri prï kahahê",
      "translation": "eu consegui a criança tosser",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": "#",
      "start": "",
      "stop": "",
      "transcription": "kjë hë rêstäsikâri kôkôrï prï ka hahê",
      "translation": "eu bati nas costas para a criança tosser",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Contact",
    "speakers": "Sokriti",
    "linguists": "Myriam Lapierre",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 0,
      "start": "10493",
      "stop": "15777",
      "transcription": "Haa mämä jynkjân rasu hapôô",
      "translation": "Bom, essa vez você chegou (a onde eu estou)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 1,
      "start": "16589",
      "stop": "22490",
      "transcription": "Jy ha pôô, kankjân kän sün mära",
      "translation": "Você chegou, agora eu vou contar isso para você também",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": "24376",
      "stop": "29648",
      "transcription": "Kamërân ka rê rankwajäri pakkjata",
      "translation": "No início que vocês mexeram (começaram a entrar em contato) com nós ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": "31516",
      "stop": "35701",
      "transcription": "Juuri jyppôô kjati kamëra tö ippë",
      "translation": "Aonde que chegaram no início os parentes de vocês brancos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": "37051",
      "stop": "39569",
      "transcription": "Pjännï jyppôô kjati ippë",
      "translation": "Aonde que chegaram no início os brancos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": "40132",
      "stop": "44453",
      "transcription": "Jyppôô kjati kukre, kukre tö hamä",
      "translation": "Chegou primeiro na aldeia, na outra outra aldeia",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": "45502",
      "stop": "48626",
      "transcription": "Kukre Sösêräsän",
      "translation": "na aldeia Sösêräsän.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": "50400",
      "stop": "56745",
      "transcription": "Panära, Sösêräsän, mämä tä jyppôô kjati ",
      "translation": "Na aldeia Panära Sösêräsän, lá que chegou primeiro",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": "59061",
      "stop": "63284",
      "transcription": "Jy rasu hoppôô papjoa mëra",
      "translation": "Foram outros indígenas que chegaram (com os brancos)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": "64636",
      "stop": "87325",
      "transcription": "Tapjaa, [ou] Kayapo, [ou] Sikkön tapjaa, Kamayura, Waura, Kayabi, japjâra.",
      "translation": "Talvez era Kayapó, ou Txicäo (Ikpeng) talvez, ou Kamaiurá, Waurá, Kaiabi, esses daí.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": "87560",
      "stop": "95972",
      "transcription": "[Índio], hippapjoa mëra, inkjëmëra, ka rê soti mä [índio] janpannön, mäjapjâra",
      "translation": "Somos nós índigenas, os primeiros habitantes, dos quais vocês sempre falam, são esses",
      "notes": "janpannön = sempre falar/sempre contar",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": "97542",
      "stop": "102412",
      "transcription": "Rê ho rankwajäri ippë ho, Sösêräsän nï pakkjasan",
      "translation": "Eles tentaram entrar em contato junto com os brancos, nó início foi na aldeia Sösêräsän",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": "103647",
      "stop": "115031",
      "transcription": "Ti sansôri kâjasâ, kâjasâ pasê, kâjasâ pää, nänkâ, kôkjati, [bascia].",
      "translation": "Os brancos pinduraram facões, machados, faquinhas, miçangas, panelas, bascias.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": "115264",
      "stop": "118075",
      "transcription": "Japjâra ho ti ho rankwajäri ",
      "translation": "Com essas coisas que eles tentaram fazer contato com nós",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": "118232",
      "stop": "123348",
      "transcription": "Sösêräsän hüwä tä swattä, kukrenkjêt tajïn",
      "translation": "Na aldeia Sösêräsän, lá para cima (do rio), sabemos que tinha muita aldeia",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": "123820",
      "stop": "126430",
      "transcription": "Hïpyti mära pa pjo inkjë ippë mä",
      "translation": "Eu não estava sózinho esperando o branco",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": "126669",
      "stop": "128344",
      "transcription": "ippë mä",
      "translation": "para o branco",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": "128514",
      "stop": "131036",
      "transcription": "jan, ka rê jukwan rakôti",
      "translation": "faz muito tempo, vocês já fizeram contato (com eles, com as outras etnias) antes de nós",
      "notes": "ka rê jukwan = ka rê rakwan, kôti = contato (culmination point of contact, when Claudio hugged him)",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": "132422",
      "stop": "135709",
      "transcription": "japjâra, hë ra kupan më rasä Sinku köö",
      "translation": "esses que moram no Xingu (Sinku köö = along the Xingu River)",
      "notes": "kupan = muitas pessoas morando, várias etnias, rasän = rapan",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": "136120",
      "stop": "139318",
      "transcription": "Mäja hamä ti rapjâri inkjë",
      "translation": "Nesse lugar que ele me achou",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": "141710",
      "stop": "144512",
      "transcription": "Jan jy rê kakwan rapôti inkjë ",
      "translation": "Eu nasci muito tempo antes de vocês nascerem",
      "notes": "rapôti = eu nasci = I hatched (like when a chicken hatches from an egg); jy rê kakwan = antes des vocês",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": "145086",
      "stop": "147718",
      "transcription": "Pjärähê jy rê kakwan [ra/], jy ra wâ",
      "translation": "Porque que eu nasci? Eu nasci.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": "148095",
      "stop": "150242",
      "transcription": "Jan jy rê kakwan ra wâ inkjë",
      "translation": "Eu nasci muito tempo antes de vocês",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": "150999",
      "stop": "153404",
      "transcription": "Ja hamä, Matupa rï",
      "translation": "Aqui, em Matupá",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": "153430",
      "stop": "156776",
      "transcription": "mämännï, ti [cidade] inkjë jö kypa hamä, Matupa rï",
      "translation": "Aí mesmo, aonde já tem a cidade de Matupá, no meu territorio",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": "158125",
      "stop": "160168",
      "transcription": "Jy rawâ, inkjë näpjâ hamä",
      "translation": "Eu nasci da minha mäe",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": "160864",
      "stop": "162075",
      "transcription": "kwyymjö hamä",
      "translation": "da Kwyymjö",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": "162572",
      "stop": "163976",
      "transcription": "inkjë junpjâ hamä",
      "translation": "do meu pai",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": "165066",
      "stop": "169032",
      "transcription": "Patimën hë ti rankwa too, inkjë junpjâ hë, mäja hamä",
      "translation": "Patimën que me fez, foi o meu pai, foi assim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": "169917",
      "stop": "171783",
      "transcription": "jy rê kakwan rawâ inkjë",
      "translation": "Eu ja tinha nascido",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": "173189",
      "stop": "176752",
      "transcription": "Nänka jakâri rï jy rê kakwan rawâ",
      "translation": "No fim da briga que eu nasci",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": "177565",
      "stop": "179276",
      "transcription": "Mäja hamä",
      "translation": "Foi assim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": "180774",
      "stop": "184548",
      "transcription": "Rê rê kokïränpjâ inkjë hë rê rê kokïränpjâ",
      "translation": "Foi eu que fiz vocês viverem em paz, eu que fiz vocês viverem em paz",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": "184564",
      "stop": "186838",
      "transcription": "Rê jïn kjänpara mä, kjä hamä",
      "translation": "Eu pensava na minha cabeça",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": "187778",
      "stop": "190424",
      "transcription": "rê jïnpara mä sï hamä",
      "translation": "eu pensava no fundo do meu corpo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": "191047",
      "stop": "193136",
      "transcription": "rê raa sêjïnpari inkjë hë",
      "translation": "eu mesmo pensava",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": "193541",
      "stop": "196160",
      "transcription": "pjän jynkjë kïn kankjë mä?",
      "translation": "O qué que eu gostei?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": "197450",
      "stop": "201034",
      "transcription": "Sotanka horapa hamä inkjëmëra Panära",
      "translation": "Nós Panará tinha coisa que não prestava",
      "notes": "sotanka = coisa ruim",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": "201102",
      "stop": "205571",
      "transcription": "sotanka inkjë sokkïnnö inkjë mä kââ swannö, kjën",
      "translation": "eu não gostava de coisas ruins, de machado de pedra desamolado",
      "notes": "swannö = desamolado",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": "205761",
      "stop": "209982",
      "transcription": "rê sokjun swâri sotoraanpôri, mäja hamä",
      "translation": "eles emcabavam e usavam (para cortar coisas), por isso",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": "210272",
      "stop": "215228",
      "transcription": "Jynkjë kïn inkjë mä ippë, kâjasâ pasê, kâjasâ pää",
      "translation": "Eu gostei do branco, de machado, de faquinha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 41,
      "start": "216659",
      "stop": "222154",
      "transcription": "Mäja, jynkjë kïn inkjë mä, kâjasâ wy tajïn",
      "translation": "Isso, sim, eu gostei de facão ",
      "notes": "tajïn = some kind of focus?",
      "words": [
        ""
      ]
    },
    {
      "id": 42,
      "start": "222280",
      "stop": "223953",
      "transcription": "jynkjë kïn",
      "translation": "eu gostei",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 43,
      "start": "224292",
      "stop": "228664",
      "transcription": "mäja hamä, rê sujïnpari inkjë hë ippë suu",
      "translation": "Por isso eu pensei (no meu corpo) no branco",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 44,
      "start": "229239",
      "stop": "230938",
      "transcription": "rê wajäri pjännö",
      "translation": "eu não queria brigar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 45,
      "start": "231296",
      "stop": "233314",
      "transcription": "mä raasari pjännö",
      "translation": "eu não queria flechar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 46,
      "start": "233521",
      "stop": "235415",
      "transcription": "rê pari pjännö",
      "translation": "não queria matar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 47,
      "start": "235449",
      "stop": "237263",
      "transcription": "rê sujïnpari inkjë hë",
      "translation": "eu pensei",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 48,
      "start": "239012",
      "stop": "240737",
      "transcription": "krâkâ Mëgarö",
      "translation": "o meu genro Mëgarö",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 49,
      "start": "242158",
      "stop": "245707",
      "transcription": "inkjë jö pää Bêdjai, märä hä më paa tä tïri ra",
      "translation": "meu sobrinho Bêdjai, eles dois estão por aí vivos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 50,
      "start": "245992",
      "stop": "249399",
      "transcription": "jara, jarân ti më horankwajäri ippë ho",
      "translation": "eles, eles dois mexeram com nós junto com os brancos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 51,
      "start": "249923",
      "stop": "254312",
      "transcription": "ti më horankwajäri, päppää, papjoa mëra",
      "translation": "eles mexeram com nós, todos juntos, com outros povos indígenas",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 52,
      "start": "255102",
      "stop": "256633",
      "transcription": "rê honkwajäri",
      "translation": "eles mexeram (fizeram contato)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 53,
      "start": "257112",
      "stop": "260803",
      "transcription": "rê rakwan jïnpari inkjë hë, rê jïnpari",
      "translation": "antes eu pensei, eu pensei",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 54,
      "start": "262348",
      "stop": "266676",
      "transcription": "koomä kjara kwâra raränkan, ra sâsari pjä",
      "translation": "algumas pessoas novas são ruins, querem flechar",
      "notes": "koomä kjara = pessoas novas",
      "words": [
        ""
      ]
    },
    {
      "id": 55,
      "start": "266914",
      "stop": "270736",
      "transcription": "koomä kja, inkjë mëra hä kjahapjâra ra sâsari pjä",
      "translation": "os jovens que cresceram junto com nós, eles queriam flechar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 56,
      "start": "271584",
      "stop": "276931",
      "transcription": "rê rê pïn pê kowajäri pjä, rê sokun kwajäränka, rê sokun kwajäränka.",
      "translation": "eles estavam querendo brigar entre eles, eu não queria deixar eles brigarem entre eles mesmos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 57,
      "start": "276931",
      "stop": "282768",
      "transcription": "Inkjë hë, rê rêhasu jïnpari, rê jïnpari",
      "translation": "Fui eu que pensei, eu pensei em vocês",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 58,
      "start": "282768",
      "stop": "286058",
      "transcription": "pjän hä rê tä jïnpari inkjë hë, kâjasâ pasê swanpe hä",
      "translation": "No qué que eu estava pensando? No machado bem amolado.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 59,
      "start": "286523",
      "stop": "289538",
      "transcription": "Kâjasâ wy swanpe hä, kâjasâ pää swanpe hä.",
      "translation": "No facão bem amolado, na faquinha bem amolada.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 60,
      "start": "289538",
      "stop": "293688",
      "transcription": "sotanka ho, tesswa ho rê kâjân swa hamä, nänpân swa ho",
      "translation": "com coisa que não prestava, com dente de peixe que nós afiávamos flechas, com dente de piranha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 61,
      "start": "293839",
      "stop": "295455",
      "transcription": "mämä mä ka rê soti mä, piranha",
      "translation": "aquela coisa que vocês chamam de piranha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 62,
      "start": "295740",
      "stop": "298357",
      "transcription": "ja ho rê soswa hamä, kâjân",
      "translation": "com isso que nós afiávamos as flechas",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 63,
      "start": "298986",
      "stop": "299853",
      "transcription": "po",
      "translation": "tacuara (cana para flecha)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 64,
      "start": "300400",
      "stop": "302167",
      "transcription": "ja ho rê sokkwajära mä",
      "translation": "com isso que fazíamos as coisas",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 65,
      "start": "302260",
      "stop": "305684",
      "transcription": "ja hamä jynkjë... jynkjë sokkïnnö inkjë mä",
      "translation": "por isso eu não gostava de materiais ruins",
      "notes": "ja hamä = mämärämä",
      "words": [
        ""
      ]
    },
    {
      "id": 66,
      "start": "306244",
      "stop": "307680",
      "transcription": "Panära jö soti",
      "translation": "das coisas dos Panära",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 67,
      "start": "308236",
      "stop": "309550",
      "transcription": "ja hamä",
      "translation": "por isso",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 68,
      "start": "310564",
      "stop": "312978",
      "transcription": "Jy rênkjë hakïn wy inkjë mä",
      "translation": "Por isso eu gostei muito de vocês, ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 69,
      "start": "312978",
      "stop": "316946",
      "transcription": "ti rankwajä, ti rankwajä, ti rankwajä, jy mänkjö ratepinpe inkjë",
      "translation": "eles mexerem com nós, mexeram, mexeram, e eu cresci bem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 70,
      "start": "316946",
      "stop": "318906",
      "transcription": "jy mänkjë ratenpinpe",
      "translation": "eu cresci bem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 71,
      "start": "321584",
      "stop": "323264",
      "transcription": "jïssâ ti raankjo",
      "translation": "eles continuaram fazendo isso mesmo com nós (fazendo contato)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 72,
      "start": "323774",
      "stop": "325408",
      "transcription": "Hummë pêê tä",
      "translation": "Lá para baixo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 73,
      "start": "325500",
      "stop": "326662",
      "transcription": "Pyssypâri tä",
      "translation": "Para a aldeia Pyssypâri",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 74,
      "start": "326818",
      "stop": "333102",
      "transcription": "Jïssâ ti py raankwajäri sunpa ranpja jokjori, sunpa ranpja jokjori, rê sunpa kusï",
      "translation": "Eles continuaram mexendo, de medo andávamos, andávamos, nós fugíamos de medo",
      "notes": "rê kusï, jokjori = não ficavam num lugar, abriam aldeia, iam em bora",
      "words": [
        ""
      ]
    },
    {
      "id": 75,
      "start": "333507",
      "stop": "337916",
      "transcription": "ra kïnnö, rê sokkwajäri pjän swankjarân",
      "translation": "não gostavam, os antigos queriam só brigar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 76,
      "start": "337916",
      "stop": "341584",
      "transcription": "mï parä, mï parä, mï parä, mï parä rênkjä",
      "translation": "eles falavam, vamos matar eles, vamos matar, vamos matar, vamos matar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 77,
      "start": "342558",
      "stop": "345750",
      "transcription": "Nänka hapjârân tajïn swankjara nänka hapjara",
      "translation": "Aqueles que não prestavam, os antigos que não prestavam",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 78,
      "start": "346481",
      "stop": "350590",
      "transcription": "Mämäntö, myrï hë ka rê soti mä sâkinsin",
      "translation": "Igual que vocês falam que são ladröes",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 79,
      "start": "350677",
      "stop": "353660",
      "transcription": "mämäntö, sâkinsi, nänka",
      "translation": "Igual ladrão, ruim.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 80,
      "start": "353753",
      "stop": "355567",
      "transcription": "Mäja hamä",
      "translation": "Por isso.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 81,
      "start": "356262",
      "stop": "362617",
      "transcription": "Jynkjë kïn inkjë, rê/ rê rê ka sê jïnpari inkjë hë, rê jïn paro pa",
      "translation": "Eu gostei, eu pensei em vocês, eu andei pensando",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 82,
      "start": "362831",
      "stop": "366098",
      "transcription": "Ti sotë rankjy kwâri swankjara pên hë",
      "translation": "Eu não gostava do trabalho dos antigos",
      "notes": "rankjy kwâri = eu não gostava",
      "words": [
        ""
      ]
    },
    {
      "id": 83,
      "start": "366459",
      "stop": "369010",
      "transcription": "Nänpân swa hë tinkjënkjy hatêê",
      "translation": "Eu ficava bravo por causa de dente de piranha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 84,
      "start": "369440",
      "stop": "375031",
      "transcription": "kwytinsi swa ho rê wajäri kâjân, ja hë ti rankjy kwâri",
      "translation": "eu fazia flecha com dente de trairão, por isso que eu ficava bravo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 85,
      "start": "375031",
      "stop": "379134",
      "transcription": "jynkjë kïn inkjë mä kâjasâ, kâjasâ swanpe",
      "translation": "eu gostei de faca, de faca bem amolada",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 86,
      "start": "379134",
      "stop": "383365",
      "transcription": "ka rê päppää si sotinpara mä, kamërân, päppää",
      "translation": "porque todos vocês sabem bem, vocês, todos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 87,
      "start": "383761",
      "stop": "385944",
      "transcription": "ka rê si sokkjatâra mä kamërân",
      "translation": "porque vocês sabem de tudo",
      "notes": "sokkjattâri = sotinpari",
      "words": [
        ""
      ]
    },
    {
      "id": 88,
      "start": "385944",
      "stop": "388395",
      "transcription": "ka rê raa sê sokkwajäri üwähä",
      "translation": "vocês faziam as coisas longe",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 89,
      "start": "388400",
      "stop": "392223",
      "transcription": "ka rê sokkünkwajäri, mäja, mäja, jynkjë kïn inkjë mä",
      "translation": "vocês faziam as coisas, esse, esse, e eu gostei",
      "notes": "sokkwajäri = fazer coisas, sokkünkwajäri = fazer várias coisas distintas (e.g., caneta, lápis, computador, gravador, etc....)",
      "words": [
        ""
      ]
    },
    {
      "id": 90,
      "start": "392402",
      "stop": "397340",
      "transcription": "inkjë hë rênkjäri, [até] jy ra suppôô",
      "translation": "assim que eu fui, até eles chegaram aonde eu estava",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 91,
      "start": "398648",
      "stop": "403993",
      "transcription": "Cláudio, Orlando, Pedro",
      "translation": "Cláudio, Orlando, Pedro",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 92,
      "start": "404164",
      "stop": "408552",
      "transcription": "japjâra jy raa jyypjon, jy ra pjasân raa jyypjon, inkjë pjasân",
      "translation": "são esses que morreram, eles morreram depois do contato que fizeram comigo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 93,
      "start": "408560",
      "stop": "413297",
      "transcription": "ratöppa rö, rê py raa töönpünnö, mäja hamä",
      "translation": "eles não existem mais, eu nunca mais vi eles, por isso",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 94,
      "start": "413673",
      "stop": "417873",
      "transcription": "jarân ti më raankjwajäri, inkjë. Cláudio më, Orlando hë.",
      "translation": "são eles que mexeram comigo. Cláudio e Orlando.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 95,
      "start": "417873",
      "stop": "421611",
      "transcription": "rê më sânpün inkjë hë, Cláudio hë ti ra pappyri",
      "translation": "Eu vi eles dois, Cláudio me segurou no braço",
      "notes": "rêpyri = to buy/grab, rêppyri = I held",
      "words": [
        ""
      ]
    },
    {
      "id": 96,
      "start": "422488",
      "stop": "424811",
      "transcription": "Orlando hë ti ra pappyri",
      "translation": "Orlando me segurou no braço",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 97,
      "start": "425594",
      "stop": "428121",
      "transcription": "Pedro hë ti raaprëpi watoo",
      "translation": "Pedro tirou a minha foto",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 98,
      "start": "428121",
      "stop": "430167",
      "transcription": "mäja ho, intomãhakaa ho",
      "translation": "com essa camêra",
      "notes": "intomähakaa (old pronunciation) = tomääkaa (new pronunciation)",
      "words": [
        ""
      ]
    },
    {
      "id": 99,
      "start": "430351",
      "stop": "436135",
      "transcription": "ti raaprëpi watoo, ka rê sânpün, São Paulo rï",
      "translation": "ele tirou a minha foto, aquela que vocês viram em São Paulo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 100,
      "start": "436437",
      "stop": "439868",
      "transcription": "ka rê sânpü haprëpi, inkjë haprëpi",
      "translation": "vocês viram a foto, a minha foto",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 101,
      "start": "440879",
      "stop": "443018",
      "transcription": "mämä ka rê sânpü",
      "translation": "aquela que vocês viram",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 102,
      "start": "443567",
      "stop": "446921",
      "transcription": "ti rappyra hä, jynkjë kïn",
      "translation": "quando ele segurou o meu braço, eu gostei",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 103,
      "start": "447149",
      "stop": "449719",
      "transcription": "tinkjë söri kâjasâ pasê",
      "translation": "ele me deu machado,",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 104,
      "start": "450053",
      "stop": "452068",
      "transcription": "tinkjë söri nänkâ",
      "translation": "me deu miçanga",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 105,
      "start": "452312",
      "stop": "454512",
      "transcription": "tinkjë söri kâjasâ pää",
      "translation": "me deu faquinha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 106,
      "start": "454719",
      "stop": "456412",
      "transcription": "kâjasâ jy",
      "translation": "facão",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 107,
      "start": "457113",
      "stop": "462190",
      "transcription": "ja hamä jynkjë kïn inkjë mä, jy rênkjë hakin inkjë mä kamëra",
      "translation": "por isso que gostei, eu gostei de vocês",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 108,
      "start": "462778",
      "stop": "469316",
      "transcription": "sokkïn ka rê wajära mä, sosswanpe ka rê si sotinpara mä",
      "translation": "porque vocês fazem coisas muito boas, porque vocês sabem fazer coisas muito amoladas",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 109,
      "start": "469926",
      "stop": "471757",
      "transcription": "mäja hamä jynkjë kïn",
      "translation": "por isso que eu gostei",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 110,
      "start": "472277",
      "stop": "475707",
      "transcription": "mämärämä rêhasu raapênnö inkjë",
      "translation": "por isso que não quis brigar com vocês",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 111,
      "start": "475707",
      "stop": "481230",
      "transcription": "hä, mïpari, mïpari, mïpari hä, mïparä rê järi pjän pjo inkjë hë",
      "translation": "bora matar, vamos matar, bora matar, eu não queria falar assim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 112,
      "start": "481328",
      "stop": "483568",
      "transcription": "inkjë mä jy rênkjë hakïn",
      "translation": "eu gostei de vocês",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 113,
      "start": "483598",
      "stop": "486048",
      "transcription": "ka rê pja ranpari wajära hê",
      "translation": "é para vocês lembrarem de mim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 114,
      "start": "486513",
      "stop": "488763",
      "transcription": "ka rê pja ra hokïn wajära hê",
      "translation": "para vocês cuidarem de mim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 115,
      "start": "488908",
      "stop": "491918",
      "transcription": "ka rê raanpün kïn wajära hê, ja hahê",
      "translation": "para vocês virem visitar de boa, é para isso",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 116,
      "start": "492023",
      "stop": "493793",
      "transcription": "jy rênkjë hakïn inkjë mä",
      "translation": "por isso que eu gostei de vocês",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 117,
      "start": "494528",
      "stop": "497668",
      "transcription": "ka rê raanpün kïrä hê, pjän ho ka rê raanpü kamërân?",
      "translation": "para vocês tratarem de nós, com o qué que vocês fazem tratamento?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 118,
      "start": "497723",
      "stop": "498941",
      "transcription": "pârankô",
      "translation": "remédio",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 119,
      "start": "499744",
      "stop": "501650",
      "transcription": "pârankô ka rê ransö",
      "translation": "vocês dão remédio para nós",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 120,
      "start": "502048",
      "stop": "505300",
      "transcription": "pârankô ka rê ran/ ka rê/ ka rê tümmä ra hotïri",
      "translation": "vocês dão remédio, e vocês curam nós",
      "notes": "tïri = vivo (alive)",
      "words": [
        ""
      ]
    },
    {
      "id": 121,
      "start": "505473",
      "stop": "507621",
      "transcription": "ka rê ra hotï sitepara",
      "translation": "vocês faz viver os adultos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 122,
      "start": "507825",
      "stop": "510611",
      "transcription": "ka rê ra hotïri prïara, wântwê ja",
      "translation": "vocês fazem viver as crianças e os recem-nascidos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 123,
      "start": "511044",
      "stop": "517249",
      "transcription": "ja jynkjë kïn inkjë mä, [até] rê raammën nänkjohänka",
      "translation": "eu gostei disso, até eles (outros índigenas) causaram doença",
      "notes": "nänkjohänka = aids, gonorrhea, sifilis, sarampo (epidemic?)",
      "words": [
        ""
      ]
    },
    {
      "id": 124,
      "start": "517568",
      "stop": "522412",
      "transcription": "rê raammën pjän hë tapja, kamërân tapja, pjän hë tapja",
      "translation": "eles causaram, não sei quem foi, talvez vocês, não sei quem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 125,
      "start": "522447",
      "stop": "524986",
      "transcription": "jupên kypy raatë nänkjohänka",
      "translation": "de onde que caiu essa doença?",
      "notes": "kypy = talvez",
      "words": [
        ""
      ]
    },
    {
      "id": 126,
      "start": "525447",
      "stop": "527785",
      "transcription": "jupên kypy rasuppô nänkjohänka",
      "translation": "não sei de onde que veio essa doença.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 127,
      "start": "528500",
      "stop": "530454",
      "transcription": "ti päppää ra pïri",
      "translation": "matou todo o mundo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 128,
      "start": "531080",
      "stop": "533658",
      "transcription": "päppää ti ra pïri",
      "translation": "matou todo o mundo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 129,
      "start": "533834",
      "stop": "540002",
      "transcription": "twatümära, topytümära, hïpriara, pjôntwara",
      "translation": "as velhas, os velhos, as crianças, os jovens",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 130,
      "start": "542097",
      "stop": "545825",
      "transcription": "too mä jy rê kasêra tââ inkjë",
      "translation": "eu aguentei de viver para vocês",
      "notes": "he is speaking to his family, to the Panära, here",
      "words": [
        ""
      ]
    },
    {
      "id": 131,
      "start": "546112",
      "stop": "549625",
      "transcription": "jy ra tââ, jy ra tââ, ra raankrï",
      "translation": "eu aguentei, aguentei, eu demorei",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 132,
      "start": "549731",
      "stop": "551803",
      "transcription": "wynkjââ jy ra tïrakwa",
      "translation": "iam ser muitos aqueles que sobreviveram",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 133,
      "start": "552445",
      "stop": "556614",
      "transcription": "mämän pên ti ra paroommöri, ti ra paroommöri",
      "translation": "depois matou muita gente, matou,",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 134,
      "start": "556674",
      "stop": "560317",
      "transcription": "ti ra paroomöri, ti ra paroomöri, ti ra paroomöri, ti ra hojyypjon",
      "translation": "matou, matou, matou, e eles acabaram",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 135,
      "start": "560802",
      "stop": "564614",
      "transcription": "[até] jy/ jy su ha/ jy py jusu hapôô mähë",
      "translation": "até você chegou agora",
      "notes": "mähë = agora, jy jusu hapôô (older speakers) = jy rasu hapôô (younger speakers)",
      "words": [
        ""
      ]
    },
    {
      "id": 136,
      "start": "564823",
      "stop": "568400",
      "transcription": "jy jusu hapôô, ra tïri tärä ra py känpë",
      "translation": "você chegou em mim, estou contando de novo para você enquanto estou vivo ainda",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 137,
      "start": "569221",
      "stop": "571136",
      "transcription": "üwërö Akââ",
      "translation": "Akââ está lá deitado",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 138,
      "start": "571913",
      "stop": "574529",
      "transcription": "jattä rö Sökâräsä rï Tesêa",
      "translation": "o Tesêa está no Sõkârãsã",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Sôpôha kja sê elicitation story",
    "speakers": "Sôpôha",
    "linguists": "Sunkulp Ananthanarayan",
    "type": "elicitation (of story)",
    "file": "sôpôha kja sê story.json"
  },
  "sentences": [
    {
      "transcription": "tinpari mära hë tiwajärähê kja sê",
      "translation": "she knows how to make a kja sê"
    },
    {
      "transcription": "tinparapên pjo",
      "translation": "não sabia fazer"
    },
    {
      "transcription": "tinparapên pjo tiwajärähê kja sê",
      "translation": "não sabia fazer cinto"
    },
    {
      "transcription": "mära hë tinparipjän tiwajärähê kja sê",
      "translation": "she wanted to know how to make a kja sê"
    },
    {
      "transcription": "mära mä mäkiränkjâ prëë hë timä sakre hahê jurä rahon kja sê",
      "translation": "ele gostaria que alguem ensinar a fazer kja sê"
    },
    {
      "transcription": "jurä rahon kja sê",
      "translation": "como fazer cinto"
    },
    {
      "transcription": "mära jösâ swâri rê pjamä sakre hahê kja sê",
      "translation": "ele pediu para alguem ensinar a fazer cinto"
    },
    {
      "transcription": "jösâ swâri",
      "translation": "pedir"
    },
    {
      "transcription": "inkjë sakre jurä rahon rê wajärähê kja sê mära hë tijäri",
      "translation": "'me ensina fazer cinto' ela disse"
    },
    {
      "transcription": "pjänkjë sakre jurä rahon rê wajärähê kja sê mära hë tijäri",
      "translation": "me ensina fazer cinto ela disse"
    },
    {
      "transcription": "katipjänkjë sakre hän jurä rahon kja sê",
      "translation": "ela disse 'eu quero que você me ensine como fazer kja sê'"
    },
    {
      "transcription": "jun ka hon kawajärähê kja sê",
      "translation": "como é que vc faz kja sê?"
    },
    {
      "transcription": "jun ka më hon ka më wajärähê kja sê",
      "translation": "como é que vcs duas faz kja sê? "
    },
    {
      "transcription": "jun karê hon ka rê wajärähê kja sê",
      "translation": "PL 2"
    },
    {
      "transcription": "jurä mï hon mïwajärähê kja sê",
      "translation": "como é que nos dois fazemos kja sê"
    },
    {
      "transcription": "jurä ra më hon rê më wajärähê kja sê inkjë tö më",
      "translation": "como é que eu e minha irmä fazemos kja sê?"
    },
    {
      "transcription": "jurä mï hon kja sê mïwajärähê inkjë më ka më inkjë tö më",
      "translation": "como é que eu, vc e a minha irmä fazemos kja sê?"
    },
    {
      "transcription": "jün rê ho rê wajärähê kja sê inkjë më inkjë tö hë",
      "translation": "como é que eu e os meus irmãos fazemos kja sê?"
    },
    {
      "transcription": "ka hënko katinkjësakren rê wajärähê kja sê",
      "translation": "eu quero que vc me ensina para me fazer cinto"
    },
    {
      "transcription": "tinkjë sakre pjän pjo jurä rahon kja sê",
      "translation": "eu não quero que ele me ensine como fazer kja sê"
    },
    {
      "transcription": "kakänsakren jurä rahon kja sê",
      "translation": "eu vou te ensinar como é que faz kja sê"
    },
    {
      "transcription": "ka kän sakren jurä rahon inkjë hë rêwajärähê kja sê",
      "translation": "eu vou te ensinar cmo eu faço kja sê"
    },
    {
      "transcription": "hasinpe kanpari pjärin jurä rahon kja sê",
      "translation": "they asked her 'do you want to learn how to make a kja sê'"
    },
    {
      "transcription": "mära hë tinpari pjän jurä rahon rêwajärähê kja sê",
      "translation": "ela soube que iria saber como fazer kja sê"
    },
    {
      "transcription": "tinpari ka räpjâ hë ka hë kanpari pjä kawajärähê kja sê",
      "translation": "a sua mãe sabe que você quer aprender como fazer kja sê"
    },
    {
      "transcription": "karäpjâ mä kin kanparahê kawajärähê kja sê",
      "translation": "sua mãe gostaria que você aprenda fazer kja sê"
    },
    {
      "transcription": "*karäpjâ mä katimäkirï katihanparahê kawajärähê kja sê",
      "translation": ""
    },
    {
      "transcription": "karäpjâ mä katimäkirï kanparahê kawajärähê kja sê",
      "translation": "quando comeceu de trabalho a sua mão vai gostar que está aprendendo fazer kja sê"
    },
    {
      "transcription": "hajötahê tijäri ka karäpjâ hë",
      "translation": "a sua mãe quer que você dorma"
    },
    {
      "transcription": "karäpjâ hë tisün hajötahê tijää ka",
      "translation": "sua mãe falou para vc dormir`"
    },
    {
      "transcription": "inkjë hë kanparin jurä rahon rê wajärähê kja sê",
      "translation": "inkjë hë kanpari jurä rahon kja sê rê wajärähê"
    },
    {
      "transcription": "mära hë tiwajäränkjâ kja sê",
      "translation": "ela já tentou fazer kja sê"
    },
    {
      "transcription": "mära hë wajä kja sê ~ mära hë wajäri kja sê in the process of making",
      "translation": "ela tá fazendo kja sê (já fez pouco, ainda tá fazendo)"
    },
    {
      "transcription": "mära hë ti wajä kja sê",
      "translation": "ela fez kja sê"
    },
    {
      "transcription": "mära hë timä sakre kja sê",
      "translation": "ela ensinou a fazer kja sê"
    },
    {
      "transcription": "mära hë mä sakren kja sê",
      "translation": "ela tá ensinando a fazer kja sê"
    },
    {
      "transcription": "mära hë ränsakren kja sê märapjâran",
      "translation": "ela tá ensinando a fazer kja sê para elas"
    },
    {
      "transcription": "mära hë kati rän sakren jurä rahon rê wajärähê kja sê",
      "translation": "ela vai ensinando como fazer kja sê"
    },
    {
      "transcription": "mära hë timäsün tiwajärïrö hahê nänkântonsi kja sê hä",
      "translation": "ele disse para ela não usar nänkântonsi para fazer kja sê"
    },
    {
      "transcription": "mära hë timä sün rêwajäri pjo nänkântonsi kja sê hä",
      "translation": "ele disse para ela que ele não usa nänkântonsi para fazer kja sê (rê = Panãrân)"
    },
    {
      "transcription": "mära hë timä sün 'rêwajäri pjo inkjë hë nänkântonsi kja sê hä'",
      "translation": "ele disse para ela 'eu não uso nänkântonsi para fazer kja sê'"
    },
    {
      "transcription": "mära hë tinpari tiwajäramä kja sê",
      "translation": "ela aprendeu fazer kja sê"
    },
    {
      "transcription": "kja sê ti wajära pên jytäty hanka",
      "translation": "quando estava fazendo kja sê, desmaiu"
    },
    {
      "transcription": "kja sê ti wajära pên jyty hanka",
      "translation": "quando estava fazendo kja sê, desmaiu"
    },
    {
      "transcription": "kja sê ti wajärätän jytäty hanka",
      "translation": "enquanto ela tava fazendo kja sê desmaiou"
    },
    {
      "transcription": "mära hë tinpari tiwajärähê kja sê kin, nänkâ kin kati tä tö pjârin",
      "translation": "ele aprendeu a fazer kja sê kin tem que achar nänkâ kin"
    },
    {
      "transcription": "mära hë tinpari sötö hopa nänkâ kin ho, tippê ho sâkinsi pjän pjo (sötö pê)",
      "translation": "eela sabia que a irmã tinha nänkâ kin mas ela não queria roubar nänkâ (da irmã dela)"
    },
    {
      "transcription": "jan ti tä rappjârirö kappê ho sâkinsin",
      "translation": "se ela não me veja, eu posso roubar"
    },
    {
      "transcription": "*jan ti rappjârirö kappê ho sâkinsin",
      "translation": "se ela não me veja, eu posso roubar"
    },
    {
      "transcription": "ti tä rappjâra pên kaaprinpen",
      "translation": "se ela me ver, eu vou ficar triste"
    },
    {
      "transcription": "mära hë tisakkjâri sötö tippê rönkwâri ja pê nänkâ",
      "translation": "ela perguntou para a sua irmã se podia usar nänkâ dela"
    },
    {
      "transcription": "mära hë tiraakjâri nänkâ hä ti tïïri ja pê",
      "translation": "ela me perguntou se podia usar nänkââ de mim"
    },
    {
      "transcription": "mära hë tiraakjâri nänkâ hä ti tïïri ja pê inkjë jö nänkâ",
      "translation": "ela me perguntou se podia usar nänkââ de mim"
    },
    {
      "transcription": "mära hë tinteri kin pjän jurä rahon rê wajärähê kja sê",
      "translation": "ela queria terminar de aprender como é que faz kja sê"
    },
    {
      "transcription": "mära hë tinpari mänpe rê kja sê wajäri",
      "translation": "ela terminou aprendendo a fazer kja sê"
    },
    {
      "transcription": "*mära hë tinpari mänpe ra kja sê wajä",
      "translation": "ela terminou aprendendo a fazer kja sê"
    },
    {
      "transcription": "mära hë tinpari mänpe kja sê wajä",
      "translation": "ele terminou de aprender fazer kja sê"
    },
    {
      "transcription": "*mära hë inpari mänpe kja sê tiwajä",
      "translation": "ele terminou de aprender fazer kja sê"
    },
    {
      "transcription": "mära hë timänpe möri rê kja sê wajäri",
      "translation": "ela está terminando de aprender fazer kja sê"
    },
    {
      "transcription": "*mära hë inpari mänpe ti kja sê wajäri",
      "translation": "ela está terminando de aprender fazer kja sê"
    },
    {
      "transcription": "pjäräkââ turïnpari",
      "translation": "o quê está gritando, escuta aí"
    },
    {
      "transcription": "mära hë tinpari jarä rahon kja sê",
      "translation": "ela ficou sabendo como fazer kja sê; ela sabe fazer kja sê"
    },
    {
      "transcription": "tërä mära ti rö warä kjärï kati py ho pinto kja sê wajäri",
      "translation": "se ela cai e bate na cabeça dela, vai esquecer como fazer kja sê"
    },
    {
      "transcription": "*rêröwarï",
      "translation": ""
    },
    {
      "transcription": "rêröwan",
      "translation": "eu bati"
    },
    {
      "transcription": "rêpjâri ~ rêkkwâri",
      "translation": ""
    },
    {
      "transcription": "tinparahê pjo mära hë kja sê wajäri",
      "translation": "não vai saber; pode ser que não sabe fazer kja sê"
    },
    {
      "transcription": "tinpari rö hahê pjo mära hë kja sê wajäri",
      "translation": "ela não pode aprender a fazer kja sê"
    },
    {
      "transcription": "*tinpannö hahê pjo mära hë kja sê wajäri",
      "translation": "ela não pode aprender a fazer kja sê"
    },
    {
      "transcription": "*rö kanpari ka hë kja sê wajäri",
      "translation": "ela não pode aprender a fazer kja sê"
    },
    {
      "transcription": "*rö kanpari ka hë kja sê wajäri",
      "translation": "ela não pode aprender a fazer kja sê"
    },
    {
      "transcription": "ka tinpari pjä mära hë jurä rahon kja sê",
      "translation": "ela vai querer saber como fazer kja sê"
    },
    {
      "transcription": "*ka tinpari pjän mära hë jurä rahon kja sê",
      "translation": "ela vai querer saber como fazer kja sê"
    },
    {
      "transcription": "*ka tinpari pjä mära hë kja sê tiwajärähê",
      "translation": "ela vai querer saber como fazer kja sê"
    },
    {
      "transcription": "ka tinpari pjä mära hë",
      "translation": "tiwajärähê kja sê"
    },
    {
      "transcription": "*ka tinpari pjä mära hë tiwajä kja sê",
      "translation": "ela vai querer saber como fazer kja sê"
    },
    {
      "transcription": "*ka tinpari pjä mära hë tiwajäri kja sê",
      "translation": "ela vai querer saber como fazer kja sê"
    },
    {
      "transcription": "ka tinpari pjäri mära hë tiwajärähê kja sê",
      "translation": "ela vai querer aprender a fazer kja sê"
    },
    {
      "transcription": "mära ka ti jö sâswârin prëë mä timä sakre hahê kja sê wajäri",
      "translation": "ela vai pedir para alguem ensinar para ela como fazer kja sê"
    },
    {
      "transcription": "mära ka ti mäjösâswârin prëë mä timä sakre hahê kja sê wajäri",
      "translation": "ela vai pedir para alguem ensinar para ela como fazer kja sê"
    },
    {
      "transcription": "*mära ka ti mäjösâswârin prëë mä timä sakre hahê kja sê tiwajäri",
      "translation": "ela vai pedir para alguem ensinar para ela como fazer kja sê"
    },
    {
      "transcription": "*mära ka ti mäjösâswârin prëë mä timä sakre hahê tiwajäri kja sê",
      "translation": "ela vai pedir para alguem ensinar para ela como fazer kja sê"
    },
    {
      "transcription": "mära ka ti mäjösâswârin prëë mä timä sakre hahê kja sê tiwajärähê",
      "translation": "ela vai pedir para alguem ensinar para fazer kja sê"
    },
    {
      "transcription": "mära ka ti mäjösâswârin prëë mä timä sakre hahê tiwajärähê kja sê",
      "translation": "ela vai pedir para alguem ensinar para fazer kja sê"
    },
    {
      "transcription": "mära ka ti mäjösâswârin prëë mä timä sakre hahê tiwajärähê kja sê",
      "translation": "enquanto ela tá aprendendo novamente, vai lembrar como fazer kja sê"
    },
    {
      "transcription": "mära hë timänpe möri jurä rahon kja sê rêwajärähê tipynparitän päpää",
      "translation": "ela vai estar quase terminado com fazer kja sê quando lembra tudo (enquanto lembrando)"
    },
    {
      "transcription": "jösâswâ",
      "translation": "pedir favor"
    },
    {
      "transcription": "jytäty hanka",
      "translation": "desmaiou"
    },
    {
      "transcription": "jypy kin",
      "translation": "acordou"
    },
    {
      "transcription": "intwa",
      "translation": "serve (suppôô)"
    },
    {
      "transcription": "kwatisô",
      "translation": "palha"
    }
  ]
},{
  "metadata": {
    "speaker": "Sôpôha",
    "type": "elicitation",
    "linguists": "Sunkulp Ananthanarayan",
    "title": "Sôpôha dative elicitation"
  },
  "sentences": [
    {
      "transcription": "inkjë hë rêjïïwajäri sö",
      "translation": "eu cozinhei para mim mesmo"
    },
    {
      "transcription": "%*inkjë hë rêinkjëwajäri sö",
      "translation": "eu cozinhei para mim mesmo"
    },
    {
      "transcription": "inkjë hë rêwajäri sö ka më inkjë më",
      "translation": "eu cozinhei para eu e vc"
    },
    {
      "transcription": "inkjë hë rêwajäri sö japjâran",
      "translation": "eu cozinhei para eu, vc, e eles"
    },
    {
      "transcription": "inkjë hë rêwajäri sö inkjëran",
      "translation": "eu cozinhei para mi e para vc"
    },
    {
      "transcription": "inkjë hë rêwajäri sö mära mä inkjë mä",
      "translation": "eu cozinhei para eu e ele"
    },
    {
      "transcription": "%*inkjë hë rêmäwajäri sö mära mä inkjë mä",
      "translation": "eu cozinhei para eu e ele"
    },
    {
      "transcription": "%*inkjë hë rêwajäri sö mära mä më inkjë mä",
      "translation": "eu cozinhei para eu e ele"
    },
    {
      "transcription": "%*inkjë hë rêwajäri sö märan inkjë mä",
      "translation": "eu cozinhei para eu e ele"
    },
    {
      "transcription": "inkjë hë rêwajäri sö märapjâran",
      "translation": "eu cozinhei para eles (inkjêti)"
    },
    {
      "transcription": "%*inkjë hë rêwajäri sö mära mä inkjë mä më",
      "translation": "eu cozinhei para eu e ele"
    },
    {
      "transcription": "%*inkjë hë rêwajäri sö mära inkjë mä më",
      "translation": "eu cozinhei para eu e ele"
    },
    {
      "transcription": "%*inkjë hë rêwajäri sö mära mä inkjë më mä",
      "translation": "eu cozinhei para eu e ele"
    },
    {
      "transcription": "inkjë hë rêwajäri sö mära mä inkjë mä",
      "translation": "eu cozinhei para eu e eles"
    },
    {
      "transcription": "%*inkjë hë rêwajäri sö märapjâra mä inkjë mä",
      "translation": "eu cozinhei para eu e eles"
    },
    {
      "transcription": "%inkjë hë rêwajäri sö märapjâran inkjë mä",
      "translation": "eu cozinhei para eu e eles"
    },
    {
      "transcription": "%inkjë hë rêwajäri sö inkjë mä märapjâran",
      "translation": "eu cozinhei para eu e eles"
    },
    {
      "transcription": "inkjë hë rêwajäri sö ka mä",
      "translation": "eu cozinhei para vc"
    },
    {
      "transcription": "%*inkjë hë rêkänwajäri sö ka mä",
      "translation": "eu cozinhei para vc"
    },
    {
      "transcription": "inkjë hë rêkänwajäri sö",
      "translation": "eu cozinhei para vc"
    },
    {
      "transcription": "inkjë hë rêwajäri sö ka më mära mä",
      "translation": "eu cozinhei para vc e ele"
    },
    {
      "transcription": "%*inkjë hë rêkänwajäri sö ka më mära mä",
      "translation": "eu cozinhei para vc e ele"
    },
    {
      "transcription": "%*inkjë hë rêwajäri sö ka mära mä më",
      "translation": "eu cozinhei para vc e ele"
    },
    {
      "transcription": "%*inkjë hë rêwajäri sö ka mä mära mä më",
      "translation": "eu cozinhei para vc e ele"
    },
    {
      "transcription": "%*inkjë hë rêwajäri sö ka mä më mära mä",
      "translation": "eu cozinhei para vc e ele"
    },
    {
      "transcription": "inkjë hë rêwajäri sö karan",
      "translation": "eu cozinhei para vcs dois"
    },
    {
      "transcription": "inkjë hë rê wajäri sö kamëran",
      "translation": "eu cozinhei para vcs tudos"
    },
    {
      "transcription": "inkjë hë rê wajäri sö mära mä",
      "translation": "eu cozinhei para ele"
    },
    {
      "transcription": "inkjë hë rê mä wajäri sö mära mä",
      "translation": "eu cozinhei para ele"
    },
    {
      "transcription": "inkjë hë rê mä wajäri sö",
      "translation": "eu cozinhei para ele (sakkjâri responder hahê)"
    },
    {
      "transcription": "%inkjë hë rê mä më wajäri sö",
      "translation": "eu cozinhei para eles dois"
    },
    {
      "transcription": "%inkjë hë rê mä më wajäri sö märaran",
      "translation": "eu cozinhei para eles dois"
    },
    {
      "transcription": "%*inkjë hë rê mä më wajäri sö märara mä",
      "translation": "eu cozinhei para eles dois"
    },
    {
      "transcription": "%*inkjë hë rê më mä wajäri sö",
      "translation": "eu cozinhei para eles dois"
    },
    {
      "transcription": "%*inkjërân rê më mä më wajäri sö märaran",
      "translation": "eu e ele cozinhamos para eles dois"
    },
    {
      "transcription": "%*inkjërân rê më mä wajäri sö märaran",
      "translation": "eu e ele cozinhamos para eles dois"
    },
    {
      "transcription": "%inkjërân rê më wajäri sö märaran",
      "translation": "eu e ele cozinhamos para eles dois"
    },
    {
      "transcription": "%*inkjërân rê më më mä wajäri sö märaran",
      "translation": "eu e ele cozinhamos para eles dois"
    },
    {
      "transcription": "inkjë hë rê wajäri sö märapjâran",
      "translation": "eu cozinhei para eles tudos"
    },
    {
      "transcription": "%*inkjë hë rê raan wajäri sö märapjâran",
      "translation": "eu cozinhei para eles tudos"
    },
    {
      "transcription": "%inkjë hë rê ran wajäri sö märapjâran",
      "translation": "eu cozinhei para eles"
    },
    {
      "transcription": "inkjë hë rê kämmë söri karan",
      "translation": "eu dei para vcs dois"
    },
    {
      "transcription": "inkjë hë rêsöri kamëran",
      "translation": "eu dei para vcs (muitos)"
    },
    {
      "transcription": "%*inkjë hë rêkarasöri kamëran",
      "translation": ""
    },
    {
      "transcription": "inkjë hë rê rê kän söri",
      "translation": "eu dei para vcs (muitos)"
    },
    {
      "transcription": "inkjë hë rê mämë söri märaran",
      "translation": "eu dei para eles dois"
    },
    {
      "transcription": "ka hë kankjë söri",
      "translation": "vc deu para mim"
    },
    {
      "transcription": "%*ka hë ka mënkjë söri inkjëran",
      "translation": "vc deu para mim e ele"
    },
    {
      "transcription": "%*ka hë kankjëmë söri inkjëran",
      "translation": "vc deu para mim e ele"
    },
    {
      "transcription": "ka hë ka pan söri inkjëran",
      "translation": "único vc que deu para nós (quando vc decidiu dar; nunca queria dar antes, mas agora vai dar) (39min)"
    },
    {
      "transcription": "ka hë ka si söri inkjëmëran",
      "translation": "só você que deu para nós"
    },
    {
      "transcription": "ka hë ka si söri inkjëmëran",
      "translation": "(dar depois)"
    },
    {
      "transcription": "%*ka hë ka sin söri inkjëmëran",
      "translation": "vc que deu para a gente (EXCL)"
    },
    {
      "transcription": "%*ka hë ka pammë söri inkjëran",
      "translation": "vc que deu para a gente dois (EXCL)"
    },
    {
      "transcription": "%*ka hë ka më pan söri inkjëran",
      "translation": "vc que deu para a gente dois (EXCL)"
    },
    {
      "transcription": "%~ka hë ka söri jaran",
      "translation": ""
    },
    {
      "transcription": "ka hë ka ran söri japjâran",
      "translation": "vc deu para eles"
    },
    {
      "transcription": "ka hë ka söri japjâran inkjë ka märapjâra",
      "translation": "vc deu para nós; eu, vc, e eles"
    },
    {
      "transcription": "%*ka hë ka ran wajäri sö japjâran inkjë ka märapjâra",
      "translation": ""
    },
    {
      "transcription": "ka hë ka tä wajäri sö japjâran inkjë ka märapjâra",
      "translation": "vc fez comida para nós; eu, vc, e eles"
    },
    {
      "transcription": "ka hë ka tä wajäri sö inkjë mä",
      "translation": "vc fez a comida para mim"
    },
    {
      "transcription": "mära hë tiwajäri sö ka mä inkjë mä",
      "translation": "ele fez comida para vc e mim"
    },
    {
      "transcription": "mära hë tiwajäri sö japjâran, ka më inkjë mä",
      "translation": "ela fez comida para nós, vc e eu"
    },
    {
      "transcription": "%*mära hë timë wajäri sö ka më inkjë mä",
      "translation": "ele fez comida para vc e mim"
    },
    {
      "transcription": "%*mära hë ti mï wajäri sö ka më inkjë mä",
      "translation": "ele fez comida para vc e mim"
    },
    {
      "transcription": "mära hë ti pan wajäri sö",
      "translation": "ela fez comida para nós"
    },
    {
      "transcription": "%*mära hë ti pan wajäri sö ka më inkjë mä",
      "translation": ""
    },
    {
      "transcription": "%*mära hë ti pan wajäri sö mära më inkjë mä",
      "translation": ""
    },
    {
      "transcription": "%*mära hë ti pan wajäri sö inkjë më maran",
      "translation": ""
    },
    {
      "transcription": "%*mära hë ti pan wajäri sö inkjë më mära mä",
      "translation": ""
    },
    {
      "transcription": "%mära hë timä më wajäri sö ka më mära mä",
      "translation": "ela fez comida para vc e ele"
    },
    {
      "transcription": "%mära hë timä më wajäri sö märaran",
      "translation": "ela fez comida para eles dois"
    },
    {
      "transcription": "%*mära hë ti më wajäri sö ka më inkjë mä",
      "translation": ""
    },
    {
      "transcription": "mära hë ti wajäri sö ka më inkjë më märapjâran",
      "translation": "ele fez comida para vc, eu, e eles"
    },
    {
      "transcription": "%*mära hë ti ran wajäri sö ka më inkjë më märapjâran",
      "translation": "ele fez comida para vc, eu, e eles"
    },
    {
      "transcription": "%*mära hë ti ___ wajäri sö ka më inkjë më märapjâran",
      "translation": "ele fez comida para vc, eu, e eles"
    },
    {
      "transcription": "%ka hë ka si söri inkjëran",
      "translation": "%só vc que da para nós dois"
    },
    {
      "transcription": "%mära hë ti si söri inkjëran",
      "translation": "%ele deu para nós dois"
    },
    {
      "transcription": "mära hë ti pan söri",
      "translation": "ele deu para vc e eu"
    },
    {
      "transcription": "%*mära hë ti pansi söri",
      "translation": "ele deu para vc e eu"
    },
    {
      "transcription": "%mära hë ti si wajäri sö inkjëran",
      "translation": "%ela fez comida para ele e eu"
    },
    {
      "transcription": "%*mära hë ti më si wajäri sö inkjëran",
      "translation": "%ela fez comida para ele e eu"
    },
    {
      "transcription": "%*mära hë ti si më wajäri sö inkjëran",
      "translation": "%ela fez comida para ele e eu"
    },
    {
      "transcription": "mära hë ti wajäri sö ta inkjë më",
      "translation": "ela cozinhou para ela mesmo e até para mim (like the meal is made and you're asking who made it bc it's clear it's for eg you and eg you say that i myself made it)"
    },
    {
      "transcription": "%*mära hë ti wajäri sö ta inkjë mä",
      "translation": "ela cozinhou para ela mesmo e até para mim"
    },
    {
      "transcription": "%*mära hë ti wajäri sö ta inkjë më ka mä",
      "translation": "ela cozinhou para ela mesmo e até para mim"
    },
    {
      "transcription": "%*mära hë ti wajäri sö ta inkjë më ka më",
      "translation": "ela cozinhou para ela mesmo e até para mim"
    },
    {
      "transcription": "%*inkjërân rê më më wajäri sö märaran",
      "translation": "eu e ele cozinhou para eles dois (asking after finished this part of the recording bc saw it in Bernat's diss)"
    },
    {
      "transcription": "inkjërân rê mä më wajäri sö märaran",
      "translation": "eu e ele cozinhou para eles dois "
    },
    {
      "transcription": "%mära hë tinkjë wajäri sö inkjë mä",
      "translation": "%ela fez comida para mim"
    },
    {
      "transcription": "%mära hë tinkjëmë wajäri sö ka më inkjë mä",
      "translation": "%ela fez comida para vc e eu"
    },
    {
      "transcription": "%*mära hë tinkjëmë wajäri sö Kjêpyti më inkjë mä",
      "translation": "%ela fez comida para mim e Kjêpyti"
    },
    {
      "transcription": "mära hë tipa wajäri sö Kjêpyti më inkjë mä",
      "translation": "ele fez comida para mim e Kjêpyti"
    },
    {
      "transcription": "mära hë tisi wajäri sö Kjêpyti më inkjë mä",
      "translation": "foi ele mesmo que fez comida para Kjêpyti e mim"
    },
    {
      "transcription": "%*mära hë tipan wajäri sö Kjêpyti më inkjë mä",
      "translation": "foi ele mesmo que fez comida para Kjêpyti e mim"
    },
    {
      "transcription": "%*mära hë timëpan wajäri sö Kjêpyti më inkjë mä",
      "translation": "foi ele mesmo que fez comida para Kjêpyti e mim"
    },
    {
      "transcription": "%*mära hë timëran wajäri sö Kjêpyti më inkjë mä",
      "translation": "foi ele mesmo que fez comida para Kjêpyti e mim"
    },
    {
      "transcription": "%*mära hë tipammë wajäri sö Kjêpyti më inkjë mä",
      "translation": "foi ele mesmo que fez comida para Kjêpyti e mim"
    },
    {
      "transcription": "%*märarân timëwajäri sö inkjërân",
      "translation": "elas duas fizeram comida para mim e Kjêpyti"
    },
    {
      "transcription": "märarân timëwajäri sö inkjë më Kjêpyti mä",
      "translation": "elas duas fizeram comida para mim e Kjêpyti"
    },
    {
      "transcription": "%märarân timëwajäri sö inkjëran",
      "translation": "elas duas fizeram comida para mim e Kjêpyti"
    },
    {
      "transcription": "%*märarân timëmëwajäri sö inkjëran",
      "translation": "elas duas fizeram comida para mim e Kjêpyti"
    },
    {
      "transcription": "%*märarân timëmëwajäri sö japjâran, ka më inkjë mä",
      "translation": "elas duas fizeram comida para mim e Kjêpyti"
    },
    {
      "transcription": "märarân timë söri kâprëpa inkjë më ka mä",
      "translation": "elas duas deram livros para mim e vc (colletictive)"
    },
    {
      "transcription": "märarân timë söri kâprëpa japjâran",
      "translation": "elas duas deram livros para mim e vc (colletictive)"
    },
    {
      "transcription": "märarân timë söri pytira kâprëpa inkjë më ka mä",
      "translation": "elas duas deram dois livros para mim e vc (dois para cada um) (both collective and distributive)"
    },
    {
      "transcription": "%*märarân timëmë söri pytira kâprëpara japjâran",
      "translation": "elas duas deram dois livros para mim e vc (dois para cada um)"
    },
    {
      "transcription": "%*märarân timëmë söri pytira kâprëpa japjâran",
      "translation": "elas duas deram dois livros para mim e vc (dois para cada um)"
    },
    {
      "transcription": "%*märarân timëmë söri pytira kjäräsâ japjâran",
      "translation": "elas duas deram dois cutias para nós dois "
    },
    {
      "transcription": "märarân timësöri inkjëran pytira kjäräsâ",
      "translation": "elas duas deram dois cutias para nós dois "
    },
    {
      "transcription": "%*märarân timësöri inkjëran pytira kjäräsâra",
      "translation": "elas duas deram dois cutias para nós dois "
    },
    {
      "transcription": "inkjë mä söri wântwê Paasymä mä tinpârähê",
      "translation": "eu quero que você dar esse wântwê a Paasymä para ele carregar"
    },
    {
      "transcription": "%*inkjë mä söripjän wântwê Paasymä mä tinpârähê",
      "translation": "eu quero que você dar esse wântwê a Paasymä para ele carregar"
    },
    {
      "transcription": "inkjë hë kamäsöri wântwê Paasymä mä",
      "translation": "(1) eu vou dar wântwê para P; (2) eu tô dando wântwê para P"
    },
    {
      "transcription": "wêntwê hë tijäri rê mä sörähê ka mä",
      "translation": "esse wântwê quer que eu dar ele para você"
    },
    {
      "transcription": "wêntwê hë tijäri rê kän sörähê ka mä",
      "translation": "esse wêntwê quer que eu dar para vc"
    },
    {
      "transcription": "wêntwê hë tijäri rê mä sörähê",
      "translation": "esse wêntwê quer que eu dar (não escolheu prëë mä)"
    },
    {
      "transcription": "ja wântwê hë tisörähê mära mä pëkâ",
      "translation": "esse wântwê quer dar um pëkâ para ele"
    },
    {
      "transcription": "%*ja wântwê hë timäsörähê mära mä pëkâ",
      "translation": "esse wântwê quer que eu dar para ele um pëkâ"
    },
    {
      "transcription": "%*ja wântwê hë tisörähê ka mä pëkâ",
      "translation": "esse wântwê quer que eu dar para ele um pëkâ"
    },
    {
      "transcription": "ja wântwê hë tikänsörähê ka mä pëkâ",
      "translation": "esse wântwê vai dar um pëkâ para vc"
    },
    {
      "transcription": "ja wântwê hë tikänsöripjän ka mä pëkâ",
      "translation": "esse wêntwê tá querendo dar um pëkâ para vc"
    },
    {
      "transcription": "inkjë hë rê kän söripjän ka mä wântwê",
      "translation": "eu quero dar um wântwê para vc"
    },
    {
      "transcription": "ra sö kôkjatipita inkjë",
      "translation": "eu tenho carro"
    },
    {
      "transcription": "ra sö celular inkjë",
      "translation": "eu tenho celular"
    },
    {
      "transcription": "ka mä rakänsöri pjän wântwê",
      "translation": "você quer que eu te dar esse wântwê"
    },
    {
      "transcription": "ka sö kôkjatipita inkjë",
      "translation": "eu vou ter carro (quando eu compro)"
    }
  ]
},{
  "metadata": {
    "title": "Sôpôha utïri Elicitation 2023",
    "speakers": "Sôpôha",
    "linguists": "Myriam Lapierre, Ella De Falco, Jessa Jeter",
    "date": "June 2023",
    "type": "elicitation"
  },
  "sentences": [
    {
      "transcription": "Kamërân karêjïïtïrï ta",
      "translation": "Kamërân (2PL) > ta (2PL) PST/PERF/IND, REFL"
    },
    {
      "transcription": "Inkjë hë rê jïïtïrï ta.",
      "translation": "Inkjë hë (1SG) > ta (1SG) PST/PERF/IND, REFL"
    },
    {
      "transcription": "Märapjârân rê j̃ïïtïrï ta",
      "translation": "Märapjârân (3PL) > ta (3PL) PST/PERF/IND, REFL"
    },
    {
      "transcription": "Inkjërân rê më jïïtïrï",
      "translation": "Inkjërân (1DU.EXCL) > 0 (1DU.EXCL) PST/PERF/IND, REFL"
    },
    {
      "transcription": "Inkjërân rê më jïïtïrï ta.",
      "translation": "Inkjërân (1DU.EXCL) > ta (1DU.EXCL) PST/PERF/IND, REFL"
    },
    {
      "transcription": "Inkjëmërân rêjïïtïrï ta",
      "translation": "Inkjëmërân (1PL.EXCL) > ta (1PL.EXCL) PST/PERF/IND, REFL"
    },
    {
      "transcription": "Ka hë ka jïïtïrï ta",
      "translation": "Ka hë (2SG) > ta (2SG) PST/PERF/IND, REFL"
    },
    {
      "transcription": "inkjë hë ka jïïtïrïn ka më inkjë",
      "translation": "inkjë hë (1SG) > ka më inkjë (2 & 1DU.INCL) FUT"
    },
    {
      "transcription": "inkjëmërân ka j̃ïïtïrïn (ta)",
      "translation": "inkjëmërân (1PL.EXCL) > (ta) (1PL.EXCL) FUT, REFL"
    },
    {
      "transcription": "Karân kamë j̃ïïtïrï ta.",
      "translation": "Karân (2DU) > ta (2DU) PST/PERF/IND, REFL"
    },
    {
      "transcription": "karân kamë jïïtïrïn (ta)",
      "translation": "karân (2DU) > (ta) (2DU) FUT, REFL"
    },
    {
      "transcription": "ka hë kati j̃ïïtïrïn (ta)",
      "translation": "ka hë (2SG) > (ta) (2SG) FUT, REFL"
    },
    {
      "transcription": "Japjârân mïj̃ïïtïrï ta.",
      "translation": "Japjârân (1PL.INCL) > ta (1PL.INCL) PST/PERF/IND, REFL"
    },
    {
      "transcription": "Mära hë ti j̃ïïtïri ta",
      "translation": "Mära hë (3SG) > ta (3SG) PST/PERF/IND, REFL"
    },
    {
      "transcription": "Märarân ti më jïïtïrï ta",
      "translation": "Märarân (3DU) > ta (3DU) PST/PERF/IND, REFL"
    },
    {
      "transcription": "kamërân kati rê j̃ïïtïrïn (ta)",
      "translation": "kamërân (2PL) > (ta) (2PL) FUT, REFL"
    },
    {
      "transcription": "inkjëmërân ka j̃ïïtïrïn (ta)",
      "translation": "inkjëmërân (1PL.EXCL) > (ta) (1PL.EXCL) FUT, REFL"
    },
    {
      "transcription": "märapjârân kaj̃ïïtïrïn ta",
      "translation": "märapjârân (3PL) > ta (3PL) FUT, REFL"
    },
    {
      "transcription": "mära hë kati j̃ïïtïrïn (ta)",
      "translation": "mära hë (3SG) > (ta) (3SG) FUT, REFL"
    },
    {
      "transcription": "*kahë kati më jïïtïrïn kara",
      "translation": "ka hë (2SG) > kara (2DU)"
    },
    {
      "transcription": "märarân kati më j̃ïïtïrïn (ta)",
      "translation": "märarân (3DU) > (ta) (3DU) FUT, REFL"
    },
    {
      "transcription": "*ka hë kati mëj̃ïïtïrïn ta",
      "translation": "ka hë (2SG) > ta (2SG)  REFL"
    },
    {
      "transcription": "japjârân kati mïj̃ïïtïrïn (ta)",
      "translation": "japjârân (1PL.INCL) > (ta) (1PL.INCL) FUT, REFL"
    },
    {
      "transcription": "märarân katimë j̃ïïtïrïn (ta)",
      "translation": "märarân (3DU) > (ta) (3DU) FUT, REFL"
    },
    {
      "transcription": "kamërân kati rê pïn jutïrïn",
      "translation": "kamërân (2PL) >  () FUT, RECIP."
    },
    {
      "transcription": "inkjëmërân ka pïn jutïrïn",
      "translation": "inkjëmërân (1PL.EXCL) >  () FUT, RECIP."
    },
    {
      "transcription": "märapjârân ka pïn jutïrïn",
      "translation": "märapjârân (3PL) >  () FUT, RECIP."
    },
    {
      "transcription": "japjârân ka pïn jutïrïn",
      "translation": "japjârân (3PL) >  () FUT, RECIP."
    },
    {
      "transcription": "inkjërân kamë pïn ju tïrïn",
      "translation": "inkjërân (1DU.EXCL) >  () FUT, RECIP."
    },
    {
      "transcription": "*karân kati më ha pïn jutïrïn",
      "translation": "karân (2DU) >  ()  RECIP."
    },
    {
      "transcription": "karân kati më pïn jutïrïn",
      "translation": "karân (2DU) >  () FUT, RECIP."
    },
    {
      "transcription": "märarân kati më pïn jutïrïn",
      "translation": "märarân (3DU) >  () FUT, RECIP."
    },
    {
      "transcription": "japjârân kati mï pïn jutïrïn",
      "translation": "japjârân (1PL.INCL) >  () FUT, RECIP."
    },
    {
      "transcription": "inkjërân ka rêmë kutïrïn kamëra",
      "translation": "inkjërân (1DU.EXCL) > kamëra (2PL) FUT,"
    },
    {
      "transcription": "inkjëmërân karê kutïrïn kamëra",
      "translation": "inkjëmërân (1PL.EXCL) > kamëra (2PL) FUT,"
    },
    {
      "transcription": "märapjârân karê kutïrïn kamëra",
      "translation": "märapjârân (3PL) > kamëra (2PL) FUT,"
    },
    {
      "transcription": "*kamërân kati rê kutïrïn ka",
      "translation": "kamërân (2PL) > ka (2SG)"
    },
    {
      "transcription": "mära hë kati rê kutïrïn kamëra",
      "translation": "mära hë (3SG) > kamëra (2PL) FUT,"
    },
    {
      "transcription": "*ka hë kati rêkutïrïn kamëra",
      "translation": "ka hë (2SG) > kamëra (2PL)"
    },
    {
      "transcription": "*karân kati rêmë kutïrïn kamëra",
      "translation": "karân (2DU) > kamëra (2PL)"
    },
    {
      "transcription": "*kamërân kati rêmë kutïrïn kara",
      "translation": "kamërân (2PL) > kara (2DU)"
    },
    {
      "transcription": "märarân kati rêmë kutïrïn kamëra",
      "translation": "märarân (3DU) > kamëra (2PL) FUT,"
    },
    {
      "transcription": "Inkjë hë rê kutïrï ka",
      "translation": "Inkjë hë (1SG) > ka (2SG) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjëmërân rê kutïrï ka",
      "translation": "Inkjëmërân (1PL.EXCL) > ka (2SG) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjë hë rê më kutïrï kara.",
      "translation": "Inkjë hë (1SG) > kara (2DU) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjërân rê më kutïrï kara",
      "translation": "Inkjërân (1DU.EXCL) > kara (2DU) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjërân rê më kutïrï ka.",
      "translation": "Inkjërân (1DU.EXCL) > ka (2SG) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjëmërân rê mëkutïrï kara.",
      "translation": "Inkjëmërân (1PL.EXCL) > kara (2DU) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjëmërân rê rêkutïrï kamëra.",
      "translation": "Inkjëmërân (1PL.EXCL) > kamëra (2PL) PST/PERF/IND,"
    },
    {
      "transcription": "inkjërân rêmë kutïrï ka",
      "translation": "inkjërân (1DU.EXCL) > ka (2SG) prs/HOR,"
    },
    {
      "transcription": "Märapjârân rêmëkutïrï kara.",
      "translation": "Märapjârân (3PL) > kara (2DU) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjë hë rêrêkutïrï kamëra",
      "translation": "Inkjë hë (1SG) > kamëra (2PL) PST/PERF/IND,"
    },
    {
      "transcription": "Märapjârân rêrêkutïrï kamëra",
      "translation": "Märapjârân (3PL) > kamëra (2PL) PST/PERF/IND,"
    },
    {
      "transcription": "Mära hë ti rêkutïrï kamëra",
      "translation": "Mära hë (3SG) > kamëra (2PL) PST/PERF/IND,"
    },
    {
      "transcription": "märapjârân ka kutïrïn ka",
      "translation": "märapjârân (3PL) > ka (2SG) FUT,"
    },
    {
      "transcription": "märapjârân ka më kutïrïn kara",
      "translation": "märapjârân (3PL) > kara (2DU) FUT,"
    },
    {
      "transcription": "inkjëmërân kakutïrïn ka",
      "translation": "inkjëmërân (1PL.EXCL) > ka (2SG) FUT,"
    },
    {
      "transcription": "inkjërân kamë kutïrïn ka",
      "translation": "inkjërân (1DU.EXCL) > ka (2SG) FUT,"
    },
    {
      "transcription": "inkjëmërân kamë kutïrïn kara",
      "translation": "inkjëmërân (1PL.EXCL) > kara (2DU) FUT,"
    },
    {
      "transcription": "*ka hë kati kutïrïn ka",
      "translation": "ka hë (2SG) > ka (2SG)"
    },
    {
      "transcription": "mära hë kati kutïrïn ka",
      "translation": "mära hë (3SG) > ka (2SG) FUT,"
    },
    {
      "transcription": "mära hë kati më kutïrïn kara",
      "translation": "mära hë (3SG) > kara (2DU) FUT,"
    },
    {
      "transcription": "märarân kati më kutïrïn ka",
      "translation": "märarân (3DU) > ka (2SG) FUT,"
    },
    {
      "transcription": "märarân kati më kutïrïn kara",
      "translation": "märarân (3DU) > kara (2DU) FUT,"
    },
    {
      "transcription": "*ka hë kati mëkutïrïn kara",
      "translation": "ka hë (2SG) > kara (2DU)"
    },
    {
      "transcription": "*katân katimë kutïrïn ka",
      "translation": "karân (2DU) > ka (2SG)"
    },
    {
      "transcription": "Japjârân nêkutïrï ka",
      "translation": "Japjârân (1PL.INCL) > ka (2SG) PST/PERF/IND,"
    },
    {
      "transcription": "Mära hë ti kutïrï ka",
      "translation": "Mära hë (3SG) > ka (2SG) PST/PERF/IND,"
    },
    {
      "transcription": "mära hë ti kutïrï ka",
      "translation": "mära hë (3SG) > ka (2SG) PST/PERF/IND,"
    },
    {
      "transcription": "Märarân ti më kutïrï ka.",
      "translation": "Märarân (3DU) > ka (2SG) PST/PERF/IND,"
    },
    {
      "transcription": "Mära hë ti mëkutïrï kara.",
      "translation": "Mära hë (3SG) > kara (2DU) PST/PERF/IND,"
    },
    {
      "transcription": "Märarân timë kutïrï ka.",
      "translation": "Märarân (3DU) > ka (2SG) PST/PERF/IND,"
    },
    {
      "transcription": "Märarân timë kutïrï kara",
      "translation": "Märarân (3DU) > kara (2DU) PST/PERF/IND,"
    },
    {
      "transcription": "*kamërân kati rê paatïrïn japjâra",
      "translation": "kamërân (2PL) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "*inkjë hë ka paatïrïn japjâra.",
      "translation": "inkjë hë (1SG) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "märapjârân ka paatïrïn japjâra",
      "translation": "märapjârân (3PL) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "*inkjërân kamë paatïrïn japjâra",
      "translation": "inkjërân (1DU) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "*inkjëmërân kapaatïrïn japjâra.",
      "translation": "inkjëmërân (1PL.EXCL) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "märapjârân kapaatïrïn japjâra",
      "translation": "märapjârân (3PL) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "*karân kati më paatïrïn japjâra",
      "translation": "karân (2DU) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "märarân kati më paatïrïn japâra",
      "translation": "märarân (3DU) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "märarân kati më paatïrïn japjâra",
      "translation": "märarân (3DU) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "*kahë kati paatïrïn japjâra",
      "translation": "kahë (2SG) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "mära hë kati paatïrïn japjâra",
      "translation": "mära hë (3SG) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "mära hë kati paatïrïn japjâra",
      "translation": "mära hë (3SG) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "mära hë kati paatïrïn japjâra",
      "translation": "mära hë (3SG) > japjâra (1PL.INCL (ANIM) FUT,"
    },
    {
      "transcription": "kamëra kati rê ha pïntïrïn",
      "translation": "kamëra (2PL) >  () FUT,"
    },
    {
      "transcription": "*kamëra kati rê pïntïrïn",
      "translation": "kamëra (2PL) >  ()"
    },
    {
      "transcription": "Märapjârân rêpïntïrï.",
      "translation": "Märapjârân (3PL) > 0 () PST/PERF/IND, RECP"
    },
    {
      "transcription": "inkjë ka pïn tïrïn",
      "translation": "inkjë hë (1SG) >  () FUT,"
    },
    {
      "transcription": "märapjâra ka pïn tïrïn",
      "translation": "märapjâra (3PL) >  () FUT,"
    },
    {
      "transcription": "japjâra ka pïn tïrïn",
      "translation": "japjâra (3PL) >  () FUT,"
    },
    {
      "transcription": "inkjëra kamë pïntïrïn",
      "translation": "inkjëra (1DU.EXCL) >  () FUT,"
    },
    {
      "transcription": "inkjëmëra kapïntïrïn",
      "translation": "inkjëmëra (1PL.EXCL) >  () FUT,"
    },
    {
      "transcription": "ka kati hapïntïrïn",
      "translation": "ka (2SG) >  () FUT,"
    },
    {
      "transcription": "kara kati më hapïntïrïn",
      "translation": "kara (2DU) >  () FUT,"
    },
    {
      "transcription": "märara kati më pïntïrïn",
      "translation": "märara (3DU) >  () FUT,"
    },
    {
      "transcription": "japjâra kati pa pïn tïrïn",
      "translation": "japjâra (1PL.INCL) >  () FUT,"
    },
    {
      "transcription": "mära kati pïn tïrïn",
      "translation": "mära (3SG) >  () FUT,"
    },
    {
      "transcription": "Kamërân ka rê raatïrï märapjâra",
      "translation": "Kamërân (2PL) > märapjâra (3PL) PST/PERF/IND,"
    },
    {
      "transcription": "Kamërân ka rê raatïrï inkjë",
      "translation": "Kamërân (2PL) > inkjë (1SG) PST/PERF/IND,"
    },
    {
      "transcription": "Kamërân karê mëraatïrï inkjëra",
      "translation": "Kamërân (2PL) > inkjëra (1DU.EXCL) PST/PERF/IND,"
    },
    {
      "transcription": "Kamërân karê raatïrï inkjëmëra",
      "translation": "Kamërân (2PL) > inkjëmëra (1PL.EXCL) PST/PERF/IND,"
    },
    {
      "transcription": "kamërân kati rê raatïrïn inkjë",
      "translation": "kamërân (2PL) > inkjë (1SG) FUT,"
    },
    {
      "transcription": "kamërân kati rê raatïrïn japjâra",
      "translation": "kamërân (2PL) > japjâra (3PL) FUT,"
    },
    {
      "transcription": "kamërân kati rê raatïrïn inkjëmëra",
      "translation": "kamërân (2PL) > inkjëmëra (1PL.EXCL) FUT,"
    },
    {
      "transcription": "kamërân kati rêmë raatïrïn inkjëra",
      "translation": "kamërân (2PL) > inkjëra (1DU) FUT,"
    },
    {
      "transcription": "kamërân katirê raatïrïn japjâra",
      "translation": "kamërân (2PL) > japjâra (3PL) FUT,"
    },
    {
      "transcription": "Inkjërân rê mëraatïrï.",
      "translation": "Inkjërân (1DU) > 0 (3?) PST/PERF/IND,"
    },
    {
      "transcription": "Märapjârân rêmëraatïrï inkjëra",
      "translation": "Märapjârân (3PL) > inkjëra (1DU.EXCL) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjë hë rêraatïrï mära pjâra",
      "translation": "Inkjë hë (1SG) > mära pjâra. (3PL) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjëmërân rêraatïrï märapjâra",
      "translation": "Inkjëmërân (1PL.EXCL) > märapjâra (3PL) PST/PERF/IND,"
    },
    {
      "transcription": "Märapjârân rêraatïrï inkjë.",
      "translation": "Märapjârân (3PL) > inkjë (1SG) PST/PERF/IND,"
    },
    {
      "transcription": "Märapjârân rêraatïrï inkjëmëra",
      "translation": "Märapjârân (3PL) > inkjëmëra (1PL.EXCL) PST/PERF/IND,"
    },
    {
      "transcription": "Märapjârân rêraatïrï märapjâra",
      "translation": "Märapjârân (3PL) > märapjâra (3PL) PST/PERF/IND,"
    },
    {
      "transcription": "Ka hë ka më raatïrï inkjëra.",
      "translation": "Ka hë (1SG) > inkjëra (1DU.EXCL) PST/PERF/IND,"
    },
    {
      "transcription": "Karân ka më raatïrï inkjëra.",
      "translation": "Karân (2DU) > inkjëra (1DU.EXCL) PST/PERF/IND,"
    },
    {
      "transcription": "Karân ka më raatïrï inkjë",
      "translation": "Karân (2DU) > inkjë (1SG) PST/PERF/IND,"
    },
    {
      "transcription": "Ka hë ka raatïrï inkjë",
      "translation": "Ka hë (2SG) > inkjë (1SG) PST/PERF/IND,"
    },
    {
      "transcription": "Ka hë ka raatïrï märapjâra",
      "translation": "Ka hë (2SG) > märapjâra (3PL) PST/PERF/IND,"
    },
    {
      "transcription": "Ka hë ka raatïrï inkjëmëra",
      "translation": "Ka hë (2SG) > inkjëmëra (1PL.EXCL) PST/PERF/IND,"
    },
    {
      "transcription": "Ka hë ka raatïrï inkjë",
      "translation": "ka hë (2SG) > inkjë (1SG) PST,"
    },
    {
      "transcription": "inkjë hë ka raatïrïn japjâra",
      "translation": "inkjë hë (1SG) > japjâra (3PL) FUT,"
    },
    {
      "transcription": "märapjârân ka raatïrïn inkjë",
      "translation": "märapjârân (3PL) > inkjë (1SG) FUT,"
    },
    {
      "transcription": "märapjârân ka raatïrïn inkjëmëra",
      "translation": "märapjârân (3PL) > inkjëmëra (1PL.EXCL) FUT,"
    },
    {
      "transcription": "märapjârân ka raatïrïn märapjâra",
      "translation": "märapjârân (3PL) > märapjâra (3PL) FUT, non-coreferential"
    },
    {
      "transcription": "märapjârân kamë raatïrïn inkjëra",
      "translation": "märapjârân (3PL) > inkjëra (1DU) FUT,"
    },
    {
      "transcription": "inkjërân kamëraatïrïn märapjâra",
      "translation": "inkjërân (1DU.EXCL) > märapjâra (3PL) FUT,"
    },
    {
      "transcription": "*inkjëmërân karaatïrïn inkjëmëra",
      "translation": "inkjëmërân (1PL.EXCL) > inkjëmëra (1PL.EXCL)"
    },
    {
      "transcription": "ka hë kati më raatïrïn inkjëra",
      "translation": "ka hë (2SG) > inkjëra (1DU.EXCL) FUT,"
    },
    {
      "transcription": "karân kati më raatïrïn inkjëra",
      "translation": "karân (2DU) > inkjëra (1DU) FUT,"
    },
    {
      "transcription": "karân kati më raatïrïn inkjëmëra",
      "translation": "karân (2DU) > inkjëmëra (1PL.EXCL) FUT,"
    },
    {
      "transcription": "märarân kati më raatïrïn inkjë",
      "translation": "märarân (3DU) > inkjë (1SG) FUT,"
    },
    {
      "transcription": "märarân kati më raatïrïn inkjëra",
      "translation": "märarân (3DU) > inkjëra (1DU) FUT,"
    },
    {
      "transcription": "märarân kati më raatïrïn inkjëmëra",
      "translation": "märarân (3DU) > inkjëmëra (1PL.EXCL) FUT,"
    },
    {
      "transcription": "märarân kati më raatïrïn märapjâra",
      "translation": "märarân (3DU) > märapjâra (3PL) FUT,"
    },
    {
      "transcription": "*märarân kati mëmëraatïrïn inkjëra",
      "translation": "märarân (3DU) > inkjëra (1DU)"
    },
    {
      "transcription": "mära hë kati mëraatïrïn inkjëra",
      "translation": "mära hë (3SG) > inkjëra (1DU) FUT,"
    },
    {
      "transcription": "kahë kati raatïrïn inkjë",
      "translation": "kahë (2SG) > inkjë (1SG) FUT,"
    },
    {
      "transcription": "ka hë kati raatïrïn inkjëmëra",
      "translation": "ka hë (2SG) > inkjëmëra (1PL.EXCL) FUT,"
    },
    {
      "transcription": "mära hë kati raatïrïn inkjë",
      "translation": "mära hë (3SG) > inkjë (1SG) FUT,"
    },
    {
      "transcription": "mära hë kati raatïrïn inkjëmëra",
      "translation": "mära hë (3SG) > inkjëmëra (1PL.EXCL) FUT,"
    },
    {
      "transcription": "mära hë kati raatïrïn märapjâra",
      "translation": "mära hë (3SG) > märapjâra (3PL) FUT,"
    },
    {
      "transcription": "*karân katimëmë raatïrïn inkjëra",
      "translation": "karân (2DU) > inkjëra (1DU)"
    },
    {
      "transcription": "karân katimëraatïrïn inkjë",
      "translation": "karân (2DU) > inkjë (1SG) FUT,"
    },
    {
      "transcription": "Japjârân mïraa tïrï märapjâra",
      "translation": "Japjârân (1PL.INCL) > märapjâra (3PL) PST/PERF/IND,"
    },
    {
      "transcription": "Mära hë ti më raatïrï inkjëra",
      "translation": "Mära hë (3SG) > inkjëra (1DU.EXCL) PST/PERF/IND,"
    },
    {
      "transcription": "Mära rân ti më raatïrï inkjëra",
      "translation": "Mära rân (3DU) > inkjëra (1DU.EXCL) PST/PERF/IND,"
    },
    {
      "transcription": "Märahë ti raatïrï inkjë",
      "translation": "Mära hë (3SG) > inkjë (1SG) PST/PERF/IND,"
    },
    {
      "transcription": "Mära hë ti raatïrï märapjâra",
      "translation": "Mära hë (3SG) > märapjâra (3PL) PST/PERF/IND,"
    },
    {
      "transcription": "Mära rân timë raatïrï inkjë",
      "translation": "Mära rân (3DU) > inkjë (1SG) PST/PERF/IND,"
    },
    {
      "transcription": "Mära hë tiraatïrï inkjë mëra",
      "translation": "Mära hë (3SG) > inkjë mëra. (1PL.EXCL) PST/PERF/IND,"
    },
    {
      "transcription": "Kamërân ka rê sutïrï mära.",
      "translation": "Kamërân (2PL) > mära (3SG) PST/PERF/IND,"
    },
    {
      "transcription": "Kamërân karêmësutïrï märara",
      "translation": "Kamërân (2PL) > märara (3DU) PST/PERF/IND,"
    },
    {
      "transcription": "kamërân kati rê sutïrïn mära",
      "translation": "kamërân (2PL) > mära (3SG) FUT,"
    },
    {
      "transcription": "kamërân kati rê sutïrïn japjâra",
      "translation": "kamërân (2PL) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "kamërân kati rêmë sutïrïn märara",
      "translation": "kamërân (2PL) > märara (3DU) FUT,"
    },
    {
      "transcription": "kamërân katirê sutïrïn japjâra",
      "translation": "kamërân (2PL) > japjâra (3PL) FUT,"
    },
    {
      "transcription": "*kamërân katirê sutïrïn japjâra",
      "translation": "kamërân (2PL) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "Inkjërân rê më sutïrï märara.",
      "translation": "Inkjërân (1DU.EXCL) > märara (3DU) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjërân rê më sutïrï mära",
      "translation": "Inkjërân (1DU.EXCL) > mära (3SG) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjëmërân rê më sutïrï märara.",
      "translation": "Inkjëmërân (1PL.EXCL) > märara (3DU) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjë hë rê mësutïrï märara.",
      "translation": "Inkjë hë (1SG) > märara (3DU) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjë hë rê sutïrï Kjêpyti.",
      "translation": "Inkjë hë (1SG) > Kjêpyti (3SG) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjë hë rê sutïrï mära",
      "translation": "Inkjë hë (1SG) > mära (3SG) PST/PERF/IND,"
    },
    {
      "transcription": "Inkjëmërân rê sutïrï mära",
      "translation": "Inkjëmërân (1PL.EXCL) > mära (3SG) PST/PERF/IND,"
    },
    {
      "transcription": "Märapjârân rêmë sutïrï märara",
      "translation": "Märapjârân (3PL) > märara (2PL) prs/HORT,"
    },
    {
      "transcription": "Haa, rêPSTutïrï",
      "translation": "0 (1SG) > 0 (3SG) PST/PERF/IND,"
    },
    {
      "transcription": "Märapjârân rêsutïrï mära",
      "translation": "Märapjârân (3PL) > mära (3SG) PST/PERF/IND,"
    },
    {
      "transcription": "Karân ka më sutïrï märara.",
      "translation": "Karân (2DU) > märara (3DU) PST/PERF/IND,"
    },
    {
      "transcription": "inkjëmërân ka më sutïrïn märara",
      "translation": "inkjëmërân (1PL.EXCL) > märara (3DU) FUT,"
    },
    {
      "transcription": "Pêkjä më inkjërân ka më sutïrïn japjâra",
      "translation": "Pêkjä më inkjërân (P & 1SG/DU) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "Ka hë ka sutïrï mära",
      "translation": "Ka hë (2SG) > mära (3SG) PST/PERF/IND,"
    },
    {
      "transcription": "inkjë hë ka sutïrïn ka më inkjë",
      "translation": "inkjë hë (1SG) > ka më inkjë (2 & 1DU) FUT,"
    },
    {
      "transcription": "inkjë hë ka sutïrïn japjâra",
      "translation": "inkjë hë (1SG) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "märapjârân ka sutïrïn japjâra",
      "translation": "märapjârân (3PL) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "Ka hë kamë sutïrï mära ra",
      "translation": "Ka hë (2SG) > mära ra (3DU) PST/PERF/IND,"
    },
    {
      "transcription": "Karân kamë sutïrï mära.",
      "translation": "Karân (2DU) > mära (3SG) PST/PERF/IND,"
    },
    {
      "transcription": "inkjërân kamë sutïrïn mära",
      "translation": "inkjërân (1DU.EXCL) > mära (3SG) FUT,"
    },
    {
      "transcription": "inkjërân kamë sutïrïn märara",
      "translation": "inkjërân (1DU.EXCL) > märara (3DU) FUT,"
    },
    {
      "transcription": "inkjërân kamë sutïrïn japjâra",
      "translation": "inkjërân (1DU) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "märapjârân kamë sutïrïn märara",
      "translation": "märapjârân (3PL) > märara (3DU) FUT, non-coreferential"
    },
    {
      "transcription": "*inkjëmërân kamësutïrïn inkjëra",
      "translation": "inkjëmërân (1PL.EXCL) > inkjëra (1DU.EXCL) FUT,"
    },
    {
      "transcription": "inkjëmërân kasutïrïn inkjë",
      "translation": "inkjëmërân (1PL.EXCL) > inkjë (1SG) FUT,"
    },
    {
      "transcription": "inkjëmërân kasutïrïn japjâra",
      "translation": "inkjëmërân (1PL.EXCL) > japjâra (3PL) FUT,"
    },
    {
      "transcription": "inkjëmërân kasutïrïn märapjâra",
      "translation": "inkjëmërân (1PL.EXCL) > märapjâra (3PL) FUT,"
    },
    {
      "transcription": "inkjëmërân kasutïrïn mära",
      "translation": "inkjëmërân (1PL.EXCL) > mära (3SG) FUT,"
    },
    {
      "transcription": "inkjëmërân kasutïrïn japjâra",
      "translation": "inkjëmërân (1PL.EXCL) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "*inkjëmërân kasutïrïn japjâra",
      "translation": "inkjëmërân (1PL.EXCL) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "*inkjëmërân kasutïrïn inkjëmëra",
      "translation": "inkjëmërân (1PL.EXCL) > inkjëmëra (1PL.EXCL) FUT,"
    },
    {
      "transcription": "märapjârân kasutïrïn mära",
      "translation": "märapjârân (3PL) > mära (3SG) FUT,"
    },
    {
      "transcription": "karân kati mê sutïrïn japjâra",
      "translation": "karân (2DU) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "ka hë kati më sutïrïn märara",
      "translation": "ka hë (2SG) > märara (3DU) FUT,"
    },
    {
      "transcription": "karân kati më sutïrïn japjâra",
      "translation": "karân (2DU) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "karân kati më sutïrïn mära",
      "translation": "karân (2DU) > mära (3SG) FUT,"
    },
    {
      "transcription": "karân kati më sutïrïn märara",
      "translation": "karân (2DU) > märara (3DU) FUT,"
    },
    {
      "transcription": "karân kati më sutïrïn më sutïrïn märapjâra",
      "translation": "karân (2DU) > märapjâra (3PL) FUT,"
    },
    {
      "transcription": "mära hë kati më sutïrïn märara",
      "translation": "mära hë (3SG) > märara (3DU) FUT,"
    },
    {
      "transcription": "märarân kati më sutïrïn mära",
      "translation": "märarân (3DU) > mära (3SG) FUT,"
    },
    {
      "transcription": "*karân kati mëmë sutïrïn märara",
      "translation": "karân (2DU) > märara (3DU) FUT,"
    },
    {
      "transcription": "märarân kati mësutïrïn märara",
      "translation": "märarân (3DU) > märara (3DU) FUT, non-coreferential"
    },
    {
      "transcription": "ka hë kati sutïrïn japjâra",
      "translation": "ka hë (2SG) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "ka hë kati sutïrïn märapjâra",
      "translation": "ka hë (2SG) > märapjâra (3PL) FUT,"
    },
    {
      "transcription": "ka hë kati sutïrïn mära",
      "translation": "ka hë (2SG) > mära (3SG) FUT,"
    },
    {
      "transcription": "ka hë kati sutïrïn japjâra",
      "translation": "ka hë (2SG) > japjâra (3PL)  "
    },
    {
      "transcription": "mära hë kati sutïrïn japjâra",
      "translation": "mära hë (3SG) > japjâra (3PL) FUT,"
    },
    {
      "transcription": "mära hë kati sutïrïn mära",
      "translation": "mära hë (3SG) > mära (3SG) FUT,"
    },
    {
      "transcription": "mära hë kati sutïrïn japjâra",
      "translation": "mära hë (3SG) > japjâra (3PL (INAM) FUT,"
    },
    {
      "transcription": "mära hë kati sutïrïn japjâra",
      "translation": "mära hë (3SG) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "märarân katimë sutïrïn jap jâra",
      "translation": "märarân (3DU) > japjâra (1PL.INCL) FUT,"
    },
    {
      "transcription": "Japjâran mï mësutïrï märara.",
      "translation": "Japjâran (1PL.INCL) > märara (3DU) PST/PERF/IND,"
    },
    {
      "transcription": "Japjârân mïsutïrï mära",
      "translation": "Japjârân (1PL.INCL) > mära (3SG) PST/PERF/IND,"
    },
    {
      "transcription": "Mära hê ti më sutïrï mära ra.",
      "translation": "Mära hê (3SG) > mära ra (3DU) PST/PERF/IND,"
    },
    {
      "transcription": "Märarân timë sutïrï mära",
      "translation": "Märarân (3DU) > mära (3SG) PST/PERF/IND,"
    },
    {
      "transcription": "Mära hë tisutïrï mära.",
      "translation": "Mära hë (3SG) > mära (3SG) PST/PERF/IND,"
    },
    {
      "transcription": "Ka më sânpün märara.",
      "translation": "Ka (2SG) > märara (3DU) PST/PERF/IND,"
    },
    {
      "transcription": "Ka sânpün mära",
      "translation": "Ka (2SG) > mära (3SG) PST/PERF/IND,"
    }
  ]
},{
  "metadata": {
    "title": "Shaman",
    "speakers": "Sykjä",
    "linguists": "Myriam Lapierre",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 0,
      "start": "14920",
      "stop": "20430",
      "transcription": "[É] inkjẽ/ inkjẽ jy rantomã/ inkjë jy rantomãpãã rêjãri",
      "translation": "Eu, eu virei pajé, eu virei pajé, eu fiz assim.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 1,
      "start": "20665",
      "stop": "23285",
      "transcription": "Jy rantomãpãã. Mãmãnpên",
      "translation": "Eu virei pajé. Então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": "23995",
      "stop": "26415",
      "transcription": "tisũn Krentomã hẽ",
      "translation": "Krentomã disse",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": "26915",
      "stop": "29375",
      "transcription": "ka hẽ katisakôrïn kjytijĩn tijãri.",
      "translation": "\"Você vai fumar fumo\", ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": "29425",
      "stop": "30675",
      "transcription": "Kjytijĩn mẽ",
      "translation": "\"Fumo também,",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": "30865",
      "stop": "32885",
      "transcription": "hantomãpãã hahê tijãri.",
      "translation": "Para você virar pajé\", ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": "33735",
      "stop": "35865",
      "transcription": "Mãmãnpên Krentomã hẽ tisün",
      "translation": "Então Krentomã disse",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": "36020",
      "stop": "38330",
      "transcription": "ha jy kãnkin kjytijĩn tijãri",
      "translation": "\"Você gosta de fumo?\" Ele disse",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": "38915",
      "stop": "40945",
      "transcription": "\"ha ntomãpãã hahê\" tijãri",
      "translation": "\"Para você virar pajé,\" ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": "40970",
      "stop": "42070",
      "transcription": "\"Pjãrãhê?\" rêjãri.",
      "translation": "\"Para o qué?\" eu disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": "42890",
      "stop": "45280",
      "transcription": "Karankwâra hê prïara",
      "translation": "\"Para você curar as crianças,",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": "45355",
      "stop": "47595",
      "transcription": "karankwâra hê sitepara",
      "translation": "para você curar os adultos\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": "48195",
      "stop": "52955",
      "transcription": "\"[Aí] mãmãnpên karasijâ/ karansotopô hahê kônswa mẽ sosi mẽ\"",
      "translation": "\"Então você vai tirar dente de maccaco e osso de bixo para eles\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": "53945",
      "stop": "56335",
      "transcription": "hein... tessi mẽ",
      "translation": "\"e espinha de peixe\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": "56960",
      "stop": "58710",
      "transcription": "sïrãnkô mẽ",
      "translation": "\"e diarrhea\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": "59245",
      "stop": "62075",
      "transcription": "jahahê kati sêjantomãpãã [ka]tinkjẽjãri",
      "translation": "\"Para isso você vai virar pajé,\" ele me disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": "62240",
      "stop": "65050",
      "transcription": "Mãmãnpên rêrãkin inkjë hë, hê nãhã.",
      "translation": "Então eu aceitei, \"tá bom, vou fazer.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": "65655",
      "stop": "67355",
      "transcription": "Japên kasakô inkjẽ hẽ",
      "translation": "Daqui (para a frente) eu vou fumar.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": "67495",
      "stop": "69165",
      "transcription": "inkjẽjõ pãã jahê rêjãri",
      "translation": "Para os meus filhos,\" eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": "69740",
      "stop": "73580",
      "transcription": "Mãmãnpên rêsakôri pykkôômã rêjãri, pykkôôpytinsimã.",
      "translation": "Então eu fumei de manhã que eu fiz, muito cedo de manhã.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": "73690",
      "stop": "74910",
      "transcription": "Rêsakôri.",
      "translation": "Eu fumei.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": "75660",
      "stop": "79380",
      "transcription": "Mãmãnpên rêsakôri, jy rahomõri jy rantomãpãã rêjãri.",
      "translation": "Então eu fumei, para chegar a sensação (no meu corpo), eu virei tonto, assim que eu fiz.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": "79400",
      "stop": "81650",
      "transcription": "jy rapepeppytinsi, pepeti",
      "translation": "eu fiquei muito fraco, fraco mesmo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": "82685",
      "stop": "86085",
      "transcription": "Rarõõ, pên jakôpy jypyrakin rêjãri.",
      "translation": "Eu fiquei deitado, então nessa hora [meio dia] eu fiquei bem de novo, assim que eu fiz.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": "86115",
      "stop": "87695",
      "transcription": "jyrasuppôô",
      "translation": "O espírito chegou me procurar,",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": "88525",
      "stop": "90455",
      "transcription": "Intomãpãã pakkjati",
      "translation": "(o espírito) do primeiro pajé (do antepassado).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": "90820",
      "stop": "92960",
      "transcription": "hein... Kjãntwê",
      "translation": "hmm.. Kjãntwê (nome do pajé).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": "93020",
      "stop": "94120",
      "transcription": "Intomãpãã pakkjati.",
      "translation": "O primeiro pajé.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": "95140",
      "stop": "96390",
      "transcription": "Ha/",
      "translation": "\"Você/",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": "96780",
      "stop": "100750",
      "transcription": "ha kjytijĩn ho jyhowakõõ tinkjẽjãri. Paa jyhorakõõ kjytijĩn ho",
      "translation": "você fumou fumo?\" Ele me disse. \"Sim, eu fumei fumo.\"",
      "notes": "Ele errou. Falou \"howakõõ = beber fumo\" mas tinha que ser \"sakôri = fumar\" ",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": "100975",
      "stop": "102525",
      "transcription": "prẽë hẽ tikãnsasâri",
      "translation": "\"Quem que colocou para você?\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": "103450",
      "stop": "105720",
      "transcription": "tinkjẽsõri Krentomã hẽ",
      "translation": "\"Krentomã que deu para mim.\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": "105835",
      "stop": "106985",
      "transcription": "Haa, nãhã.",
      "translation": "\"Sim, tá bom.\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": "107510",
      "stop": "109390",
      "transcription": "Kajõ pãã jahê mãra",
      "translation": "\"Isso para os seus filhos.\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": "110060",
      "stop": "111850",
      "transcription": "karankwâra hê tijãri",
      "translation": "\"Para você curar,\" ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": "113305",
      "stop": "116795",
      "transcription": "katihokin pytinsi hã kajõ sâpên",
      "translation": "\"Você vai cuidar muito bem do seu trabalho.\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": "117620",
      "stop": "119530",
      "transcription": "hapẽẽ pasã",
      "translation": "\"você não pode falar andando\"",
      "notes": "sã = nao",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": "120095",
      "stop": "122115",
      "transcription": "karaparisã tijãri",
      "translation": "\"Você não deixar eles\" ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": "122255",
      "stop": "125365",
      "transcription": "hein... jyri katirankwâri kapyrookirã hê tijãri",
      "translation": "\"Em silencio você vai curar ele para você fazer eles ficar bem de novo\" ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": "125720",
      "stop": "127830",
      "transcription": "Mãmãnpên kakãnksotijõ",
      "translation": "\"Então eles vão dar as coisas para você.\"",
      "notes": "Pagamento para curar",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": "127830",
      "stop": "129610",
      "transcription": "karahokin pjyy tijãri",
      "translation": "\"eles vão pagar porque você vai ter curado eles,\" ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 41,
      "start": "130570",
      "stop": "133440",
      "transcription": "[Aí] mãmãnpên rêmãnpari, haa nãhã rêjãri.",
      "translation": "Então eu refleti, \"sim, tá bom\" eu disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 42,
      "start": "133606",
      "stop": "135236",
      "transcription": "ja kawajãri inkjẽ hẽ",
      "translation": "Isso que eu vou fazer.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 43,
      "start": "135804",
      "stop": "137038",
      "transcription": "Rêmãjãri inkjẽ hẽ",
      "translation": "Eu disse para ele.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 44,
      "start": "137802",
      "stop": "139802",
      "transcription": "Mãmãnpên",
      "translation": "Então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 45,
      "start": "141052",
      "stop": "145208",
      "transcription": "tinkjẽsũn japên katikinkwan hate tijãri",
      "translation": "Ele me disse \"daqui para frente você vai deitar sózinho\", ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 46,
      "start": "145930",
      "stop": "147411",
      "transcription": "[se] Nõharõõ",
      "translation": "Você não vai deitar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 47,
      "start": "147501",
      "stop": "149618",
      "transcription": "harõõ kansipjâ jakan rêjãri",
      "translation": "se você deitar com a sua esposa",
      "notes": "Ele errour aqui, falou o contrario do pedaço antes e depois.",
      "words": [
        ""
      ]
    },
    {
      "id": 48,
      "start": "150134",
      "stop": "152316",
      "transcription": "Hate katihãrin kinkwan",
      "translation": "Sózinho você vai continuar deitando.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 49,
      "start": "152804",
      "stop": "154881",
      "transcription": "kansipjâ jakãn harõõ ja",
      "translation": "Se você deitar com a sua espoa",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 50,
      "start": "156076",
      "stop": "157531",
      "transcription": "Mãmãnpên",
      "translation": "então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 51,
      "start": "157883",
      "stop": "159825",
      "transcription": "kati pyhãntomãpãã rõ rêjãri",
      "translation": "você não vai virar pajé de novo, ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 52,
      "start": "160330",
      "stop": "161804",
      "transcription": "hate kati kinkwan",
      "translation": "Sózinho vai deitar.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 53,
      "start": "162359",
      "stop": "164229",
      "transcription": "kati[ha]sõtin inkjêti tijãri",
      "translation": "Você vai dormir muitos dias, ele disse.",
      "notes": "Ele errou, esqueceu o [ha]",
      "words": [
        ""
      ]
    },
    {
      "id": 54,
      "start": "164518",
      "stop": "165453",
      "transcription": "Hate.",
      "translation": "Sózinho.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 55,
      "start": "166817",
      "stop": "170187",
      "transcription": "nãnprĩn kahaarintõsã kansipjâ tijãri",
      "translation": "Tem que esperar, você também não pode transar com a sua mulher, ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 56,
      "start": "170242",
      "stop": "172209",
      "transcription": "karïrã kansipjâ mãmãnpên",
      "translation": "Se você transar com a sua mulher, então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 57,
      "start": "173581",
      "stop": "175561",
      "transcription": "kati pyhantomãpãã rõ tijãri",
      "translation": "Você não vai virar pajé de novo, ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 58,
      "start": "175875",
      "stop": "178635",
      "transcription": "mãmãnpên karïrã kansipjâ mãmãnpên katihatyn tijãri",
      "translation": "então se você transar com a sua mulher, você vai morrer, ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 59,
      "start": "179023",
      "stop": "180198",
      "transcription": "Intomãpãã pakkjati hë.",
      "translation": "O primeiro pajé.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 60,
      "start": "181165",
      "stop": "183185",
      "transcription": "Mãmãnpên tinkjẽsũn tõ",
      "translation": "Então ele me disse também",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 61,
      "start": "183698",
      "stop": "185562",
      "transcription": "teppãã katikurin",
      "translation": "Você vai comer peixe pequeno.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 62,
      "start": "186236",
      "stop": "187717",
      "transcription": "prii katikurin",
      "translation": "Você vai comer pacuzinho.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 63,
      "start": "188066",
      "stop": "190085",
      "transcription": "kjãrãnsânsipãã katikurin",
      "translation": "Você vai comer tucunaré pequeno.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 64,
      "start": "191266",
      "stop": "193805",
      "transcription": "Intotũmã katikurin tijãri teppãã",
      "translation": "Você vai comer lambari, ele disse, peixe pequeno.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 65,
      "start": "193882",
      "stop": "195297",
      "transcription": "Intomãpãã [ra]jõ ja",
      "translation": "Essa é (a alimentação) do pajé",
      "notes": "[ra] tá errado. tem que ser \"Intomãpããjõ ja\"",
      "words": [
        ""
      ]
    },
    {
      "id": 66,
      "start": "195990",
      "stop": "198166",
      "transcription": "kakurisã kutinsi mẽ",
      "translation": "Você também não pode comer trairão",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 67,
      "start": "198506",
      "stop": "199915",
      "transcription": "tosôa mẽ",
      "translation": "e bicudo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 68,
      "start": "200197",
      "stop": "201450",
      "transcription": "tepinsi mẽ",
      "translation": "e pintado.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 69,
      "start": "203631",
      "stop": "206028",
      "transcription": "nãmpân mẽ japjâra kakurisã",
      "translation": "e piranha, esses que você não vai comer.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 70,
      "start": "206050",
      "stop": "207796",
      "transcription": "rênkjẽjãri intomãpãã hapjârân",
      "translation": "Os pajés falaram para mim.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 71,
      "start": "208246",
      "stop": "210441",
      "transcription": "sõjopy tõ, ikkjyti mẽ",
      "translation": "Também caçada, e anta",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 72,
      "start": "210539",
      "stop": "211487",
      "transcription": "ikkôn mẽ",
      "translation": "e macaco prego",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 73,
      "start": "213346",
      "stop": "214573",
      "transcription": "kwakriti mẽ",
      "translation": "e macaco aranha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 74,
      "start": "214719",
      "stop": "216738",
      "transcription": "japjâra kakurisâ",
      "translation": "aqueles que você não vai comer",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 75,
      "start": "217735",
      "stop": "221491",
      "transcription": "[Aí] mãmãnpên tinkjẽsũn intomã/ intomãpãã pakkjati hẽ",
      "translation": "Então o primeiro pajé me disse",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 76,
      "start": "223488",
      "stop": "224209",
      "transcription": "ik/ ik/",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 77,
      "start": "224216",
      "stop": "226164",
      "transcription": "ikkônjõ/ ikkônjõ",
      "translation": "do macaco/ do macaco",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 78,
      "start": "227007",
      "stop": "230471",
      "transcription": "ikkônjõ kjytijĩn katisakôrïn kahẽ tijãri",
      "translation": "fumo do macaco prego que vai fumar, ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 79,
      "start": "230937",
      "stop": "231878",
      "transcription": "ikkônjõ",
      "translation": "Do macaco prego.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 80,
      "start": "232771",
      "stop": "234888",
      "transcription": "ikkônjõ sïkïn kjytijĩn rêjãri",
      "translation": "o fumo do macaco é muito bom, eles disseram",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 81,
      "start": "234960",
      "stop": "237752",
      "transcription": "kasakorisã kwakritijõ kjytijïn tijãri",
      "translation": "Você não vai fumar o fumo do macaco aranha, ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 82,
      "start": "238307",
      "stop": "241754",
      "transcription": "pjâ ka/ kapên sakorin mãmãnpên haty tijãri",
      "translation": "Se você fumar (o fumo do macaco aranha) você vai morrer, ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 83,
      "start": "242447",
      "stop": "245564",
      "transcription": "Mãmãnpên jy ra/ jy rantomapãã",
      "translation": "Então eu virei pajé.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 84,
      "start": "245739",
      "stop": "248661",
      "transcription": "Mãmãnpên rêrankwâri inkjẽ hẽ prĩara ",
      "translation": "Então eu curei as crianças",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 85,
      "start": "250084",
      "stop": "252441",
      "transcription": "[Aí] mãmãnpên rêranhopôô ",
      "translation": "Então eu tirei deles",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 86,
      "start": "252739",
      "stop": "255421",
      "transcription": "tessi mẽ ikkônswa mẽ",
      "translation": "espinha de peixe, e dente de macaco prego",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 87,
      "start": "256324",
      "stop": "258272",
      "transcription": "parinto",
      "translation": "caramujo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 88,
      "start": "258995",
      "stop": "260320",
      "transcription": "parinto mẽ",
      "translation": "e caramujo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 89,
      "start": "260628",
      "stop": "262654",
      "transcription": "japjâra rêranhopôô rêjãri",
      "translation": "aqueles que eu tirei deles, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 90,
      "start": "263551",
      "stop": "266622",
      "transcription": "Haa mãmãnpên rêpyhokin rêjãri",
      "translation": "Sim, então eu fiz eles ficarem bem de novo, eu digo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 91,
      "start": "266706",
      "stop": "267687",
      "transcription": "prĩara rêjãri",
      "translation": "As crianças, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 92,
      "start": "269044",
      "stop": "272510",
      "transcription": "Haa mãmãrãmã rakupan jãhã, jy pãpã rasônratepi inkjẽjĩsôn ",
      "translation": "Sim, por isso eles andam aqui, todos eles cresceram por causa de mim (graças a mim)",
      "notes": "rasôn = por causa de mim",
      "words": [
        ""
      ]
    },
    {
      "id": 93,
      "start": "272583",
      "stop": "274310",
      "transcription": "inkjẽ jïkja pên kja rêjãri",
      "translation": "Da minha mão, eu digo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 94,
      "start": "274339",
      "stop": "275839",
      "transcription": "jy ra/ jy ratepi",
      "translation": "Eles crescerem (eles viraram adultos)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 95,
      "start": "276915",
      "stop": "278772",
      "transcription": "[É] mãmãnpên",
      "translation": "Então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 96,
      "start": "280077",
      "stop": "282232",
      "transcription": "mãmãnpên tinkjẽsũn tõ",
      "translation": "então ele me falou também",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 97,
      "start": "282246",
      "stop": "284142",
      "transcription": "japên katisanpâ ka hẽ",
      "translation": "Daqui para frente, você vai pegar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 98,
      "start": "284204",
      "stop": "286087",
      "transcription": "sõpâri tijãri",
      "translation": "feticeiro, ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 99,
      "start": "286558",
      "stop": "289226",
      "transcription": "sõpâri katisanpâ ka hẽ, mãmãnpên",
      "translation": "O feticeiro você vai pegar, então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 100,
      "start": "289226",
      "stop": "290623",
      "transcription": "karantê sanpâ rãhẽ rêjãri",
      "translation": "para você pegar para proteger deles, eles disseram",
      "notes": "karantê = para proteger deles",
      "words": [
        ""
      ]
    },
    {
      "id": 101,
      "start": "291253",
      "stop": "293760",
      "transcription": "Mãmãnpên rêsanpân sõpâri rêjãri inkjẽ hẽ",
      "translation": "Então eu peguei os feticeiros, assim que eu fiz",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 102,
      "start": "294587",
      "stop": "297534",
      "transcription": "rêsõn/ sõpâri rêsanpân, mãmãnpên",
      "translation": "Eu peguei os feticeiros, então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 103,
      "start": "298596",
      "stop": "301616",
      "transcription": "sâ pytinsi rêjãri sõpâri rêsanpâ rãmã mãja rêjãri.",
      "translation": "Doi muito mesmo este feticeiro quando eu pego ele, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 104,
      "start": "301616",
      "stop": "303467",
      "transcription": "Pa rêjãri, ja, sikja.",
      "translation": "No braço, na mão, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 105,
      "start": "304528",
      "stop": "305663",
      "transcription": "sõpâri",
      "translation": "O feticeiro",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 106,
      "start": "306414",
      "stop": "310674",
      "transcription": "[Aí] mãmãnpên jyraa/ jyraakriti inkjë sotijunpa",
      "translation": "Então eu enfraqueci/fiquei fraco, eu fiquei com medo das coisas (dos feticeiros, não aguentava mais).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 107,
      "start": "311155",
      "stop": "313718",
      "transcription": "jy rasïjakwâ rêjãri inkjë",
      "translation": "Eu fiquei com tremor, eu digo",
      "notes": "sïjakwâ = sensação física de medo dentro do corpo (tremor? = procurar palavra certa)",
      "words": [
        ""
      ]
    },
    {
      "id": 108,
      "start": "314823",
      "stop": "320084",
      "transcription": "mãmãnpên râjã/ rêjãri, japê rêpysotinkoti ket [rêpysotinkota hê pjo] inkjë hë, soti rêjãn/ rêjãri inkjë hë",
      "translation": "Então eu digo, daqui para a frente eu não vou mais atrás dessa coisas, essas eu coisas eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 109,
      "start": "321364",
      "stop": "323053",
      "transcription": "[aí] mãmãnpên",
      "translation": "Então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 110,
      "start": "324748",
      "stop": "326661",
      "transcription": "jy nkjëkïnnõ inkjë mã sõpâri rêjãri",
      "translation": "Eu não gosto mais de feticeiro, eu digo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 111,
      "start": "327035",
      "stop": "329857",
      "transcription": "ja hamã, rênpari inkjë intomãpãã rêjãri",
      "translation": "Por isso que eu aprendi a ser pajé.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 112,
      "start": "331450",
      "stop": "334475",
      "transcription": "[aí] pjãn kõ mãmãnpên rêjãri pjontwarân ",
      "translation": "Então os joven perguntaram \"De qué que você virou pajé?\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 113,
      "start": "335369",
      "stop": "338433",
      "transcription": "pjãn kõ kasinpari ka hë intomãpãã rêjãri ",
      "translation": "Cómo que você aprendeu a ser pajé?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 114,
      "start": "339125",
      "stop": "341150",
      "transcription": "Inkjë hë rênpari intomãpãã",
      "translation": "Eu aprendi a ser pajé",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 115,
      "start": "341555",
      "stop": "343060",
      "transcription": "Krentomã kõõ rêjãri",
      "translation": "Com o Krentomã, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 116,
      "start": "343195",
      "stop": "345287",
      "transcription": "ja hë tinkjësõri kjytijïn rêjãri",
      "translation": "Ele que deu o fumo para mim, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 117,
      "start": "346337",
      "stop": "348735",
      "transcription": "Ha jy rãnsirõsê sõpâri",
      "translation": "\"O feticeiro fica na vista (sem esconder)?\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 118,
      "start": "348760",
      "stop": "351393",
      "transcription": "Rêraakjâri pjontwârân, prïharân",
      "translation": "Os jovens, as crianças, me perguntaram.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 119,
      "start": "352121",
      "stop": "355730",
      "transcription": "sõpâri nãnsi katirãnkjo pytinsi issy.",
      "translation": "Quando (você pega ele), o feticeiro fica quente mesmo, igual fogo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 120,
      "start": "355730",
      "stop": "357281",
      "transcription": "Issy tõ inkjôti",
      "translation": "igual fumaça de fogo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 121,
      "start": "358872",
      "stop": "360830",
      "transcription": "Katirêsatâri hãn rêrajãri inkjë hë",
      "translation": "Vocês têm que memorizar, eu falei para eles.",
      "notes": "Hãn = soft imperative, there is a term for that that I need to find. Hortative??; ",
      "words": [
        ""
      ]
    },
    {
      "id": 122,
      "start": "360830",
      "stop": "362305",
      "transcription": "Ha tãpjân rêjãri",
      "translation": "\"Assim que fica?\" eles disseram.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 123,
      "start": "362398",
      "stop": "363898",
      "transcription": "Rêrakjâri inkjë prïharân",
      "translation": "As crianças me perguntaram.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 124,
      "start": "364604",
      "stop": "367869",
      "transcription": "Ha tãpjân sõpâri hë, tãjã sõpâri, nãnkjo.",
      "translation": "\"Assim que é o feticeiro?\" \"É assim, quente.\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 125,
      "start": "368608",
      "stop": "369934",
      "transcription": "Tisakjun issy hë",
      "translation": "Parece igual fogo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 126,
      "start": "370867",
      "stop": "373138",
      "transcription": "Ja hamã jyra/ jyrantomãpãã inkjë rêjãri",
      "translation": "Por isso que eu virei pajé, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 127,
      "start": "373268",
      "stop": "374574",
      "transcription": "Mãmãramã",
      "translation": "Por isso",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 128,
      "start": "375925",
      "stop": "378605",
      "transcription": "[Aí] Raankwârïn inkjë hë kjëkjapjâ hapjâra",
      "translation": "eu curei (mexei com) os meus filhos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 129,
      "start": "378605",
      "stop": "379968",
      "transcription": "inkjë tânpjâ hapjâra",
      "translation": "meus netos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 130,
      "start": "380602",
      "stop": "382061",
      "transcription": "sitepara rêjãri",
      "translation": "os adultos, eu digo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 131,
      "start": "383034",
      "stop": "385978",
      "transcription": "Inkjë jïsôn jy pãpã pyrakin rêjãri",
      "translation": "Graças a mim, todos eles ficaram bem (de novo), eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 132,
      "start": "386868",
      "stop": "387965",
      "transcription": "ja hamã",
      "translation": "Por isso,",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 133,
      "start": "389900",
      "stop": "394106",
      "transcription": "Ja hamã jy/ jy/ jyranswakin rêjãri inkjë",
      "translation": "por isso eu fiquei feliz, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 134,
      "start": "394538",
      "stop": "395941",
      "transcription": "Pyrakirã mã rêjãri",
      "translation": "Porque eles ficaram bem (de novo), eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 135,
      "start": "396509",
      "stop": "399458",
      "transcription": "Ja hamã rênpari intomãpãã inkjë hë, kuupêri rêjãri",
      "translation": "Por isso eu aprendi a ser pajé, Kuupêri, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 136,
      "start": "399788",
      "stop": "400334",
      "transcription": "Haa.",
      "translation": "Sim.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 137,
      "start": "407349",
      "stop": "411691",
      "transcription": "Prëë/ pjãn ho rawajãrïn sõpâri, hmm.",
      "translation": "Quem que faz feticeiro, hmm...",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 138,
      "start": "413549",
      "stop": "415228",
      "transcription": "kjãnkrâa hë",
      "translation": "os kayapô",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 139,
      "start": "415893",
      "stop": "417051",
      "transcription": "Kjãkrâa hë",
      "translation": "Os Kayapô",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 140,
      "start": "418328",
      "stop": "420083",
      "transcription": "[Nem] sõpâri ket (sõpâri pjo) rêjãri",
      "translation": "Não é feticeiro, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 141,
      "start": "420501",
      "stop": "422394",
      "transcription": "[só] pan rêjãri",
      "translation": "aquele que... eu digo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 142,
      "start": "422937",
      "stop": "424508",
      "transcription": "Tessi rõpun",
      "translation": "Embrulhar espinha de peixe",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 143,
      "start": "425553",
      "stop": "428272",
      "transcription": "Ja, hakwykkâ sapun",
      "translation": "Embrulhar casca de jaboti",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 144,
      "start": "429064",
      "stop": "431850",
      "transcription": "Tititikâ rõtorïn",
      "translation": "Embrulhar a casca de tatu",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 145,
      "start": "432390",
      "stop": "434227",
      "transcription": "[Nem] sõpârinpe ket (sõpârinpe pjo) rêjãri",
      "translation": "Não é feticeiro verdadeiro, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 146,
      "start": "434430",
      "stop": "435400",
      "transcription": "pâritu",
      "translation": "verdura (aquelas coisas que crescem dentro da terra, tipo batata)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 147,
      "start": "435986",
      "stop": "438017",
      "transcription": "mãmãnpên rõton tõ rêjãri",
      "translation": "então, eles embrulham também, eu digo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 148,
      "start": "438312",
      "stop": "439179",
      "transcription": "kjê pâritu",
      "translation": "ele (kayapô) arrala verdura",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 149,
      "start": "439383",
      "stop": "441724",
      "transcription": "Pjãrãhê? Rakâtï jahê",
      "translation": "Porqué? Para eles ficarem adormecidos (para eles não sentirem nada)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 150,
      "start": "443190",
      "stop": "445042",
      "transcription": "Pãpã rakâtï jahê më",
      "translation": "Para todos ficarem sentindo nada,",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 151,
      "start": "445055",
      "stop": "446637",
      "transcription": "sôn rajõta hê rêjãri",
      "translation": "por causa disso, para eles ficarem dormindo, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 152,
      "start": "446779",
      "stop": "448468",
      "transcription": "ja hamã [nem] sõpârinpe",
      "translation": "Por isso, não feticeiro verdadeiro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 153,
      "start": "449627",
      "stop": "452699",
      "transcription": "Panãrajõ nko sõpârinpe",
      "translation": "Só o feticeiro dos Panãra é verdadeiro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 154,
      "start": "452982",
      "stop": "454094",
      "transcription": "Panãrajõ",
      "translation": "Aquele dos Panãra",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 155,
      "start": "454504",
      "stop": "456176",
      "transcription": "Nãnsi katisapun",
      "translation": "Assim que embrulhar",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 156,
      "start": "456836",
      "stop": "458525",
      "transcription": "parãmã",
      "translation": "naquilo...",
      "notes": "(está pensando)",
      "words": [
        ""
      ]
    },
    {
      "id": 157,
      "start": "459897",
      "stop": "463242",
      "transcription": "hmm pa rãmã ka... mõsypjuu hamã",
      "translation": "Naquilo... na casca de milho",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 158,
      "start": "463329",
      "stop": "466019",
      "transcription": "Kati sapun, katirãnprân py ho.",
      "translation": "Ele vai embrulhar, ele vai emvermelhar com urucum.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 159,
      "start": "466468",
      "stop": "468141",
      "transcription": "Panãranpe jõ rêjãri",
      "translation": "Aquele dos Panãra verdadeiros, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 160,
      "start": "468141",
      "stop": "471572",
      "transcription": "[Ngwa] kjãnkrâa jõ [só] tessi më (kjãnkrâa jõ, tessi më)",
      "translation": "Aquele dos Kayapô é só espinha de peixe.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 161,
      "start": "472371",
      "stop": "475277",
      "transcription": "Pâriharê më, [sabão] më",
      "translation": "e raíz (de árvore), e sabão.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 162,
      "start": "475736",
      "stop": "479641",
      "transcription": "Ja sota torã mã rêjãri, kjãnkjrâa hë rêjãri, ja hamã rêjãri",
      "translation": "Nessas coisas, eu digo, que os Kayapô embrulham, eu digo, por isso eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 163,
      "start": "480141",
      "stop": "482184",
      "transcription": "Ja rênpari inkjë hë rêjãri",
      "translation": "Isso que eu sei, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 164,
      "start": "487029",
      "stop": "488684",
      "transcription": "[Aí] mãmãnpên",
      "translation": "Então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 165,
      "start": "488813",
      "stop": "492287",
      "transcription": "sõpâri mãmãn wajã, rahoraparïn",
      "translation": "Aquele que faz feticeiro, eles matam com isso (o feticeiro).",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 166,
      "start": "493499",
      "stop": "495732",
      "transcription": "Rapari pan hë tititi hë",
      "translation": "Aqueles matam, o tatu canastra",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 167,
      "start": "496816",
      "stop": "498169",
      "transcription": "sõpâri hë",
      "translation": "do feticeiro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 168,
      "start": "498733",
      "stop": "501518",
      "transcription": "[sabão] hë, rahorapa",
      "translation": "Com o sabão, eles matam eles",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 169,
      "start": "502011",
      "stop": "503873",
      "transcription": "krekjã më sïrãnkô",
      "translation": "Fica cansado, e com diarrhea.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 170,
      "start": "505119",
      "stop": "507007",
      "transcription": "[Agora] tessi",
      "translation": "Espinha de peixe",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 171,
      "start": "507882",
      "stop": "510649",
      "transcription": "Rapêsara hê jãhã, sõkrepi rï",
      "translation": "Para engasgar aqui na garganta.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 172,
      "start": "511092",
      "stop": "512928",
      "transcription": "Inkjân ratytõ hahê",
      "translation": "Para eles morrer também.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 173,
      "start": "513203",
      "stop": "516014",
      "transcription": "nãnpân, ja nãnpân",
      "translation": "Arara, este arara.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 174,
      "start": "516886",
      "stop": "519680",
      "transcription": "mãmãn rõkwy nãnpân, [arara]",
      "translation": "Aquele que voa, arara.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 175,
      "start": "519818",
      "stop": "521214",
      "transcription": "inkwyn",
      "translation": "pêlo (do arara)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 176,
      "start": "521576",
      "stop": "523344",
      "transcription": "Rãntê rasapun",
      "translation": "Tira, embrulha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 177,
      "start": "524212",
      "stop": "527023",
      "transcription": "mãmãnpên rajõjï tõ hahê",
      "translation": "então para eles vomitar também",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 178,
      "start": "527384",
      "stop": "530651",
      "transcription": "Ja hamã wajã soti, sotãnka rêjãri sõpâri",
      "translation": "Com isso que os parente indígenas fazem as coisas de feticeiro.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 179,
      "start": "531537",
      "stop": "533261",
      "transcription": "Ja rakãnsün rêjãri",
      "translation": "Isso que eu conto para você.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 180,
      "start": "538059",
      "stop": "541291",
      "transcription": "Rênpari tõ swankjara jõntomãpãã rêjãri",
      "translation": "Eu aprendi também o shamanismo dos antepassados, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 181,
      "start": "541946",
      "stop": "544187",
      "transcription": "Swankjara jõntomãpãã",
      "translation": "O shamanismo dos antepassados.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 182,
      "start": "546066",
      "stop": "549833",
      "transcription": "Sõntomãpããnpe rêjãri, swankjarajõ",
      "translation": "É shamanismo verdadeiro, eu digo, aquele dos antepassados.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 183,
      "start": "550585",
      "stop": "552458",
      "transcription": "[Aí] mãmãnpên",
      "translation": "Então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 184,
      "start": "554685",
      "stop": "556539",
      "transcription": "Ti/ tirõwan rêjãri",
      "translation": "Ele matou, eles dissem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 185,
      "start": "557046",
      "stop": "558413",
      "transcription": "pan... tititi",
      "translation": "Aquele... tatu canastra",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 186,
      "start": "559222",
      "stop": "560368",
      "transcription": "Tirõwan",
      "translation": "Ele matou",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 187,
      "start": "560968",
      "stop": "562856",
      "transcription": "Tirãnswâri kâjân ho rêjãri",
      "translation": "Ele flechou com a flecha",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 188,
      "start": "563765",
      "stop": "565648",
      "transcription": "mãmãnpên jy too rêjãri",
      "translation": "Então ele foi em bora, eles dissem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 189,
      "start": "566627",
      "stop": "569901",
      "transcription": "Tipari/ tipari ippë më kjãnkrâa ",
      "translation": "Ele matava, o não indígena e o kayapô",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 190,
      "start": "571373",
      "stop": "573498",
      "transcription": "Mãmãnpên jy pypôô",
      "translation": "Então ele voltou",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 191,
      "start": "574591",
      "stop": "576725",
      "transcription": "Tijõsanpankjân intomãpãã hë",
      "translation": "Ele se cuidou, o pajé",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 192,
      "start": "577753",
      "stop": "580049",
      "transcription": "Mãmãnpên rêrasari kukre sân rêjãri",
      "translation": "Então eles foram avisar em todas as casas, eles dissem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 193,
      "start": "580313",
      "stop": "582609",
      "transcription": "Japôô, mãmãnpên katirêsapjõri rêjãri",
      "translation": "Assim que chegar, vocês vão segurar ele",
      "notes": "Segurar ele para ele não escapar",
      "words": [
        ""
      ]
    },
    {
      "id": 194,
      "start": "583601",
      "stop": "585372",
      "transcription": "Rapa puusââ",
      "translation": "Eles andam em cada roça",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 195,
      "start": "585504",
      "stop": "586584",
      "transcription": "Mãra kre",
      "translation": "Aquele buraco",
      "notes": "Esse pedaço não faz sentido com o resto da história aqui",
      "words": [
        ""
      ]
    },
    {
      "id": 196,
      "start": "587778",
      "stop": "589513",
      "transcription": "Mãmãnpên rêpjâri intomãpãã hë",
      "translation": "Então eles cubriram, os pajés",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 197,
      "start": "589513",
      "stop": "591042",
      "transcription": "Pykwyy intomãpãã rêjãri",
      "translation": "os pajés estão voltando (para casa) eles disseram",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 198,
      "start": "592065",
      "stop": "595150",
      "transcription": "Mãmãnpên jy surapôô jakwa, mãmãnpên pyrapêtoo",
      "translation": "Então quase que eles chegaram atrás dele (o pajé), mas ele foi em bora deles.",
      "notes": "Algumas pessoas foram atrás do pajé para segurar ele, mas não conseguiram. Aí o pajé foi em bora de nova para o mato.",
      "words": [
        ""
      ]
    },
    {
      "id": 199,
      "start": "595691",
      "stop": "597261",
      "transcription": "jy pyrapêtoo",
      "translation": "Ele foi em bora deles de novo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 200,
      "start": "597261",
      "stop": "601014",
      "transcription": "jypysõti, jypysõti, jypysõti, ja hamã jypypôô rêjãri [nãhã]",
      "translation": "dormeu, dormeu, dormeu, e no quarto dia ele voltou de novo, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 201,
      "start": "602114",
      "stop": "603719",
      "transcription": "Mãmãnpên jypypôô",
      "translation": "Então ele voltou.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 202,
      "start": "604247",
      "stop": "606081",
      "transcription": "Mïpanmã pïntorinpe, mãmãnpên",
      "translation": "\"Vamos esconder bem dele\" então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 203,
      "start": "606164",
      "stop": "607356",
      "transcription": "rênpân rêjãri [nãhã]",
      "translation": "Eles pegaram ele, eu digo, está bom.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 204,
      "start": "608441",
      "stop": "609925",
      "transcription": "Rênpân jyrahopôô kri tã",
      "translation": "Eles pegaram ele, e trousseram para a aldeia.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 205,
      "start": "610015",
      "stop": "611822",
      "transcription": "mãmãnpên rêhontonkjo pan ho",
      "translation": "então eles massagearam os olhos (do pajé que eles pegaram) com aquele",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 206,
      "start": "612883",
      "stop": "614108",
      "transcription": "pysy",
      "translation": "com semente de urucum.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 207,
      "start": "614865",
      "stop": "616188",
      "transcription": "py ho, pysy ho",
      "translation": "com urucum, com semente de urucum",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 208,
      "start": "616832",
      "stop": "618397",
      "transcription": "rêpyhontonkjo ",
      "translation": "eles massagearam os olhos dele de novo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 209,
      "start": "619448",
      "stop": "620883",
      "transcription": "jypyntokin",
      "translation": "ele voltou a ver bem de novo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 210,
      "start": "621511",
      "stop": "623453",
      "transcription": "mãmãnpên",
      "translation": "então",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 211,
      "start": "623585",
      "stop": "624953",
      "transcription": "Rêsanpân [tisanpân]",
      "translation": "Ele (pajé) pegou muitos feticeiros",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 212,
      "start": "625121",
      "stop": "626403",
      "transcription": "panãrajõ sõpâri",
      "translation": "Feticeiro dos Panãra",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 213,
      "start": "626944",
      "stop": "628177",
      "transcription": "mãmãn intomãpãã hë",
      "translation": "Aquele pajé",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 214,
      "start": "629011",
      "stop": "630638",
      "transcription": "Rapêsapân [Tirapêsanpân]",
      "translation": "Ele pegou muitos feticeiros deles.",
      "notes": "O pajé tira os feticeiros das pessaos, e elas ficam com vergonha porque aí tudo mundo vê que aquela pessoa tinha sõpâri.",
      "words": [
        ""
      ]
    },
    {
      "id": 215,
      "start": "632306",
      "stop": "635185",
      "transcription": "Sapyraty sõpâri/ sõ/ sõpâri japê rêjãri",
      "translation": "Eles morreram por causa dos feticeiros (que o pajé tirou), eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 216,
      "start": "636094",
      "stop": "637753",
      "transcription": "[Aí] mãmãnpên jyty [jyraty]",
      "translation": "Então eles morreram",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 217,
      "start": "639027",
      "stop": "640547",
      "transcription": "Rêpêwatoo [tipêwatoo] sõpâri",
      "translation": "Ele tirou os feticeiros dele",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 218,
      "start": "640597",
      "stop": "642392",
      "transcription": "kan pên më suty pên",
      "translation": "do cesto, do tapete",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 219,
      "start": "642392",
      "stop": "643706",
      "transcription": "sutykjã pên rêjãri",
      "translation": "dem baixo da cabeça do tapete",
      "notes": "em baixo do lado aonde o pessoal coloca a cabeça no tapete",
      "words": [
        ""
      ]
    },
    {
      "id": 220,
      "start": "644656",
      "stop": "646020",
      "transcription": "Mãmãnpên pãpãã",
      "translation": "Então tudo o mundo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 221,
      "start": "646713",
      "stop": "649058",
      "transcription": "Jysapyty [jysapyraty] sõpâri japê rêjãri",
      "translation": "Eles morreram por causa do feticeiro (que o pajé tirou deles), eu digo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 222,
      "start": "649643",
      "stop": "651706",
      "transcription": "Intomãpãã Pakkjati mãja rêjãri",
      "translation": "Esse era o primeiro pajé, eu digo",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 223,
      "start": "651718",
      "stop": "652781",
      "transcription": "Panãranpe jõ",
      "translation": "dos Panãra verdadeiros",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 224,
      "start": "653827",
      "stop": "657159",
      "transcription": "Sâ pytinsi panãranpejõ sõpâri rêjãri, sâ.",
      "translation": "Doi muito mesmo o feticeiro dos verdadeiros panãra, eu digo. Doi muito.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 225,
      "start": "658054",
      "stop": "660592",
      "transcription": "Nãn/ nãnkjo rêjãri panãrajõ rêjãri",
      "translation": "É quente, eu digo, aquele dos Panãra, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 226,
      "start": "660972",
      "stop": "662241",
      "transcription": "panãrajõ hë",
      "translation": "Aquele dos Panãra.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 227,
      "start": "663770",
      "stop": "666439",
      "transcription": "tarãnkjo hakwa, taaty.",
      "translation": "Se ele mesmo começa a ficar doente, ele mesmo morre.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 228,
      "start": "666439",
      "stop": "669143",
      "transcription": "Mãmãramã taaty rêjãri, panãrajõpâri rêjãri",
      "translation": "Por isso que ele mesmo morre, do feticeiro dos Panãra, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 229,
      "start": "670022",
      "stop": "673120",
      "transcription": "Mãja sunpa pytinsi rakãnsün rêjãri kamã",
      "translation": "Isso da muito medo, isso que conto para você, eu digo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 230,
      "start": "675538",
      "stop": "676524",
      "transcription": "Hankjon tõ?",
      "translation": "Nenhum outro?",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 231,
      "start": "677761",
      "stop": "678331",
      "transcription": "Haa.",
      "translation": "Sim.",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Kj\u00e4r\u00e4s\u00e2 h\u00eb tim\u00e4s\u00f6n s\u00e2ti",
    "speakers": "Sykj\u00e4",
    "linguists": "Myriam Lapierre, Sunkulp Ananthanarayan, Jessamine Jeter",
    "Indigenous researcher": "Tepakriti (recording technician), Pukkjora (transcription and translation), Zebra Kayapo (transcription and translation), S\u00f4p\u00f4ha (review)",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 1,
      "start": 23.297626375787743,
      "stop": 27962.18094033886,
      "transcription": "jap\u00ean katihas\u00fc inkj\u00eb h\u00eb pan h\u00e4 kja",
      "translation": "eu vou contar uma hist\u00f3ria",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": 28.63209037248184,
      "stop": 31683.900007799864,
      "transcription": "kj\u00e4r\u00e4s\u00e2 h\u00e4, kj\u00e4r\u00e4s\u00e2, r\u00ebj\u00e4\u00e4",
      "translation": "\u00e9 do cutia, cutia",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": 32.27937505859362,
      "stop": 38779.97769642551,
      "transcription": "pakkjap\u00ean [pu] puu wy ham\u00e4 ti sokre kj\u00e4r\u00e4s\u00e2 h\u00eb",
      "translation": "no in\u00edcio a cutia estava plantando na ro\u00e7a grande",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": 38.779977696425505,
      "stop": 47283.7488422824,
      "transcription": "wy, wy pytinsi n\u00ebj\u00e2 wy ta m\u00ffr\u00ef h\u00eb, ta m\u00ffr\u00ef h\u00eb kri, ta m\u00ffr\u00ef h\u00eb krintw\u00ea tij\u00e4\u00e4ri",
      "translation": "grande, muito grande, t\u00e3o grande como aldeia nova (N\u00e4ns\u00eapotitintw\u00ea)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": 47.2837488422824,
      "stop": 50558.86162164808,
      "transcription": "s\u00f6 puu h\u00eb wy pytinsi tij\u00e4\u00e4",
      "translation": "dizque a ro\u00e7a dele era muito grande",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": 50.55886162164808,
      "stop": 53609.632742429436,
      "transcription": "m\u00e4m\u00e4np\u00ean",
      "translation": "a\u00ed",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": 54.4223196656349,
      "stop": 55207.83620050704,
      "transcription": "(tira)",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": 55.20783620050704,
      "stop": 59883.013921849495,
      "transcription": "(ti wa) ti hohakanpe tij\u00e4\u00e4ri m\u00e4m\u00e4n h\u00eb (kj\u00e4r\u00e4s-) kj\u00e4r\u00e4s\u00e2 h\u00eb s\u00e2ti hah\u00ea",
      "translation": "o cutia estava dan\u00e7ando at\u00e9 o amanhecer para colher amendoim",
      "notes": "tiwakaanpe = amanhecer (n\u00e3o sei escrever)",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": 61.1217631222443,
      "stop": 64160.89950888754,
      "transcription": "m\u00e4m\u00e4nn\u00ef ti hohakanpe jy rasupp\u00f4\u00f4",
      "translation": "foi ali, o cutia veio para pessoa ao amanhecer",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": 64.16089950888754,
      "stop": 68080.35615012886,
      "transcription": "m\u00e4ja p\u00ean ka r\u00ea k\u00e4n s\u00ea hohaka inkj\u00eb h\u00eb s\u00e2ti hah\u00ea tij\u00e4\u00e4",
      "translation": "eu vou tentar cantar para voc\u00eas at\u00e9 o amanhecer para colher amendoim, ele disse",
      "notes": "kan = tipo de too/inkree/canto",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": 69.59894471071814,
      "stop": 72394.4303268759,
      "transcription": "p\u00ean ti hohaka tij\u00e4\u00e4 too ho",
      "translation": "dizque a\u00ed ele cantou at\u00e9 o amanhecer",
      "notes": "haka = dia, tihohaka = amanhecer",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": 72.39443032687589,
      "stop": 75350.75260741025,
      "transcription": "s\u00ea too m\u00e4m\u00e4np\u00ean",
      "translation": "ele cantou, a\u00ed...",
      "notes": "s\u00ea hortative? but says it's bc dad's saying it",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": 75.35075260741024,
      "stop": 77214.47617084041,
      "transcription": "ti ho hakanpe",
      "translation": "amanheceu",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": 79.70935130480446,
      "stop": 80428.98238625031,
      "transcription": "p\u00ean",
      "translation": "a\u00ed",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": 82.6616752384851,
      "stop": 86681.23623394845,
      "transcription": "(eh), tiraa san ",
      "translation": "(o cutia) avisou",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": 86.68123623394845,
      "stop": 90690.31571966225,
      "transcription": "tiraa san tij\u00e4\u00e4ri, kukre s\u00e2\u00e2",
      "translation": "dizque avisou para cada casa",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": 92.01002498838926,
      "stop": 103386.85181864235,
      "transcription": "m\u00e4ja p\u00ean, ja p\u00ean kati r\u00ea j\u00ef su hamm\u00f6 kam\u00ebra s\u00e2ti suu, ka r\u00ea j\u00ef sakj\u00e2rah\u00ea tij\u00e4\u00e4, ka r\u00ea j\u00ef sakj\u00e2rah\u00ea",
      "translation": "\"\"a\u00ed, voc\u00eas mesmos v\u00e3o buscar amendoim, para voc\u00eas mesmos tirarem, para voc\u00eas mesmos tirarem\"\", disse",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": 103.38685181864234,
      "stop": 114370.19108860537,
      "transcription": "\"\"jy t\u00e4 r\u00e4nswanka inkj\u00eb\"\" tij\u00e4\u00e4. m\u00e4m\u00e4np\u00ean jy su ramm\u00f6ri tij\u00e4\u00e4 s\u00e2ti suu p\u00e4p\u00e4\u00e4 pytinsi, inpyhara m\u00eb inkjara m\u00eb p\u00ffn jy s\u00f4n suramm\u00f6ri",
      "translation": "\"\"j\u00e1 estou cansado\"\" ele disse. dal\u00ed todos foram para amendoim, todinho, homens e mulheres como grupo foram para a comida",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": 114.37019108860537,
      "stop": 118536.03236947759,
      "transcription": "p\u00ean jy su rap\u00f4\u00f4 s\u00f6 puu t\u00e4",
      "translation": "al\u00ed chegaram na ro\u00e7a dele",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": 118.53603236947758,
      "stop": 121679.0120366228,
      "transcription": "m\u00e4m\u00e4np\u00ean, (r\u00ea) r\u00ea sakj\u00e2ri s\u00e2ti",
      "translation": "al\u00ed, colheram amendoim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": 121.6790120366228,
      "stop": 127613.6469734448,
      "transcription": "kjar\u00e2n pyhara m\u00eb p\u00ffn ho rak\u00e2\u00e2, r\u00eaj\u00e4\u00e4ri. s\u00e2ti pimm\u00e4 ho rak\u00e2\u00e2",
      "translation": "mulheres e homens como grupo gritaram, \u00e9 assim. continuaram gritando de amendoim",
      "notes": "ho is used for the peanuts! they were yelling of the peanuts!",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": 128.01841667276014,
      "stop": 132170.93109182845,
      "transcription": "m\u00e4m\u00e4n pimm\u00e4 raswap\u00ean s\u00e2ti rak\u00e2\u00e2 ja",
      "translation": "al\u00ed mesmo, gritaram de amendoim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": 132.52182724533424,
      "stop": 135761.22331047128,
      "transcription": "m\u00e4m\u00e4np\u00ean p\u00e4p\u00e4\u00e4 su rap\u00f4\u00f4 p\u00ean r\u00ea sakj\u00e2ri",
      "translation": "al\u00ed chegaram todo mundo e colheram",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": 136.14920858773237,
      "stop": 140578.91964995838,
      "transcription": "r\u00ea sakj\u00e2ri s\u00f4nkj\u00eappytinsi",
      "translation": "colheram bastante amendoim",
      "notes": "meant to say s\u00f4nkj\u00eappyntinsi, saying s\u00f4ti instead",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": 140.57891964995838,
      "stop": 141830.86450414875,
      "transcription": "s\u00e2ti ho tij\u00e4\u00e4",
      "translation": "foi assim, amendoim",
      "notes": "falou r\u00eaj\u00e4\u00e4",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": 141.83086450414874,
      "stop": 144676.25740957068,
      "transcription": "puu wy pytinsi tij\u00e4\u00e4ri m\u00e4m\u00e4n s\u00e2ti tij\u00e4\u00e4ri",
      "translation": "foi assim, na ro\u00e7a muito grande assim",
      "notes": "first r\u00eaj\u00e4\u00e4 is dizque, second is \"\"this big\"\"",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": 145.5554149026252,
      "stop": 147300.53533877514,
      "transcription": "m\u00e4n r\u00ea sakj\u00e2ri r\u00ea j\u00e4\u00e4ri",
      "translation": "pegaram metade, assim foi, metade",
      "notes": "n\u00e3o tudo, o resto/a sobra quedou tras",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": 147.30053533877515,
      "stop": 151465.82213568751,
      "transcription": "m\u00e4n kw\u00e2ra pj\u00e2ra kr\u00ef",
      "translation": "deixaram o resto",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": 151.46582213568752,
      "stop": 161241.67212873237,
      "transcription": "kw\u00e2ra pj\u00e2ra r\u00eant\u00ebn wy pytinsi r\u00eaj\u00e4\u00e4 puu wy ham\u00e4 tisir\u00ef kj\u00e4r\u00e4ns\u00e2 h\u00eb s\u00e2p\u00ean t\u00e2ppytinsi kj\u00e4r\u00e4ns\u00e2 r\u00eaj\u00e4\u00e4ri",
      "translation": "deixaram o resto e tiraram muito, foi assim, o cutia muito trabalhador derrubou a ro\u00e7a grande dele",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": 161.24167212873238,
      "stop": 176123.728763232,
      "transcription": "p\u00e4p\u00e4\u00e4 r\u00ea sakj\u00e2ri p\u00ean tiraj\u00e4\u00e4ri, tiraj\u00e4\u00e4ri kj\u00e4r\u00e4ns\u00e2 h\u00eb, kati r\u00ea rap\u00eb\u00ebnpari h\u00e4, ja p\u00ean kati r\u00ea pja ho ha pan, ja p\u00ean kati r\u00ea pja j\u00ef\u00ef kren",
      "translation": "\"\"depois de tirarem tudo o amendoim\"\", ele disse, disse o cutia, \"\"nessa hora que voc\u00eas me v\u00e3o escutar, a\u00ed \u00e9 de voc\u00eas para fazer, a\u00ed voc\u00eas mesmos v\u00e3o plantar\"\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": 176.123728763232,
      "stop": 180626.72947089406,
      "transcription": "jy t\u00e4ranswanka inkj\u00eb hate ho rapa ham\u00e4, tij\u00e4\u00e4.",
      "translation": "\"\"eu j\u00e1 estou cansado por fazer isso sozinho\"\", ele disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": 180.62672947089405,
      "stop": 187984.20477358092,
      "transcription": "jy t\u00e4ran swanka [ka]...kati ta pja kati r\u00ea pja j\u00ef\u00ef kren kjapj\u00e2 hapj\u00e2ran",
      "translation": "\"\"eu t\u00f4 cansado. agora \u00e9 para voc\u00eas plantar para o seus filhos\"\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": 187.98420477358093,
      "stop": 190792.78952320342,
      "transcription": "kati r\u00ea pja ho hapan",
      "translation": "\"\"fique com essa\"\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": 190.79278952320342,
      "stop": 202088.86293170025,
      "transcription": "\"\"ka r\u00ea ha t\u00e4 t\u00fcn ha t\u00e4t\u00fcn r\u00ea t\u00e4 k\u00e2np\u00e2n s\u00e4\"\" tij\u00e4\u00e4. \"\"ka r\u00ea t\u00f6 kuri s\u00e4 ikk\u00f4n. ka r\u00ea t\u00e4 sanpyn kw\u00e2ri s\u00e4 ikk\u00f4n janpy\"\"",
      "translation": "\"\"voc\u00eas n\u00e3o comam de qualquer jeito...\"\" disse ele, \"\"voc\u00eas n\u00e3o comam macaco prego. n\u00e3o mexam com o rabo de macaco prego\"\"",
      "notes": "don't grab a capuchim monkey's tail (n\u00e3o podem pegar also given as translation)",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": 202.08886293170025,
      "stop": 207736.0763849841,
      "transcription": "pj\u00e2 kwa parin ikk\u00f4n sypys\u00e2 h\u00eb",
      "translation": "\"\"(sen\u00e3o, amendoim) vai se morrer com o cheiro do macaco\"\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": 208.62301777140695,
      "stop": 209498.42227064652,
      "transcription": "kar\u00ea...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": 209.49842227064653,
      "stop": 212772.90676379026,
      "transcription": "kar\u00ea t\u00e4 r\u00e4npjuu kw\u00e2 t\u00f6 r\u00f6 hah\u00ea pjo s\u00f6 jopy",
      "translation": "\"\"tambem n\u00e3o pode mexer com o sangue dos animais\"\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": 213.4000076625997,
      "stop": 215490.7057028024,
      "transcription": "\"\"pj\u00e2 kwa p\u00e4p\u00e4\u00e4 tyn\"\" tij\u00e4\u00e4",
      "translation": "\"\"sen\u00e3o, v\u00e3o morrer tudos\"\", disse.",
      "notes": "\"\"you will find that everyone will die\"\"",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": 217.56309242224876,
      "stop": 218754.681978841,
      "transcription": "kar\u00ea...",
      "translation": "",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": 218.75468197884098,
      "stop": 223477.2015522074,
      "transcription": "ka r\u00ea t\u00e4 kuri s\u00e4 sanpy s\u00f4\u00f4p\u00f4ha",
      "translation": "n\u00e3o comam matrinx\u00e3",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 41,
      "start": 223.47720155220742,
      "stop": 226759.97079450457,
      "transcription": "\"\"pj\u00e2 kwa kj\u00e4 k\u00e2npo\"\" tij\u00e4\u00e4, \"\"k\u00e2npo\"\"",
      "translation": "(se come matrinx\u00e3) \"\"v\u00e3o achar casca vazia,\"\" disse. \"\"Vazia (sem semente)\"\"",
      "notes": "k\u00e2npo - murcha (por isso est\u00e1 vazia)",
      "words": [
        ""
      ]
    },
    {
      "id": 42,
      "start": 227.5378309394977,
      "stop": 230842.22841914181,
      "transcription": "ka r\u00ea t\u00e4 kuri t\u00f6 r\u00f6 hah\u00ea pjo pan t\u00f4r\u00efnsi",
      "translation": "voc\u00eas tambem n\u00e3o podem comer tatu",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 43,
      "start": 231.6888520598384,
      "stop": 234561.22584073045,
      "transcription": "pj\u00e2 kwa p\u00e4p\u00e4\u00e4 kj\u00e4 k\u00e2npo t\u00f6",
      "translation": "(sen\u00e3o) tambem v\u00e3o achar casca vazia",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 44,
      "start": 234.56122584073046,
      "stop": 243947.18323189276,
      "transcription": "\"\"pj\u00e2 (kwa) kwa sara sy p\u00ffn (s\u00f4) s\u00f4s\u00f4ti t\u00e4\"\" tij\u00e4\u00e4. \"\"sy p\u00ffn\"\" tij\u00e4\u00e4",
      "translation": "\"\"(sen\u00e3o) s\u00f3 ficar\u00e1 poucos sementes (do amendoim)\"\", disse. \"\"poucos sementes\"\" disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 45,
      "start": 243.94718323189275,
      "stop": 259221.7885271329,
      "transcription": "m\u00e4m\u00e4np\u00ean parinko kati r\u00ea t\u00e4 kurin (tepins) tepinsi, kwytinsi janko kati r\u00ea t\u00e4 ku s\u00efja pjapja tij\u00e4\u00e4",
      "translation": "\"\"agora s\u00f3 esse voc\u00eas podem comer: pintado e trair\u00e3o, podem comer a carne boa deles\"\" disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 46,
      "start": 259.2217885271329,
      "stop": 275691.67531472986,
      "transcription": "\"\"ka r\u00ea r\u00e4npr\u00ef sotankjojy t\u00f6 s\u00e4 soti: kj\u00e4po ham\u00e4kjy kati kurin ham\u00e4kjy\"\" tij\u00e4\u00e4. \"\"kreekriti m\u00e4m\u00e4np\u00ean ham\u00e4kjy kati kuri t\u00f6n\"\" tij\u00e4\u00e4",
      "translation": "\"\"esperem resfriar a comida quente. voc\u00eas podem comer beij\u00fa frio\"\" disse. \"\"comam tambem car\u00e1 s\u00f3 quando resfriar\"\", disse",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 47,
      "start": 275.6916753147299,
      "stop": 287853.9212757608,
      "transcription": "\"\"pj\u00e2 kwa n\u00e4nkjojy m\u00e4m\u00e4np\u00ean kwa p\u00e4p\u00e4\u00e4 s\u00f4titi\"\" tij\u00e4\u00e4. \"\"s\u00e2ti saa m\u00e4\"\" ja tirans\u00fcn, kj\u00e4r\u00e4s\u00e2 h\u00eb.",
      "translation": "\"\"(se vc comerem) comida quente, v\u00e3o achar todas as folhas queimadas\"\" disse. \"\"essas folhas de amendoim\"\", foi assim que o cutia explicou para eles.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 48,
      "start": 287.8539212757608,
      "stop": 293533.4398406176,
      "transcription": "\"\"ka r\u00ea t\u00e4 rann\u00efn t\u00f6 s\u00e4 h\u00e4 krepenkjara s\u00e2ti h\u00e4",
      "translation": "tambem, n\u00e3o podem namorar de outra pessoa, por causa de amendoim",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 49,
      "start": 293.5334398406176,
      "stop": 297664.5044731776,
      "transcription": "ka r\u00ea m\u00ffn ra su tota jatt\u00e4 s\u00e2ti suu",
      "translation": "\"\"se mostrarem a bunda na dire\u00e7\u00e3o da ro\u00e7a...\"\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 50,
      "start": 297.6645044731776,
      "stop": 302676.20279425546,
      "transcription": "\"\"m\u00e4m\u00e4np\u00ean...kati p\u00e4p\u00e4\u00e4 p\u00ef\u00efri\"\", tij\u00e4\u00e4. \"\"sotinkjo s\u00ea k\u00f6\u00f6\"\" tij\u00e4\u00e4",
      "translation": "\"\"assim v\u00e3o morrer todos\"\" disse. \"\"por causa da vagina da outra mulher\"\" disse.",
      "notes": "s\u00ea = vagina, but also in this case just woman",
      "words": [
        ""
      ]
    },
    {
      "id": 51,
      "start": 302.67620279425546,
      "stop": 308684.51123717986,
      "transcription": "\"\"(insip) insipj\u00e2nko kati t\u00e4 r\u00efn p\u00ffr\u00efn m\u00e4m\u00e4mp\u00eanko kati k\u00efri\"\", tij\u00e4\u00e4",
      "translation": "se voc\u00ea namorar s\u00f3 com a sua esposa, a\u00ed vai ficar bom.\"\" disse",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 52,
      "start": 308.68451123717983,
      "stop": 311764.59309291566,
      "transcription": "m\u00e4m\u00e4np\u00ean",
      "translation": "a\u00ed",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 53,
      "start": 311.7645930929157,
      "stop": 320372.21243769577,
      "transcription": "\"\"kar\u00ea j\u00efn t\u00eapo para pj\u00e4n kar\u00ea pyrah\u00ea pjo\"\" tij\u00e4\u00e4 m\u00e4m\u00e4n h\u00eb kj\u00e4r\u00e4ns\u00e2 h\u00eb. \"\"kar\u00ea p\u00e4p\u00e4\u00e4 j\u00efn t\u00eapo p\u00efra\"\" tij\u00e4\u00e4.",
      "translation": "\"\"se morrer tudo, o qu\u00ea que voc\u00eas v\u00e3o pegar de novo?\"\" disse ele, disse o cutia. \"\"quando tudo j\u00e1 morreu\"\" disse.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 54,
      "start": 320.3722124376958,
      "stop": 323557.0201103595,
      "transcription": "ja...m\u00e4m\u00e4np\u00ean",
      "translation": "a\u00ed",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 55,
      "start": 323.5570201103595,
      "stop": 327733.9136396638,
      "transcription": "kati ta m\u00e4m\u00e4n r\u00ea r\u00ea pja k\u00e4n s\u00f6ri inkj\u00eb h\u00eb ja",
      "translation": "isso mesmo (a explica\u00e7\u00e3o de ro\u00e7a) \u00e9 o que j\u00e1 entreguei para voc\u00eas",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 56,
      "start": 327.7339136396638,
      "stop": 342757.9207542543,
      "transcription": "\"\"r\u00ea pja k\u00e4n s\u00f6ri, r\u00ea pja j\u00ef ho happajah\u00ea jutt\u00e4 [kar\u00ea] kar\u00ea haprinpe m\u00e4 happan. ja ho kati r\u00ea pja j\u00ef ho happan. r\u00ea pja j\u00ef ho happan kin kam\u00ebra. m\u00e4m\u00e4n kati r\u00ea krens\u00efn.\"\"",
      "translation": "eu entreguei esse para voc\u00eas, porque voc\u00eas ficaram tristes. com esse que voc\u00eas ficam. com esse v\u00e3o ficar de boa. \u00e9 assim que voc\u00eas v\u00e3o ficar plantando.",
      "notes": "ins\u00efn = HABIT",
      "words": [
        ""
      ]
    },
    {
      "id": 57,
      "start": 342.75792075425426,
      "stop": 348231.0568870027,
      "transcription": "\"\"(inta, inta w\u00e2 t\u00e4 ?) kati m\u00ffn m\u00e4nkoor\u00ef kypa, m\u00e4m\u00e4np\u00ean kati r\u00ea kren\"\", tij\u00e4\u00e4",
      "translation": "\"\"se chover e a terra ficar molhado, a\u00ed voc\u00eas podem plantar.\"\" disse",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 58,
      "start": 348.2310568870027,
      "stop": 351755.6449092247,
      "transcription": "tirans\u00fcn kin m\u00e4m\u00e4n h\u00eb kj\u00e4r\u00e4s\u00e2 h\u00eb s\u00e2ti.",
      "translation": "o cutia explicou bem sobre amendoim para eles.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 59,
      "start": 351.7556449092247,
      "stop": 356776.9252248505,
      "transcription": "\"\"jy t\u00e4 ranswanka inkj\u00eb koom\u00e4 (?) jy ho ratopyt\u00fcn\"\"",
      "translation": "agora estou cansado, estou velho j\u00e1, com isso",
      "notes": "ho = with all the work of explaining the rules",
      "words": [
        ""
      ]
    },
    {
      "id": 60,
      "start": 356.77692522485046,
      "stop": 360560.82003075676,
      "transcription": "\"\"jy t\u00e4 rapepeti s\u00e2p\u00ean h\u00e4\"\", tij\u00e4\u00e4",
      "translation": "\"\"eu fico fraco com esse trabalho\"\" disse",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 61,
      "start": 360.56082003075676,
      "stop": 362799.54931853275,
      "transcription": "jyrapass\u00e2",
      "translation": "t\u00f4 com dor de coluno",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 62,
      "start": 362.79954931853274,
      "stop": 371217.252492255,
      "transcription": "(tira) jy ra kj\u00e4\u00e4j\u00e4np\u00f4\u00f4 r\u00ea sokkre, pj\u00f4ntw\u00ea hat\u00e4n pjo m\u00e4 t\u00e4 raatoojah\u00ea pjo tij\u00e4\u00e4 (j\u00f6) m\u00e4m\u00e4n r\u00ea pja k\u00e4n s\u00f6ri inkj\u00eb h\u00eb s\u00e2ti ja",
      "translation": "\"\"hoje em dia, eu fico com dor de cabe\u00e7a quando planto, n\u00e3o sou mais jovem, n\u00e3o vou conseguir\"\" disse. \"\"por isso que eu dei amendoim para voc\u00eas\"\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 63,
      "start": 371.8850851138009,
      "stop": 377239.0576939084,
      "transcription": "\"\"ja m\u00e4m\u00e4n ti t\u00e4 j\u00ef pja j\u00ef ho happan\"\" tij\u00e4\u00e4. ja tis\u00fcn kj\u00e4r\u00e4ns\u00e2 h\u00eb r\u00eaj\u00e4\u00e4.",
      "translation": "o cutia falou, \"\"agora voc\u00eas v\u00e3o ficar com esse (amendoim)\"\"",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 64,
      "start": 377.2390576939084,
      "stop": 380504.9681684025,
      "transcription": "m\u00e4m\u00e4tt\u00e4 jy ho ra too kj\u00e4\u00e4su t\u00e4 ja",
      "translation": "com isso j\u00e1 terminou",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 65,
      "start": 380.5049681684025,
      "stop": 384437.0285844443,
      "transcription": "m\u00e4m\u00e4n p\u00ean r\u00ea pja p\u00ea pyri ti pjarans\u00f6ri r\u00eaj\u00e4\u00e4",
      "translation": "a\u00ed pegaram dele, e ele entregou, dizque. ",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 66,
      "start": 384.4370285844443,
      "stop": 388239.73634169775,
      "transcription": "[s\u00f3] ja ras\u00fcn inkj\u00eb m\u00e4m\u00e4, si su t\u00e4 jy ho ratoo ja ho",
      "translation": "s\u00f3 \u00e9 isso que contei, agora \u00e9 o final da hist\u00f3ria",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
},{
  "metadata": {
    "title": "Turën story",
    "speakers": "Turën",
    "linguists": "Myriam Lapierre",
    "type": "narrative"
  },
  "sentences": [
    {
      "id": 0,
      "start": "12269",
      "stop": "18333",
      "transcription": "Ja mämä rö ja, hë rö ja, ja.",
      "translation": "Essa (terra) que esta aqui (deitada), essa daqui.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 1,
      "start": "19198",
      "stop": "25162",
      "transcription": "Mün, swankja hë ti sün, ti sün ja.",
      "translation": "Lá em cima, o antigo contava, ele contava isso.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 2,
      "start": "25545",
      "stop": "29145",
      "transcription": "Kati tën ti jää, pukkwa ti jää",
      "translation": "O céu vai cair, ele dizia,",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 3,
      "start": "29145",
      "stop": "33878",
      "transcription": "pukkwa kati të, ti jää topytün hë ti jää.",
      "translation": "o céu vai cair, ele dizia, o velho dizia.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 4,
      "start": "33911",
      "stop": "37861",
      "transcription": "ti sün, rênpari inkjë hë.",
      "translation": "ele dizia, eu aprendi.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 5,
      "start": "37861",
      "stop": "43594",
      "transcription": "Topjâpjâ, topjâpjâ hë ti sün, ti/ rênparo krï.",
      "translation": "Meu avô, meu avô dizia, eu ouvia sentada.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 6,
      "start": "43661",
      "stop": "48194",
      "transcription": "ippëë paamä ti sün, topjâpjâ hë.",
      "translation": "Contava rodando, meu avô. (Contava no pëëpaa, no inkâ.)",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 7,
      "start": "48961",
      "stop": "53361",
      "transcription": "Rê sotinpari ranpappërï kin",
      "translation": "Eu aprendi e ouvia bem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 8,
      "start": "53361",
      "stop": "57361",
      "transcription": "myn ranpari kin ja, ja ti sün swankja hë.",
      "translation": "'Vem ouvir bem, isso' isso que dizia o antigo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 9,
      "start": "57495",
      "stop": "64328",
      "transcription": "Ja, kati tën ti jää ja, pukkwa",
      "translation": "Esse vai cair, ele dizia, o céu",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 10,
      "start": "64411",
      "stop": "68778",
      "transcription": "mämän pên, kati tyn ti jää sökjëntita",
      "translation": "depois vai apagar a lua, ele dizia",
      "notes": "When the moon is all gone, we say it's \"ty\"",
      "words": [
        ""
      ]
    },
    {
      "id": 11,
      "start": "69096",
      "stop": "71862",
      "transcription": "kati tyn ti jãä sökjëntita",
      "translation": "vai apagar a lua, ele dizia",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 12,
      "start": "72709",
      "stop": "77954",
      "transcription": "kati tyn, pên, kati sakôn ti jää",
      "translation": "vai apagar, e depois vai ventar, ele dizia",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 13,
      "start": "78015",
      "stop": "80278",
      "transcription": "intanpê pjâ ti jää",
      "translation": "parece uma chuva leve, ele dizia",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 14,
      "start": "80592",
      "stop": "81995",
      "transcription": "pukkwa hë",
      "translation": "o céu",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 15,
      "start": "82217",
      "stop": "87480",
      "transcription": "inkwâ pjâ ti jää ja, intanpê",
      "translation": "parece a chuva descendo, isso, ele dizia",
      "notes": "inkwâ = descer (inkwâ wêntwê, inkwâ inta, inkwâ pâri pên)",
      "words": [
        ""
      ]
    },
    {
      "id": 16,
      "start": "87592",
      "stop": "89013",
      "transcription": "kjy ti jää",
      "translation": "é frio, ele dizia",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 17,
      "start": "89282",
      "stop": "93142",
      "transcription": "kjy rê jää, ja ti sün topytun hë",
      "translation": "'eles dizia que era frio' isso que dizia o velho",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 18,
      "start": "93203",
      "stop": "99203",
      "transcription": "rênpari inkjë hë, ti sün, [ka]ti mä sün",
      "translation": "eu aprendi, ele contava, 'você vai contar para [os seus netos]'",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 19,
      "start": "99701",
      "stop": "102912",
      "transcription": "inkjëmëra ra jyypjon",
      "translation": "quando nós morrer",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 20,
      "start": "103008",
      "stop": "106376",
      "transcription": "kati mä sün ka tânpjâ mä.",
      "translation": "Você vai contar para os seus netos.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 21,
      "start": "106499",
      "stop": "110306",
      "transcription": "tinpara hê, inkjë ra ty hahä,",
      "translation": "para ele aprender, quando eu vou estar morto.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 22,
      "start": "110306",
      "stop": "112130",
      "transcription": "ti jää topytun hë",
      "translation": "O velho dizia",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 23,
      "start": "112288",
      "stop": "115727",
      "transcription": "ja ti sün topytun hë, ja.",
      "translation": "Isso que o velho contava, isso.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 24,
      "start": "115780",
      "stop": "119889",
      "transcription": "ja ra rê kän sarë, ka rê sotinpara hê",
      "translation": "isso que estou explicando para vocês, para vocês aprenderem",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 25,
      "start": "119889",
      "stop": "121238",
      "transcription": "ti jää topytun hë",
      "translation": "o velho dizia",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 26,
      "start": "121238",
      "stop": "124467",
      "transcription": "ti sün pukkwa, ti sün sökjëntita",
      "translation": "ele contava (a história do) céu, ele contava (a história da) lua",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 27,
      "start": "125880",
      "stop": "128058",
      "transcription": "jy tën nê jää ja",
      "translation": "essa (a terra) caiu, eles diziam",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 28,
      "start": "128121",
      "stop": "132144",
      "transcription": "mü pên jy tën. Rê jïn kre rê jää",
      "translation": "caiu de cima, eles cavaram buraco, eles diziam",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 29,
      "start": "132144",
      "stop": "135269",
      "transcription": "rê kre rê jää, rê kree.",
      "translation": "eles cavaram, cavaram, eles diziam.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 30,
      "start": "136168",
      "stop": "139553",
      "transcription": "ti jää mëra, ra söpää pÿrä",
      "translation": "ele disse, (this many), aqueles que tinham poucos filhos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 31,
      "start": "139827",
      "stop": "141973",
      "transcription": "jyssi rankjâ rê jää",
      "translation": "eles entraram (na terra), eles diziam",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 32,
      "start": "142532",
      "stop": "145282",
      "transcription": "jy rankjâ rê jää, kypaswapy tä.",
      "translation": "eles entraram, eles diziam, no fundo do buraco.",
      "notes": "aswapy = no fundo, kypa = buraco",
      "words": [
        ""
      ]
    },
    {
      "id": 33,
      "start": "146001",
      "stop": "149085",
      "transcription": "pên, rê jïnpjo rê jää",
      "translation": "depois eles se tamparam, eles diziam",
      "notes": "rê jïnpjo = eles se fecharam (fecharam o buraco)",
      "words": [
        ""
      ]
    },
    {
      "id": 34,
      "start": "150070",
      "stop": "154046",
      "transcription": "Tamähë kypa rö ti jää, pâri, pâri ho. [Tamahë pâri röjn, kypa hamä.]",
      "translation": "Igual (o tamanho d)esse pau (deitado) aqui no chäo.",
      "notes": "tamahë = que nem ...",
      "words": [
        ""
      ]
    },
    {
      "id": 35,
      "start": "154212",
      "stop": "157421",
      "transcription": "Ti jää rê jä saswââ rê jää, kwyypê,",
      "translation": "Ele dizia, eles colocaram neles mesmos, eles diziam, por cima,",
      "notes": "saswâri = colocar devagarzinho por unidade (placer tranquilement). kwyypê =  por cima, jä = passado",
      "words": [
        ""
      ]
    },
    {
      "id": 36,
      "start": "157808",
      "stop": "158965",
      "transcription": "kwyypê.",
      "translation": "por cima.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 37,
      "start": "159501",
      "stop": "162866",
      "transcription": "Jïn ho rankjâ rê jää, mösy,",
      "translation": "Eles entreram (na terra), eles diziam, com milho.",
      "notes": "inkjâ = entrar/peppeti (quebra fácilmente)",
      "words": [
        ""
      ]
    },
    {
      "id": 38,
      "start": "164486",
      "stop": "167590",
      "transcription": "kïnsê ho rankjâ rê jää.",
      "translation": "Eles entraram (com milho) para eles, eles diziam.",
      "notes": "kïnsê = jïnsê, (para eles), benefactive??",
      "words": [
        ""
      ]
    },
    {
      "id": 39,
      "start": "167960",
      "stop": "170960",
      "transcription": "rê jä kwâri rê jää, kre hamä.",
      "translation": "eles cagaram neles mesmos, eles diziam, no buraco (porque não tinha muito espaço).",
      "notes": "kwâri = cagar, jä = neles mesmos",
      "words": [
        ""
      ]
    },
    {
      "id": 40,
      "start": "171473",
      "stop": "174846",
      "transcription": "Sïnkjo hamä ra krï rê jää, swankjara,",
      "translation": "Eles sentaram no cheiro fedido da merda, os antigos, eles diziam.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 41,
      "start": "174846",
      "stop": "176784",
      "transcription": "rê jä kwââ rê jää.",
      "translation": "eles cagaram neles mesmos, eles diziam.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 42,
      "start": "177140",
      "stop": "182318",
      "transcription": "pên jy tën kypynpa kjä hamä ta,",
      "translation": "depois de que caiu, ele pensou na cabeça dele sózinho",
      "notes": "ta = sózinho, kypynpa = pensar",
      "words": [
        ""
      ]
    },
    {
      "id": 43,
      "start": "182846",
      "stop": "189424",
      "transcription": "tinpari, ti pykwân ti jää, ti pykwân.",
      "translation": "ele pensou, ele cavou de novo, ele dizia, ele cavou de novo.",
      "notes": "está cavando de novo porque o céu caiu",
      "words": [
        ""
      ]
    },
    {
      "id": 44,
      "start": "189671",
      "stop": "192660",
      "transcription": "Ti pykôkresyy ti jää, müttä.",
      "translation": "Ele furou de novo, ele dizia, para cima.",
      "notes": "kôkresyri = furar para fora, syri = tirar (manga da árvore)",
      "words": [
        ""
      ]
    },
    {
      "id": 45,
      "start": "193139",
      "stop": "196962",
      "transcription": "Py ha too jahê, ti järi tä, pôttä",
      "translation": "Para sair por fora, que nem essa, por fora.",
      "notes": "tã = directional, (eles estavam sentados fora no momento de gravar)",
      "words": [
        ""
      ]
    },
    {
      "id": 46,
      "start": "197597",
      "stop": "201670",
      "transcription": "jy py ra pôô ti jää, jy py ra pôô",
      "translation": "Eles chegaram, ele dizia, eles sairam de novo por fora.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 47,
      "start": "201786",
      "stop": "203650",
      "transcription": "kwâra jy py ra pôô.",
      "translation": "O resto saiu.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 48,
      "start": "204565",
      "stop": "209607",
      "transcription": "Pên, jy py raantââ rê jää.",
      "translation": "Depois, eles se multiplicaram, eles diziam.",
      "notes": "a população aumentou porque eles viviam por fora",
      "words": [
        ""
      ]
    },
    {
      "id": 49,
      "start": "210170",
      "stop": "212819",
      "transcription": "Mämä, kwâra jy ra ty rê jää",
      "translation": "Isso, o resto morreu, eles diziam.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 50,
      "start": "212819",
      "stop": "216985",
      "transcription": "ti päppää ra pïri rê jää ja hë, kypa hë.",
      "translation": "A terra matou todos, essa, eles diziam.",
      "notes": "A terra matou todos aqueles que não conseguiram entrar no buraco no inicio, aqueles que tinham muitos filhos.",
      "words": [
        ""
      ]
    },
    {
      "id": 51,
      "start": "217790",
      "stop": "219373",
      "transcription": "Haa, ti jää ti jää",
      "translation": "Sim, isso que ele dizia",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 52,
      "start": "219373",
      "stop": "222327",
      "transcription": "ti/ ja ti sün topytun hë,",
      "translation": "isso que o velho contava,",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 53,
      "start": "222327",
      "stop": "225035",
      "transcription": "topjâpjâ hë, rênpari inkjë hë.",
      "translation": "vôvô, eu aprendi.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 54,
      "start": "225957",
      "stop": "230207",
      "transcription": "Sotinpari kin tän, ranpappëri krï tän.",
      "translation": "Quando a gente aprendia bem, a gente ouvia sentados.",
      "notes": "tän = quando",
      "words": [
        ""
      ]
    },
    {
      "id": 55,
      "start": "231030",
      "stop": "233072",
      "transcription": "Näpjâ jakän",
      "translation": "Perto da mäe",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 56,
      "start": "233287",
      "stop": "235964",
      "transcription": "ti jää, rênpari inkjë hë ja,",
      "translation": "ele dizia, eu aprendi isso,",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 57,
      "start": "236060",
      "stop": "237685",
      "transcription": "swankja pëë",
      "translation": "a fala dos antigos",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 58,
      "start": "238387",
      "stop": "242273",
      "transcription": "rê sokunpari, rênpaa.",
      "translation": "eu aprendi algumas histórias, eu aprendi.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 59,
      "start": "242675",
      "stop": "247428",
      "transcription": "Pên kypy paa pên, ja sökjëntita, mämä. ",
      "translation": "Depois, ela ficava, essa, a lua.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 60,
      "start": "248030",
      "stop": "252718",
      "transcription": "Kypy paa pên rê sün tö mämä, kypa mä,",
      "translation": "Ela ficava, depois eles contavam isso também, ela ficava na terra.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 61,
      "start": "252829",
      "stop": "254764",
      "transcription": "paa pên nê jää.",
      "translation": "Andava, eles diziam.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 62,
      "start": "255583",
      "stop": "259999",
      "transcription": "Söswâri rê jää mära, sökjëntita.",
      "translation": "A lua pedia, eles diziam, essa.",
      "notes": "söswâri = pedir, kjâri = perguntar",
      "words": [
        ""
      ]
    },
    {
      "id": 63,
      "start": "260187",
      "stop": "264875",
      "transcription": "Kwyynkoo sân nê jää, söswââ nê jää, hê.",
      "translation": "Ela pedia kjäpo, eles diziam, ela pedia, eles diziam.",
      "notes": "Kwyynkoo = kjäpo (mesma coisa)",
      "words": [
        ""
      ]
    },
    {
      "id": 64,
      "start": "265027",
      "stop": "268209",
      "transcription": "Rê mä kuupôn, kwarê mä kuupôn hä.",
      "translation": "Vocês vão cortar para ela, vocês vão cortar para ela, tá?",
      "notes": "kuupôn = cortar, rê = 2 pl. order, hä = order",
      "words": [
        ""
      ]
    },
    {
      "id": 65,
      "start": "269244",
      "stop": "274920",
      "transcription": "Söswâri hïn, söswâro sitâti hïn, rê mä kuupôn nê jää.",
      "translation": "Só pede, não para de pedir. Vocês vão cortar para ela, eles diziam.",
      "notes": "söswâro sitâti = não para de pedir, toda hora",
      "words": [
        ""
      ]
    },
    {
      "id": 66,
      "start": "275081",
      "stop": "277990",
      "transcription": "Rê summën, nê jää. Rê summën!",
      "translation": "Eles jogaram nela, eles diziam. Eles jogaram nela.",
      "notes": "Eles jogaram sökjëntita suu",
      "words": [
        ""
      ]
    },
    {
      "id": 67,
      "start": "278027",
      "stop": "281365",
      "transcription": "Rê hotiti ti jää, tu rï, kjäpo ho.",
      "translation": "Eles queimaram ela, ele dizia, na barriga, com o kjäpo.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 68,
      "start": "282411",
      "stop": "287905",
      "transcription": "Ti jïn wajära pôhakwa, ti tu kâräsôn nê jää, mämä tu hakjä.",
      "translation": "Ela se mexeu rápido (para jogar o kjäpo), mas não conseguiu. Saiu o couro da barriga dela (da quimada), eles diziam. Por isso a barriga dela é preta.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 69,
      "start": "288368",
      "stop": "290264",
      "transcription": "Mämä tu kjori,",
      "translation": "Por isso ela tem a barriga manchada,",
      "notes": "kjori = manchar",
      "words": [
        ""
      ]
    },
    {
      "id": 70,
      "start": "290994",
      "stop": "293877",
      "transcription": "sökjëntita, haa jähä.",
      "translation": "a lua, aqui.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 71,
      "start": "294353",
      "stop": "297145",
      "transcription": "Kjäpo hë ti tu kâräsôn nê jää.",
      "translation": "O kjäpo que tirou o couro da barriga dela, eles diziam.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 72,
      "start": "297668",
      "stop": "298578",
      "transcription": "Haa,",
      "translation": "Sim,",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 73,
      "start": "298812",
      "stop": "303955",
      "transcription": "ja rê sün swankjarân, rênpari tâti inkjë hë topjâpjâ pëë.",
      "translation": "isso que contavam os antigos, eu nunca vou esquecer a fala do meu avô.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 74,
      "start": "304677",
      "stop": "310422",
      "transcription": "Rê sotopintori rö inkjë hë, rênpari, ja.",
      "translation": "Eu não esqueço as coisas, eu aprendi isso.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 75,
      "start": "310812",
      "stop": "314371",
      "transcription": "Mämä ra kän sün inkjë hë, Kuupêri.",
      "translation": "Isso que estou contando para você, Kuupêri.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 76,
      "start": "314625",
      "stop": "317144",
      "transcription": "Ja, ja kypa.",
      "translation": "Essa, essa terra.",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 77,
      "start": "317462",
      "stop": "319189",
      "transcription": "Jy ra ty,",
      "translation": "Eles morreram,",
      "notes": "",
      "words": [
        ""
      ]
    },
    {
      "id": 78,
      "start": "319726",
      "stop": "325232",
      "transcription": "kwâra jy pyra pôô, jy pyra pa, jy pyraantâri panära,",
      "translation": "o resto voltaram, eles ficaram, eles se multiplicaram, os Panära,",
      "notes": "a população aumentou",
      "words": [
        ""
      ]
    },
    {
      "id": 79,
      "start": "325860",
      "stop": "328626",
      "transcription": "ti jää, haa.",
      "translation": "ele dizia, sim.",
      "notes": "",
      "words": [
        ""
      ]
    }
  ]
}]
    this.parsers = {}

    this.initialize()
    this.listen()
  }

  initialize() {

    this.el.innerHTML = `
    <div class="summary"></div>
    <ol class=dropped-file-list></ol>
`
  }

  get textSummaryList() {
    return this.el.querySelector('.dropped-file-list')
  }

  dispatch(text) {
    let textProcessedEvent = new CustomEvent('text-processed', {
      bubbles: true,
      detail: { text }
    })

    this.el.dispatchEvent(textProcessedEvent)
  }

  addXLing(file) {
    let fileReader = new FileReader()

    fileReader.addEventListener('load', loadEvent => {
      let data = new XLingParser(loadEvent.target.result).text

      if (data.metadata) {
        data.metadata.file = {
          fileName: file.name,
          size: file.size,
          lastModified: file.lastModified,
          createdAt: Date.now(),
          type: file.type
        }
      }

      if (!(this.titles.includes(data.metadata.file.fileName))) {
        this.texts.push(data)
      }
      if (this.isValid(data)) { this.dispatch(data) }

      this.render()
    })

    fileReader.readAsText(file)
  }

  addJSON(file) {
    let fileReader = new FileReader()

    fileReader.addEventListener('load', loadEvent => {
      let data = JSON.parse(loadEvent.target.result)

      if (data.metadata) {
        data.metadata.file = {
          fileName: file.name,
          size: file.size,
          lastModified: file.lastModified,
          createdAt: Date.now(),
          type: file.type
        }
      }

      if (!(this.titles.includes(data.metadata.file.fileName))) {
        this.texts.push(data)
      }
      this.render()
      this.dispatch(data)
    })

    fileReader.readAsText(file)
  }

  get titles() {
    return this.texts.map(text => text.metadata.file.fileName)
  }

  isValid(text) {
    return text.sentences
      && text.metadata
      && Array.isArray(text.sentences)
      && text.metadata.title
  }

  add(file) {
    if (file.type.startsWith('application/json')) {
      this.addJSON(file)
    } else {
      this.addXLing(file)
    }

  }

  addPNRCorpus() {
    this.pnrCorpus.forEach(data => {
      this.texts.push(data)
      this.render()
      this.dispatch(data)
    })
  }

  renderTextSummary(text) {
    let textSummaryView = new TextSummaryView(text)
    this.textSummaryList.appendChild(textSummaryView.render().el)
  }

  render() {
    this.textSummaryList.innerHTML = ''
    this.texts.forEach(text => this.renderTextSummary(text))
  }

  //   async loadFiles() {
  //     try {
  //     let fileArray = ["pnr_txt_kjanse2a_leconc.json", "pnr_txt_koka_contact_leconc.json", "pnr_txt_seak-ipp-hista_leconc.json", "pnr_txt_seakja-snake_leconc.json", "poka2017_leconc.json", "sokren_elic_20230619_leconc.json", "sokren_elic_20240621_leconc.json", "sokriti_contact_leconc.json", "sykja_leconc.json", "turen_leconc.json", "Causative_Elicitation_leconc.json", "karansa_leconc.json", "pnr_20240806-2_kjârasâ_MJL_KP_SA_story_2-AT4041.json", "pnr_20240814_pâtti_MJL_KP_SA_jopy-hä-kja_1-shurebeta54_2-AT4041_ch1.json", "pnr_krenpy_MJL_ERD_JCJ_story_20230619_shurebeta54.json", "pnr_paripoa1a_leconc.json", "pnr_txt_aka-hunting_leconc.json", "pnr_txt_jôôtu_hist_leconc.json"].map(el => "https://sunnyananth.com/leconc/corpus/JSON/"+el)
  //     fileArray.forEach(textName => {
  //     $.getJSON(textName, newText => this.add(newText))
  // })
  //       // fileArray.forEach(file => this.add(file))
  //     }
  //    catch (error) {
  //     console.error('Error loading files:', error);
  //   }
  // }

  listen() {
    //this.el.addEventListener('dragover', dragoverEvent => {
    document.body.addEventListener('dragover', dragoverEvent => {
      dragoverEvent.preventDefault()
    })

    //this.el.addEventListener('drop', dropEvent => {
    document.body.addEventListener('drop', dropEvent => {
      dropEvent.stopPropagation()
      dropEvent.preventDefault()

      let fileList = dropEvent.dataTransfer.files
      let fileArray = Array.from(fileList)
      fileArray.forEach(file => this.add(file))
    }
    )
    
    // window.addEventListener('onload', this.loadFiles())
  }
}


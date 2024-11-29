// This is a Javascript program which implements the necessary logic
// as well as the behavior of the user interface. 

// The following two lines store references to the two elements 
// user interface HTML:
let transcriptionInput = document.querySelector('#tokenize-input')
let transcriptionOutput = document.querySelector('#transcription-output')

// This is a function which implements some data operations to convert
// a string into an array of strings, one for each word — tokenization.
let tokenize = transcription => {
  return transcription
    .trim()
    .normalize("NFD")
    .split(" ") 
}


// Interface code: this is where we tell the browser to 
// “listen” to the input element. When it “hears” the user type, 
// it proceeds to run the tokenization algorithm on the
// string value in the input. 
// It then proceeds to dynamically render the array of tokens as 
// as “children” of the ordered list.
transcriptionInput.addEventListener('keyup', keyupEvent => {
  let tokens = tokenize(transcriptionInput.value)
  transcriptionOutput.innerHTML = '';
  tokens.forEach(token => {
    let oldText = token
    let newText = main(oldText)
    document.getElementById("transcription-output").innerHTML += newText + " "
  })
})

let vowels = ["a", "e", "i", "o", "u", "ɨ"]
let apostrophes = ["’", "'", "‘"]
let vowels2 = ["a", "e", "i", "o", "u", "ɤ", "ɨ", "ʉ", "ɛ", "ɔ"]
let voicedConsonants = ["b", "m", "d", "n", "ɟ", "ɲ", "g", "ŋ", "ˀ"]


function long(inputLong) {
  return inputLong.replace(/ː/g, "")
}

function adHocFinalGlottal(inputAdHocFinalGlottal) {
  if ((inputAdHocFinalGlottal[inputAdHocFinalGlottal.length-1] == "ˀ") & ((vowels2.includes(inputAdHocFinalGlottal[inputAdHocFinalGlottal.length-2])))) {
    return inputAdHocFinalGlottal.slice(0,inputAdHocFinalGlottal.length - 2) + "ʔ"
  }
  else {
    return inputAdHocFinalGlottal
  }
}

function toneBar(inputToneBar) {
  // descending then ascending
  let outputToneBar = inputToneBar.replace(/̂/g, "˥˩")
  // the code does it with abreve but in the future it will need to be changed into a hacek, which is \u030C
  let outputToneBar2 = outputToneBar.replace(/\u0306/g, "˩˥")

  return outputToneBar2
}


function main(input){
  let outputLong = long(input)
  let outputadHocFinalGlottal = adHocFinalGlottal(outputLong)
  let outputToneBar = toneBar(outputadHocFinalGlottal)
  let outputFinal = outputToneBar
  return outputFinal
}
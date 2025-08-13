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

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
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

function basic(inputBasic) {
  let outputBasic = ""
  for (var i = 0; i < inputBasic.length; i++) {
    if (inputBasic[i] == `\u0327`.normalize('NFD')){
    }
    else if (inputBasic[i] == `j`.normalize('NFD')) {
      outputBasic += 'ɟ'
    }
    else if (inputBasic[i] == `y`.normalize('NFD')) {
      outputBasic += 'j'
    }
    else if (inputBasic[i] == `s`.normalize('NFD')) {
      outputBasic += 'ʃ'
    }
    else if (inputBasic[i] == `ʉ`.normalize('NFD')) {
      outputBasic += 'ɨ'
    }
    else if (inputBasic[i] == `r`.normalize('NFD')) {
      outputBasic += 'h'
    }
    else if (i < inputBasic.length) {
      if (inputBasic.slice(i, i + 2) == "gn") {
        outputBasic += "ŋ"
        i++
      }
      else if (inputBasic.slice(i, i + 2) == "nh") {
        outputBasic += "ɲ"
        i++
      }
      else {
        outputBasic += inputBasic[i].toLowerCase()
      }
    }
    else {
      outputBasic += inputBasic[i]
    }
  }

  return outputBasic
}

function glottalStop(inputGlottalStop){
  let outputGlottalStop = ""

  for (var i = 0; i < inputGlottalStop.length; i++) {
  	if (i == 0 & vowels.includes(inputGlottalStop[i])){
		  outputGlottalStop += "ʔ" + inputGlottalStop[i]
  	}
  	else if ((i == 0) & (vowels.includes(inputGlottalStop[i + 1])) & (apostrophes.includes(inputGlottalStop[i]))) {
  		outputGlottalStop += "ʔ"
  	}
  	else if (apostrophes.includes(inputGlottalStop[i])) {
  		if (i > 0) {
  			if (i < inputGlottalStop.length - 1) {
          if (vowels.includes(inputGlottalStop[i-1])) {
            if ((vowels.includes(inputGlottalStop[i+1]))||(i==(inputGlottalStop.length - 1))) {
              outputGlottalStop += "ʔ"
            }
            else {
              outputGlottalStop += inputGlottalStop[i]
            }
          }
          // acute, grave, tilde, circumflex
          else if ((inputGlottalStop[i - 1] == "́") || (inputGlottalStop[i-1] == "̀") || (inputGlottalStop[i-1] == "̃") || (inputGlottalStop[i-1] == "̂")) {
            outputGlottalStop += "ʔ"
          }
          else {
            outputGlottalStop += inputGlottalStop[i]
          }
        }
        // acutes and graves
        else if ((inputGlottalStop[i - 1] == "́") || (inputGlottalStop[i-1] == "̀")) {
          outputGlottalStop += "ʔ"
        }
        else if (i == (inputGlottalStop.length - 1)) {
          if ((vowels.includes(inputGlottalStop[i-1])) & (apostrophes.includes(inputGlottalStop[i]))) {
            outputGlottalStop += "ʔ"
          }
          else {
            outputGlottalStop += inputGlottalStop[i]
          }
        }
        else {
          outputGlottalStop += inputGlottalStop[i]
        }
      }
      else {
        outputGlottalStop += inputGlottalStop[i] 
      }
    }
    else {
      outputGlottalStop += inputGlottalStop[i]
    }
  }
  return outputGlottalStop
}

function glottalized(inputGlottalized) {
  let outputGlottalized = ""
  for (var i = 0; i < inputGlottalized.length; i++) {
    // if it's an initial glottal, skip
    if ((i == 0) & (apostrophes.includes(inputGlottalized[i]))) {
      // pass
    }
    // if the first character is a glottal, place the mark after the first letter
    else if ((i==1) & (apostrophes.includes(inputGlottalized[0]))) {
      outputGlottalized += inputGlottalized[i] + "ˀ"
    }
    // anywhere else, place it where it appears
    else if (apostrophes.includes(inputGlottalized[i])) {
      outputGlottalized += "ˀ"
    }
    else {
      outputGlottalized += inputGlottalized[i]
    }
  }

  return outputGlottalized
}

function vowelChange(inputVowelChange) {
  let outputVowelChange = ""

  for (var i = 0; i < inputVowelChange.length; i++) {
    // a with a circumflex
    if (i < (inputVowelChange.length - 1)) {
      // console.log(inputVowelChange[i], "poop")
      // if it's an a with a circumflex either before or after it
      if ((inputVowelChange[i + 1] == "̂") & (inputVowelChange[i] == "a")) {
        outputVowelChange += "ɤ"
        // let i be the next one so the rest of the code will just pick up with it
        i += 1
      }
      else if (i > 0) {
        if ((inputVowelChange[i-1] == "̂") & (inputVowelChange[i] == "a")) {
          outputVowelChange += "ɤ"
          // let i be the next one so the rest of the code will just pick up with it
          i += 1
        }
        else {
          // pass
        }
      }
      else {
        // pass
      }
    }
    else if (i > 0) {
      if ((inputVowelChange[i-1] == "̂") & (inputVowelChange[i] == "a")) {
        outputVowelChange += "ɤ"
        // let i be the next one so the rest of the code will just pick up with it
        i += 1
      }
      else {
        // pass
      }
    }
    else {
      //pass
    }
    // o and e without circumflex

    if (i < inputVowelChange.length) {
      // if it's the first letter, check that the thing after it is not a circumflex
      if ((i == 0) & (inputVowelChange.length > 1)) {
        if (inputVowelChange[i + 1] != "̂") {
          if (inputVowelChange[i] == "o") {
            outputVowelChange += "ɔ"
          }
          else if (inputVowelChange[i] == "e") {
            outputVowelChange += "ɛ"
          }
          else {
            outputVowelChange += inputVowelChange[i]
          }
        }
        else {
          outputVowelChange += inputVowelChange[i]
        }
      }
      // if it's a non-first letter, check that the thing before it is not a circumflex
      // if it's a non-first letter, check that the thing after it is not a circumflex
      else if ((inputVowelChange[i - 1] != "̂") & (i < (inputVowelChange.length - 1))) {
        if (inputVowelChange[i + 1] != "̂") {
          if (inputVowelChange[i] == "o") {
            outputVowelChange += "ɔ"
          }
          else if (inputVowelChange[i] == "e") {
            outputVowelChange += "ɛ"
          }
          else {
            outputVowelChange += inputVowelChange[i]
          }
        }
        else {
          outputVowelChange += inputVowelChange[i]
        }
      }
      else if (inputVowelChange[i - 1] != "̂") {
        if (inputVowelChange[i] == "o") {
          outputVowelChange += "ɔ"
        }
        else if (inputVowelChange[i] == "e") {
          outputVowelChange += "ɛ"
        }
        else {
          outputVowelChange += inputVowelChange[i]
        }
      }
      else {
        outputVowelChange += inputVowelChange[i]
      }
    }
    else {
      // pass
    }
  }
  return outputVowelChange
}

function circumflexWipe(inputCircumflexWipe) {
  let outputCircumflexWipe = ""

  for (var i = 0; i < inputCircumflexWipe.length; i++) {
    if (inputCircumflexWipe[i] == "̂") {
      // pass
    }
    else {
      outputCircumflexWipe += inputCircumflexWipe[i]
    }
  }
  return outputCircumflexWipe
}

function longFix(inputLongFix) {
  let outputLongFix = ""

  for (var i = 0; i < inputLongFix.length; i++) {
    if (i > 0) {
      if ((vowels.includes(inputLongFix[i-1])) & (vowels2.includes(inputLongFix[i])) & (inputLongFix[i-1] != inputLongFix[i])) {
        outputLongFix += inputLongFix[i-1]
      }
      else {
        outputLongFix += inputLongFix[i]
      }
    }
    else {
      outputLongFix += inputLongFix[i]
    }
  }

  return outputLongFix
}

function accents(inputAccents) {
  let outputAccents = ""
  for (var i = 0; i < inputAccents.length; i++) {
    if (i < (inputAccents.length - 1)) {
      if (i < (inputAccents.length - 1)) {
        if (inputAccents[i] == inputAccents[i + 1]) {
          // if its an acute accent two characters down, make it a hacek
          if ((inputAccents[i + 2] == "́") & vowels2.includes(inputAccents[i])) {
            outputAccents += inputAccents[i] + "\u030C" + "ː"
            i += 2
          }
          // if it's a grave accent two characters down, make it a circumflex
          else if ((inputAccents[i+2] == "̀") & (vowels2.includes(inputAccents[i]))) {
            outputAccents += inputAccents[i] + "̂ː" 
            i += 2
          }
          else {
            outputAccents += inputAccents[i]
          }
        }
        else if ((inputAccents[i] == inputAccents[i + 2]) & (inputAccents[i + 1] == "̃") & (i < (inputAccents.length - 3))) {
          if ((inputAccents[i + 3] == "́") & (vowels2.includes(inputAccents[i]))) {
            outputAccents += inputAccents[i] + "̃" + "\u030C" + "ː"
            i += 3
          }
          else if ((inputAccents[i+3] == "̀") & (vowels2.includes(inputAccents[i]))) {
            outputAccents += inputAccents[i] + "̃̂ː" 
            i += 3
          }
          else {
            outputAccents += inputAccents[i]
          }
        }
        else {
          outputAccents += inputAccents[i]
        }
      }
      else {
        outputAccents += inputAccents[i]
      }
    }
    else {
      outputAccents += inputAccents[i]
    }
  }

  return outputAccents
}

function tone(inputTone) {
  let outputTone = ""
  for (var i = 0; i < inputTone.length; i++) {
    // if the last letter is a voiced consonant or vowel, add a circumflex
    if ((voicedConsonants.includes(inputTone[inputTone.length-1])) || (vowels2.includes(inputTone[inputTone.length-1]))) {
      if (i < (inputTone.length - 1)) {
        if ((inputTone[i] == inputTone[i+1]) & (!(isNumeric(inputTone[i])))) {
          outputTone += inputTone[i] + "̂ː" 
          i += 1
        }
        // handle nasal
        else if ((inputTone[i+1] == "̃") & (i < (inputTone.length - 2))) {
          if (inputTone[i] == inputTone[i + 2]) {
            outputTone += inputTone[i] + "̃̂ː"
            i += 2
          }
          else {
            outputTone += inputTone[i]
          }
        }
        else {
          outputTone += inputTone[i]
        }
      }
      else {
        outputTone += inputTone[i]
      }
    }
    // otherwise make it a hacek
    else if (i < (inputTone.length - 1)) {
      if ((inputTone[i] == inputTone[i+1]) & (!(isNumeric(inputTone[i])))) {
        outputTone += inputTone[i] + "\u030C" + "ː"
        i += 1
      }
      // handle nasals
      else if ((inputTone[i+1] == "̃") & (i < (inputTone.length - 2))) {
        if (inputTone[i] == inputTone[i + 2]) {
          outputTone += inputTone[i] + "̃" + "\u030C" + "ː"
          i += 2
        }
        else {
          outputTone += inputTone[i]
        }
      }
      else {
        outputTone += inputTone[i]
      }
    }
    else {
      outputTone += inputTone[i]
    }
  }

  return outputTone
}





function main(input){
  input = input.replace(",", "")
  let inputGlottalStop = basic(input)
  let inputGlottalized = glottalStop(inputGlottalStop)
  let inputVowelChange = glottalized(inputGlottalized)
  let inputCircumflexWipe =  vowelChange(inputVowelChange)
  let inputLongFix = circumflexWipe(inputCircumflexWipe)
  let inputAccents = longFix(inputLongFix)
  let inputTone = accents(inputAccents)
  let outputFinal= tone(inputTone)
  return outputFinal
}

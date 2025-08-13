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
    document.getElementById("transcription-output").innerHTML += newText + " | "
  })
})

let vowels = ["a", "e", "i", "o", "u", "ɨ"]
let apostrophes = ["’", "'", "‘"]
let vowels2 = ["a", "e", "i", "o", "u", "ɤ", "ɨ", "ʉ", "ɛ", "ɔ"]
let voicedConsonants = ["b", "m", "d", "n", "ɟ", "ɲ", "g", "ŋ", "ˀ"]
// tildes, superscript glottals, rising tones, falling tones
let stayingDiacritics = ["̃", "ˀ", "˩˥", "˥˩"]

// this will combine nasals into one character, leave glottalization as part of the single, and separate tone into one combined contour character

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function spacesAndBars(inputSpacesAndBars) {
	let outputSpacesAndBars = ""
	for (var i = 0; i < inputSpacesAndBars.length; i++) {
		if (isNumeric(inputSpacesAndBars[i]) || (inputSpacesAndBars[i] == ":") || (inputSpacesAndBars[i] == ".")) {
			outputSpacesAndBars += inputSpacesAndBars[i]
		}

		else if (inputSpacesAndBars[i] == " ") {
			outputSpacesAndBars += " | "
		}
		else if (i < inputSpacesAndBars.length - 1) {
			if (stayingDiacritics.includes(inputSpacesAndBars[i + 1])) {
				outputSpacesAndBars += inputSpacesAndBars[i] + inputSpacesAndBars[i + 1] + " "
				// increment i
				i++
			}
			else if (inputSpacesAndBars[i] + inputSpacesAndBars[i+1] == "˩˥") {
				// do this for the tone bars
					outputSpacesAndBars += "˩˥ "
					i++
				}
			else if (inputSpacesAndBars[i] + inputSpacesAndBars[i+1] == "˥˩") {
				// do this for the tone bars
					outputSpacesAndBars += "˥˩ "
					i++
			}
			else {
				outputSpacesAndBars += inputSpacesAndBars[i] + " "
			}
		}
		else {
			outputSpacesAndBars += inputSpacesAndBars[i] + " "
		}
	}
	return outputSpacesAndBars
}

function main(input){
  let outputSpacesAndBars = spacesAndBars(input)
  let outputFinal = outputSpacesAndBars
  return outputFinal
}
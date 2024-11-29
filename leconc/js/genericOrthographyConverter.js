let orthographyInput = document.querySelector('#conversion-table')
let transcriptionInput = document.querySelector('#tokenize-input')
let transcriptionOutput = document.querySelector('#transcription-output')

let tokenize = transcription => {
  return transcription
    .trim()
    .normalize("NFD")
    .split(" ") 
}

transcriptionInput.addEventListener('keyup', keyupEvent => {
  let tokens = tokenize(transcriptionInput.value)
  transcriptionOutput.innerHTML = '';
  tokens.forEach(token => {
    let oldText = token
    let newText = convert(oldText)
    document.getElementById("transcription-output").innerHTML += newText + " "
  })
})

let convert = inString => {
	// console.log(tokenize(orthographyInput.value.split("\n"))[1])
	let graphemePairList = orthographyInput.value.split("\n").map(graphemePair => {
		console.log(graphemePair.normalize("NFD").split("\t"))
		return graphemePair.normalize("NFD").split("\t")
	})

	// for some reason it sorts it without me doing this so I'm just leaving it here commented out
	// let sortedGraphemePairList = graphemePairList.sort((a,b) => {
	// 	return b[0].length - a[0].length
	// })
	endOfWord = false
	index = 0
	while (!endOfWord) {
		
	}

}

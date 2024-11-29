class LIFTParser {
	constructor(lift){
		this.initialize(lift)
		this.type = 'application/xml'
		this.suffix= '.lift'
	}

	initialize(xml){
		this.doc = new DOMParser().parseFromString(xml, 'text/xml')
	}

	parseLexicon(lexicon){
		let words = Array.from(lexicon.querySelectorAll('entry'))
			.map(word => ({ 
				form: word.querySelector(`lexical-unit form text`).textContent, 
				senses: word.querySelectorAll(`sense`).map(sense => ({
					gloss: {
						// needs to be generalized for each language
						// problem is i don't know how i can make variable names to access
						// the glosses of languages if I don't know the languages
						english: sense.querySelector(`gloss [lang="en"]`).textContent,
						portuguese: sense.querySelector(`gloss [lang="pt-BR"]`).textContent
					},
					definition: {
						english: sense.querySelector(`definition form [lang="en"]`).textContent,
						portuguese: sense.querySelector(`definition form [lang="pt-BR"]`).textContent
					},
					// want to access the value here, unsure how to do that; there's no textcontent
					partOfSpeech: sense.querySelector(`grammatical-info`).value, 
				}))
				note: word.querySelector(`note form [lang="en"]`)
			}))

		let senseDictionary = Array.from(words).map(word =>)
		}))
		

	}
}

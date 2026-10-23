class Sentence {
  constructor(attributes, metadata={}){
    this.transcription = attributes.transcription
    this.translation = attributes.translation
    // this.note = attributes.note
    this.notes = attributes.notes
    this.glosses = attributes.glosses || null
    this.words = attributes.words

    this.metadata = metadata

    this.initialize()
  }

  toString(){
    return `[Sentence ${this.transcription.slice(0,10)}… ${this.transcription.slice(0,10)}`
  }

  initialize(){
    if(this.words){
      this.words = this.words.map(word => new Word(word, word.metadata))
    }
  }

  matches(query){
    if(typeof query == 'string'){
      return this.transcription.match(query)
    } else { 
      return Object.entries(query)
        .every(([property, value]) => this[property].match(value))
    }
  }

  search(query){
    return this.words.filter(word => word.matches(query))
  }
}


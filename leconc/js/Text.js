class Text {
  constructor(attributes={}, metadata={}){
    this.sentences = attributes.sentences || []

    this.metadata = metadata

    this.initialize()
  }

  initialize(){
    this.sentences = this.sentences.map((sentence,i) => {
      
      sentence.transcription = sentence.transcription.normalize('NFD')
      sentence.translation = sentence.translation.normalize('NFD')
      if(sentence.glosses){ sentence.glosses = sentence.glosses.normalize('NFD') || "" }

      let metadata = { 
        text: this.metadata,
        lineNumber: i
      }
      sentence = new Sentence(sentence, metadata)
      return sentence
    })
  }

  search(query){ // query is a string to match the transcription tier for now
    // return this.sentences.filter(sentence => sentence.matches(query))
    query = query.normalize("NFC")
    let hits = this.sentences
      .filter((sentence,i) => {
        Object.assign(sentence.metadata, this.metadata)
        sentence.metadata.title = this.metadata.title
        sentence.metadata.lineNumber = i 
        return sentence.transcription.normalize("NFC").match(new RegExp(query, 'ig')) // @@ normalization shouldn’t happen here // sunny note: why? I'm gonna normalize both now but hopefully will see what's wrong
      })

    return hits
  }

  get transcriptions(){
    return this.sentences.map(sentence => sentence.transcription)
  }

  get translations(){
    return this.sentences.map(sentence => sentence.translation)
  }

  get words(){
    return this.sentences.reduce((words, sentence) => 
      words.concat(...sentence.words) 
    , [])
  }
}

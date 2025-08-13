class Corpus {
  constructor(attributes={}, metadata={}){
    this.texts = attributes.texts || []
    this.metadata = metadata
   
    this.initialize()
  }

  initialize(){
    this.texts = this.texts.map(text => new Text(text, text.metadata))
  }

  add(text){
    text = new Text(text, text.metadata)
    this.texts.push(text)    
  }

  search(query, tier){
    return this.texts.reduce((sentences, text) => {
      let hits = text.search(query, tier)
      hits.forEach(hit => hit.text = text)
      sentences.push(...hits)
      return sentences
    }, [])
  }

  get sentences(){
    return this.texts.reduce((sentences, text) => 
      sentences.concat(text.sentences) 
    , [])
  }

  get words(){
    return this.texts.reduce((words, text) => 
      words.concat(text.words) 
    , [])
  }

  get transcriptions(){
    return this.texts.reduce((transcriptions, text) => {
      transcriptions.push(...text.transcriptions)
      return transcriptions
    }, [])
  }

  get translations(){
    return this.texts.reduce((translations, text) => {
      translations.push(...text.translations)
      return translations
    }, [])
  }

  guessGlosses(){
    return this.sentences.reduce((glosses, sentence) => { 
      if(sentence.glosses){ 
        let forms = sentence.transcription.split(' ')
        let words = forms.map((form,i) => {
          return {
             form, 
             gloss:sentence.glosses.split(' ')[i]
          }
        })
        glosses.push(...words) 
      }
      return glosses 
    }, [] )
    .sort((a,b) => a.form < b.form)
  }
}

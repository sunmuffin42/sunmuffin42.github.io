class SentenceView {
  constructor(sentence, el=document.createElement('div')){
    if(!sentence instanceof Sentence){
      sentence = new Sentence(sentence, sentence.metadata={})
    }

    this.sentence = sentence
    this.el = el
    this.el.classList.add('sentence-view')
    this.listen()
  }

  initialize(){
    if(this.words){
      this.wordViews = words.map(word => new WordView(word))
    }
  }

  highlight(query){
    let p = this.el.querySelector('p.transcription')
    let transcription = p.textContent
    p.innerHTML = transcription.replace(new RegExp('(' + query + ')', 'g'), `<mark>$1</mark>`)
  }

  get wordsOL(){
    return this.el.querySelector('ol.words')
  }

  render(){
    this.el.innerHTML = `
      <p class=transcription>${this.sentence.transcription}</p>
      <p class=glosses>${this.sentence.glosses || ''}</p>
      <ol class=words></ol>
      <p class=translation>${this.sentence.translation}</p>
      <footer>
        <p class=citation>${this.sentence.metadata.lineNumber+1}</p>
      </footer>
    `

    if(this.wordViews){
      this.wordViews.forEach(wordView => this.wordsOL.appendChild(wordView.render().el))
    }

    return this
  }

  listen(){
  }

}

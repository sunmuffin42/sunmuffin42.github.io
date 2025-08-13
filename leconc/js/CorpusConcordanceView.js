/* 

Interface for interacting with a concordance of the 
content of a corpus.

*/

class CorpusConcordanceView {
  constructor(corpus=new Corpus, el){
    this.corpus = new Corpus(corpus, corpus.metadata)
    this.el = el
   
    this.initialize()
  }

  initialize(){
    this.el.innerHTML += `
      <header class=drop-xling-view>
        <h1>Corpus</h1>
      </header>
      
      <section class=concordance></section>
      
      <section class=text-view>
      </section>
`
    this.concordanceView = new ConcordanceView(this.corpus, this.el.querySelector('.concordance'))
    this.textDropView = new TextDropView(this.el.querySelector('.drop-xling-view'))
    this.textView = new TextView({}, this.el.querySelector('.text-view'))

    this.listen()
  }

  showText(text){
    this.textView = new TextView(text, this.el.querySelector('.text-view'))
    this.textView.render()
  }

  showTextWithHit(text, line){
    this.textView = new TextView(text, this.el.querySelector('.text-view'))
    this.textView.render()
    let sentence = document.getElementById(`${String(line)}`)
    let transcription = sentence.querySelector(`.transcription`)
    let query = this.concordanceView.query
    transcription.innerHTML = transcription.textContent.replace(new RegExp('(' + query + ')', 'g'), `<mark>$1</mark>`)
    sentence.style = "background:gold"
  }

  render(){
  }
     
  listen(){
    this.el.addEventListener('text-processed', textProcessedEvent => {
      this.corpus.add(textProcessedEvent.detail.text)
    })

    this.el.addEventListener('show-text-request', showTextRequest => {
      let text = showTextRequest.detail.text
      if (showTextRequest.detail.line) {
        let line = showTextRequest.detail.line
        this.showTextWithHit(text, line)
        document.getElementById(line-1).scrollIntoView()
      }
      else {
        this.showText(text)
        document.getElementById(`header`).scrollIntoView()
      }
      
    })
  }
}

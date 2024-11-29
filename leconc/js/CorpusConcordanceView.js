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
    //this.textView.text = text
    this.textView = new TextView(text, this.el.querySelector('.text-view'))
    this.textView.render()
    this.textView.highlight(this.concordanceView.query)
  }

  render(){
  }
     
  listen(){
    this.el.addEventListener('text-processed', textProcessedEvent => {
      this.corpus.add(textProcessedEvent.detail.text)
    })

    this.el.addEventListener('show-text-request', showTextRequest => {
      let text = showTextRequest.detail.text
      this.showText(text)
    })
  }
}

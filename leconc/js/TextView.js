class TextView {
  constructor(text=new Text(), el=document.createElement('article')){
    this.text = new Text(text, text.metadata)
    this.el = el
    this.el.classList.add('text-view')

    this.initialize()
  }

  initialize(){
    this.sentenceViews = this.text.sentences.map(sentence => new SentenceView(sentence))
  }

  get sentencesDIV(){
    return this.el.querySelector('.sentences')
  }

  highlight(query){
    this.sentenceViews.forEach(sentenceView => {
      sentenceView.highlight(query)
    })
    this.render()
  }
  
  render(){
    this.el.innerHTML = `
<header>
  <h2>Text View</h2>
</header>
<div class=text-metadata></div>
<div class=sentences> </div>
`

    this.metadataView = new MetadataView(this.text.metadata)
    this.metadataView.render()

    this.el.querySelector('.text-metadata').innerHTML = this.metadataView.el.outerHTML

    this.sentenceViews.forEach(sentenceView => {
      sentenceView.render()
      this.sentencesDIV.appendChild(sentenceView.el)
    })

    return this.el;
  }
}


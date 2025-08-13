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

  render(){
    this.el.innerHTML = `
<header id=header>
  <h2>Text View</h2>
</header>
<div class=text-metadata></div>
<div class=sentences> </div>
`

    this.metadataView = new MetadataView(this.text.metadata)
    this.metadataView.render()

    this.el.querySelector('.text-metadata').innerHTML = this.metadataView.el.outerHTML

    let sentenceCount = 1
    this.sentenceViews.forEach(sentenceView => {
      sentenceView.render()
      sentenceView.el.id = sentenceCount
      sentenceCount ++
      this.sentencesDIV.appendChild(sentenceView.el)
    })
    sentenceCount = 0

    return this.el;
  }
}


class WordView {
  constructor(word, el=document.createElement('div')){
    this.text = text
    this.el = el
    this.el.classList.add('word-view')

    this.initialize()
  }

  initialize(){
  }

  render(){
    this.el.innerHTML = `
     <p class=form>${this.word.form}</p>
     <p class=gloss>${this.word.gloss}</p>
`
    return this
  }
}


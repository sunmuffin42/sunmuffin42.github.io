class HitView extends SentenceView {
  constructor(sentence, el=document.createElement('div')){
    super(sentence, el)

    this.sentence = sentence
    this.el = el
    this.el.classList.add('hit-view')
    this.listen()
  }

  render(){
    this.el.innerHTML = `
      <p class=transcription>${this.sentence.transcription}</p>
      <p class=glosses>${this.sentence.glosses || ''}</p>
      <div class=words> </div>
      <p class=translation>${this.sentence.translation}</p>
      <footer>
        <button class=show-text-button>
           ${this.sentence.metadata.text.title}: ${this.sentence.metadata.lineNumber+1}
        </button>
      </footer>
    `
    if (this.sentence.transcription[0] == "*") {
      this.el.querySelector(`.transcription`).style.color = `red`
    }
  }

  listen(){
    this.el.addEventListener('click', clickEvent => {
      let showTextEvent = new CustomEvent('show-text-request', {
        bubbles: true,
        detail: { 
         text: this.sentence.text // @@ this might be a horrible idea
        }
      })
      this.el.dispatchEvent(showTextEvent)
    })
  }
}

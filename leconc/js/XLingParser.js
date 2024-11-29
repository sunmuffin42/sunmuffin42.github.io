class XLingParser {
  constructor(xLing){
    this.initialize(xLing)
    this.type = 'application/xml'
    this.suffix = 'XLing.xml'
  }

  initialize(xml){
    this.doc = new DOMParser().parseFromString(xml, 'text/xml')
  }

  get metadata(){
    let title = this.doc.querySelector('frontMatter title').textContent
    let author = this.doc.querySelector('frontMatter author').textContent
    let shortTitle = this.doc.querySelector('backMatter shortTitle').textContent
    return { title, author, shortTitle }
  }

  get title(){
    return this.doc.children[0].children[0].children[0].textContent
  }

  parseInterlinear(interlinear){
    // let translation = interlinear.querySelector('free[lang="pt-BR-free"]').textContent

    let translation = interlinear.querySelector('free[lang$=free]').textContent


    let glosses = interlinear.querySelector('free object[type="tLiteralTranslation"]').textContent

    let words = Array.from(interlinear.querySelectorAll('line wrd langData'))
      .map(word => ({ form: word.textContent, gloss: '' }))

    let transcription = words.map(word => word.form).join(' ')

    let id = interlinear.getAttribute('text')

    return { transcription, translation, glosses, words, metadata: { id } }
  }

  get sentences(){
    let interlinears = Array.from(this.doc.querySelectorAll('interlinear'))
    let sentences = interlinears.map(interlinear => this.parseInterlinear(interlinear))
    return sentences
  }

  get text(){
    return { 
      metadata: this.metadata,
      sentences: this.sentences 
    }
  }
}


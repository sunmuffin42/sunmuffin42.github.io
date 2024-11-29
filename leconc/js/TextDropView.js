class TextSummaryView { 
  constructor(text, el=document.createElement('div') ){
    this.text = text
    this.el = el
    this.el.classList.add("text-summary")
  }

  render(){
    this.el.innerHTML = `
<li class=show-text>
  <p>${this.text.metadata.title} <button class=show-text>view</button></p>
</li>
`
    this.listen()
    return this
  }

  listen(){
    this.el.addEventListener('click', clickEvent => {
      if(clickEvent.target.matches('button.show-text')){
        let showTextEvent = new CustomEvent('show-text-request', {
          bubbles: true,
          detail: { 
           text: this.text 
          }
        })
        this.el.dispatchEvent(showTextEvent)
      }
    })
  }
}

class TextDropView { 
  constructor(el=document.createElement('section'), parsers={}){
    this.el = el
    this.el.classList.add('file-drop-view')

    this.texts = []

    this.parsers = {}

    this.initialize() 
    this.listen() 
  }

  initialize(){

    this.el.innerHTML = `
    <div class="summary"></div>
    <ol class=dropped-file-list></ol>
`
  }

  get textSummaryList(){
    return this.el.querySelector('.dropped-file-list')
  }

  dispatch(text){
    let textProcessedEvent = new CustomEvent('text-processed', {
      bubbles: true,
      detail: { text }
    })

    this.el.dispatchEvent(textProcessedEvent)
  }

  addXLing(file){
    let fileReader = new FileReader()

    fileReader.addEventListener('load', loadEvent => {
      let data = new XLingParser(loadEvent.target.result).text
      
      if(data.metadata){ 
        data.metadata.file = {
          fileName: file.name,
          size: file.size,
          lastModified: file.lastModified,
          createdAt: Date.now(),
          type: file.type
        }
      }

      if(!(this.titles.includes(data.metadata.file.fileName))){
        this.texts.push(data)
      }
      if(this.isValid(data)){ this.dispatch(data) }

      this.render()
    })

    fileReader.readAsText(file)
  }

  addJSON(file){
    let fileReader = new FileReader()

    fileReader.addEventListener('load', loadEvent => {
      let data = JSON.parse(loadEvent.target.result)
      
      if(data.metadata){ 
        data.metadata.file = {
          fileName: file.name,
          size: file.size,
          lastModified: file.lastModified,
          createdAt: Date.now(),
          type: file.type
        }
      }

      if(!(this.titles.includes(data.metadata.file.fileName))){
        this.texts.push(data)
      }
      this.render()
      this.dispatch(data)
    })

    fileReader.readAsText(file)
  }

  get titles(){
    return this.texts.map(text => text.metadata.file.fileName)
  }

  isValid(text){
    return text.sentences 
        && text.metadata 
        && Array.isArray(text.sentences)
        && text.metadata.title 
  }

  add(file){
    if(file.type.startsWith('application/json')){
      this.addJSON(file)
    } else {
      this.addXLing(file)
    }
    
  }

  renderTextSummary(text){
    let textSummaryView = new TextSummaryView(text)
    this.textSummaryList.appendChild(textSummaryView.render().el)
  }

  render(){
    this.textSummaryList.innerHTML = ''
    this.texts.forEach(text => this.renderTextSummary(text))
  }

  listen(){
    //this.el.addEventListener('dragover', dragoverEvent => {
    document.body.addEventListener('dragover', dragoverEvent => {
      dragoverEvent.preventDefault()
    })

    //this.el.addEventListener('drop', dropEvent => {
    document.body.addEventListener('drop', dropEvent => {
      dropEvent.stopPropagation()
      dropEvent.preventDefault()

      let fileList = dropEvent.dataTransfer.files
      let fileArray = Array.from(fileList)
      fileArray.forEach(file => this.add(file))
    })
  }
}


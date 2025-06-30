// async function loadFiles() {
//     try {
//     const response = await fetch('https://sunnyananth.com/leconc/corpus/JSON/');
//     const fileNames = await response.json(); // Directory listing from server

//     for (const fileName of fileNames) {
//       const fileResponse = await fetch(`https://sunnyananth.com/leconc/corpus/JSON/${fileName}`);
//       const fileContent = await fileResponse.json(); // Assuming JSON files
//       fileArray.forEach(file => this.add(file))
//     }
//   } catch (error) {
//     console.error('Error loading files:', error);
//   }
// let fileArray = [
//   "corpus/JSON/Causative_Elicitation_leconc.json",
//   "corpus/JSON/karansa_leconc.json",
//   "corpus/JSON/pnr_20240806-2_kjârasâ_MJL_KP_SA_story_2-AT4041.json",
//   "corpus/JSON/pnr_20240814_pâtti_MJL_KP_SA_jopy-hä-kja_1-shurebeta54_2-AT4041_ch1.json",
//   "corpus/JSON/pnr_krenpy_MJL_ERD_JCJ_story_20230619_shurebeta54.json",
//   "corpus/JSON/pnr_paripoa1a_leconc.json",
//   "corpus/JSON/pnr_txt_aka-hunting_leconc.json",
//   "corpus/JSON/pnr_txt_jôôtu_hist_leconc.json",
//   "corpus/JSON/pnr_txt_kjanse2a_leconc.json",
//   "corpus/JSON/pnr_txt_koka_contact_leconc.json",
//   "corpus/JSON/pnr_txt_seak-ipp-hista_leconc.json",
//   "corpus/JSON/pnr_txt_seakja-snake_leconc.json",
//   "corpus/JSON/poka2017_leconc.json",
//   "corpus/JSON/sokren_elic_20230619_leconc.json",
//   "corpus/JSON/sokren_elic_20240621_leconc.json",
//   "corpus/JSON/sokriti_contact_leconc.json",
//   "corpus/JSON/sykja_leconc.json",
//   "corpus/JSON/turen_leconc.json"
// ]
// }


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

  async loadFiles() {
    try {
    let fileArray = ["pnr_txt_kjanse2a_leconc.json", "pnr_txt_koka_contact_leconc.json", "pnr_txt_seak-ipp-hista_leconc.json", "pnr_txt_seakja-snake_leconc.json", "poka2017_leconc.json", "sokren_elic_20230619_leconc.json", "sokren_elic_20240621_leconc.json", "sokriti_contact_leconc.json", "sykja_leconc.json", "turen_leconc.json", "Causative_Elicitation_leconc.json", "karansa_leconc.json", "pnr_20240806-2_kjârasâ_MJL_KP_SA_story_2-AT4041.json", "pnr_20240814_pâtti_MJL_KP_SA_jopy-hä-kja_1-shurebeta54_2-AT4041_ch1.json", "pnr_krenpy_MJL_ERD_JCJ_story_20230619_shurebeta54.json", "pnr_paripoa1a_leconc.json", "pnr_txt_aka-hunting_leconc.json", "pnr_txt_jôôtu_hist_leconc.json"].map(el => "https://sunnyananth.com/leconc/corpus/JSON/"+el)
    fileArray.forEach(textName => {
    $.getJSON(textName, newText => this.add(newText))
})
      // fileArray.forEach(file => this.add(file))
    }
   catch (error) {
    console.error('Error loading files:', error);
  }
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
    }
  )
  window.addEventListener('onload', this.loadFiles())
}
}


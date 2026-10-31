import { blobToAudioBuffer } from './audio-tools.js'
import { audioBufferToWav } from './audio-buffer-to-wav.js'
// import { concatenateAudioWithSilence } from './audio-tools.js'
import { concatenateAudioBuffer } from './audio-tools.js'
// import { RecordWord } from './record-word/RecordWord.js'
// import { RecordLexicon } from './record-lexicon/RecordLexicon.js'
import { default as JSZip } from 'https://esm.sh/jszip@3.10.1'
// window.concatenateAudioWithSilence = concatenateAudioWithSilence
window.concatenateAudioBuffer = concatenateAudioBuffer
window.blobToAudioBuffer = blobToAudioBuffer

export class RecordTask extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
    <div class=controls> When you are ready to begin recording, click this button: 
      <button class="enable-microphone-button">Begin recording session</button> 
      </div>
      <div id="buttons-controls">
        <div class="recording-buttons">
          <button class="start-recording-button" disabled>
            <div class=record-text>Record</div>
            <span class=start-emoji style="font-size:200%">⏺️</span>
          </button>
          <button class="stop-recording-button" disabled>
            <div class=stop-text>Stop</div>
            <span class=stop-emoji style="font-size:200%"></span>
          </button>
        </div>
        <div class="audio-controls">
        <audio controls></audio>
      </div>
      </div>  
      <div class=download-link>
            <a download class=download-zip><span class=zip-file-icon>📁</span>Download</a>
      </div>
      </div>
      
    `
    this.mediaRecorder = null
    this.listen()
  }

  set audioContext(context){
    this.context = context
  }

  set stream(stream){
    this.mediaRecorder = new MediaRecorder(stream)
    this.querySelector(".start-recording-button").removeAttribute('disabled', true)
    this.mediaRecorder.addEventListener('dataavailable', async dataavailableEvent => { // @TODO check if ok to async here?
      // grab data, create blob, create <audio>, get duration
      this.blob = dataavailableEvent.data
      let blobURL = URL.createObjectURL(this.blob)

      let arrayBuffer = await this.blob.arrayBuffer()
      this.audioBuffer = await this.context.decodeAudioData(arrayBuffer)
      this.duration = this.audioBuffer.duration

      this.audio = this.querySelector('audio')
      this.audio.src = blobURL
      this.dispatchEvent(new CustomEvent("word-recorded", {
        bubbles: true
      }))

      this.audio.addEventListener('canplaythrough', canplaythroughEvent => {
        // this.duration = this.audio.duration
        // put this style shifting somewhere else
        this.classList.add("recording-completed")
        this.querySelector(".start-recording-button").innerHTML = `Re-record <span style="font-size:200%">⏺️</span>`
        this.querySelector(".audio-controls").style.display = "flex"
      })
      
    })
  }

  set data(word){
    this.word = word
    this.render()
  }

  get data(){
    return this.word
  }

//   render(){
//     Object.entries(this.word)
//       .forEach(([key,value]) => {
//         let selector = `.${key}`
//         if(this.querySelector(selector)){
//           this.querySelector(selector)
//             .textContent = value
//         }
//       })
//   }

  listen(){
    this.querySelector('.start-recording-button')
    // got rid of connectedCallback and made this async. Unsure if that's going to spell trouble in the future.
      .addEventListener('click', async clickEvent => {
        let stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        this.stream = stream
        this.context = new AudioContext()
        if(this.mediaRecorder){
          this.mediaRecorder.start()
        }
        let timeFromMax = 1500
        let stopText = this.querySelector(".stop-text")
        let stopEmoji = this.querySelector(".stop-emoji")
        stopEmoji.textContent = ""
        stopText.style.fontSize = "large"
        stopText.textContent = "3"
        let decrement = setInterval(() => {
          if (timeFromMax > 500) {
            stopText.textContent = timeFromMax / 500 - 1
            timeFromMax -= 500
          }
          else {
              stopText.textContent = "Stop"
              stopEmoji.textContent = "⏹️"
              clearInterval(decrement)
          }
        }, (500))
        this.querySelector(".stop-recording-button").removeAttribute("disabled")
        this.querySelector(".start-recording-button").setAttribute("disabled", true)
        this.classList.remove("recording-completed")
    })

    this.querySelector('.stop-recording-button').
      addEventListener('click', clickEvent => {
        if(this.mediaRecorder){
          setTimeout(() => {
            this.mediaRecorder.stop()
          }, 500)
        }
        this.querySelector(".stop-recording-button").setAttribute("disabled", true)
        this.querySelector(".start-recording-button").removeAttribute("disabled")
    })
    
  //   this.querySelector(".download-zip").addEventListener("click", async clickEvent => {
  //     let audioBuffer = await blobToAudioBuffer(this.blob, this.context)
  //     let audioWAV = audioBufferToWav(audioBuffer)
  //   //   let JSONDownload = this.generateJSONDownload()
  //     this.audioWAV = audioWAV
  //     let JSONDownload = new Blob([JSON.stringify(recordWordsData, null, 2)]) // do i need to give a type?
  //     let files = [
  //       { name: this.audioDownloadFileName, content: audioWAV },
  //       { name: this.jsonDownloadFileName, content: JSONDownload }
  //     ]

  //     let zip = JSZip()
  //     files.forEach(file => {
  //       zip.file(file.name, file.content)
  //     })
      
  //     // Generate the zip file as a blob
  //     let zipBlob = await zip.generateAsync({ type: 'blob' })
  //     try {
  //       let downloadLink = document.createElement('a')
  //       downloadLink.href = URL.createObjectURL(zipBlob)
  //       downloadLink.download = this.zipDownloadFileName
  //       downloadLink.click()
  //     } catch (error) {
  //       // Handle the error
  //       console.error('Error zipping files:', error)
  //     }
  //   })
  // }
  this.querySelector(".download-zip").addEventListener("click", async clickEvent => {
    await this.downloadZIP({"ID":"wdij"})
  })
}
  downloadZIP = async (metadataObject) => {
    let fileName = new Date().getTime().toString()
    let audioWAV = await this.makeWAV()
    let audioFileName = fileName + '.wav'
    let jsonFileName = fileName + '.json'
    let zipFileName = fileName + '.zip'
    let jsonData = new Blob([JSON.stringify(metadataObject, null, 2)], { type: `Object` })
    let files = [
        { name: audioFileName, content: audioWAV },
        { name: jsonFileName, content: jsonData }
      ]

      let zip = JSZip()
      files.forEach(file => {
        zip.file(file.name, file.content)
      })
      
      // Generate the zip file as a blob
      let zipBlob = await zip.generateAsync({ type: 'blob' })
      try {
        let downloadLink = document.createElement('a')
        downloadLink.href = URL.createObjectURL(zipBlob)
        downloadLink.download = this.zipFileName
        downloadLink.click()
      } catch (error) {
        // Handle the error
        console.error('Error zipping files:', error)
    }
  }
  makeWAV = async () => {
    let audioBuffer = await blobToAudioBuffer(this.blob, this.context)
    let audioWAV = audioBufferToWav(audioBuffer)
    return audioWAV
    }
}
// co-authored by Patrick Hall and Sunkulp Ananthanarayan
// part of work during Hall's postdoc and Ananthanarayan's postbac at Yale
// working with the Chirila lab, under Claire Bowern as PI
customElements.define('record-task', RecordTask)

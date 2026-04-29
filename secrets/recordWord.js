// co-authored by Patrick Hall and Sunkulp Ananthanarayan
// part of work during Hall's postdoc and Ananthanarayan's postbac at Yale
// working with the Chirila lab, under Claire Bowern as PI

export class RecordWord extends HTMLElement {
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

  connectedCallback() {
    this.querySelector('.enable-microphone-button')
      .addEventListener('click', async clickEvent => {
        // ask for permission to use mic before enabling record buttons

        let stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        this.stream = stream
        this.context = new AudioContext()

        // this.passStream(stream)
        // this.passAudioContext(this.audioContext)

        this.listen()
      })
  }

  set data(word){
    this.word = word
    this.render()
  }

  get data(){
    return this.word
  }

  render(){
    Object.entries(this.word)
      .forEach(([key,value]) => {
        let selector = `.${key}`
        if(this.querySelector(selector)){
          this.querySelector(selector)
            .textContent = value
        }
      })
  }

  listen(){
    this.querySelector('.start-recording-button')
      .addEventListener('click', clickEvent => {
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
              stopText.textContent = ""
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
  }
}


customElements.define('record-word', RecordWord)

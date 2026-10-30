import { audioBufferToWav } from "./audio-buffer-to-wav.js"

let simpleCombineAudioBlobs = audioBlobs => {
  let combinedBlob = new Blob(audioBlobs)
  let combinedAudio = this.querySelector('audio.combined')
  combinedAudio.src = URL.createObjectURL( combinedBlob)
}


let concatenateAudioBuffer = (a, b, audioContext) => { // a and b must be audioBuffers
  let numberOfChannels = Math.min( a.numberOfChannels, b.numberOfChannels )
  let tmp = audioContext.createBuffer( numberOfChannels, (a.length + b.length), a.sampleRate )

  for (let i=0; i < numberOfChannels; i++) {
    let channel = tmp.getChannelData(i)
    channel.set( a.getChannelData(i), 0)
    channel.set( b.getChannelData(i), a.length)
  }

  return tmp
}


let  blobToAudioBuffer = async (blob, audioContext) => {
  let response = await new Response(blob)
  let arrayBuffer = await response.arrayBuffer()
  let audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
  return audioBuffer
}

// let blobToAudioBuffer = (blob) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = event => {
//       context.decodeAudioData(event.target.result, buffer => {
//         resolve(buffer);
//       }, error => {
//         reject(error);
//       });
//     };
//     reader.onerror = reject;
//     reader.readAsArrayBuffer(blob);
//   });
// }

let concatenateAudioWithSilence = audioBlobs => {
  const audioContext = new AudioContext();
  const output = audioContext.createBuffer(1, 1, audioContext.sampleRate * 3);

  return Promise.all(Array.from(audioBlobs).map(audioBlob => blobToAudioBuffer(audioBlob, audioContext)))
    .then(audioBuffers => {
      const totalDuration = audioBuffers.reduce((duration, buffer) => duration + buffer.duration, 0);
      const concatBuffer = audioContext.createBuffer(1, audioContext.sampleRate * (totalDuration + 3 * (audioBuffers.length - 1)), audioContext.sampleRate);
      const channelData = concatBuffer.getChannelData(0);
      let offset = 0;

      audioBuffers.forEach((buffer, index) => {
        const bufferData = buffer.getChannelData(0);
        channelData.set(bufferData, offset);
        offset += bufferData.length;

        if (index < audioBuffers.length - 1) {
          const silenceData = output.getChannelData(0);
          channelData.set(silenceData, offset);
          offset += silenceData.length;
        }
      });

      return concatBuffer;
    });


}



export {
  blobToAudioBuffer,
  audioBufferToWav,
  concatenateAudioBuffer,
  concatenateAudioWithSilence
}
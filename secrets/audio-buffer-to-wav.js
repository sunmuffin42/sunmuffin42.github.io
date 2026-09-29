let audioBufferToWav = (buffer, options) => {
  options = options || {}

  let channelCount = buffer.numberOfChannels
  let sampleRate = buffer.sampleRate
  let format = options.float32 ? 3 : 1
  let bitDepth = format === 3 ? 32 : 16

  let result
  if (channelCount === 2) {
    result = interleave(buffer.getChannelData(0), buffer.getChannelData(1))
  } else {
    result = buffer.getChannelData(0)
  }

  return encodeWAV(result, format, sampleRate, channelCount, bitDepth)
}

let encodeWAV = (samples, format, sampleRate, channelCount, bitDepth) => {
  let bytesPerSample = bitDepth / 8
  let blockAlign = channelCount * bytesPerSample

  let buffer = new ArrayBuffer(44 + samples.length * bytesPerSample)
  let view = new DataView(buffer)

  
  writeString(view, 0, 'RIFF')                                  /* RIFF identifier */
  view.setUint32(4, 36 + samples.length * bytesPerSample, true) /* RIFF chunk length */
  writeString(view, 8, 'WAVE')                                  /* RIFF type */
  writeString(view, 12, 'fmt ')                                 /* format chunk identifier */
  view.setUint32(16, 16, true)                                  /* format chunk length */
  view.setUint16(20, format, true)                              /* sample format (raw) */
  view.setUint16(22, channelCount, true)                        /* channel count */
  view.setUint32(24, sampleRate, true)                          /* sample rate */
  view.setUint32(28, sampleRate * blockAlign, true)             /* byte rate (sample rate * block align) */
  view.setUint16(32, blockAlign, true)                          /* block align (channel count * bytes per sample) */
  view.setUint16(34, bitDepth, true)                            /* bits per sample */
  writeString(view, 36, 'data')                                 /* data chunk identifier */
  view.setUint32(40, samples.length * bytesPerSample, true)     /* data chunk length */
  if (format === 1) { // Raw PCM
    floatTo16BitPCM(view, 44, samples)
  } else {
    writeFloat32(view, 44, samples)
  }

  return buffer
}

let interleave = (inputL, inputR) => {
  let length = inputL.length + inputR.length
  let result = new Float32Array(length)

  let index = 0
  let inputIndex = 0

  while (index < length) {
    result[index++] = inputL[inputIndex]
    result[index++] = inputR[inputIndex]
    inputIndex++
  }
  return result
}

let writeFloat32 = (output, offset, input) => {
  for (let i = 0; i < input.length; i++, offset += 4) {
    output.setFloat32(offset, input[i], true)
  }
}

let floatTo16BitPCM = (output, offset, input) => {
  for (let i = 0; i < input.length; i++, offset += 2) {
    let s = Math.max(-1, Math.min(1, input[i]))
    output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true)
  }
}

let writeString = (view, offset, string) => {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i))
  }
}

export {audioBufferToWav}
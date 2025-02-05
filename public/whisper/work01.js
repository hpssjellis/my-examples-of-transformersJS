// work01.js

self.onmessage = function(e) {
  const { type, sampleRate, chunkDuration } = e.data;

  if (type === 'startRecording') {
    let audioContext = new (self.AudioContext || self.webkitAudioContext)({ sampleRate });
    let audioBuffer = [];

    navigator.mediaDevices.getUserMedia({ audio: true }).then(mediaStream => {
      const source = audioContext.createMediaStreamSource(mediaStream);
      const processorNode = audioContext.createScriptProcessor(16384, 1, 1);

      source.connect(processorNode);
      processorNode.connect(audioContext.destination);

      processorNode.onaudioprocess = async (event) => {
        const audioData = event.inputBuffer.getChannelData(0);
        audioBuffer.push(...audioData);

        if (audioBuffer.length >= sampleRate * chunkDuration) {
          const chunk = audioBuffer.slice(0, sampleRate * chunkDuration);
          audioBuffer = audioBuffer.slice(sampleRate * chunkDuration);

          const float32Chunk = new Float32Array(chunk);
          // Post the chunk back to the main thread
          self.postMessage({ type: 'audioChunk', chunk: float32Chunk });
        }
      };

      console.log("Live transcription started...");
    }).catch(err => {
      console.error('Error accessing audio stream:', err);
      self.postMessage({ type: 'error', message: err.message });
    });
  }
};


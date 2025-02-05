//importScripts('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.2.2');


    // import { pipeline, read_audio } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers';   // use to test if latest works

    import { pipeline, read_audio } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.2.2';

let asrPipeline;

async function loadModel(language) {
  asrPipeline = await pipeline("automatic-speech-recognition", "Xenova/whisper-base", { language });
  postMessage({ type: 'loaded' });
}

async function transcribeAudio(audioChunk) {
  if (!asrPipeline) {
    postMessage({ type: 'error', message: 'Model not loaded' });
    return;
  }

  const result = await asrPipeline(new Float32Array(audioChunk));
  postMessage({ type: 'transcription', text: result.text.trim() });
}

onmessage = function (event) {
  if (event.data.type === 'loadModel') {
    loadModel(event.data.language);
  } else if (event.data.type === 'transcribe') {
    transcribeAudio(event.data.audioChunk);
  }
};

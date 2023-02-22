import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

// all the settings here
const prompt = "What is the meaning of life? I think it can be seen as a"
const face_url = "https://i.imgur.com/NUr0Lhb.jpg"
const voice_cloning_files = [
  "assets/voice1.wav", 
  "assets/voice2.wav", 
  "assets/voice3.wav"
]

// 1) generate the text with a GPT-3 completion
let result1 = await eden.create("complete", {
  prompt: prompt
});
console.log(result1);
let completion = await fetch(result1.uri).then(response => response.text());

// 2) speak the completion with a TTS model on a cloned voice
const voice_file_urls = await eden.uploadFiles(voice_cloning_files);
let result2 = await eden.create("tts", {
  text: completion,
  voice: "clone",
  voice_file_urls: voice_file_urls,
  preset: "standard",
});
console.log(result2);

// 3) generate a lip-synced video from the speech and face
let result3 = await eden.create("wav2lip", {
  speech_url: result2.uri,
  face_url: face_url,
  gfpgan: true,
  gfpgan_upscale: 2.0
});

// final result here
console.log(result3);

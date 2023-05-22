import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let voice_files = [
  "assets/voice1.wav", 
  "assets/voice2.wav", 
  "assets/voice3.wav"
]

const voice_file_urls = await eden.uploadFiles(voice_files);

let config = {
  text: "The world is truly a beautiful place.",
  voice: "clone",
  voice_file_urls: voice_file_urls,
  preset: "fast",
}

console.log(config)

let result = await eden.create("tts", config);

console.log(result);

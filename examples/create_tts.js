import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

eden.loginApi(
  "26c71dbb6b41568e952ee524b6648f3423a80b80",
  "85a75527169427b0d2b7bf02cf973bb2e1595986"
);

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

import {EdenClient} from "../eden.js";

let eden = new EdenClient();

eden.loginApi(
  "admin",
  "admin"
)

let voice_files = [
  "assets/voice1.wav", 
  "assets/voice2.wav", 
  "assets/voice3.wav"
]

const voice_file_urls = await eden.uploadFiles(voice_files);

let config = {
  text: "This can sometimes take around 3 minutes while the model boots up. If you'd like to find out more about why this happens, take a look at the section on cold boots of our guide on how Replicate works.",
  voice: "clone",
  voice_file_urls: voice_file_urls,
  preset: "fast",
}

console.log(config)

let result = await eden.create("tts", config);

console.log(result);

import EdenClient from "../eden.js";

let eden = new EdenClient();

eden.loginApi(
  "admin",
  "admin"
)

// if you want to clone a voice, upload the audio files first
let audio_files = ['test1.wav', 'test2.wav', 'test3.wav']
let audio_urls = [];
for (let audio_file of audio_files) {
  let result = await eden.uploadMedia(audio_file);
  audio_urls.push(result.task.output[0]);
}
//voice_file_urls: audio_urls,


let config = {
  text: "An astronaut on the moon riding a horse, cartoon 1920s",
  voice: "random",
  preset: "fast",
}

let result = await eden.create("tts", config);

console.log(result);


/* Alternatively, start the prediction asynchronously and poll for the result */

//let taskId = await eden.startTask("create", config);
//let result = await eden.getTaskStatus(taskId);
//console.log(result);
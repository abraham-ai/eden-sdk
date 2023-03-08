import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let config = {
  text: "The world is truly a beautiful place.",
  voice: "Jordan"
}

console.log(config)

let result = await eden.create("tts_fast", config);

console.log(result);

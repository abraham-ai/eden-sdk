import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let result = await eden.uploadFile("/Users/genekogan/Downloads/monster2.wav");
console.log(result);

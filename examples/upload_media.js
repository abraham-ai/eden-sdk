import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

//let result = await eden.uploadFile("/Users/genekogan/Downloads/monster2.wav");
console.log("lets do it!")
let result = await eden.uploadFile("/Users/genekogan/Downloads/c0b2dfbf24607bb7ca73c237116f0143 copysss.png");
console.log(result);

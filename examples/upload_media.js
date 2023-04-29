import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let result = await eden.uploadFile("/Users/genekogan/Downloads/example.jpg");
console.log(result);
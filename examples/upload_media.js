import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let result = await eden.uploadFile("assets/test.jpg");
console.log(result);

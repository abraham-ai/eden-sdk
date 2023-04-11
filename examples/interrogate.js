import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let result = await eden.uploadFile("assets/test.jpg");
console.log(result);

let config = {
  init_image_data: result.url
}

result = await eden.create("interrogate", config);

console.log(result);


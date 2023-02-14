import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

eden.loginApi(
  "26c71dbb6b41568e952ee524b6648f3423a80b80",
  "85a75527169427b0d2b7bf02cf973bb2e1595986"
);

let result = await eden.uploadFile("assets/test.jpg");
console.log(result);

let config = {
  init_image_data: result.url
}

result = await eden.create("interrogate", config);

console.log(result);


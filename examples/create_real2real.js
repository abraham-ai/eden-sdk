import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

eden.loginApi(
  "26c71dbb6b41568e952ee524b6648f3423a80b80",
  "85a75527169427b0d2b7bf02cf973bb2e1595986"
);

let files = [
  'assets/test.jpg',
  'assets/test.jpg',
]

let result = await eden.uploadFiles(files);

console.log(result);

let config = {
  interpolation_init_images: result,
  n_frames: 10,
  width: 768,
  height: 512
}

result = await eden.create("real2real", config);

console.log(result);

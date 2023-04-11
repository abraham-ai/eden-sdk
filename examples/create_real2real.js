import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

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

import Eden from "../Eden.js";

const apiKey = "YOUR_API_KEY";
const apiSecret = "YOUR_API_SECRET";

let eden = new Eden(apiKey, apiSecret);

let config = {
  text_input: "hello world i am a dog",
  upscale_f: 1.0,
  sampler: "klms",
  stream: true, 
  n_samples: 1
}

let result = await eden.create("create", config);

console.log(result);

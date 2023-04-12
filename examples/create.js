import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let manna = await eden.getManna();
console.log(manna);

let config = {
  text_input: "An astronaut on the moon riding a horse, cartoon 1920s",
  interpolation_texts: [
    "An astronaut on the moon riding a horse, cartoon 1920s",
    "A volleyball player on the moon riding a horse, cartoon 1950s"
  ],
  n_frames: 20,
  width: 768,
  height: 512
}

let config2 = {
  "text_input": "a dog jumps over a rainbow",
  "sampler": "euler",
  "upscale_f": 2.0
}

let metadata = {
  name: "test metadata", 
  description: "foo bar"
}

//let result = await eden.create("interpolate", config);
let result = await eden.create("create", config2, metadata=metadata);
console.log(result);

manna = await eden.getManna();
console.log(manna);


/* Alternatively, start the prediction asynchronously and poll for the result */

//let taskId = await eden.startTask("create", config);
//let result = await eden.getTaskStatus(taskId);
//console.log(result);
import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let manna = await eden.getManna();
console.log(manna);

let metadata = {
  name: "test metadata", 
  description: "foo bar"
}

let config = {
  "text_input": "a dog jumping over a fence",
  "upscale_f": 1.5
}
let config2 = {
  text_input: "An astronaut on the moon riding a horse, cartoon 1920s",
  interpolation_texts: [
    "An astronaut on the moon riding a horse, cartoon 1920s",
    "A volleyball player on the moon riding a horse, cartoon 1950s"
  ],
  n_frames: 10,
  width: 768,
  height: 512
}

// let result = await eden.create("create", config, metadata=metadata);
let result = await eden.create("interpolate", config2, metadata=metadata);
console.log(result);
if (result.task?.error) {
  console.log("Error: " + result.task.error);
}

/* Alternatively, start the prediction asynchronously and poll for the result */

//let taskId = await eden.startTask("create", config);
//let result = await eden.getTaskStatus(taskId);
//console.log(result);
import EdenClient from "../eden.js";

let eden = new EdenClient();

eden.loginApi(
  "admin",
  "admin"
)

let manna = await eden.getManna();
console.log(manna);

let config = {
  text_input: "An astronaut on the moon riding a horse, cartoon 1920s",
  width: 768,
  height: 512
}

let result = await eden.create("create", config);

console.log(result);

manna = await eden.getManna();
console.log(manna);


/* Alternatively, start the prediction asynchronously and poll for the result */

//let taskId = await eden.startTask("create", config);
//let result = await eden.getTaskStatus(taskId);
//console.log(result);
import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

eden.loginApi(
  "26c71dbb6b41568e952ee524b6648f3423a80b80",
  "85a75527169427b0d2b7bf02cf973bb2e1595986"
);

let manna = await eden.getManna();
console.log(manna);

let config = {
  text_input: "An astronaut on the moon riding a horse, cartoon 1920s",
  width: 768,
  height: 512
}

let result = await eden.create("create", config);

console.log(result);

// console.log(result.task.output);
// console.log(result.task.output[0]);

manna = await eden.getManna();
console.log(manna);


/* Alternatively, start the prediction asynchronously and poll for the result */

//let taskId = await eden.startTask("create", config);
//let result = await eden.getTaskStatus(taskId);
//console.log(result);
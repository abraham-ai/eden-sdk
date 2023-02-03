import EdenClient from "../eden.js";

let eden = new EdenClient();

eden.loginApi(
  "4a5c24e304f959bcabcf7464a5754c644358a39c56f5604b",
  "de47cacca653a7333dac979b06426e8b251000e5eca18274"
)

let config = {
  text_input: "An astronaut on the moon riding a horse, cartoon 1920s",
  width: 768,
  height: 512
}

let result = await eden.create("create", config);

console.log(result);


/* Alternatively, start the prediction asynchronously and poll for the result */

//let taskId = await eden.startCreation("create", config);
//let result = await eden.getCreationStatus(taskId);
//console.log(result);


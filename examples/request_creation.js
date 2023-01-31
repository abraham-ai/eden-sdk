import Eden from "../eden.js";

let eden = new Eden();

let config = {
  text_input: "hello world i am a dog"
}

let result = await eden.create("create", config);

console.log(result);


/* Alternatively, start the prediction asynchronously and poll for the result */

//let taskId = await eden.startCreation("create", config);
//let result = await eden.getCreationStatus(taskId);
//console.log(result);


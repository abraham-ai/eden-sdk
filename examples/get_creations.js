import Eden from "../eden.js";

let eden = new Eden();

let myUserId = "63d1df819dd04b6c6cd62f77";
let result = await eden.getCreations(myUserId);

for (let creation of result) {
  let { task, uri } = creation;
  console.log(`prompt: ${task.config.text_input}`, `uri: ${uri}`);  
}

// look up an individual creation
const creationId = '63d1df819dd04b6c6cd62f77';
const creation = await eden.getCreation(creationId);
console.log(creation);

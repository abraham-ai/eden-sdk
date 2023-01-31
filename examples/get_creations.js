import Eden from "../eden.js";

let eden = new Eden();

// filter fields are all optional
let filter = {
  // creatorId: "63d1df819dd04b6c6cd62f77", //63d069ce1d6d1dc0c50f308a
  earliestTime: Date.parse("1/25/2023 13:01"),
  latestTime: Date.parse("2/1/2024 5:02"),
  limit: 50,
}

let result = await eden.getCreations(filter);
console.log(result);
for (let creation of result) {
  let { task, uri } = creation;
  console.log(`prompt: ${task.config.text_input}`, `uri: ${uri}`);  
}

// look up an individual creation
const creationId = '63d21cf9d9c66aac2a2dd6ab';
const creation = await eden.getCreation(creationId);
console.log(creation);

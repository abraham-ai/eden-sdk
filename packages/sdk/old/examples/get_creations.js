import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

// filter fields are all optional
let filter = {
  // username: "0x8566a0048b555BCd51E0a58C7391Fd594E92e545", //63dc34966c2eb37038a1c532  
  collectionId: "6434ed9b8b03b5a05d645ada",  // still needs to be done
  // generators: ["create"],
  // earliestTime: Date.parse("1/10/2021 13:01"),
  // latestTime: Date.parse("4/25/2023 5:02"),
  // limit: 500,
  // reactions: ["👍", "🔥"]
}

let result = await eden.getCreations(filter);
// console.log(result);
// for (let creation of result) {
//   const { task, uri } = creation;
//   console.log(`prompt: ${task.config.text_input}`, `uri: ${uri}`);  
// }

console.log(result);
console.log(result.length);
console.log(result[0].task.generator)
// look up an individual creation
// const creationId = '63dc3f4f136f1ba56e295940';
// const creation = await eden.getCreation(creationId);
// console.log(creation);

console.log("the filter", filter);
import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

eden.loginApi(
  "4a5c24e304f959bcabcf7464a5754c644358a39c56f5604b",
  "de47cacca653a7333dac979b06426e8b251000e5eca18274"
)

let collections = await eden.getCollections();
let collection = collections[2];

let creations = await eden.getCreations();
let creation = creations[4];

let result = await collection.addCreation(creation);
console.log(result);

result = await collection.removeCreation(creation);
console.log(result);

// //collection.rename
// //collection.delete

import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

eden.loginApi(
  "26c71dbb6b41568e952ee524b6648f3423a80b80",
  "85a75527169427b0d2b7bf02cf973bb2e1595986"
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

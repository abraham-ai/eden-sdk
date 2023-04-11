import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

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

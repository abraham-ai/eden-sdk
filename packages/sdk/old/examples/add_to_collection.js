import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let collections = await eden.getCollections();
console.log(collections);

let collection = await eden.createCollection('My Collection');

let creations = await eden.getCreations();
let creation = creations[4];

let result = await collection.addCreation(creation);
console.log(result);

result = await collection.removeCreation(creation);
console.log(result);

// //collection.rename
// //collection.delete

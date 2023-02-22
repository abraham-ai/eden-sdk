import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let creations = await eden.getCreations();

let creation = creations[0];
console.log(creation);

let result = await creation.react("👍");
console.log(result);

let reactions = await creation.getReactions();
console.log(reactions);

let collections = await creation.getCollections();
console.log(collections);


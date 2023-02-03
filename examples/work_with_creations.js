import EdenClient from "../eden.js";

let eden = new EdenClient();

eden.loginApi(
  "4a5c24e304f959bcabcf7464a5754c644358a39c56f5604b",
  "de47cacca653a7333dac979b06426e8b251000e5eca18274"
)

let creations = await eden.getCreations();

let creation = creations[4];
console.log(creation);

let result = await creation.react("👍");
console.log(result);

let reactions = await creation.getReactions();
console.log(reactions);

let collections = await creation.getCollections();
console.log(collections);


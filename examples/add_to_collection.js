import EdenClient from "../eden.js";

let eden = new EdenClient();

eden.loginApi(
  "4a5c24e304f959bcabcf7464a5754c644358a39c56f5604b",
  "de47cacca653a7333dac979b06426e8b251000e5eca18274"
)

let collections = await eden.getCollections();
let collection = collections[2];

let creations = await eden.getCreations();
let creation = creations[4];

// await collection.addCreation(creation);
// await collection.removeCreation(creation);

let creators = await eden.getCreators();
let creator = creators[0];

console.log(creator);

let me = await eden.getProfile();
console.log(me);

let result = await creator.follow();
console.log(result);

// result = await creator.unfollow();
// console.log(result);

console.log("====================================");

let following = await creator.getFollowing();
let followers = await creator.getFollowers();
console.log(following, followers);



//collection.rename
//collection.delete
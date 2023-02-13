import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

eden.loginApi(
  "4a5c24e304f959bcabcf7464a5754c644358a39c56f5604b",
  "de47cacca653a7333dac979b06426e8b251000e5eca18274"
);

let creators = await eden.getCreators();
let creator = creators[1];

let result = await creator.follow();
console.log(result);

result = await creator.unfollow();
console.log(result);

let following = await creator.getFollowing();
let followers = await creator.getFollowers();
console.log(following);
console.log(followers);

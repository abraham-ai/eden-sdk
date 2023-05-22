import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

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

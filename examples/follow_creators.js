import EdenClient from "../eden.js";

let eden = new EdenClient();

let creator = await eden.getCreator("63d1df819dd04b6c6cd62f77");

//console.log(creator.profile)

let result = await eden.follow(creator);
console.log(result)

let following = await creator.getFollowing();
let followers = await creator.getFollowers();

console.log(following)
console.log(followers)

let myId = await eden.getId();
let myCreator = await eden.getCreator(myId);

let myFollowing = await myCreator.getFollowing();
let myFollowers = await myCreator.getFollowers();

console.log("Following:", myFollowing);
console.log("Followers:", myFollowers);
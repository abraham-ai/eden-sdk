import Eden from "../eden.js";

let eden = new Eden();

const userToFollow = "63d1df819dd04b6c6cd62f77";
let result = await eden.follow(userToFollow);
console.log(result)

let myFollowing = await eden.getFollowing("63d1df819dd04b6c6cd62f77");
let myFollowers = await eden.getFollowers("63d1df819dd04b6c6cd62f77");

console.log("Following:", myFollowing);
console.log("Followers:", myFollowers);
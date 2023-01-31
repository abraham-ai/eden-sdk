import Eden from "../Eden.js";

let eden = new Eden();

let user = await eden.getProfile("63d1df819dd04b6c6cd62f77");
console.log(user);
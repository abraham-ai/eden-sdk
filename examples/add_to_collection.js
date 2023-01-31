import Eden from "../Eden.js";

let eden = new Eden();

let collection = await eden.createCollection("myTestCollection");
console.log(collection);
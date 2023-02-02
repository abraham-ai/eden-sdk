import EdenClient from "../eden.js";

let eden = new EdenClient();

let collection = await eden.createCollection("myTestCollection");
console.log(collection);


//collection.add
//collection.remove
//collection.rename
//collection.delete
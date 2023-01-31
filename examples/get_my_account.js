import Eden from "../eden.js";

let eden = new Eden();

let balance = await eden.getBalance();
console.log(`Balance: ${balance}`);

let apiKeys = await eden.getApiKeys();
console.log(apiKeys);


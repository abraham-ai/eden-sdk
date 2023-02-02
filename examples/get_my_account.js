import EdenClient from "../eden.js";

let eden = new EdenClient();

let manna = await eden.getManna();
console.log(`My Manna: ${manna}`);

let apiKeys = await eden.getApiKeys();
console.log(apiKeys);

// eden.updateProfile
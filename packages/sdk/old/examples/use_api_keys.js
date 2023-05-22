import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let result = await eden.createNewApiKey("test key");
console.log(result);

result = await eden.getApiKeys();
console.log(result);

const keyToDelete = result.apiKeys[0];
result = await eden.deleteApiKey(keyToDelete.apiKey);
console.log(result);

import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

eden.loginApi(
  "922679332fbc0f7823c93a276eae003c79baa1d8",
  "22cea409815a4d90701cfaf01defcd91d71f3ace"
);

let result = await eden.createNewApiKey("test key");
console.log(result);

result = await eden.getApiKeys();
console.log(result);

const keyToDelete = result.apiKeys[0];
result = await eden.deleteApiKey(keyToDelete.apiKey);
console.log(result);

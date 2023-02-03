import EdenClient from "../eden.js";

let eden = new EdenClient();
eden.setAuthToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2RiZThlYTRhOGFlYzlhMTEyNzU1Y2IiLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjc1MzU3NTkxfQ.X2xmUJdj1JHkGNPeQ9LBHPTXQ6IeXUvL5-l-ac8bwBc')

let result = await eden.getApiKeys();
console.log(result.apiKeys);

result = await eden.createNewApiKey("test key");
console.log(result);

result = await eden.deleteApiKey("13ec7816ef340a4a1c1b81f1a3184e4397e3202d");
console.log(result);

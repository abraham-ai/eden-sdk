import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let config = {
  prompt: "One upon a time, there lived",
}

let result = await eden.create("complete", config);
console.log(result);


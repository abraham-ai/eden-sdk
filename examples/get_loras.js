import {EdenClient} from "eden-sdk";

const eden = new EdenClient();


let loras = await eden.getLoras();
for (let lora of loras) {
  console.log(lora);
}

// get specific lora
let lora = await eden.getLora("63fba71a56e06925e8e96cd0");
console.log(lora);

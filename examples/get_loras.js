import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

// get all Loras
let loras = await eden.getLoras();
for (let lora of loras) {
  console.log(lora);
}

// get Loras for specific user
let loras_user = await eden.getLoras('0x267f327125903F6D562315A2c8a2e6c2Dc60C068');
for (let lora of loras_user) {
  console.log(lora);
}

// get specific lora
let lora = await eden.getLora("63fba71a56e06925e8e96cd0");
console.log(lora);

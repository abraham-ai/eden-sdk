import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let mints = await eden.getMints();
console.log(mints);


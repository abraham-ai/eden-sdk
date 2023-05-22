import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let result = await eden.getGenerators();
for (let generator of result.generators) {
  console.log(generator);
}

// get specific generator, latest version
let real2real = await eden.getGenerator("real2real");
console.log(real2real);

// or get a specific version
let real2real_v1 = await eden.getGenerator("real2real", "5c0bbf5c9b41c3549f2a70de7d00fc3fa9ef24594255ca0342894f02b3cdd022");
console.log(real2real_v1);
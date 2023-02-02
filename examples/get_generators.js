import EdenClient from "../eden.js";

let eden = new EdenClient();

let generators = await eden.getGenerators();
for (let generator of generators) {
  console.log(generator);
}

// get specific generator
let real2real = await eden.getGenerator("real2real");
console.log(real2real);
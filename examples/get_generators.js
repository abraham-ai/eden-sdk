import Eden from "../eden.js";

let eden = new Eden();

let generators = await eden.getGenerators();
for (let generator of generators) {
  console.log(generator);
}

// get specific generator
let real2real = await eden.getGenerator("real2real");
console.log(real2real);
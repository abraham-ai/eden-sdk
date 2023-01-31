import Eden from "../eden.js";

let eden = new Eden();

let config = {
  text_input: "A small black dog is running after a white cat in the grass and the cat is looking back"
}

let result = await eden.create("create", config);
console.log(result);

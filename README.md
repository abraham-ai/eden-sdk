# Eden SDK

### Creating an Eden instance

```
import Eden from "../Eden.js";

const apiKey = 'YOUR_API_KEY';
const apiSecret = 'YOUR_API_SECRET';

let eden = new Eden(apiKey, apiSecret);

```

### Making a creation

```
let config = {
  text_input: "Garden of Eden"
}

let result = await eden.create("create", config);

console.log(result);
```

### Starting a creation and polling for status

```
let config = {
  text_input: "Garden of Eden"
}

let taskId = await eden.startCreation("create", config);

let result = await eden.getCreationStatus(taskId);
console.log(result);
```

### Uploading an image

```
await eden.uploadMedia("image.jpg");
```

### Generator info

To get all of the parameters for a given generator (e.g. create):

```
let generator = await eden.getGenerator("create");
console.log(generator);
```
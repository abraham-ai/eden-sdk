# Eden SDK

See full examples in the examples directory.

### Creating an Eden instance

```
import {EdenClient} from "eden-sdk";

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

let taskId = await eden.startTask("create", config);

let result = await eden.getTaskStatus(taskId);
console.log(result);
```

### Uploading an image

```
let result = await eden.uploadFile("image.jpg");
```

Can also do multiple files at once:

```
let result = await eden.uploadFiles(["image1.jpg", "image2.jpg"]);
```

### Generator info

To get all of the parameters for a given generator (e.g. create):

```
let generator = await eden.getGenerator("create");
console.log(generator);
```

To get all the generators available:

```
let generators = await eden.getGenerators();
console.log(generators);
```
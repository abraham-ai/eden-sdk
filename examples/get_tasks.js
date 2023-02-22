import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let result = await eden.getTasks(["completed", "running"]);
console.log("Completed or failed tasks:", result.tasks);


import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

// filter fields are all optional
let filter = {
  status: ["completed"],
  generators: ["create"],
  earliestTime: Date.parse("2/2/2023 13:01"),
  // latestTime: Date.parse("2/25/2023 5:02"),
  limit: 500,
}

let result = await eden.getTasks(filter);
console.log("Tasks:", result.tasks);
console.log(result.tasks.length);

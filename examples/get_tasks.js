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

console.log("send the filter task");
console.log(filter);

let result = await eden.getTasks(filter);
console.log("Tasks:", result.tasks);
console.log(result.tasks.length);



Date.parse("3/2/2023 21:05")


//lastLoadTime Thu Mar 02 2023 21:05:02 GMT-0800 (Pacific Standard Time)
//earliestTime 1677819902081
//time      =  1677819902081
//->1677819902000
1677819902081
1675371660000
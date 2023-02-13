import { Collection } from "./collections.js";
import * as http from './http.js';

const progressFrames = ['-', '\\', '|', '/'];
  

export class Creation {
  
  constructor(creation) {
    Object.assign(this, creation);
    this.baseRoute = `/creation/${this._id}`;
  }

  react = async function(reaction) {
    const result = await http.post(`${this.baseRoute}/react`, {
      reaction: reaction
    });
    return result;
  }

  getRecreations = async function() {
    const result = await http.get(`${this.baseRoute}/recreations`);
    return result.map(creation => new Creation(creation));
  }

  getCollections = async function() {
    const result = await http.get(`${this.baseRoute}/collections`);
    return result.collections.map(collection => new Collection(collection.collectionId));
  }

  getReactions = async function() {
    const result = await http.get(`${this.baseRoute}/reactions`);
    return result.reactions;
  }

  //recreate = async function() {}
  //startRecration = async function() {}
};

export async function getCreations(filter) {
  filter = filter || {};
  const result = await http.post("/creations", filter);
  return result.creations.map(creation => new Creation(creation));
};

export async function getCreation(creationId) {
  if (!creationId) {
    throw new Error("Creation ID is required");
  }
  const result = await http.get(`/creation/${creationId}`);
  return new Creation(result.creation);
};

export async function startTask(generatorName, config, generatorVersion=null) {
  const request = {
    generatorName: generatorName,
    config: config,
    generatorVersion: generatorVersion,
  };
  const result = await http.post('/user/create', request);
  return result;
};

export async function getTaskStatus(taskId) {
  const data = { taskIds: [taskId] };
  const response = await http.post('/user/tasks', data);
  if (!response.tasks) {
    return { status: "failed", error: "Task not found" };
  }
  const task = response.tasks[0];
  const { status } = task;
  return { status, task };
};

export async function create(generatorName, config, generatorVersion=null, pollingInterval=2000) {
  let result = await this.startTask(generatorName, config, generatorVersion);
  if (result.error) {
    return result;
  }
  const taskId = result.taskId;
  console.log(`Starting task ${taskId}...`)
  let response = await this.getTaskStatus(taskId);
  let idx = 0;
  while (
    response.status == "pending" ||
    response.status == "starting" ||
    response.status == "running"
  ) {
    await new Promise((r) => setTimeout(r, pollingInterval));
    response = await this.getTaskStatus(taskId);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${progressFrames[idx++ % progressFrames.length]} ${taskId} ${response.status}`);
  }
  console.log("response")
  console.log(response)
  if (response.task && response.task.creation) {
    const creation = getCreation(response.task.creation);
    return creation;
  };
  return response;
};


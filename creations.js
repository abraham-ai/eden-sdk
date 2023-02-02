export class Creation {
  
  constructor(edenClient, creationId) {
    this.edenClient = edenClient;
    this.creationId = creationId;
    this.baseRoute = `/creation/${this.creationId}`;
  }

  get = async function(route, params) {
    return await this.edenClient.get(`${this.baseRoute}${route}`, params);
  }

  post = async function(route, params) {
    return await this.edenClient.post(`${this.baseRoute}${route}`, params);
  }

  react = async function(reaction) {
    return await this.post('/react/', {reaction: reaction});
  }

  getReactions = async function() {
    const result = await this.get('/recreations');
    return result.map(creationId => new Creation(this.edenClient, creationId));
  }

  //recreate = async function() {}
  //startRecration = async function() {}

  getRecreations = async function() {
    const result = await this.get('/recreations');
    return result.map(creation => new Creation(this.edenClient, creation));
  }

  getCollections = async function() {
    const result = await this.get('/collections');
    return result.map(collection => new Collection(this.edenClient, collection));
  }

};


export async function getCreations(filter) {
  const result = await this.post("/creations", filter);
  return result.map(creation => new Creation(this, creation));
};

export async function getCreation(creationId) {
  if (!creationId) {
    throw new Error("Creation ID is required");
  }
  const result = await this.get(`/creation/${creationId}`);
  return new Creation(this, result.creation);
};

export async function startTask(generatorName, config, generatorVersion=null) {
  const request = {
    generatorName: generatorName,
    config: config,
    generatorVersion: generatorVersion,
  };
  const result = await this.post('/user/tasks/create', request);
  return result.taskId;
};

export async function getTaskStatus(taskId) {
  const data = { taskIds: [taskId] };
  const response = await this.post('/user/tasks/fetch', data);
  if (!response.tasks) {
    return { status: "failed", error: "Task not found" };
  }
  const { status, output } = response.tasks[0];
  if (status == "completed") {
    const outputUrl = output.slice(-1);
    return { status, outputUrl };
  } else if (status == "failed") {
    return { status, error: "Prediction failed" };
  }
  return { status };
};

export async function create(generatorName, config, generatorVersion=null, pollingInterval=2000) {
  let taskId = await this.startTask(generatorName, config, generatorVersion);
  let response = await this.getTaskStatus(taskId);
  while (
    response.status == "pending" ||
    response.status == "starting" ||
    response.status == "running"
  ) {
    await new Promise((r) => setTimeout(r, pollingInterval));
    response = await this.getTaskStatus(taskId);
  }
  return response;
};


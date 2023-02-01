import {makeApiRequest} from './eden.js';


export const getCreations = async function(filter) {
  const result = await makeApiRequest(
    "post",
    this.API_URL + "/creations",
    filter,
  )
  return result.creations;
};

export const getCreation = async function(creationId) {
  if (!creationId) {
    throw new Error("Creation ID is required");
  }
  const result = await makeApiRequest(
    "get",
    this.API_URL + `/creation/${creationId}`,
    {},
  )
  return result.creation;
};

export const startCreation = async function(generatorName, config, generatorVersion=null) 
{
  const request = {
    generatorName: generatorName,
    config: config,
    generatorVersion: generatorVersion,
  };    
  const result = await makeApiRequest(
    'post', 
    this.API_URL + '/user/tasks/create', 
    request,
    this.headers,
  );

  return result.taskId;
};

export const getCreationStatus = async function(taskId) 
{
  const data = { taskIds: [taskId] };
  const response = await makeApiRequest(
    'post', 
    this.API_URL + '/user/tasks/fetch',
    data,
    this.headers,
  );
  let { status, output } = response.tasks[0];
  if (status == "completed") {
    const outputUrl = output.slice(-1);
    return { status, outputUrl };
  } 
  else if (status == "failed") {
    return { status, error: "Prediction failed" };
  }
  return { status };
};

export const create = async function(generatorName, config, generatorVersion=null, pollingInterval = 2000)
{
  let taskId = await this.startCreation(generatorName, config, generatorVersion);
  let response = await this.getCreationStatus(taskId);
  while (
    response.status == "pending" ||
    response.status == "starting" ||
    response.status == "running"
  ) {
    await new Promise((r) => setTimeout(r, pollingInterval));
    response = await this.getCreationStatus(taskId);
  }
  return response;
};

//export const getMyCreations() {
  // TODO: get my creations
//}

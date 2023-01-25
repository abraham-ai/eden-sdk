import axios from "axios";
import fs from 'fs/promises'
import FormData from 'form-data';

const EDEN_API_URL = "http://0.0.0.0:5050";

const makeApiRequest = async (method, url, data=null, headers=null) => 
{
  const response = await axios({
    method: method,
    url: url,
    data: data,
    headers: headers,
  });
  return response.data;
}

export class Eden 
{
  constructor(apiKey, apiSecret, apiUrl=null) 
  {
    this.API_URL = apiUrl ? apiUrl : EDEN_API_URL;
    this.headers = {
      'x-api-key': apiKey,
      'x-api-secret': apiSecret,
    }
  }

  async loginEth(message, signature) 
  {
    // this.headers = {
    //   Authorization: `Bearer ${authToken}`,
    // },
  }

  async startCreation(generatorName, config) 
  {
    const request = {
      generatorName: generatorName,
      config: config,
    };    
    const result = await makeApiRequest(
      'post', 
      this.API_URL + '/tasks/create', 
      request,
      this.headers,
    );    
    return result.taskId;
  };

  async getCreationStatus(taskId) {
    const data = { taskIds: [taskId] };
    const response = await makeApiRequest(
      'post', 
      this.API_URL + '/tasks/fetch',
      data,
      this.headers,
    );
    let { status, output } = response.tasks[0];
    if (status == "completed") {
      const outputUrl = output.slice(-1);
      return { status, outputUrl, error: null };
    } 
    else if (status == "failed") {
      return { status, outputUrl: null, error: "Prediction failed" };
    }
    return { status, outputUrl: null, error: null };
  };

  async create(generatorName, config, pollingInterval = 2000)
  {
    let taskId = await this.startCreation(generatorName, config);
    let response = await this.getCreationStatus(taskId);
    while (
      response.status == "pending" ||
      response.status == "starting" ||
      response.status == "running"
    ) {
      await new Promise((r) => setTimeout(r, pollingInterval));
      response = await this.getCreationStatus(taskId);
      console.log("response", response)
    }
    return response;
  };

  async getCreations(userId) {
    if (!userId) {
      return { data: [] };
    }
    const result = makeApiRequest(
      "post",
      this.API_URL + "/fetch",
      { userIds: [userId] },
    )
    return result;
  };

  async uploadMedia(filePath) {
    const media = await fs.readFile(filePath);
    const form = new FormData();
    form.append('media', media);
    const result = await makeApiRequest(
      'post', 
      this.API_URL + '/media',
      form,
      {...form.getHeaders(), ...this.headers},
    );    
    return result;
  };

  async createNewApiKey() {
    const result = await makeApiRequest(
      'post', 
      this.API_URL + '/api-key/create',
      this.headers,
    );    
    return {apiKey: result.apiKey, apiSecret: result.apiSecret};
  }

  //async getMyCreations() {
    // TODO: get my creations
  //}

  async getGenerators() {
    const result = await makeApiRequest(
      'get', 
      this.API_URL + '/generators',
    );
    return result.generators;
  }

  async getGenerator(generatorName) {
    const generators = await this.getGenerators();
    const generator = generators.filter(
      (obj) => {
        return obj.generatorName === generatorName
      });
    const latestGeneratorVersion = generator[0].versions[0];
    return latestGeneratorVersion;
  };

}

export default Eden;
import axios from "axios";
import dotenv from "dotenv";

import * as auth from './auth.js';
import * as creators from './creators.js';
import * as creations from './creations.js';
import * as collections from './collections.js';
import * as generators from './generators.js';

dotenv.config();

const EDEN_API_URL = process.env.EDEN_API_URL 
  ? process.env.EDEN_API_URL 
  : "https://api.eden.art";

const EDEN_API_KEY = process.env.EDEN_API_KEY 
  ? process.env.EDEN_API_KEY 
  : null;

const EDEN_API_SECRET = process.env.EDEN_API_SECRET 
  ? process.env.EDEN_API_SECRET
  : null; 

async function MakeHTTPRequest(method, url, data=null, headers=null) {
  const payload = {
    method: method,
    url: url,
    data: data,
    headers: headers,
  }
  try {
    const response = await axios(payload);
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
};

class EdenClient {

  constructor(apiKey=null, apiSecret=null, apiUrl=null) {

    this.setAuthToken = auth.setAuthToken.bind(this);
    this.getMyId = auth.getMyId.bind(this);
    this.loginApi = auth.loginApi.bind(this);
    this.loginEth = auth.loginEth.bind(this);
    this.getApiKeys = auth.getApiKeys.bind(this);
    this.createNewApiKey = auth.createNewApiKey.bind(this);
    this.deleteApiKey = auth.deleteApiKey.bind(this);
    this.getManna = auth.getManna.bind(this);
    this.updateProfile = auth.updateProfile.bind(this);
    this.uploadMedia = auth.uploadMedia.bind(this);

    this.getCreator = creators.getCreator.bind(this); 
    this.getCreators = creators.getCreators.bind(this);

    this.getCreations = creations.getCreations.bind(this);
    this.getCreation = creations.getCreation.bind(this);
    this.startTask = creations.startTask.bind(this);
    this.getTaskStatus = creations.getTaskStatus.bind(this);
    this.create = creations.create.bind(this);

    this.getCollections = collections.getCollections.bind(this);
    this.getCollection = collections.getCollection.bind(this);
    this.createCollection = collections.createCollection.bind(this);

    this.getGenerators = generators.getGenerators.bind(this);
    this.getGenerator = generators.getGenerator.bind(this);

    this.headers = {};
    this.API_URL = apiUrl ? apiUrl : EDEN_API_URL;
    this.API_KEY = apiKey ? apiKey : EDEN_API_KEY;
    this.API_SECRET = apiSecret ? apiSecret : EDEN_API_SECRET;
    
    if (this.API_URL && this.API_SECRET) {
      this.loginApi(this.API_KEY, this.API_SECRET);
    }

  };

  post = async function(route, data=null, headers=null) {
    const url = this.API_URL + route;
    headers = headers ? headers : this.headers;
    return MakeHTTPRequest('post', url, data, headers);
  }
  
  get = async function(route, data=null, headers=null) {
    const url = this.API_URL + route;
    return MakeHTTPRequest('get', url, data, headers);
  }

}

export default EdenClient;

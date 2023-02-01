import axios from "axios";
import dotenv from "dotenv";

import {Collection} from './Collection.js';
import {Creation} from './Creation.js';

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


export const MakeHTTPRequest = async (method, url, data=null, headers=null) => {
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
  
  setAuthToken = async function(authToken) {
    this.headers = {
      Authorization: `Bearer ${authToken}`,
    };
  };
  
  loginEth = async function(message, signature, address) {
    const request = {     
      address: address,
      message: message,
      signature: signature,
    }
    const result = await this.post('/user/login', request);
    this.setAuthToken(result.token);
    return result.token;
  };
  
  loginApi = async function(apiKey, apiSecret) {
    this.headers = {
      'x-api-key': apiKey,
      'x-api-secret': apiSecret,
    };
  };

  startCreation = async function(generatorName, config, generatorVersion=null) {
    const request = {
      generatorName: generatorName,
      config: config,
      generatorVersion: generatorVersion,
    };    
    const result = await this.post('/user/tasks/create', request);
    return result.taskId;
  };
  
  getCreationStatus = async function(taskId) {
    const data = { taskIds: [taskId] };
    const response = await this.post('/user/tasks/fetch', data);
    console.log(response)
    const { status, output } = response.tasks[0];
    if (status == "completed") {
      const outputUrl = output.slice(-1);
      return { status, outputUrl };
    } else if (status == "failed") {
      return { status, error: "Prediction failed" };
    }
    return { status };
  };
  
  create = async function(generatorName, config, generatorVersion=null, pollingInterval = 2000) {
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


  getCollection = async (name) => {
    // Fetch collection from API and return a Collection object
    // return fetch('/api/collections/' + name)
    //   .then(response => response.json())
    //   .then(data => new Collection(data));
    return new Collection({
      user: '0x123',
      name: name,
      creations: [
        new Creation({
          user: '0x123',
          task: '0x456',
          uri: 'https://ipfs.io/ipfs/Qm...',
          attributes: {
            name: 'My Creation',
            description: 'This is my creation',
            image: 'https://ipfs.io/ipfs/Qm...',
          },
          createdAt: '2021-01-01T00:00:00Z',
        }),
        new Creation({
          user: '0x123323',
          task: '0x456323',
          uri: 'https://ipfs.io/ipfs/Qm...',
          attributes: {
            name: 'A My Creation',
            description: 'T111 222his is my creation asd',
            image: 'https://ipfs.isrfadsfdsfo/ipfs/Qm...',
          },
          createdAt: '2021-01-01T00:00:00Z',
        }),
      ],
      createdAt: '2021-01-01T00:00:00Z',
    });
  }
}

// Export the SDK class

export default EdenClient;

// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// import { setAuthToken, loginEth, loginApi } from './auth.js';
// import { getCreations, getCreation, startCreation, getCreationStatus, create } from './creations.js';
// import { uploadMedia } from './media.js';
// import { getGenerators, getGenerator } from './generators.js';
// import { getCollection, getCollections, createCollection, updateCollection, addToCollection, removeFromCollection, renameCollection, deleteCollection } from './collections.js';
// import { getCreator, getCreators } from './creators.js';
// import { getFollowing, getFollowers, updateFollowing, follow, unfollow } from './follow.js';
// import { getProfile, updateProfile, getApiKeys, createNewApiKey, getBalance } from './user.js';


// const EDEN_API_URL = process.env.EDEN_API_URL 
//   ? process.env.EDEN_API_URL 
//   : "https://api.eden.art";

// const EDEN_API_KEY = process.env.EDEN_API_KEY 
//   ? process.env.EDEN_API_KEY 
//   : null;

// const EDEN_API_SECRET = process.env.EDEN_API_SECRET 
//   ? process.env.EDEN_API_SECRET
//   : null; 


// export const makeApiRequest = async (method, url, data=null, headers=null) => 
// {
//   const payload = {
//     method: method,
//     url: url,
//     data: data,
//     headers: headers,
//   }
//   //console.log("======================\n", payload);
//   try {
//     const response = await axios(payload);
//     return response.data;
//   } catch (error) {
//     return error.response.data.message;
//   }
// }

// export class Eden 
// {
//   constructor(apiKey=null, apiSecret=null, apiUrl=null) 
//   {
//     this.setAuthToken = setAuthToken; 
//     this.loginEth = loginEth; 
//     this.loginApi = loginApi;
    
//     this.getCreations = getCreations; 
//     this.getCreation = getCreation; 
//     this.startCreation = startCreation; 
//     this.getCreationStatus = getCreationStatus; 
//     this.create = create;
    
//     this.uploadMedia = uploadMedia;
    
//     this.getGenerators = getGenerators; 
//     this.getGenerator = getGenerator;
    
//     this.getCollection = getCollection; 
//     this.getCollections = getCollections; 
//     this.createCollection = createCollection; 
//     this.updateCollection = updateCollection;
//     this.addToCollection = addToCollection;
//     this.removeFromCollection = removeFromCollection;
//     this.renameCollection = renameCollection; 
//     this.deleteCollection = deleteCollection;
    
//     this.getCreator = getCreator; 
//     this.getCreators = getCreators;
    
//     this.getFollowing = getFollowing; 
//     this.getFollowers = getFollowers; 
//     this.updateFollowing = updateFollowing;
//     this.follow = follow; 
//     this.unfollow = unfollow;
    
//     this.getProfile = getProfile; 
//     this.updateProfile = updateProfile; 
//     this.getApiKeys = getApiKeys; 
//     this.createNewApiKey = createNewApiKey; 
//     this.getBalance = getBalance;

//     this.getBalance = (filter) => getCreations.call(this, filter); 

//     this.API_URL = apiUrl ? apiUrl : EDEN_API_URL;
//     this.API_KEY = apiKey ? apiKey : EDEN_API_KEY;
//     this.API_SECRET = apiSecret ? apiSecret : EDEN_API_SECRET;

//     if (this.API_URL && this.API_SECRET) {
//       this.loginApi(this.API_KEY, this.API_SECRET);
//     }
//   }
// }


// export default Eden;
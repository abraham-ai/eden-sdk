import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

import { setAuthToken, loginEth, loginApi } from './auth.js';
import { getCreations, getCreation, startCreation, getCreationStatus, create } from './creations.js';
import { uploadMedia } from './media.js';
import { getGenerators, getGenerator } from './generators.js';
import { getCollection, getCollections, createCollection, updateCollection, addToCollection, removeFromCollection, renameCollection, deleteCollection } from './collections.js';
import { getCreator, getCreators } from './creators.js';
import { getFollowing, getFollowers, updateFollowing, follow, unfollow } from './follow.js';
import { getProfile, updateProfile, getApiKeys, createNewApiKey, getBalance } from './user.js';


const EDEN_API_URL = process.env.EDEN_API_URL 
  ? process.env.EDEN_API_URL 
  : "https://api.eden.art";

const EDEN_API_KEY = process.env.EDEN_API_KEY 
  ? process.env.EDEN_API_KEY 
  : null;

const EDEN_API_SECRET = process.env.EDEN_API_SECRET 
  ? process.env.EDEN_API_SECRET
  : null; 


export const makeApiRequest = async (method, url, data=null, headers=null) => 
{
  const payload = {
    method: method,
    url: url,
    data: data,
    headers: headers,
  }
  // console.log("======================\n", payload);
  try {
    const response = await axios(payload);
    return response.data;
  } catch (error) {
    return error.response.data.message;
  }
}

export class Eden 
{
  constructor(apiKey=null, apiSecret=null, apiUrl=null) 
  {
    this.setAuthToken = setAuthToken; 
    this.loginEth = loginEth; 
    this.loginApi = loginApi;
    
    this.getCreations = getCreations; 
    this.getCreation = getCreation; 
    this.startCreation = startCreation; 
    this.getCreationStatus = getCreationStatus; 
    this.create = create;
    
    this.uploadMedia = uploadMedia;
    
    this.getGenerators = getGenerators; 
    this.getGenerator = getGenerator;
    
    this.getCollection = getCollection; 
    this.getCollections = getCollections; 
    this.createCollection = createCollection; 
    this.updateCollection = updateCollection;
    this.addToCollection = addToCollection;
    this.removeFromCollection = removeFromCollection;
    this.renameCollection = renameCollection; 
    this.deleteCollection = deleteCollection;
    
    this.getCreator = getCreator; 
    this.getCreators = getCreators;
    
    this.getFollowing = getFollowing; 
    this.getFollowers = getFollowers; 
    this.updateFollowing = updateFollowing;
    this.follow = follow; 
    this.unfollow = unfollow;
    
    this.getProfile = getProfile; 
    this.updateProfile = updateProfile; 
    this.getApiKeys = getApiKeys; 
    this.createNewApiKey = createNewApiKey; 
    this.getBalance = getBalance;

    this.API_URL = apiUrl ? apiUrl : EDEN_API_URL;
    this.API_KEY = apiKey ? apiKey : EDEN_API_KEY;
    this.API_SECRET = apiSecret ? apiSecret : EDEN_API_SECRET;

    if (this.API_URL && this.API_SECRET) {
      this.loginApi(this.API_KEY, this.API_SECRET);
    }
  }
}


export default Eden;
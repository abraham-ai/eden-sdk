

// Create a class for the Creation model
class Creation {
  constructor(data) {
    this.user = data.user;
    this.task = data.task;
    this.uri = data.uri;
    this.attributes = data.attributes;
    this.createdAt = data.createdAt;
  }
}

// Create a class for the Collection model
class Collection {
  constructor(data) {
    this.user = data.user;
    this.name = data.name;
    this.creations = data.creations.map(creationId => new Creation(creationId));
    this.createdAt = data.createdAt;
  }

  getCreations = async () => {
    // Fetch creations from API and return an array of Creation objects
    // return fetch('/api/collections/' + this.name + '/creations')
    //   .then(response => response.json())
    //   .then(data => data.map(creation => new Creation(creation)));
    return [
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
    ]
  }
}

// Create a class for the SDK
class EdenClient {
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
const Eden = new EdenClient();
export default Eden;



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
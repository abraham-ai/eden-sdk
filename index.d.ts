// export interface EdenApiResponse {
//   data: any;
//   message: string;
// }

export interface EdenClient {
  
  setAuthToken: (authToken: string) => void;
  loginEth: (message: string, signature: string, address: string) => Promise<string>;
  loginApi: (apiKey: string | null, apiSecret: string | null) => void;
  
  getCreations: (filter: object | null) => Promise<Array<object>>;
  getCreation: (creationId: string) => Promise<object>; 
  startCreation: (generatorName: string, config: object, generatorVersion: string) => Promise<string>; 
  getCreationStatus: (taskId: string) => Promise<object>; 
  create: (generatorName: string, config: object, generatorVersion: string) => Promise<object>; 


  uploadMedia : (filePath: string) => Promise<object>;
    
  getGenerators : () => Promise<Array[object]>;
  getGenerator : (generatorName: string) => Promise<object>;
  
  getCollection : (collectionId: string) => Promise<object>;
  getCollections : (userId: string | null) => Promise<Array[object]>;
  createCollection : (name: string) => Promise<object>;
  updateCollection : (collectionId: string, creationId: string, action: string) => Promise<object>;
  addToCollection : (collectionId: string, creationId: string) => Promise<object>;
  removeFromCollection : (collectionId: string, creationId: string) => Promise<object>;
  renameCollection : (collectionId: string, newName: string) => Promise<object>;
  deleteCollection : (collectionId: string) => Promise<object>;
  
  getCreator : (creatorId: string) => Promise<object>;
  getCreators : () => Promise<object>;
  
  getFollowing : (filter: object) => Promise<object>;
  getFollowers : (filter: object) => Promise<object>;
  updateFollowing : (filter: object) => Promise<object>;
  follow : (filter: object) => Promise<object>;
  unfollow : (filter: object) => Promise<object>;
  
  getProfile : (userId: string) => Promise<object>;
  updateProfile : (update: object) => Promise<object>;
  getApiKeys : () => Promise<Array[object]>;
  createNewApiKey : (note: string) => Promise<object>;
  getBalance : (filter: object) => Promise<number>;  
}

export declare class Eden implements EdenClient {
}

export default Eden;

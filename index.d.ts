declare class Creator {
  baseRoute: string;

  constructor(
    creator: any,
  );

  getFollowing(): Promise<Creator[]>;
  getFollowers(): Promise<Creator[]>;
  follow(): Promise<any>;
  unfollow(): Promise<any>;
  getProfile(): Promise<any>;
};

declare class Creation {
  baseRoute: string;

  constructor(
    creation: any,
  );

  react(reaction: string): Promise<any>;
  getRecreations(): Promise<Creation[]>;
  getCollections(): Promise<Collection[]>;
  getReactions(): Promise<any[]>;
};

declare class Collection {
  baseRoute: string;

  constructor(
    collection: any,
  );

  getCreations(): Promise<Creation[]>;
  addCreation(creation: any): Promise<any>;
  removeCreation(creation: any): Promise<any>;
  rename(newName: string): Promise<any>;
  delete(): Promise<any>;
};

declare class EdenClient {

  constructor(
    apiKey?: string | null, 
    apiSecret?: string | null, 
    apiUrl?: string | null,
  );
  
  setAuthToken(authToken: string): void;
  loginApi(apiKey: string, apiSecret: string): void;
  loginEth(message: string, signature: string, address:string): Promise<any>;  

  getManna(): Promise<any>;
  getProfile(): Promise<any>;
  updateProfile(update: any): Promise<any>;
  uploadFile(filePath: string): Promise<any>;
  getApiKeys(): Promise<any>;
  createNewApiKey(note: string): Promise<any>;
  deleteApiKey(apiKey: string): Promise<any>;

  getCreators(): Promise<Creator[]>;
  getCreator(creatorId: string): Promise<Creator>;
  
  getCreations(filter: any | null): Promise<Creation[]>;
  getCreation(creationId: string): Promise<Creation>;
  startTask(generatorName: string, config: any, generatorVersion?: string): Promise<any>;
  getTasks(status?: string | string[]): Promise<any>;
  getTaskStatus(taskId: string): Promise<any>;
  create(generatorName: string, config: any, generatorVersion?: string): Promise<any>;

  getCollections(userId: string | null): Promise<Collection[]>;
  getCollection(name: any): Promise<Collection>;
  createCollection(name: any): Promise<Collection>;

  getGenerators(): Promise<any>;
  getGenerator(generatorName: string, generatorVersion?: string): Promise<any>;
}

export {
  Creator,
  Creation,
  Collection,
  EdenClient,
}

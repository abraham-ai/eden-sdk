declare class Creator {
  baseRoute: string;

  constructor(
    creator: object,
  );

  getFollowing(): Promise<Creator[]>;
  getFollowers(): Promise<Creator[]>;
  follow(): Promise<object>;
  unfollow(): Promise<object>;
  getProfile(): Promise<object>;

};

declare class Creation {
  baseRoute: string;

  constructor(
    creation: object,
  );

  react(reaction: string): Promise<object>;
  getRecreations(): Promise<Creation[]>;
  getCollections(): Promise<Collection[]>;
  getReactions(): Promise<object[]>;
};

declare class Collection {
  baseRoute: string;

  constructor(
    collection: object,
  );

  getCreations(): Promise<Creation[]>;
  addCreation(creation: object): Promise<any>;
  removeCreation(creation: object): Promise<any>;
  rename(newName: string): Promise<any>;
  delete(): Promise<any>;
};

declare class EdenClient {

  constructor(
    apiKey: string | null, 
    apiSecret: string | null, 
    apiUrl: string | null
  );
  
  setAuthToken(authToken: string): void;
  loginApi(apiKey: string, apiSecret: string): void;
  loginEth(message: string, signature: string, address:string): Promise<string>;  

  getManna(): Promise<object>;
  getProfile(): Promise<object>;
  updateProfile(update: object): Promise<object>;
  uploadMedia(filePath: string): Promise<object>;
  getApiKeys(): Promise<object[]>;
  createNewApiKey(note: string): Promise<object>;
  deleteApiKey(apiKey: string): Promise<object>;

  getCreators(): Promise<Creator[]>;
  getCreator(creatorId: string): Promise<Creator>;
  
  getCreations(filter: object | null): Promise<Creation[]>;
  getCreation(creationId: string): Promise<Creation>;
  startTask(generatorName: string, config: object, generatorVersion: string | null): Promise<object>;
  getTaskStatus(taskId: string): Promise<object>;
  create(generatorName: string, config: object, generatorVersion: string | null): Promise<object>;

  getCollections(userId: string | null): Promise<Collection[]>;
  getCollection(name: any): Promise<Collection>;
  createCollection(name: any): Promise<Collection>;

  getGenerators(): Promise<object[]>;
  getGenerator(generatorName: string, generatorVersion: string | null): Promise<object>;
}

export {
  Creator,
  Creation,
  Collection,
  EdenClient,
}

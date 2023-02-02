declare class Creator {
  creationId: string;

  constructor(
    edenClient: any,
    creationId: string,
  );

  getFollowing(): Promise<Array[Creator]>;
  getFollowers(): Promise<Array[Creator]>;
  follow(): Promise<Any>;
  unfollow(): Promise<Any>;
  getProfile(): Promise<Creator>;
};

declare class Creation {
  creationId: string;

  constructor(
    edenClient: any,
    creationId: string,
  );

  react(reaction: string): Promise<any>;
  getReactions(): Promise<Array[any]>;
  getRecreations(): Promise<Array[Creation]>;
  getCollections(): Promise<Array[Collection]>;
};

declare class Collection {
  collectionId: string;
  // creations: Creation[];
  // createdAt: any;

  constructor(
    edenClient: any,
    collectionId: string,
  );

  getCreations(): Promise<Creation[]>;
  addCreation(): Promise<any>;
  removeCreation(): Promise<any>;
  rename(newName: string): Promise<any>;
  delete(): Promise<any>;
};

declare class EdenClient {

  constructor(
    apiKey: string | null, 
    apiSecret: string | null, 
    apiUrl: string | null
  );
  
  getCollection(
    name: any,
  ): Promise<Collection>;

  setAuthToken(
    authToken: string,
  ): void;
  
  loginEth(
    message: string, 
    signature: string, 
    address:string,
  ): Promise<string>;
  
  loginApi(
    apiKey: string,
    apiSecret: string,
  ): Promise<void>;

  startCreation(
    generatorName: string, 
    config: object, 
    generatorVersion:string
  ): Promise<string>;

  getCreationStatus(
    taskId: string
  ): Promise<object>;

  create(
    generatorName: string, 
    config: object, 
    generatorVersion: string
  ): Promise<object>;

}

export {
  Creator,
  Creation,
  Collection,
  EdenClient,
}

declare class Creation {
  user: any;
  task: any;
  uri: any;
  attributes: any;
  createdAt: any;

  constructor(data: {
    user: any;
    task: any;
    uri: any;
    attributes: any;
    createdAt: any;
  });
}

declare class Collection {
  user: any;
  name: any;
  creations: Creation[];
  createdAt: any;

  constructor(data: {
    user: any;
    name: any;
    creations: any[];
    createdAt: any;
  });

  getCreations(): Promise<Creation[]>;
}

declare class EdenClient {
  getCollection(name: any): Promise<Collection>;
}

declare const Eden: EdenClient;

export default Eden;

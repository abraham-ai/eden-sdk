export class Collection {
  
  constructor(edenClient, collectionId) {
    this.edenClient = edenClient;
    this.collectionId = collectionId;
    this.baseRoute = `/collection/${this.collectionId}`;
  }

  get = async function(route, params) {
    return await this.edenClient.get(`${this.baseRoute}${route}`, params);
  }

  post = async function(route, params) {
    return await this.edenClient.post(`${this.baseRoute}${route}`, params);
  }

  addCreation = async function(creationId) {
    const result = await this.post('/add', {
      creationId: creationId
    });
    return result;
  }

  removeCreation = async function(creationId) {
    const result = await this.post('/remove', {
      creationId: creationId
    });
    return result;
  }

  rename = async function(newName) {
    const result = await this.post('/rename', {
      name: newName
    });
    return result;
  }

  delete = async function() {
    const result = await this.post('/delete');
    return result;
  }
  
  getCreations = async function() {
    const result = await this.get('/creations');
    return result.map(creation => new Creation(this.edenClient, creation));
  }

};

export async function getCollections(userId) {
  const result = await this.get('/collections', {userId: userId});
  return result.map(collection => new Collection(this, collection));  
}

export async function getCollection(collectionId) {
  const result = await this.get(`/collection/${collectionId}`);
  return new Collection(this, result.collection);
}

export async function createCollection(name) {
  const result = await this.post('/collections/create', {name: name});
  return new Collection(this, result.collection);
}


import * as http from './http.js';

export class Collection {
  
  constructor(collection) {
    Object.assign(this, collection);
    this.baseRoute = `/collection/${this._id}`;
  }

  addCreation = async function(creation) {
    const result = await http.post(`${this.baseRoute}/add`, {
      creationId: creation._id
    });
    console.log(result);
    return result;
  }

  removeCreation = async function(creation) {
    const result = await http.post(`${this.baseRoute}/remove`, {
      creationId: creation._id
    });
    return result;
  }

  rename = async function(newName) {
    const result = await http.post(`${this.baseRoute}/rename`, {
      name: newName
    });
    return result;
  }

  delete = async function() {
    const result = await http.post(`${this.baseRoute}/delete`);
    return result;
  }
  
  getCreations = async function() {
    const result = await http.get(`${this.baseRoute}/creations`);
    return result.creations.map(creation => new Creation(creation._id));
  }
};

export async function getCollections(userId) {
  const result = await http.get('/collections', {
    userId: userId
  });
  return result.collections.map(collection => new Collection(collection));  
}

export async function getCollection(collectionId) {
  const result = await http.get(`/collection/${collectionId}`);
  return new Collection(result.collection);
}

export async function createCollection(name) {
  const result = await http.post('/collections/create', {
    name: name
  });
  return new Collection(result.collection);
}


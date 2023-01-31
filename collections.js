import {makeApiRequest} from './eden.js';


export const getCollection = async function(collectionId) 
{
  const result = await makeApiRequest(
    'get', 
    this.API_URL + `/collection/${collectionId}`,
    {},
    this.headers,
  );
  return result;
}

export const getCollections = async function(userId) 
{
  const result = await makeApiRequest(
    'get', 
    this.API_URL + '/collections',
    {userId: userId},
    this.headers,
  );
  return result;
}

export const createCollection = async function(name) 
{
  const result = await makeApiRequest(
    'post', 
    this.API_URL + '/collections/create',
    {name: name},
    this.headers,
  );
  return result;
}

export const updateCollection = async function(collectionId, creationId, action) 
{
  const result = await makeApiRequest(
    'post', 
    this.API_URL + '/collections/update',
    {
      collectionId: collectionId, 
      creationId: creationId,
      action: action
    },
    this.headers,
  );
  return result;
}

export const addToCollection = async function(collectionId, creationId) 
{
  return await updateCollection(collectionId, creationId, "add");
}

export const removeFromCollection = async function(collectionId, creationId) 
{
  return await updateCollection(collectionId, creationId, "remove");
}

export const renameCollection = async function(collectionId) 
{
  // todo
}

export const deleteCollection = async function(collectionId) 
{
  // todo
}

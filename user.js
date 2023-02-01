import {makeApiRequest} from './eden.js';


export const getProfile = async function(userId)
{
  const result = await makeApiRequest(
    'get', 
    this.API_URL + `/user/profile/${userId}`,
    {},
    this.headers,
  );
  return result;
}

export const updateProfile = async function(update)
{
  const result = await makeApiRequest(
    'post', 
    this.API_URL + '/creators',
    {},
    this.headers,
  );
  return result;
}

export const getApiKeys = async function() 
{
  const result = await makeApiRequest(
    'get', 
    this.API_URL + '/user/api/keys',
    {},
    this.headers,
  );
  return result;
};

export const createNewApiKey = async function(note) {
  const result = await makeApiRequest(
    'post', 
    this.API_URL + '/user/api/create',
    {note: note},
    this.headers,
  );    
  return {apiKey: result.apiKey, apiSecret: result.apiSecret};
}

export const deleteApiKey = async function(apiKey) {
  // todo
}

export const getBalance = async function() {
  const result = await makeApiRequest(
    'get', 
    this.API_URL + '/user/credits/balance',
    {},
    this.headers,
  );
  return result.balance;
};

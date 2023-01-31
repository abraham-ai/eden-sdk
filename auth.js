import {makeApiRequest} from './eden.js';

export const setAuthToken = async function(authToken) 
{
  this.headers = {
    Authorization: `Bearer ${authToken}`,
  };
};

export const loginEth = async function(message, signature, address) 
{
  const request = {     
    address: address,
    message: message,
    signature: signature,
  }
  const result = await makeApiRequest(
    'post', 
    this.API_URL + '/user/login', 
    request,
  );
  this.setAuthToken(result.token);
  console.log(`Signed in with ${result.token}`)
  return result.token;
};

export const loginApi = async function(apiKey, apiSecret) 
{
  this.headers = {
    'x-api-key': apiKey,
    'x-api-secret': apiSecret,
  };
};

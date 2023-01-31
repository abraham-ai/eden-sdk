import {makeApiRequest} from './eden.js';

export const getCreator = async function(creatorId)
{
  const result = await makeApiRequest(
    'get', 
    this.API_URL + `/user/creator/${creatorId}`,
    {},
    this.headers,
  );
  return result;
}

export const getCreators = async function()
{
  const result = await makeApiRequest(
    'get', 
    this.API_URL + '/creators',
    {},
    this.headers,
  );
  return result;
}
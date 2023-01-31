import {makeApiRequest} from './eden.js';

export const getFollowing = async function(userId) 
{
  const result = await makeApiRequest(
    'get', 
    this.API_URL + `/following/${userId}`,
    {},
    this.headers,
  );
  return result;
}

export const getFollowers = async function(userId)
{
  const result = await makeApiRequest(
    'get', 
    this.API_URL + `/followers/${userId}`,
    {},
    this.headers,
  );
  return result;
}

export const updateFollowing = async function(userId, action)
{
  const result = await makeApiRequest(
    'post', 
    this.API_URL + '/user/follow',
    {
      userId: userId,
      action: action
    },
    this.headers,
  );
  return result;
}

export const follow = async function(userId)
{
  return await this.updateFollowing(userId, "follow");
}

export const unfollow = async function(userId)
{
  return await this.updateFollowing(userId, "unfollow");
}

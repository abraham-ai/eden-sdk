export class Creator {
  
  constructor(edenClient, creator) {
    this.edenClient = edenClient;
    this.collectionId = creator._id;
    this.baseRoute = `/creator/${this.creatorId}`;
  }

  get = async function(route, params) {
    return await this.edenClient.get(`${this.baseRoute}${route}`, params);
  }

  post = async function(route, params) {
    return await this.edenClient.post(`${this.baseRoute}${route}`, params);
  }
  
  getFollowing = async function() {
    const result = await this.get('/following');
    return result.followers.map(follower => new Creator(this, follower));
  }

  getFollowers = async function() {
    const result = await this.get('/followers');
    return result.followers.map(follower => new Creator(this, follower));
  }

  follow = async function() {
    const result = await this.post('/follow');
    return result;
  }

  unfollow = async function() {
    const result = await this.post('/unfollow');
    return result;
  }

  getProfile = async function() {
    const result = await this.get('/profile');
    return result;
  }
  
};


export const getCreator = async function(creatorId) {
  const result = await this.get(`/creator/${creatorId}`);
  return new Creator(this, result.creator);
}

export const getCreators = async function() {
  const result = await this.get('/creators');
  return result.map(creator => new Creator(this, creator));
}
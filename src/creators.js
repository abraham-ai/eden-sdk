import * as http from './src/http.js';

export class Creator {
  
  constructor(creator) {
    Object.assign(this, creator);
    this.baseRoute = `/creator/${this._id}`;
  }
  
  getFollowing = async function() {
    const result = await http.get(`${this.baseRoute}/following`);
    return result.following.map(following => new Creator(following));
  }

  getFollowers = async function() {
    const result = await http.get(`${this.baseRoute}/followers`);
    return result.followers.map(follower => new Creator(follower));
  }

  follow = async function() {
    const result = await http.post(`${this.baseRoute}/follow`, {
      userId: this._id
    });
    return result;
  }

  unfollow = async function() {
    const result = await http.post(`${this.baseRoute}/unfollow`, {
      userId: this._id
    });
    return result;
  }

  getProfile = async function() {
    const result = await http.get(`${this.baseRoute}/profile`);
    return result;
  }  
};

export const getCreator = async function(creatorId) {
  const result = await http.get(`/creator/${creatorId}`);
  return new Creator(this, result.creator.user);
}

export const getCreators = async function() {
  const result = await http.post('/creators', {});
  return result.creators.map(creator => new Creator(creator));
}
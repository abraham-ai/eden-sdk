import * as http from './http.js';
import * as auth from './auth.js';
import * as creators from './creators.js';
import * as creations from './creations.js';
import * as collections from './collections.js';
import * as generators from './generators.js';


class EdenClient {

  constructor(apiKey=null, apiSecret=null, apiUrl=null) {
    
    this.post = http.post.bind(this);
    this.get = http.get.bind(this);

    this.setAuthToken = http.setAuthToken;
    this.loginApi = auth.loginApi.bind(this);
    this.loginEth = auth.loginEth.bind(this);

    this.getApiKeys = auth.getApiKeys.bind(this);
    this.createNewApiKey = auth.createNewApiKey.bind(this);
    this.deleteApiKey = auth.deleteApiKey.bind(this);
    this.getManna = auth.getManna.bind(this);
    this.getProfile = auth.getProfile.bind(this);
    this.updateProfile = auth.updateProfile.bind(this);
    this.uploadMedia = auth.uploadMedia.bind(this);

    this.getCreator = creators.getCreator.bind(this); 
    this.getCreators = creators.getCreators.bind(this);

    this.getCreations = creations.getCreations.bind(this);
    this.getCreation = creations.getCreation.bind(this);
    this.startTask = creations.startTask.bind(this);
    this.getTaskStatus = creations.getTaskStatus.bind(this);
    this.create = creations.create.bind(this);

    this.getCollections = collections.getCollections.bind(this);
    this.getCollection = collections.getCollection.bind(this);
    this.createCollection = collections.createCollection.bind(this);

    this.getGenerators = generators.getGenerators.bind(this);
    this.getGenerator = generators.getGenerator.bind(this);

    if (apiKey && apiSecret) {
      http.loginApi(apiKey, apiSecret);
    }
    if (apiUrl) {
      http.setApiUrl(apiUrl);
    }
  };
}

export default EdenClient;

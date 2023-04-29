import * as http from './http.js';
import * as auth from './auth.js';
import * as creators from './creators.js';
import * as creations from './creations.js';
import * as collections from './collections.js';
import * as mints from './mints.js';
import * as loras from './loras.js';
import * as generators from './generators.js';

import { Creator } from './creators.js';
import { Creation } from './creations.js';
import { Collection } from './collections.js';
import { Lora } from './loras.js';


class EdenClient {

  constructor(apiKey=null, apiSecret=null, apiUrl=null) {    
    this.post = http.post.bind(this);
    this.get = http.get.bind(this);
    this.getApiUrl = http.getApiUrl.bind(this);

    this.setAuthToken = auth.setAuthToken.bind(this);;
    this.loginApi = auth.loginApi.bind(this);
    this.loginEth = auth.loginEth.bind(this);

    this.getManna = auth.getManna.bind(this);
    this.getProfile = auth.getProfile.bind(this);
    this.updateProfile = auth.updateProfile.bind(this);
    this.uploadFile = auth.uploadFile.bind(this);
    this.uploadFiles = auth.uploadFiles.bind(this);
    this.getApiKeys = auth.getApiKeys.bind(this);
    this.createNewApiKey = auth.createNewApiKey.bind(this);
    this.deleteApiKey = auth.deleteApiKey.bind(this);

    this.getCreators = creators.getCreators.bind(this);
    this.getCreator = creators.getCreator.bind(this); 

    this.getCreations = creations.getCreations.bind(this);
    this.getCreation = creations.getCreation.bind(this);
    this.startTask = creations.startTask.bind(this);
    this.getTaskStatus = creations.getTaskStatus.bind(this);
    this.getTasks = creations.getTasks.bind(this);
    this.create = creations.create.bind(this);

    this.getCollections = collections.getCollections.bind(this);
    this.getCollection = collections.getCollection.bind(this);
    this.createCollection = collections.createCollection.bind(this);

    this.getMints = mints.getMints.bind(this);
    this.getMint = mints.getMint.bind(this);

    this.getLoras = loras.getLoras.bind(this);
    this.getLora = loras.getLora.bind(this);

    this.getGenerators = generators.getGenerators.bind(this);
    this.getGenerator = generators.getGenerator.bind(this);

    http.setApiUrl(apiUrl);    
    http.setApiKey(apiKey, apiSecret);    
  }

}

export {
  Creator,
  Creation,
  Collection,
  Lora,
  EdenClient,
}

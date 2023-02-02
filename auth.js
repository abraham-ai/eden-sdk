import fs from 'fs/promises'
import FormData from 'form-data';


export async function setAuthToken(authToken) {
  this.headers = {
    Authorization: `Bearer ${authToken}`,
  };
};

export async function getMyId() {
  const result = await this.post('/user/id');
  return result;
};

export async function loginApi(apiKey, apiSecret) {
  this.headers = {
    'x-api-key': apiKey,
    'x-api-secret': apiSecret,
  };
};

export async function loginEth(message, signature, address) {
  const request = {     
    address: address,
    message: message,
    signature: signature,
  }
  const result = await this.post('/user/login', request);
  this.setAuthToken(result.token);
  return result;
};

export const getApiKeys = async function() {
  const result = await this.get('/user/api/keys');
  return result;
};

export const createNewApiKey = async function(note) {
  const result = await this.get('/user/api/create', {
    note: note,
  });
  return result;
}

export const deleteApiKey = async function(apiKey) {
  const result = await this.get('/user/api/delete', {
    apiKey: apiKey,
  });
  return result;
}

export async function getManna() {
  const result = await this.get('/user/manna/balance');
  return result;
}

export async function updateProfile(update) {
  const result = await this.post('/user/updateProfile', update);
  return result;
}

export async function uploadMedia(filePath) {
  const media = await fs.readFile(filePath);
  const form = new FormData();
  form.append('media', media);
  const result = this.post(
    '/media/upload', 
    form,
    {...form.getHeaders(), ...this.headers},
  );
  return result;
};


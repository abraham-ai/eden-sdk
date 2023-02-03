import fs from 'fs/promises'
import FormData from 'form-data';

import * as http from './http.js';

export function setAuthToken(authToken) {
  http.setHeader({
    Authorization: `Bearer ${authToken}`,
  });
};

export async function loginEth(message, signature, address) {
  const request = {     
    address: address,
    message: message,
    signature: signature,
  }
  const result = await http.post('/user/login', request);
  setAuthToken(result.token);
  return result;
};

export function loginApi(apiKey, apiSecret) {
  http.setApiKey(apiKey, apiSecret);
};

export async function getProfile() {
  const result = await http.get('/user/profile');
  return result;
};

export async function updateProfile(update) {
  const result = await http.post('/user/profile/update', update);
  return result;
};

export const getApiKeys = async function() {
  const result = await http.get('/user/api/keys');
  return result;
};

export const createNewApiKey = async function(note) {
  const result = await http.post('/user/api/create', {
    note: note,
  });
  return result;
}

export const deleteApiKey = async function(apiKey) {
  const result = await http.post('/user/api/delete', {
    apiKey: apiKey,
  });
  return result;
}

export async function getManna() {
  const result = await http.get('/user/manna/balance');
  return result;
}

export async function uploadMedia(filePath) {
  const media = await fs.readFile(filePath);
  const form = new FormData();
  form.append('media', media);
  const result = http.post(
    '/media/upload', 
    form,
    {...form.getHeaders(), ...http.getHeaders()},
  );
  return result;
};

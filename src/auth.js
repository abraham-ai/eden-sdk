import fs from 'fs/promises'
import FormData from 'form-data';

import * as http from './http.js';

export function setAuthToken(authToken) {
  http.setHeaders({
    Authorization: `Bearer ${authToken}`,
  });
};

export function loginApi(apiKey, apiSecret) {
  http.setApiKey(apiKey, apiSecret);
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

export async function getManna() {
  const result = await http.get('/user/manna/balance');
  return result;
};

export async function getProfile() {
  const result = await http.get('/user/profile');
  return result;
};

export async function updateProfile(update) {
  const result = await http.post('/user/profile/update', update);
  return result;
};

export async function uploadFile(filePath) {
  const media = await fs.readFile(filePath);
  const fileType = filePath.split('.').pop();
  const form = new FormData();
  form.append('media', media);
  const headers = {
    ...http.getHeaders(),
    ...form.getHeaders(),
    fileType: fileType, 
  }
  const result = http.post(
    '/media/upload', 
    form,
    headers,
  );
  return result;
};

export async function uploadFiles(filePaths) {
  let file_urls = [];
  for (let i = 0; i < filePaths.length; i++) {
    const result = await uploadFile(filePaths[i]);
    file_urls.push(result.url);
  }
  return file_urls;
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
};

export const deleteApiKey = async function(apiKey) {
  const result = await http.post('/user/api/delete', {
    apiKey: apiKey,
  });
  return result;
};



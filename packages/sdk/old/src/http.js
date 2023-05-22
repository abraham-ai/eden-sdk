import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

let EDEN_API_URL = process.env.EDEN_API_URL 
  ? process.env.EDEN_API_URL 
  : "https://api.eden.art";

let EDEN_API_KEY = process.env.EDEN_API_KEY 
  ? process.env.EDEN_API_KEY 
  : null;

let EDEN_API_SECRET = process.env.EDEN_API_SECRET 
  ? process.env.EDEN_API_SECRET
  : null; 

let HEADERS = {};

export function setApiUrl(url) {
  EDEN_API_URL = url || EDEN_API_URL;
}

export function getApiUrl() {
  return EDEN_API_URL;
}

export function setApiKey(apiKey, apiSecret) {
  EDEN_API_KEY = apiKey || EDEN_API_KEY;
  EDEN_API_SECRET = apiSecret || EDEN_API_SECRET;
  if (!EDEN_API_KEY || !EDEN_API_SECRET) {
    return;
  }
  setHeaders({
    'x-api-key': EDEN_API_KEY,
    'x-api-secret': EDEN_API_SECRET,
  });
}

export function setHeaders(headers) {
  HEADERS = headers;
}

export function getHeaders() {
  return HEADERS;
}

async function MakeHTTPRequest(method, route, data=null, headers=null) {
  let url = EDEN_API_URL + route;
  headers = headers ? headers : HEADERS;
  data = data ? data : {};

  const payload = {
    method: method,
    url: url,
    data: data,
    headers: headers,
  }
  try {
    const response = await axios(payload);
    return response.data;
  } 
  catch (error) { 
    return {error: error.response.data.message};
  }
};

export const post = async function(route, data=null, headers=null) {
  return MakeHTTPRequest('post', route, data, headers);
};
  
export const get = async function(route, data=null, headers=null) {
  return MakeHTTPRequest('get', route, data, headers);
};

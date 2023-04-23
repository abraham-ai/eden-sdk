import * as http from './http.js';

export async function getMints(userId) {
  //const result = await http.get(`/mints?userId=${userId}`);
  const result = await http.get(`/mints`);
  return result;
}

export async function getMint(mintId) {
  const result = await http.get(`/mint/${mintId}`);
  return result;
}

import * as http from './http.js';

export async function getMints(userId) {
  const route = userId ? `/mints?userId=${userId}` : '/mints';
  const result = await http.get(route);
  return result;
}

export async function getMint(mintId) {
  if (!mintId) {
    throw new Error('mintId is required');
  }
  const result = await http.get(`/mint/${mintId}`);
  return result;
}

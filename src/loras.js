import * as http from './http.js';

export class Lora {
  
  constructor(lora) {
    Object.assign(this, lora);
    this.baseRoute = `/lora/${this._id}`;
  }

};

export async function getLoras(username) {
  const route = username ? `/loras?username=${username}` : '/loras';
  const result = await http.get(route);
  return result.loras.map(lora => new Lora(lora));  
}

export async function getLora(loraId) {
  const result = await http.get(`/lora/${loraId}`);
  return new Lora(result.lora);
}

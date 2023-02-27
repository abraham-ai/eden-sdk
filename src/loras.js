import * as http from './http.js';

export class Lora {
  
  constructor(lora) {
    Object.assign(this, lora);
    this.baseRoute = `/lora/${this._id}`;
  }

};

export async function getLoras(userId) {
  const result = await http.get('/loras', {
    userId: userId
  });
  return result.loras.map(lora => new Lora(lora));  
}

export async function getLora(loraId) {
  const result = await http.get(`/lora/${loraId}`);
  return new Lora(result.lora);
}

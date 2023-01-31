import fs from 'fs/promises'
import FormData from 'form-data';
import { makeApiRequest } from './eden.js';

export const uploadMedia = async function(filePath) 
{
  const media = await fs.readFile(filePath);
  const form = new FormData();
  form.append('media', media);
  const result = await makeApiRequest(
    'post', 
    this.API_URL + '/media/upload',
    form,
    {...form.getHeaders(), ...this.headers},
  );
  return result;
};

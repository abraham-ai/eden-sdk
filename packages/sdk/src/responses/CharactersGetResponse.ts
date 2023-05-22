import { WebAPICallResult } from '../EdenClient';
export type CharactersGetResponse = WebAPICallResult & {
  error?: string;
  character: Character;
};

export type Character = {
  _id: string;
  user: string;
  task: string;
  name: string;
  checkpoint: string;
  training_images: string[];
  uri: string;
  createdAt?: Date;
  updatedAt?: Date | number;
};

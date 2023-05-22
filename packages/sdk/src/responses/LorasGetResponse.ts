import { WebAPICallResult } from '../EdenClient';
export type LorasGetResponse = WebAPICallResult & {
  error?: string;
  lora?: Lora;
};

export type Lora = {
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

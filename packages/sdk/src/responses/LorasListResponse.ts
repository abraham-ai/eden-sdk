import { WebAPICallResult } from '../EdenClient';
export type LorasListResponse = WebAPICallResult & {
  error?: string;
  loras?: Array<Lora>;
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

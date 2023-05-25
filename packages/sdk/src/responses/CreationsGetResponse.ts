import { WebAPICallResult } from '../EdenClient';

export type CreationsGetResponse = WebAPICallResult & {
  error?: string;
  creations?: Array<Creation>;
};

export type Creation = {
  _id: string;
  user: string;
  task: string;
  parent?: string;
  delegateUser?: string;
  delegateHasClaimed?: boolean;
  uri: string;
  thumbnail?: string;
  name: string;
  attributes: any;
};

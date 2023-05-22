import { WebAPICallResult } from '../EdenClient';
export type GetApiKeysResponse = WebAPICallResult & {
  error?: string;
  ok?: boolean;
  apiKeys?: Array<ApiKey>;
};

export type ApiKey = {
  apiKey: string;
  apiSecret: string;
  note: string;
  createdAt: string;
};

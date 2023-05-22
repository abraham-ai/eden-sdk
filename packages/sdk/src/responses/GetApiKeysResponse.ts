import { WebAPICallResult } from '../EdenClient';
export type ApiKeysGetResponse = WebAPICallResult & {
  error?: string;
  apiKeys?: Array<ApiKey>;
};

export type ApiKey = {
  apiKey: string;
  apiSecret: string;
  note: string;
  createdAt: string;
};

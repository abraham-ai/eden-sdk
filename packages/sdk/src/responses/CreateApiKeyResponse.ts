import { WebAPICallResult } from '../EdenClient';

export type ApiKeysCreateResponse = WebAPICallResult & {
  error?: string;
  apiKey?: NewApiKey;
};

export type NewApiKey = {
  apiKey: string;
  apiSecret: string;
  note: string;
};

import { WebAPICallResult } from '../EdenClient';

export type CreateApiKeyResponse = WebAPICallResult & {
  error?: string;
  ok?: boolean;
  apiKey?: NewApiKey;
};

export type NewApiKey = {
  apiKey: string;
  apiSecret: string;
  note: string;
};

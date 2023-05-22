import { WebAPICallResult } from '../EdenClient';

export type CreateApiKeyResponse = WebAPICallResult & {
  error?: string;
  ok?: boolean;
};

import { WebAPICallResult } from '../EdenClient';

export type ApiKeysDeleteResponse = WebAPICallResult & {
  error?: string;
};

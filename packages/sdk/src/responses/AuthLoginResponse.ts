import { WebAPICallResult } from '../EdenClient';

export type AuthLoginResponse = WebAPICallResult & {
  error?: string;
  token: string;
};

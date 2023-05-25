import { WebAPICallResult } from '../EdenClient';
export type MannaBalanceGetResponse = WebAPICallResult & {
  error?: string;
  manna: number;
};

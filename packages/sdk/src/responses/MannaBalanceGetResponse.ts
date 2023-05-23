import { WebAPICallResult } from '../EdenClient';
export type CharactersGetResponse = WebAPICallResult & {
  error?: string;
  manna: number;
};

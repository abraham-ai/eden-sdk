import { WebAPICallResult } from '../EdenClient';
export type MintsListResponse = WebAPICallResult & {
  error?: string;
  mints?: Array<LiveMint>;
};

export type LiveMint = {
  _id: string;
  mintId: string;
  block: number;
  txHash: string;
  caller: string;
  tokenId: number;
  ack: boolean;
  taskId: string;
  edenSuccess: boolean;
  imageUri: string;
  ipfsUri: string;
  ipfsImageUri: string;
  txSuccess: boolean;
  createdAt?: Date;
  updatedAt?: Date | number;
};

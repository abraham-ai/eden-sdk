import { WebAPICallResult } from '../EdenClient';

export type TasksCreateResponse = WebAPICallResult & {
  error?: string;
  taskId?: string;
};

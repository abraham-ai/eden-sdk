import { WebAPICallResult } from '../EdenClient';

export type TasksListResponse = WebAPICallResult & {
  error?: string;
  tasks?: Array<Task>;
};

export type Task = {};

import { AxiosRequestConfig } from 'axios';
import { WebAPICallOptions, WebAPICallResult } from './EdenClient';
import { ApiKeysCreateResponse } from './responses/ApiKeysCreateResponse';
import { ApiKeysDeleteResponse } from './responses/ApiKeysDeleteResponse';
import { ApiKeysGetResponse } from './responses/ApiKeysListResponse';
import { AuthLoginResponse } from './responses/AuthLoginResponse';
import { CreationsGetResponse } from './responses/CreationsGetResponse';
import { CreationsListResponse } from './responses/CreationsListResponse';
import { GeneratorsGetResponse } from './responses/GeneratorsGetResponse';
import { GeneratorsListResponse } from './responses/GeneratorsListResponse';
import { MannaBalanceGetResponse } from './responses/MannaBalanceGetResponse';
import { TasksCreateResponse } from './responses/TasksCreateResponse';
import { TasksGetResponse } from './responses/TasksGetResponse';
import { TasksListResponse } from './responses/TasksListResponse';

export default interface Method<
  MethodArguments extends WebAPICallOptions,
  MethodResult extends WebAPICallResult = WebAPICallResult,
> {
  (options?: MethodArguments): Promise<MethodResult>;
}

function bindApiCall<
  Arguments extends WebAPICallOptions,
  Result extends WebAPICallResult,
>(
  self: Methods,
  configFn: (options) => AxiosRequestConfig,
): Method<Arguments, Result> {
  // We have to "assert" that the bound method does indeed return the more specific `Result` type instead of just
  // `WebAPICallResult`
  return self.apiCall.bind(self, configFn) as Method<Arguments, Result>;
}

export abstract class Methods {
  public abstract apiCall(
    configFn: (options: WebAPICallOptions) => AxiosRequestConfig,
    options?: WebAPICallOptions,
  ): Promise<WebAPICallResult>;

  public readonly apiKeys = {
    get: bindApiCall<ApiKeysListArguments, ApiKeysGetResponse>(
      this,
      apiKeysListRequestConfig,
    ),
    create: bindApiCall<ApiKeysCreateArguments, ApiKeysCreateResponse>(
      this,
      apiKeysCreateRequestConfig,
    ),
    delete: bindApiCall<ApiKeysDeleteArguments, ApiKeysDeleteResponse>(
      this,
      apiKeysDeleteRequestConfig,
    ),
  };

  public readonly auth = {
    login: bindApiCall<AuthLoginArguments, AuthLoginResponse>(
      this,
      authLoginRequestConfig,
    ),
  };

  public readonly creations = {
    list: bindApiCall<CreationsListArguments, CreationsListResponse>(
      this,
      creationsListRequestConfig,
    ),
    get: bindApiCall<CreationsGetArguments, CreationsGetResponse>(
      this,
      creationsGetRequestConfig,
    ),
  };

  public readonly generators = {
    list: bindApiCall<GeneratorsListArguments, GeneratorsListResponse>(
      this,
      generatorsListRequestConfig,
    ),
    get: bindApiCall<GeneratorsGetArguments, GeneratorsGetResponse>(
      this,
      generatorsGetRequestConfig,
    ),
  };

  public readonly manna = {
    balance: bindApiCall<MannaBalanceGetArguments, MannaBalanceGetResponse>(
      this,
      mannaBalanceGetRequestConfig,
    ),
  };

  public readonly tasks = {
    create: bindApiCall<TasksCreateArguments, TasksCreateResponse>(
      this,
      tasksCreateRequestConfig,
    ),
    get: bindApiCall<TasksGetArguments, TasksGetResponse>(
      this,
      tasksGetRequestConfig,
    ),
    list: bindApiCall<TasksListArguments, TasksListResponse>(
      this,
      tasksListRequestConfig,
    ),
  };
}

export interface ApiKeysListArguments extends WebAPICallOptions {}

export interface ApiKeysCreateArguments extends WebAPICallOptions {
  note?: string;
}

export interface ApiKeysDeleteArguments extends WebAPICallOptions {
  apiKey: string;
}

export interface AuthLoginArguments extends WebAPICallOptions {
  address: string;
  message: string;
  signature: string;
}

export interface CreationsListArguments extends WebAPICallOptions {
  username?: string;
  generators?: string[];
  collectionId?: string;
  earliestTime?: string;
  latestTime?: string;
  limit?: number;
}

export interface CreationsGetArguments extends WebAPICallOptions {
  creationId: string;
}

export interface GeneratorsListArguments extends WebAPICallOptions {}

export interface GeneratorsGetArguments extends WebAPICallOptions {
  generatorName: string;
}

export interface MannaBalanceGetArguments extends WebAPICallOptions {}

export interface TasksCreateArguments extends WebAPICallOptions {
  generatorName: string;
  versionId?: string;
  config?: any;
  metadata?: any;
}

export interface TasksListArguments extends WebAPICallOptions {
  status?: string;
  taskIds?: string[];
  userId?: string;
  generators?: string[];
  earliestTime?: string;
  latestTime?: string;
  limit?: number;
}

export interface TasksGetArguments extends WebAPICallOptions {
  taskId: string;
}

const apiKeysListRequestConfig = (): AxiosRequestConfig => {
  return {
    method: 'GET',
    url: 'apikeys',
  };
};

const apiKeysCreateRequestConfig = (
  args: ApiKeysCreateArguments,
): AxiosRequestConfig => {
  return {
    method: 'POST',
    url: 'apikeys/create',
    data: {
      note: args.note,
    },
  };
};

const apiKeysDeleteRequestConfig = (
  args: ApiKeysDeleteArguments,
): AxiosRequestConfig => {
  return {
    method: 'POST',
    url: 'apikeys/delete',
    data: {
      ...args,
    },
  };
};

const authLoginRequestConfig = (
  args: AuthLoginArguments,
): AxiosRequestConfig => {
  return {
    method: 'POST',
    url: 'auth/login',
    data: {
      ...args,
    },
  };
};

const creationsListRequestConfig = (
  args: CreationsListArguments,
): AxiosRequestConfig => {
  return {
    method: 'GET',
    url: 'creations',
    params: {
      ...args,
    },
  };
};

const creationsGetRequestConfig = (
  args: CreationsGetArguments,
): AxiosRequestConfig => {
  return {
    method: 'GET',
    url: `creations/${args.creationId}`,
  };
};

const generatorsListRequestConfig = (): AxiosRequestConfig => {
  return {
    method: 'GET',
    url: 'generators',
  };
};

const generatorsGetRequestConfig = (
  args: GeneratorsGetArguments,
): AxiosRequestConfig => {
  return {
    method: 'GET',
    url: `generators/${args.generatorName}`,
  };
};

const mannaBalanceGetRequestConfig = (): AxiosRequestConfig => {
  return {
    method: 'GET',
    url: 'manna/balance',
  };
};

const tasksCreateRequestConfig = (
  args: TasksCreateArguments,
): AxiosRequestConfig => {
  return {
    method: 'POST',
    url: 'tasks/create',
    data: {
      ...args,
    },
  };
};

const tasksListRequestConfig = (
  args: TasksListArguments,
): AxiosRequestConfig => {
  return {
    method: 'GET',
    url: 'tasks',
    params: {
      ...args,
    },
  };
};

const tasksGetRequestConfig = (args: TasksGetArguments): AxiosRequestConfig => {
  return {
    method: 'GET',
    url: `tasks/${args.taskId}`,
  };
};

import { AxiosRequestConfig } from 'axios';
import { WebAPICallOptions, WebAPICallResult } from 'src/EdenClient';
import { ApiKeysCreateResponse } from 'src/responses/ApiKeysCreateResponse';
import { ApiKeysDeleteResponse } from 'src/responses/ApiKeysDeleteResponse';
import { ApiKeysGetResponse } from 'src/responses/ApiKeysListResponse';
import { AuthLoginResponse } from 'src/responses/AuthLoginResponse';
import { GeneratorsGetResponse } from 'src/responses/GeneratorsGetResponse';
import { GeneratorsListResponse } from 'src/responses/GeneratorsListResponse';
import { MannaBalanceGetResponse } from 'src/responses/MannaBalanceGetResponse';

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

export interface GeneratorsListArguments extends WebAPICallOptions {}

export interface GeneratorsGetArguments extends WebAPICallOptions {
  generatorName: string;
}

export interface MannaBalanceGetArguments extends WebAPICallOptions {}

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

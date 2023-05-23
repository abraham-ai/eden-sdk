import { WebAPICallOptions, WebAPICallResult } from 'src/EdenClient';
import { ApiKeysCreateResponse } from 'src/responses/ApiKeysCreateResponse';
import { ApiKeysDeleteResponse } from 'src/responses/ApiKeysDeleteResponse';
import { ApiKeysGetResponse } from 'src/responses/ApiKeysListResponse';
import { AuthLoginResponse } from 'src/responses/AuthLoginResponse';
import { GeneratorsGetResponse } from 'src/responses/GeneratorsGetResponse';
import { GeneratorsListResponse } from 'src/responses/GeneratorsListResponse';
import { Verb } from 'src/types';

export default interface Method<
  MethodArguments extends WebAPICallOptions,
  MethodResult extends WebAPICallResult = WebAPICallResult,
> {
  (options?: MethodArguments): Promise<MethodResult>;
}

function bindApiCall<
  Arguments extends WebAPICallOptions,
  Result extends WebAPICallResult,
>(self: Methods, method: string, verb: Verb): Method<Arguments, Result> {
  return self.apiCall.bind(self, method, verb) as Method<Arguments, Result>;
}

export abstract class Methods {
  public abstract apiCall(
    method: string,
    verb: Verb,
    options?: WebAPICallOptions,
  ): Promise<WebAPICallResult>;

  public readonly apiKeys = {
    get: bindApiCall<ApiKeysListArguments, ApiKeysGetResponse>(
      this,
      'apikeys/list',
      'GET',
    ),
    create: bindApiCall<ApiKeysCreateArguments, ApiKeysCreateResponse>(
      this,
      'apikeys/create',
      'POST',
    ),
    delete: bindApiCall<ApiKeysDeleteArguments, ApiKeysDeleteResponse>(
      this,
      'apikeys/delete',
      'POST',
    ),
  };

  public readonly auth = {
    login: bindApiCall<AuthLoginArguments, AuthLoginResponse>(
      this,
      'auth/login',
      'POST',
    ),
  };

  public readonly generators = {
    get: bindApiCall<GeneratorsGetArguments, GeneratorsGetResponse>(
      this,
      'generators/get',
      'GET',
    ),
    list: bindApiCall<GeneratorsListArguments, GeneratorsListResponse>(
      this,
      'generators/list',
      'GET',
    ),
  };
  public readonly manna = {
    balance: bindApiCall<WebAPICallOptions, WebAPICallResult>(
      this,
      'manna/balance',
      'GET',
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
export interface GeneratorsGetArguments extends WebAPICallOptions {
  generatorName: string;
}

export interface GeneratorsListArguments extends WebAPICallOptions {}

export interface MannaBalanceGetArguments extends WebAPICallOptions {}

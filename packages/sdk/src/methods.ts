import { WebAPICallOptions, WebAPICallResult } from 'src/EdenClient';
import { ApiKeysCreateResponse } from 'src/responses/ApiKeysCreateResponse';
import { ApiKeysDeleteResponse } from 'src/responses/ApiKeysDeleteResponse';
import { ApiKeysGetResponse } from 'src/responses/ApiKeysListResponse';
import { AuthLoginResponse } from 'src/responses/AuthLoginResponse';
import { CharactersGetResponse } from 'src/responses/CharactersGetResponse';
import { CharactersListResponse } from 'src/responses/CharactersListResponse';
import { LorasGetResponse } from 'src/responses/LorasGetResponse';
import { LorasListResponse } from 'src/responses/LorasListResponse';
import { MintsGetResponse } from 'src/responses/MintsGetResponse';
import { MintsListResponse } from 'src/responses/MintsListResponse';
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
    get: bindApiCall<ApiKeysGetArguments, ApiKeysGetResponse>(
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

  public readonly characters = {
    get: bindApiCall<CharactersGetArguments, CharactersGetResponse>(
      this,
      'characters/get',
      'GET',
    ),
    list: bindApiCall<CharactersListArguments, CharactersListResponse>(
      this,
      'characters/list',
      'GET',
    ),
  };

  public readonly loras = {
    get: bindApiCall<LorasGetArguments, LorasGetResponse>(
      this,
      'loras/get',
      'GET',
    ),
    list: bindApiCall<LorasListArguments, LorasListResponse>(
      this,
      'loras/list',
      'GET',
    ),
  };

  public readonly mints = {
    get: bindApiCall<MintsGetArguments, MintsGetResponse>(
      this,
      'mints/get',
      'GET',
    ),
    list: bindApiCall<MintsListArguments, MintsListResponse>(
      this,
      'mints/list',
      'GET',
    ),
  };
}

export interface ApiKeysGetArguments extends WebAPICallOptions {}

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

export interface CharactersGetArguments extends WebAPICallOptions {
  characterId: string;
}

export interface CharactersListArguments extends WebAPICallOptions {
  userId: string;
}

export interface LorasGetArguments extends WebAPICallOptions {
  loraId: string;
}

export interface LorasListArguments extends WebAPICallOptions {
  userId: string;
}

export interface MintsGetArguments extends WebAPICallOptions {
  mintId: string;
}

export interface MintsListArguments extends WebAPICallOptions {
  userId: string;
}

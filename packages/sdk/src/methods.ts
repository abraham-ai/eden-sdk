import { WebAPICallOptions, WebAPICallResult } from 'src/EdenClient';
import { ApiKeysCreateResponse } from 'src/responses/CreateApiKeyResponse';
import { ApiKeysDeleteResponse } from 'src/responses/DeleteApiKeyResponse';
import { ApiKeysGetResponse } from 'src/responses/GetApiKeysResponse';
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
}

export interface ApiKeysGetArguments extends WebAPICallOptions {}

export interface ApiKeysCreateArguments extends WebAPICallOptions {
  note?: string;
}

export interface ApiKeysDeleteArguments extends WebAPICallOptions {
  apiKey: string;
}

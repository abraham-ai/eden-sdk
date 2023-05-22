import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { INVALID_AUTH_MESSAGE, Verb } from 'src/types';
import { Methods } from 'src/methods';

export interface WebClientOptions {
  edenApiUrl?: string;
  token?: string;
  apiKey?: string;
  apiSecret?: string;
}

export interface WebAPICallResult {
  error?: string;
  [key: string]: unknown;
}

export interface WebAPICallOptions {
  [argument: string]: unknown;
}

export class EdenClient extends Methods {
  public readonly edenApiUrl: string;
  public readonly token?: string;
  public readonly apiKey?: string;
  public readonly apiSecret?: string;
  private axios: AxiosInstance;

  public constructor({
    edenApiUrl = 'https://api.eden.art',
    token = undefined,
    apiKey = undefined,
    apiSecret = undefined,
  }: WebClientOptions = {}) {
    super();

    this.token = token;
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.edenApiUrl = edenApiUrl;
    this.checkAuth();

    this.axios = axios.create({
      baseURL: edenApiUrl,
    });
  }

  public async apiCall(
    method: string,
    verb: Verb,
    options: WebAPICallOptions = {},
  ): Promise<WebAPICallResult> {
    const headers: Record<string, string> = {};
    if (this.token) headers.Authorization = `Bearer ${this.token}`;
    if (this.apiKey && this.apiSecret) {
      headers['X-Api-Key'] = this.apiKey as string;
      headers['X-Api-Secret'] = this.apiSecret as string;
    }

    const response = await this.makeRequest(
      method,
      verb,
      {
        ...options,
      },
      headers,
    );
    const result = await this.buildResult(response);
    return result;
  }

  private async makeRequest(
    url: string,
    verb: Verb,
    body: any,
    headers: any = {},
  ): Promise<AxiosResponse> {
    let response;
    if (verb === 'GET') {
      response = await this.axios.get(url, {
        params: body,
        headers,
      });
    } else if (verb === 'POST') {
      response = await this.axios.post(url, body, {
        headers,
      });
    }
    return response;
  }

  private async buildResult(
    response: AxiosResponse,
  ): Promise<WebAPICallResult> {
    const result = response.data;
    return result;
  }

  private checkAuth() {
    if (!this.token && !this.apiKey && !this.apiSecret) {
      throw new Error(INVALID_AUTH_MESSAGE);
    }
  }
}

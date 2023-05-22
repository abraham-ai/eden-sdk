export interface WebAPICallResult {
  ok: boolean;
  error?: string;
  [key: string]: unknown;
}

export class WebClient extends Methods {
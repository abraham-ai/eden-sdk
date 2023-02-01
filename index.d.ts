export interface EdenApiResponse {
  data: any;
  message: string;
}

export interface Eden {
  setAuthToken: (token: string) => void;
  loginEth: (privateKey: string) => Promise<EdenApiResponse>;
  loginApi: (apiKey: string, apiSecret: string) => Promise<EdenApiResponse>;
  getCreations: (queryParams?: object) => Promise<EdenApiResponse>;
}

export declare class EdenClass implements Eden {
}

export default EdenClass;

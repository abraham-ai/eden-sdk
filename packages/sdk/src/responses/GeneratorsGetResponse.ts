import { WebAPICallResult } from '../EdenClient';
export type GeneratorsGetResponse = WebAPICallResult & {
  error?: string;
  generator?: Generator;
};

export type Generator = {
  generatorName: string;
  description: string;
  output: string;
  versions: GeneratorVersion[];
};

export type GeneratorVersion = {
  versionId: string;
  parameters: GeneratorParameter[];
};

export type GeneratorParameter = {
  name: string;
  label: string;
  description?: string;
  isRequired?: boolean;
  default?: any;
  allowedValues?: any[];
  allowedValuesFrom?: string;
  minimum?: number;
  maximum?: number;
  step?: number;
};
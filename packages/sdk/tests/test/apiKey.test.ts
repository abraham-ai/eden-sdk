import {
  ApiKeysCreateResponse,
  NewApiKey,
} from 'src/responses/CreateApiKeyResponse';
import { test, describe, expect } from 'vitest';

describe('API Key Methods', () => {
  test('should return a list of API Keys', async context => {
    const { client } = context;
    const result = await client.apiKeys.get();
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });

  test('should create an API Key', async context => {
    const { client } = context;
    const result = await client.apiKeys.create({
      note: 'test',
    });
    console.log(result);
    expect(result).toBeDefined();
    expect(result.apiKey).toBeDefined();

    const expectedApiKeyProperties: Partial<NewApiKey> = {
      apiKey: expect.any(String),
      apiSecret: expect.any(String),
      note: 'test',
    };

    expect(result.apiKey).toMatchObject(expectedApiKeyProperties);
  });

  test('should delete an API Key', async context => {
    const { client } = context;
    const createResults = await client.apiKeys.create({
      note: 'test',
    });
    const apiKey = createResults.apiKey.apiKey;
    const result = await client.apiKeys.delete({
      apiKey,
    });
    expect(result).toBeDefined();
  });
});

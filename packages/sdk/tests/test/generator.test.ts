import { test, describe, expect } from 'vitest';
import { Generator } from 'src/responses/GeneratorsGetResponse';

describe('Generator Methods', () => {
  test('should be able to get all generators', async context => {
    const { client } = context;
    const result = await client.generators.list();
    expect(result).toBeDefined();
    expect(result.generators).toBeDefined();
    expect(result.generators.length).toBeGreaterThan(0);
  });
  test('should be able to get a generator by name', async context => {
    const { client } = context;
    const generatorsResponse = await client.generators.get({
      generatorName: 'test',
    });
    expect(generatorsResponse).toBeDefined();
    expect(generatorsResponse.generator).toBeDefined();

    const expectedgeneratorProperties: Partial<Generator> = {
      generatorName: expect.any(String),
      description: expect.any(String),
      output: expect.any(String),
      // TODO versions
      versions: expect.any(Array),
    };

    expect(generatorsResponse.generator).toMatchObject(
      expectedgeneratorProperties,
    );
  });
});

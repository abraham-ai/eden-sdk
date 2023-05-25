import { test, describe, expect } from 'vitest';

describe('Creation Methods', () => {
  test('should be able to get all creations', async context => {
    const { client } = context;
    const result = await client.creations.list();
    expect(result).toBeDefined();
    expect(result.creations).toBeDefined();
    expect(result.creations.length).toBeGreaterThan(0);
  });
  test('should be able to get a creation by id', async context => {
    const { client } = context;
    const result = await client.creations.list();
    const creationId = result.creations[0]._id;
    const creationsResponse = await client.creations.get({
      creationId,
    });
    expect(creationsResponse).toBeDefined();
    expect(creationsResponse.creation).toBeDefined();
  });
});

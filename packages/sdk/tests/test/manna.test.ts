import { test, describe, expect } from 'vitest';

describe('Manna Methods', () => {
  test('user should be able to get their manna balance', async context => {
    const { client } = context;
    const result = await client.manna.balance();
    expect(result).toBeDefined();
    expect(result.manna).toBeDefined();
  });
});

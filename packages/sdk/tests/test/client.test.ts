import { test, describe, expect } from 'vitest';
import { EdenClient } from '../../src/EdenClient';
import { INVALID_AUTH_MESSAGE } from '../../src/types';

describe('Client', () => {
  test('it should return EdenClient instance', async context => {
    const { client } = context;
    expect(typeof client).eq('object');
  });
  test.fails(
    'it cannot be created without either a token or an API Keypair',
    async () => {
      await expect(new EdenClient()).rejects.toThrow(
        new Error(INVALID_AUTH_MESSAGE),
      );
    },
  );
});

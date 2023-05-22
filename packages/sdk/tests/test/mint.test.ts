import { LiveMint } from 'src/responses/MintsGetResponse';
import { test, describe, expect } from 'vitest';

describe('Mint Methods', () => {
  test("should be able to get a user's mints", async context => {
    const { client } = context;
    const result = await client.mints.list({
      userId: 'user',
    });
    expect(result).toBeDefined();
    expect(result.mints).toBeDefined();
    expect(result.mints.length).toBeGreaterThan(0);
  });
  test('should be able to get a mint by ID', async context => {
    const { client } = context;
    const mintsResponse = await client.mints.list({
      userId: 'user',
    });
    const mintId = mintsResponse.mints[0]._id;
    const result = await client.mints.get({
      mintId: mintId,
    });
    expect(result).toBeDefined();
    expect(result.mint).toBeDefined();

    const expectedmintProperties: Partial<LiveMint> = {
      _id: expect.any(String),
      mintId: expect.any(String),
      block: expect.any(Number),
      txHash: expect.any(String),
      caller: expect.any(String),
      tokenId: expect.any(Number),
      ack: expect.any(Boolean),
      taskId: expect.any(String),
      edenSuccess: expect.any(Boolean),
      imageUri: expect.any(String),
      ipfsUri: expect.any(String),
      ipfsImageUri: expect.any(String),
      txSuccess: expect.any(Boolean),
    };

    expect(result.mint).toMatchObject(expectedmintProperties);
  });
});

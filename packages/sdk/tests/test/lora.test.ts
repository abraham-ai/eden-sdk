import { Lora } from 'src/responses/LorasGetResponse';
import { test, describe, expect } from 'vitest';

describe('Lora Methods', () => {
  test("should be able to get a user's loras", async context => {
    const { client } = context;
    const result = await client.loras.list({
      userId: 'user',
    });
    expect(result).toBeDefined();
    expect(result.loras).toBeDefined();
    expect(result.loras.length).toBeGreaterThan(0);
  });
  test('should be able to get a lora by ID', async context => {
    const { client } = context;
    const lorasResponse = await client.loras.list({
      userId: 'user',
    });
    const loraId = lorasResponse.loras[0]._id;
    const result = await client.loras.get({
      loraId: loraId,
    });
    expect(result).toBeDefined();
    expect(result.lora).toBeDefined();

    const expectedloraProperties: Partial<Lora> = {
      _id: expect.any(String),
      user: expect.any(String),
      task: expect.any(String),
      name: expect.any(String),
      checkpoint: expect.any(String),
      training_images: expect.any(Array),
      uri: expect.any(String),
    };

    expect(result.lora).toMatchObject(expectedloraProperties);
  });
});

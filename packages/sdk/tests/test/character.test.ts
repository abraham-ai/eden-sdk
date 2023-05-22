import { Character } from 'src/responses/CharactersGetResponse';
import { test, describe, expect } from 'vitest';

describe('Character Methods', () => {
  test("should be able to get a user's characters", async context => {
    const { client } = context;
    const result = await client.characters.list({
      userId: 'user',
    });
    expect(result).toBeDefined();
    expect(result.characters).toBeDefined();
    expect(result.characters.length).toBeGreaterThan(0);
  });
  test('should be able to get a character by ID', async context => {
    const { client } = context;
    const charactersResponse = await client.characters.list({
      userId: 'user',
    });
    const characterId = charactersResponse.characters[0]._id;
    const result = await client.characters.get({
      characterId: characterId,
    });
    expect(result).toBeDefined();
    expect(result.character).toBeDefined();

    const expectedCharacterProperties: Partial<Character> = {
      _id: expect.any(String),
      user: expect.any(String),
      task: expect.any(String),
      name: expect.any(String),
      checkpoint: expect.any(String),
      training_images: expect.any(Array),
      uri: expect.any(String),
    };

    expect(result.character).toMatchObject(expectedCharacterProperties);
  });
});

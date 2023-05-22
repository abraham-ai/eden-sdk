import { createTestClient } from '../util';
import { beforeEach } from 'vitest';

beforeEach(async context => {
  const client = await createTestClient();
  context.client = client;
});

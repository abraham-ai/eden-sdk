import { EdenClient } from './src/EdenClient';

declare module 'vitest' {
  export interface TestContext {
    client: EdenClient;
  }
}

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  test: {
    setupFiles: ['./tests/setup/client-setup.ts'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});

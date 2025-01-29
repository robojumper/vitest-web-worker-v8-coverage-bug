/// <reference types="vitest/config" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    coverage: {
      // provider: 'istanbul',
      provider: 'v8',
    },
    setupFiles: ['@vitest/web-worker'],
    environment: 'jsdom',
  },
});

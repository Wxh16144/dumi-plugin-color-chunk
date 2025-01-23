import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import { name } from './package.json';

export default defineConfig({
  test: {
    alias: {
      [name]: resolve(__dirname, './src'),
      [`${name}/(.*)`]: resolve(__dirname, './src/$1'),
    },
    coverage: {
      reporter: ['text', 'text-summary', 'json', 'lcov'],
      include: ['src/**/*'],
    },
  },
});

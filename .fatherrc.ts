import { defineConfig } from 'father';

export default defineConfig({
  cjs: {
    output: 'lib',
    ignores: ['src/component/**'],
  },
  esm: {
    output: 'es',
    overrides: {
      'src/component': {
        output: 'es/component',
      },
    },
  },
});

import { describe, expect, it } from 'vitest';

describe('export', () => {
  it('should work', async () => {
    const all: any = await import('dumi-plugin-color-chunk/component');

    expect(Object.keys(all)).toMatchSnapshot();
  });
});

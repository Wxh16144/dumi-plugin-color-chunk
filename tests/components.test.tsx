import { describe, expect, it } from 'vitest';
import Color from '../src/core/Color';

describe('export', () => {
  it('should work', async () => {
    // @ts-ignore
    const all: any = await import('dumi-plugin-color-chunk/component');

    expect(Object.keys(all)).toMatchSnapshot();
    expect(all.Color).equal(Color);
  });
});

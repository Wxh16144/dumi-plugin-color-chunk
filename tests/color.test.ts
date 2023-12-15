import { Color } from 'dumi-plugin-color-chunk';
import { describe, expect, it } from 'vitest';

describe('Color', () => {
  it('should export Color', () => {
    expect(Color).toBeTruthy();
  });

  describe('isStrictValid', () => {
    it('number', () => {
      const color = new Color('123');
      expect(color.isValid).toBe(true);
      expect(color.isStrictValid()).toBe(false);
    });

    it('name', () => {
      const color = new Color('red');
      expect(color.isValid).toBe(true);
      expect(color.isStrictValid()).toBe(true);

      const color2 = new Color('red1');
      expect(color.isValid).toBe(true);
      expect(color2.isStrictValid()).toBe(false);
    });

    it('hex', () => {
      const color = new Color('#fff');
      expect(color.isStrictValid()).toBe(true);

      const color2 = new Color('#ffff');
      expect(color2.isStrictValid()).toBe(true);

      const color3 = new Color('fff');
      expect(color3.isValid).toBe(true);
      expect(color3.toString()).toMatchInlineSnapshot(`"#ffffff"`);
      expect(color3.isStrictValid()).toBe(false);
    });

    it('rgb', () => {
      const color = new Color('rgb(255, 255, 255)');
      expect(color.isStrictValid()).toBe(true);

      const color2 = new Color('rgb(255, 255, 255, 0.5)');
      expect(color2.isValid).toBe(true);
      expect(color2.isStrictValid()).toBe(false);

      const color3 = new Color('rgb 255, 255 255');
      expect(color3.isValid).toBe(true);
      expect(color3.toString()).toMatchInlineSnapshot(`"rgb(255, 255, 255)"`);
      expect(color3.isStrictValid()).toBe(false);
    });

    it('rgba', () => {
      const color = new Color('rgba(255, 255, 255, 0.5)');
      expect(color.isStrictValid()).toBe(true);

      const color3 = new Color('rgba 255, 255, 255, 0.5');
      expect(color3.isValid).toBe(true);
      expect(color3.toString()).toMatchInlineSnapshot(`"rgba(255, 255, 255, 0.5)"`);
      expect(color3.isStrictValid()).toBe(false);
    });

    it('hsl', () => {
      const color = new Color('hsl(0, 100%, 50%)');
      expect(color.isStrictValid()).toBe(true);

      const color3 = new Color('hsl 0, 100%, 50%');
      expect(color3.isValid).toBe(true);
      expect(color3.toString()).toMatchInlineSnapshot(`"hsl(0, 100%, 50%)"`);
      expect(color3.isStrictValid()).toBe(false);
    });

    it('hsla', () => {
      const color = new Color('hsla(0, 100%, 50%, 0.5)');
      expect(color.isStrictValid()).toBe(true);

      const color3 = new Color('hsla 0, 100%, 50%, 0.5');
      expect(color3.isValid).toBe(true);
      expect(color3.toString()).toMatchInlineSnapshot(`"hsla(0, 100%, 50%, 0.5)"`);
      expect(color3.isStrictValid()).toBe(false);
    });

    // https://github.com/react-component/color-picker/blob/3abbfcf9561c0ac9caeddef7838945635a73a7a0/src/color.ts
    it('hsb', () => {
      const color = new Color('hsb(0, 100%, 100%)');
      expect(color.isStrictValid()).toBe(true);

      const color3 = new Color('hsb 0, 100%, 100%');
      expect(color3.isValid).toBe(true);
      expect(color3.toString()).toMatchInlineSnapshot(`"hsv(0, 100%, 100%)"`);
      expect(color3.isStrictValid()).toBe(false);
    });

    it('hsba', () => {
      const color = new Color('hsba(0, 100%, 100%, 0.5)');
      expect(color.isStrictValid()).toBe(true);

      const color3 = new Color('hsba 0, 100%, 100%, 0.5');
      expect(color3.isValid).toBe(true);
      expect(color3.toString()).toMatchInlineSnapshot(`"hsva(0, 100%, 100%, 0.5)"`);
      expect(color3.isStrictValid()).toBe(false);
    });

    // 前后空格
    it(`include space`, () => {
      const color = new Color(' rgb(255, 255, 255) ');
      expect(color.isStrictValid()).toBe(true);

      const color2 = new Color(' green ');
      expect(color2.isStrictValid()).toBe(true);
    });
  });
});

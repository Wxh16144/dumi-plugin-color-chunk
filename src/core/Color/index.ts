import type { ColorInput } from '@ctrl/tinycolor';
import { TinyColor } from '@ctrl/tinycolor';
import { strictMatchers } from './re';

export interface HSB {
  h: number | string;
  s: number | string;
  b: number | string;
}

export interface RGB {
  r: number | string;
  g: number | string;
  b: number | string;
}

export interface HSBA extends HSB {
  a: number;
}

export interface RGBA extends RGB {
  a: number;
}

export type ColorGenInput<T = Color> = string | number | RGB | RGBA | HSB | HSBA | T;

const map = new Map<string, boolean>();

const convertHsb2Hsv = (color: ColorGenInput): ColorInput => {
  if (color && typeof color === 'object' && 'h' in color && 'b' in color) {
    const { b, ...resets } = color as HSB;
    return {
      ...resets,
      v: b,
    };
  }
  if (typeof color === 'string') {
    let nextColor = color;
    if (/hsb/.test(color)) nextColor = color.replace(/hsb/, 'hsv');
    return nextColor.trim() as ColorInput;
  }
  return color as ColorInput;
};

export class Color extends TinyColor {
  constructor(color: ColorGenInput) {
    super(convertHsb2Hsv(color));
  }

  /**
   * 严格的校验
   */
  public isStrictValid(): boolean {
    if (this.format === 'name') return true;
    if (typeof this.originalInput !== 'string') return false;

    if (map.has(this.originalInput)) {
      return map.get(this.originalInput) as boolean;
    } else if (this.originalInput) {
      const _r = Object.values(strictMatchers).some((re) => re.test(this.originalInput as string));
      map.set(this.originalInput, _r);
      return _r;
    }

    return false;
  }
}

export default Color;

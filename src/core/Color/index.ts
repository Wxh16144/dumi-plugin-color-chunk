import { Color as TinyColor } from '@rc-component/color-picker';
import { strictMatchers } from './re';

const map = new Map<string, boolean>();

class Color extends TinyColor {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(color: string = '') {
    super(color.trim());
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

import { TinyColor } from '@ctrl/tinycolor';
import * as React from 'react';
import Color from '../core/Color';

type ColorChunkProps = React.PropsWithChildren<{
  /**
   * 颜色的十六进制值，带 `#` 前缀 (4/8 位带 alpha 通道)
   * @example '#000f' ｜ '#000000ff'
   */
  value: string;
}>;

function ColorChunk(props: ColorChunkProps) {
  const { children, value } = props;

  const dotStyle = React.useMemo<React.CSSProperties>(
    () => ({
      display: 'inline-block',
      backgroundColor: value,
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      marginInlineStart: '4px',
      border: `1px solid ${new TinyColor(value).darken(10).toHex8String(true)}`,
    }),
    [value],
  );

  return (
    <code aria-label={`Color: ${value}`}>
      {children || value}
      <span style={dotStyle} />
    </code>
  );
}

// ====== Export ======
export { Color };
export type { ColorChunkProps };
export default React.memo(ColorChunk);

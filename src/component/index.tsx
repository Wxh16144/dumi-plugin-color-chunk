import * as React from 'react';
import Color from '../core/Color';

type ColorChunkProps = React.PropsWithChildren<{
  /**
   * 颜色的十六进制值，带 `#` 前缀
   * @example '#000' | '#000000' ｜ '#000000ff'
   */
  value: string;
}>;

function ColorChunk(props: ColorChunkProps) {
  const { value, children } = props;

  const dotStyle = React.useMemo<React.CSSProperties>(() => {
    const _color = new Color(value);
    return {
      display: 'inline-block',
      backgroundColor: _color.toHexString(true),
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      marginInlineStart: '4px',
      border: `1px solid ${_color.darken(10).toHexString(true)}`,
    };
  }, [value]);

  return (
    <code>
      {children ?? value}
      <span style={dotStyle} />
    </code>
  );
}

// ====== Export ======
export { Color };
export type { ColorChunkProps };
export default React.memo(ColorChunk);

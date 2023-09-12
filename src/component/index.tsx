import { TinyColor } from '@ctrl/tinycolor';
import * as React from 'react';

interface ColorChunkProps {
  value?: string;
  hsvString?: string;
  HslString?: string;
  hexString?: string;
  hex8String?: string;
  hexShortString?: string;
  rgbString?: string;
  percentageRgbString?: string;
  name?: string;
  file?: string;
  string?: string;
}

function ColorChunk(props: React.PropsWithChildren<ColorChunkProps>) {
  const finalValue =
    props.value ??
    props.hexShortString ??
    props.hexString ??
    props.hex8String ??
    props.rgbString ??
    props.percentageRgbString ??
    props.hsvString ??
    props.HslString ??
    props.name ??
    props.file ??
    props.string;

  const dotStyle: React.CSSProperties = {
    display: 'inline-block',
    backgroundColor: new TinyColor(finalValue).toRgbString(),
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    marginInlineStart: '4px',
    border: `1px solid ${new TinyColor(finalValue).darken(10).toString()}`,
  };

  return (
    <code>
      {props.children ?? finalValue}
      <span style={dotStyle} />
    </code>
  );
}

// ====== Export ======
export * from '@ctrl/tinycolor';
export type { ColorChunkProps };
export default React.memo(ColorChunk);

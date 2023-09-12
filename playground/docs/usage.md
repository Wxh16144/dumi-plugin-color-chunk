---
title: Usage
---

# 安装

```bash
npm install dumi-plugin-color-chunk --save-dev
```

# 使用

```js {4} | pure
// .dumirc.ts
export default {
  plugins: [['dumi-plugin-color-chunk']],
};
```

## 自定义颜色块儿

```js | pure
// .duim/theme/builtins/ColorChunk.ts
import { TinyColor } from 'dumi-plugin-color-chunk/component';

export default (props) => {
  return (
    <code>
      {props.children ?? new TinyColor(props.children).toHexString()}
      {/* more logic */}
    </code>
  );
};
```

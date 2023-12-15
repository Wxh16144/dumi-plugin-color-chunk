---
title: Usage
---

# 安装

```bash
npm install dumi-plugin-color-chunk --save-dev
```

# 使用

```js {3} | pure
// .dumirc.ts
export default {
  plugins: ['dumi-plugin-color-chunk'],
};
```

## 自定义

<i>Source Code: [src/component/index.tsx](https://github.com/Wxh16144/dumi-plugin-color-chunk/blob/master/src/component/index.tsx)</i>

```js | pure
// .duim/theme/builtins/ColorChunk.ts
import { Color } from 'dumi-plugin-color-chunk';

export default (props) => {
  return (
    <code>
      {props.children ?? new Color(props.children).toHexString()}
      {/* more logic */}
    </code>
  );
};
```

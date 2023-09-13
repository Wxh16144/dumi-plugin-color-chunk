---
title: Beautify inline color blocks
---

<br>

## 美化颜色块儿 <sub>灵感来源 [Supported color models](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#supported-color-models)</sub>

<br>

用内联代码块儿 \`#f00\` 包裹的颜色值，会被处理成带颜色块儿的标签 `#f00`。

---

## 示例 <sub>摘选自 [《色彩模型与颜色选择器》](https://ant.design/docs/blog/color-picker-cn)</sub>

<br>

1. `HEX` 色彩模型是通过十六进制数来表示色彩的，其中前两位表示红色的取值，中间两位表示绿色的取值，后两位表示蓝色的取值。
   例如，红色可以表示为 `#FF0000`，绿色可以表示为 `#00FF00`，蓝色可以表示为 `#0000FF`。

2. 在 `HSV` 色彩模型中，每个颜色都可以用一个三元组 `(H, S, V)` 来表示，其中 `H` 表示色相的取值，`S` 表示饱和度的取值，`V` 表示明度的取值。
   例如，红色可以表示为 `hsv(0, 100%, 100%)`，绿色可以表示为 `hsv(120, 100, 100)`，蓝色可以表示为 `hsv(240, 100, 100)`。

3. 在 `RGB` 色彩模型中，每个颜色都可以用一个三元组 `(R, G, B)` 来表示，其中 `R` 表示红色的取值，`G` 表示绿色的取值，`B` 表示蓝色的取值。
   例如，红色可以表示为 `rgb(255, 0, 0)`，绿色可以表示为 `rgb(0, 255, 0)`，蓝色可以表示为 `rgb(0, 0, 255)`。

---

## 更多

|                                  Color                                  |                   Syntax                    |        Example         |        Output        |
| :---------------------------------------------------------------------: | :-----------------------------------------: | :--------------------: | :------------------: |
|    [HEX](https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color)    | `#RGB` \| `#RRGGBB` \|`#RGBA` \|`#RRGGBBAA` |      \`#0969DA\`       |      `#0969DA`       |
| [RGB](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb) |       `rgb(R,G,B)` \| `rgba(R,G,B,A)`       |  \`rgb(9, 105, 218)\`  |  `rgb(9, 105, 218)`  |
| [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) |       `hsl(H,S,L)` \| `hsl(H,S,L,A)`        | \`hsl(212, 92%, 45%)\` | `hsl(212, 92%, 45%)` |

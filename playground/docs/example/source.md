<!-- expected -->

`red`
`yellow`
`violet`
`deepskyblue`

`#12d`
`#1677ff`
`#2333`
`#12345678`

`rgb(123,3,2)`
`rgba(12,3,2,.2)`

`hsv(12,3,12)`
`hsva(12,3,22,.8)`

`hsb(12,99,2)`
`hsba(124,233,2,.24)`

`hsl(12,3,198)`
`hsl(0, 100%, 75%)`
`hsla(12,3,52,.2)`
`hsla(9, 100%, 64%, 0.2)`

<!-- https://github.com/scttcper/tinycolor/commit/2927a9d2aa03e037486a79a295542a7848621691 -->

`cmyk(20, 50, 100, 0)`

---

**Invalid**

<!-- 👇👇👇 invalid 👇👇👇 -->

`rgba(12,3,2,12%)` <= invalid

`hsva(12,3,22,22%)` <= invalid

---

`[12,32,144]`

[`12`,`32`,`144`]

`123`

`#123456789`

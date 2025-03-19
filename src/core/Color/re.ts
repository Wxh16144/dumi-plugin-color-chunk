// <http://www.w3.org/TR/css3-values/#integers>
const CSS_INTEGER = '[-\\+]?\\d+%?';

// <http://www.w3.org/TR/css3-values/#number-value>
const CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';

// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
const CSS_UNIT = `(?:${CSS_NUMBER})|(?:${CSS_INTEGER})`;

// like: https://github.com/scttcper/tinycolor/blob/31a98e09ac0f9499ccf6971acd2a006703527d27/src/format-input.ts#L98-L99
const PERMISSIVE_MATCH3_STRICT = `\\s*\\(\\s*(${CSS_UNIT})\\s*,\\s*(${CSS_UNIT})\\s*,\\s*(${CSS_UNIT})\\s*\\)\\s*$`;
const PERMISSIVE_MATCH4_STRICT = `\\s*\\(\\s*(${CSS_UNIT})\\s*,\\s*(${CSS_UNIT})\\s*,\\s*(${CSS_UNIT})\\s*,\\s*(${CSS_UNIT})\\s*\\)\\s*$`;

/**
 * like: https://github.com/scttcper/tinycolor/blob/31a98e09ac0f9499ccf6971acd2a006703527d27/src/format-input.ts#L101
 */
export const strictMatchers = {
  rgb: new RegExp(`^rgb${PERMISSIVE_MATCH3_STRICT}`),
  rgba: new RegExp(`^rgba${PERMISSIVE_MATCH4_STRICT}`),
  hsl: new RegExp(`^hsl${PERMISSIVE_MATCH3_STRICT}`),
  hsla: new RegExp(`^hsla${PERMISSIVE_MATCH4_STRICT}`),
  hsv: new RegExp(`^hsv${PERMISSIVE_MATCH3_STRICT}`),
  hsva: new RegExp(`^hsva${PERMISSIVE_MATCH4_STRICT}`),
  cmyk: new RegExp(`^cmyk${PERMISSIVE_MATCH4_STRICT}`),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};

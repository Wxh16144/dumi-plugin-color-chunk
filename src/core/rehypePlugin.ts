import { TinyColor } from '@ctrl/tinycolor';
import { unistUtilVisit } from 'dumi';
import { VALID_COLOR_CHUNK } from './remarkPlugin';

function rehypePlugin() {
  return (tree: any) => {
    unistUtilVisit.visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'code' && node.properties?.[VALID_COLOR_CHUNK]) {
        const originalValue = node.children[0].value;
        let color = new TinyColor(originalValue);

        if (!color.isValid) {
          color = new TinyColor(node.properties[VALID_COLOR_CHUNK]);
        }

        if (color.isValid) {
          // https://github.com/scttcper/tinycolor#string-representations
          const methods = [
            'toHsv',
            'toHsvString',

            'toHsl',
            'toHslString',

            'toNumber',

            'toHex',
            'toHexString',

            'toHex8',
            'toHex8String',

            'toHexShortString',

            'toRgb',
            'toRgbString',

            'toPercentageRgb',
            'toPercentageRgbString',

            'toName',

            'toFilter',

            'toString',
          ];

          const JSXAttributes = [];

          for (const method of methods) {
            try {
              // @ts-ignore
              const result = color[method]();
              const propsName = method.replace(/^to/, '').replace(/^[A-Z]/, (s) => s.toLowerCase());

              JSXAttributes.push({
                type: 'JSXAttribute',
                name: propsName,
                value: JSON.stringify(result),
              });
            } catch (e) {
              /** nothing */
            }
          }

          let value;
          try {
            value = JSON.stringify(color.toString());
          } catch (error) {
            // nothing
          } finally {
            if (value) {
              JSXAttributes.push({
                type: 'JSXAttribute',
                name: 'value',
                value,
              });
            }
          }

          parent!.children.splice(index!, 1, {
            type: 'element',
            tagName: 'ColorChunk',
            JSXAttributes,
            children: node.children,
          });
        }
      }
    });
  };
}

export default rehypePlugin;

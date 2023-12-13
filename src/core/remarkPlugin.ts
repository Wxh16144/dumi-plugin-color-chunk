import { TinyColor } from '@ctrl/tinycolor';
import { unistUtilVisit } from 'dumi';

export const VALID_COLOR_CHUNK = '$valid-color-chunk-inline_code';

export const isNumber = (str: string) => {
  return !isNaN(parseFloat(str)) && isFinite(Number(str));
};

function remarkPlugin() {
  return (tree: any) => {
    unistUtilVisit.visit(tree, 'inlineCode', (node, index, parent) => {
      // isValid color
      const color = new TinyColor(node.value);
      if (color.isValid && !isNumber(node.value)) {
        parent!.children.splice(index!, 1, {
          type: 'html',
          value: `<code ${VALID_COLOR_CHUNK}=${color.toHex8String()}>${node.value}</code>`,
        });
      }
    });
  };
}

export default remarkPlugin;

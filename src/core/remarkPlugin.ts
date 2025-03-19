import { unistUtilVisit } from 'dumi';
import Color from './Color';

export const VALID_COLOR_CHUNK = '$valid-color-chunk-inline_code';

function remarkPlugin() {
  return (tree: any) => {
    unistUtilVisit.visit(tree, 'inlineCode', (node, index, parent) => {
      // isValid color
      const color = new Color(node.value);
      if (color.isStrictValid()) {
        parent!.children.splice(index!, 1, {
          type: 'html',
          value: `<code ${VALID_COLOR_CHUNK}=${color.toHex8String(true)}>${node.value}</code>`,
        });
      }
    });
  };
}

export default remarkPlugin;

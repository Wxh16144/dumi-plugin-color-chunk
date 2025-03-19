import { unistUtilVisit } from 'dumi';
import Color from './Color';
import { VALID_COLOR_CHUNK } from './remarkPlugin';

function rehypePlugin() {
  return (tree: any) => {
    unistUtilVisit.visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'code' && node.properties?.[VALID_COLOR_CHUNK]) {
        const originalValue = node.children[0].value;
        let color = new Color(originalValue);

        if (!color.isStrictValid()) {
          color = new Color(node.properties[VALID_COLOR_CHUNK]);
        }

        if (color.isStrictValid()) {
          let value = '#00000000'; // transparent
          const JSXAttributes = [];
          try {
            value = JSON.stringify(color.toHexString(true));
          } catch (error) {
            // nothing
          } finally {
            JSXAttributes.push({
              type: 'JSXAttribute',
              name: 'value',
              value,
            });
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

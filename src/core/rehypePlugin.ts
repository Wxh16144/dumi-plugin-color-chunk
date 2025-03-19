import { unistUtilVisit } from 'dumi';
import { VALID_COLOR_CHUNK } from './remarkPlugin';

function rehypePlugin() {
  return (tree: any) => {
    unistUtilVisit.visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'code' && node.properties?.[VALID_COLOR_CHUNK]) {
        parent!.children.splice(index!, 1, {
          type: 'element',
          tagName: 'ColorChunk',
          JSXAttributes: [
            {
              type: 'JSXAttribute',
              name: 'value',
              value: JSON.stringify(node.properties[VALID_COLOR_CHUNK]),
            },
          ],
          children: node.children,
        });
      }
    });
  };
}

export default rehypePlugin;

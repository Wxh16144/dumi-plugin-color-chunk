import type { IApi } from 'dumi';
import path from 'path';
import { rehypePlugin, remarkPlugin } from './core';

const COMPONENT_PATH = path.join(__dirname, '../es/component/index.js');

export default (api: IApi) => {
  api.register({
    key: 'modifyConfig',
    stage: Infinity,
    fn: (memo: IApi['config']) => {
      memo.alias['dumi-plugin-color-chunk/component'] = COMPONENT_PATH;

      const cloneExtraRemarkPlugins = memo.extraRemarkPlugins,
        cloneExtraRehypePlugins = memo.extraRehypePlugins;

      memo.extraRemarkPlugins = [
        remarkPlugin,
        ...(Array.isArray(cloneExtraRemarkPlugins)
          ? cloneExtraRemarkPlugins
          : ([cloneExtraRemarkPlugins].filter(Boolean) as any)),
      ];

      memo.extraRehypePlugins = [
        rehypePlugin,
        ...(Array.isArray(cloneExtraRehypePlugins)
          ? cloneExtraRehypePlugins
          : ([cloneExtraRehypePlugins].filter(Boolean) as any)),
      ];

      return memo;
    },
  });

  api.register({
    key: 'modifyTheme',
    stage: Infinity,
    fn: (memo: IApi['config']) => {
      memo.builtins = Object.assign(
        {
          ColorChunk: {
            specifier: 'ColorChunk',
            source: COMPONENT_PATH,
          },
        },
        memo.builtins,
      );

      return memo;
    },
  });
};

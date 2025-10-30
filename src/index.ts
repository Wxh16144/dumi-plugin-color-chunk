import type { IApi } from 'dumi';
import path from 'path';
import { rehypePlugin, remarkPlugin } from './core';

const COMPONENT_PATH = path.join(__dirname, '../es/component/index.js');

const toArr = <T>(val?: T | T[]) => {
  if (Array.isArray(val)) return val;
  // eslint-disable-next-line eqeqeq
  return val != null ? [val] : [];
};

export default (api: IApi) => {
  api.describe({
    key: 'dumi-plugin:color-chunk',
  });
  api.register({
    key: 'modifyConfig',
    stage: Infinity,
    fn: (memo: IApi['config']) => {
      memo.alias['dumi-plugin-color-chunk/component'] = COMPONENT_PATH;

      memo.extraRemarkPlugins = [remarkPlugin, ...toArr(memo.extraRemarkPlugins)];
      memo.extraRehypePlugins = [rehypePlugin, ...toArr(memo.extraRehypePlugins)];

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

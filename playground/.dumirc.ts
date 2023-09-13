import { defineConfig } from 'dumi';
import { resolve } from 'path';
import { homepage } from '../package.json';

const isProd = process.env.NODE_ENV === 'production';
// 不是预览模式 同时是生产环境
const isProdSite = process.env.PREVIEW !== '1' && isProd;

const githubRepoName = 'dumi-plugin-color-chunk';

export default defineConfig({
  plugins: [githubRepoName],
  themeConfig: {
    name: 'color-chunk',
    socialLinks: {
      github: homepage,
    },
  },
  outputPath: resolve(__dirname, '../.doc'),
  base: isProdSite ? `/${githubRepoName}/` : '/',
  publicPath: isProdSite ? `/${githubRepoName}/` : '/',
});

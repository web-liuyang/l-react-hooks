import path from 'path';
import { cwd } from 'process';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import { DEFAULT_EXTENSIONS } from '@babel/core';

import { terser } from 'rollup-plugin-terser';
import { name } from '../package.json';

console.log(process.env.NODE_ENV);

const resolve = (pathname) => {
  return path.resolve(cwd(), pathname);
};

const option = {
  input: resolve('src/index.ts'),
  output: {
    // 必须 (如果要输出多个，可以是一个数组)
    file: resolve('dist/index.js'),
    format: 'umd',
    name,
  },

  plugins: [
    // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
    commonjs(),
    // 配合 commnjs 解析第三方模块
    nodeResolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    typescript(),
    babel({
      runtimeHelpers: true,
      // 只转换源代码，不运行外部依赖
      exclude: 'node_modules/**',
      // babel 默认不支持 ts 需要手动添加
      extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
    }),
  ],

  external: ['react'],
};

if (process.env.NODE_ENV === 'prod') {
  /** 压缩 */
  option.plugins.push(terser());
}

export default option;

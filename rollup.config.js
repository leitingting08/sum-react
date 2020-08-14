import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript';
import { DEFAULT_EXTENSIONS } from '@babel/core';

const pkg = require('./package.json');
const isProd = process.env.NODE_ENV === 'production';

const paths = {
  input: path.join(__dirname, '/components/index.js'),
  output: path.join(__dirname, '/dist'),
};

export default {
  input: paths.input,
  output: [
    {
      file: pkg.module,
      format: 'es',
      name: pkg.name,
      globals: {
        antd: 'antd',
        react: 'react',
      },
    },
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.name,
      globals: {
        antd: 'antd',
        react: 'react',
      },
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      // babel 默认不支持 ts 需要手动添加
      extensions: [...DEFAULT_EXTENSIONS, '.ts'],
    }),
    typescript(),
    // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
    commonjs(),
    // postcss(),
    postcss({
      // Extract CSS to the same location where JS file is generated but with .css extension.
      extract: true,
      // Use named exports alongside default export.
      namedExports: true,
      // Minimize CSS, boolean or options for cssnano.
      minimize: true,
      // Enable sourceMap.
      sourceMap: true,
      // This plugin will process files ending with these extensions and the extensions supported by custom loaders.
      extensions: ['.less', '.css'],
    }),
    isProd && terser(), // 压缩js
  ],
  // 指出应将哪些模块视为外部模块，如 Peer dependencies 中的依赖
  external: ['antd', 'react', 'react-dom'],
};

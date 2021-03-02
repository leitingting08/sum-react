import path from 'path';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import copy from 'rollup-plugin-copy';
import { DEFAULT_EXTENSIONS } from '@babel/core';

const fs = require('fs');

const isProd = process.env.NODE_ENV === 'production';

const packages = {};
const dir = path.join(__dirname, '/components');
const files = fs.readdirSync(dir);
files.forEach((file) => {
  if (file !== 'index.ts') {
    packages[file] = `components/${file}/index.tsx`;
  }
});

const pkg = require('./package.json');

const dependencies = Object.keys(pkg.peerDependencies);

const all = `index`;
packages[all] = path.join(__dirname, '/components/index.ts');

const createRollupConfig = (file, name) => {
  const config = {
    input: file,
    output: [
      // 默认打包到lib文件夹下的版本是umd版本
      {
        file: name === all ? 'lib/index.js' : `lib/${name}/index.js`,
        format: 'umd',
        name,
        globals: {
          antd: 'antd',
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
      {
        // 再多打包一份es版本到es文件夹下
        file: name === all ? 'es/index.js' : `es/${name}/index.js`,
        format: 'es',
        name,
        globals: {
          antd: 'antd',
          react: 'react',
          'react-dom': 'react-dom',
        },
      },
    ],
    onwarn: function (warning) {
      if (warning.code === 'CIRCULAR_DEPENDENCY') {
        return;
      }
      console.error(`(!) ${warning.message}`);
    },
    plugins: [
      name === all &&
        typescript({
          include: ['components/*.ts+(|x)', 'components/**/*.ts+(|x)'],
          typescript: require('typescript'),
        }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'runtime',
        // babel 默认不支持 ts 需要手动添加
        extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
      }),
      json(),
      nodeResolve(),
      // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
      commonjs(),
      postcss({
        // 单独打包css文件默认false
        extract: true,
        // Minimize CSS, boolean or options for cssnano.
        minimize: isProd,
        // Enable sourceMap.
        sourceMap: !isProd,
        // This plugin will process files ending with these extensions and the extensions supported by custom loaders.
        extensions: ['.less', '.css'],
        use: [['less', { javascriptEnabled: true }]],
      }),
      name !== all &&
        copy({
          targets: [
            { src: `components/${name}/index.less`, dest: `es/${name}` },
            { src: `components/${name}/index.less`, dest: `lib/${name}` },
          ],
        }),
      isProd && terser(), // 压缩js
    ],
    // 指出应将哪些模块视为外部模块，如 Peer dependencies 中的依赖
    external: dependencies,
  };
  return config;
};

const buildPackages = [];
Object.keys(packages).forEach((name) => {
  const file = packages[name];
  buildPackages.push(createRollupConfig(file, name));
});

export default buildPackages;

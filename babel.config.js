module.exports = {
  env: {
    test: {
      presets: [
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        '@babel/preset-typescript',
      ],
      plugins: [
        ['@babel/plugin-transform-runtime'],
        ['transform-es2015-modules-commonjs'], // jest不支持em模块,用babel处理
        ['import', { libraryName: 'antd', style: true }],
      ],
    },
    production: {
      presets: [
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              ie: 10,
            },
          },
        ],
        '@babel/preset-typescript',
      ],
      plugins: [
        // 解决多个地方使用相同代码导致打包重复的问题
        ['@babel/plugin-transform-runtime'],
        ['import', { libraryName: 'antd', style: true }],
      ],
      ignore: ['node_modules/**'],
    },
    development: {
      presets: [
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: {
              ie: 10,
            },
          },
        ],
        '@babel/preset-typescript',
      ],
      plugins: [
        // 解决多个地方使用相同代码导致打包重复的问题
        ['@babel/plugin-transform-runtime'],
        ['import', { libraryName: 'antd', style: true }],
      ],
      ignore: ['node_modules/**'],
    },
  },
};

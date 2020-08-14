module.exports = {
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
  ],
  ignore: ['node_modules/**'],
};

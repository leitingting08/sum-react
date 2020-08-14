module.exports = {
  entry: './components/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        loader: require.resolve('babel-loader'),
        query: {
          cacheDirectory: true,
          plugins: [['import', { libraryName: 'antd', style: 'css' }]],
        },
      },
      {
        test: /\.(css|less)?$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

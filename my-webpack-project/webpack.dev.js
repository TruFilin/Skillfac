const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = {
  ...common,
  mode: 'development',
  devServer: {
  contentBase: './dist',
  hot: true,
  proxy: {
    '/api': 'http://localhost:3000',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

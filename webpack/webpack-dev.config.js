const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack-base.config.js');
const path = require('path');

module.exports = function () {
  return webpackMerge(baseConfig(), {
    devServer: {
      hot: true,
      lazy: true,
      publicPath: "/dist/",
      contentBase: [path.join(__dirname, "../src")],
      disableHostCheck: true,
      watchOptions: {
        ignored: /node_modules/,
        poll: true
      }
    }
  });
}

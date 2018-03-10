const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function() {
  return {
    entry: {'main':['./src/js/index.js']},
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist/')
    },
    module: {
      rules: [
        {
          test: /\.(s)*css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader",
              {
                loader: "sass-loader",
                options: {
                  includePaths: [
                    path.resolve(__dirname, "./src/styles/")
                  ]
                }
              }]
          })
        },
        {
          test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
          loader: 'url-loader'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("styles.css")
    ]
  }
};

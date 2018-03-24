const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ReactRootPlugin = require('html-webpack-react-root-plugin');

const config = {
  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader'
              },
              {
                loader: 'sass-loader'
              }
            ]
          }
        )
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public')
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new HtmlWebpackPlugin({
      title: 'Joshua Wu',
      filename: 'index.html'
    }),
    new ReactRootPlugin()
  ]
}

module.exports = {
  config
}
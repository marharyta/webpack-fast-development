// webpack v4.6.0
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const stylish = require('eslint/lib/formatters/stylish');
const webpack = require('webpack');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    devtoolModuleFilenameTemplate: info =>
      'file://' + path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: stylish
        }
      }
    ]
  },
  plugins: [
    // new webpack.SourceMapDevToolPlugin({
    //   filename: '[file].map',
    //   moduleFilenameTemplate: undefined,
    //   fallbackModuleFilenameTemplate: undefined,
    //   append: null,
    //   module: true,
    //   columns: true,
    //   lineToLine: false,
    //   noSources: false,
    //   namespace: ''
    // }),
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

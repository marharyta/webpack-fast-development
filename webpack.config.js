// webpack v4.6.0
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const stylish = require('eslint/lib/formatters/stylish');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: { main: './src/index.js' },
  output: {
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

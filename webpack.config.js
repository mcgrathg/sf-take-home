const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    readme: './src/readme/index.js',
    index: './src/index.js',
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.md$/,
        use: [
          { loader: 'html-loader' },
          { loader: 'markdown-loader' },
        ],
      },
      {
        test: /\.gif$/,
        use: 'file-loader',
      },
    ],
  },

  devServer: {
    contentBase: './src',
    hot: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['index'],
      filename: 'index.html',
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['readme'],
      filename: 'readme',
    }),
  ],
};

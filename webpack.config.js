const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const commonOptions = {
  entry: ['./src/index.ts', './src/style.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js',
    },
  },
  devServer: {
    contentBase: 'dist',
    compress: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'static/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './style-[hash].css',
    }),
    new CopyWebpackPlugin({
      patterns:
        [
          {
            from: path.resolve(__dirname, 'static/images'),
            to: './images',
          },
        ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

};

module.exports = () => {
  commonOptions.mode = isProd ? 'production' : 'development';
  return commonOptions;
};

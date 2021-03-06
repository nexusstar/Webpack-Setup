const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();


module.exports = {
  entry: __dirname + '/src/app/index.js', // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store grenerated bundle
    filename: 'bundle.js', // Name of generated bundle
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: { // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.html/,
        loader: 'raw-loader'
      },
      {
        test: /\.(sass|scss)$/,
        use: [{
          loader: 'style-loader' //creates style nodes from JS strings
        },
        {
          loader: 'css-loader' // translats css into CommonJs
        },
        {
          loader: 'sass-loader' // compiles Sass to CSS
          }]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader'},
            {loader: 'sass-loader'}
          ],
        })
      },
    ]
  },
  plugins: [ // Arary of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: __dirname + '/src/public/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      API_KEY: JSON.stringify(process.env.API_KEY)
    }),

  ],
  devServer: { // configuration for webpack-dev-server
    contentBase: './src/public', //source of static assets
    port: 8800, // port to run dev-server
  }
};


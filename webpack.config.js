const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exporst = {
  entry: __dirname + '/src/app/index.js', // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist', // Folder to store grenerated bundle
    filename: 'bundle.js', // Name of generated bundle
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: { // where we defined file patterns and their loaders
    rules: [
    ]
  },
  plugins: [ // Arary of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: __dirname + '/src/public/index.html',
      inject: 'body'
    })
  ],
  devServer: { // configuration for webpack-dev-server
    contentBase: './src/public', //source of static assets
    port: 8800, // port to run dev-server
  }
};

const path = require('path');
const webpack = require('webpack');

// NOTE: if later using ./docs to serve from GitHub Pages
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    scripts: './scripts.js',
  },
  output: {
    filename: '[name].bundle.js',
    // NOTE: if later using ./docs to serve from GitHub Pages
    // path: path.resolve(__dirname, '../docs'),
    // publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.css'],
    modules: [
      path.resolve(__dirname, '../node_modules'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    // NOTE: if later using ./docs to serve from GitHub Pages
    // new CopyWebpackPlugin([
    //   { from: 'assets/*', to: './docs' },
    //   {
    //     context: './',
    //     from: '*.html',
    //     to: './[name]'
    //   }
    // ])
  ],
  node: {
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false
  },
  devServer: {
    contentBase: './'
  }
};

const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

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
    path: path.resolve(__dirname, '../docs'),
    publicPath: '/'
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
    new CopyPlugin([
      {
        context: './',
        from: '*.{html,css,png}',
        to: './[name].[ext]'
      },
      {
        context: './frow',
        from: 'frow.css',
        to: './'
      },
      {
        context: './shared',
        from: '*.js',
        to: './'
      }
    ])
  ],
  externals: {
    // NOTE: if for some reason need to pull a package externally like from a CDN
    // lodash: '_',
    // google: 'google',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  node: {
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false
  }
};

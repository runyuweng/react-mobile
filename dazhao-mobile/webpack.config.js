const path = require('path');
const AppCachePlugin = require('appcache-webpack-plugin');
const webpack = require('webpack');
var config = {
  entry: path.resolve(__dirname, './main.jsx'),

  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js',
    chunkFilename: 'static/js/[name].chunk.js'
  },

  devServer: {
    inline: true,
    host: '127.0.0.1',
    // host: '192.168.23.1',
    port: 7777
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', "stage-1"],
        plugins: ["transform-decorators-legacy"]
      }
    }, {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', "stage-1"],
        plugins: ["transform-decorators-legacy"]
      }
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader?minimize!sass-loader'
    }, {
      test: /.(png|jpg)$/,
      loader: "url-loader?limit=8192"
    }]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //     'process.env': {
    //         'NODE_ENV': JSON.stringify('production')
    //     }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "commons",
    //   filename: 'static/js/common.js'
    // }),
    // new AppCachePlugin({
    //     cache: [
    //         'index.js',
    //         'index.html'
    //     ],
    //     network: ['*'],
    //     output: './cache.appcache'
    // })
    // ,
    // new webpack.optimize.UglifyJsPlugin({
    //     beauty: false,
    //     comments: false,
    //     compress: {
    //         warnings: false
    //     }
    // })
  ]
}

module.exports = config;
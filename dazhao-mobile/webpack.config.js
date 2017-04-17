const path = require('path');
const AppCachePlugin = require('appcache-webpack-plugin');

var config = {
   entry: path.resolve(__dirname, './main.jsx'),

   output: {
      path: path.resolve(__dirname, './'),
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 7777
   },

   module: {
        loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react']
             }
          },
          {
               test: /\.js?$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               query: {
                  presets: ['es2015']
               }
            },
          {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
          },
          {
            test: /.(png|jpg)$/,
            loader: "url-loader?limit=8192"
        }]
   },
   plugins: [
       new AppCachePlugin({
         cache: [
             'index.js',
             'index.html'
         ],
         network: ['*'],
         output: path.resolve(__dirname, './cache.appcache')
       })
 ]
}

module.exports = config;

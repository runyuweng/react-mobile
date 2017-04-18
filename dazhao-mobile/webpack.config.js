var config = {
   entry: './main.jsx',

   output: {
      path:'./',
      filename: 'index.js',
      chunkFilename: '[name].[chunkhash:5].chunk.js'
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
   }
}

module.exports = config;

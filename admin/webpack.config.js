var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry:'./app.js',
  output:{
     path:path.resolve(__dirname,'dist'),
     filename:'bundle.js'
  },
  module:{
      loaders:[
          {
              test:/\.jade$/,
              loader:'jade',
              exclude:/node_modules/
          },
          {
              test:/\.css$/,
              loader:'style!css',
              exclude:/node_modules/
          },
          {
              test:/\.js$/,
              loader:'babel',
              query:{
                  presets:['es2015']
              },
              exclude:/node_modules/
          },
          {
              test:/\.less/,
              loader:'style!css!less',
              exclude:/node_modules/
          },
          {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
          {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
          {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
          {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}

      ]
  },
  resolve:{
     root:['./src'],
     extensions:['','js','css']
  }
}
var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: ['./src/App.jsx'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extension: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {test: /\.jsx?$/, include: [path.join(__dirname, 'src')], loaders: ['babel']}
    ]
  }

};
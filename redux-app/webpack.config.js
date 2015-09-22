var path = require('path');
module.exports = {
  entry: './app/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /\.spec\.js$/],
        include: __dirname
      }
    ]
  }
};

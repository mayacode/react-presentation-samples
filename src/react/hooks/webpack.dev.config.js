const path = require('path');

module.exports = {
  mode: 'development',
  devtool: '#inline-source-map',
  entry: [path.resolve(__dirname, 'index.js')],
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'static'),
    watchContentBase: true,
    compress: true,
  },
};

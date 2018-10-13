const path = require('path');

module.exports = {
  entry: {
    app: [
      './js/main.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'main.bundle.js',
  },
  mode: 'development',
  devtool:'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js?$'/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
}
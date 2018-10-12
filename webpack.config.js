const path = require('path');

module.exports = {
  entry: {
    app: [
      './src/js/app.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: 'app.bundle.js',
  },
  mode: 'development',
  devtool:'inline-source-map',
  devServer: {
    contentBase: './build'
  },
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
module.exports = {
  entry:  './index.js',
  output: {
    parth: __dirname,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: 'node-modules',
      }
    ]
  }
}
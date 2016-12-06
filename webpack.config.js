module.exports = {
  entry:  './index.js',
  output: {
    parth: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
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
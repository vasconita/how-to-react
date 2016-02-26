const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ["es2015", "stage-0", "react"]
        }
      }
    ]
  }
};
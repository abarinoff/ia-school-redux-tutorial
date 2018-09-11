const path = require('path');

const STATIC = path.resolve(__dirname, 'src/public');
const SOURCE = path.resolve(__dirname, 'src/client');
const DIST = path.resolve(__dirname, 'dist');

module.exports = {
  devtool: 'cheap-source-map',

  entry: {
    app: SOURCE + '/index.js'
  },

  resolve: {
    modules: [
      SOURCE,
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '*']
  },

  output: {
    path: DIST,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  devServer: {
    contentBase: STATIC,
    publicPath: '/',
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss|.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
import path from 'path';

export default {
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/'
  },
  devtool: 'false',
  mode: 'development',
  entry: './src/index.js',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      }
    ]
  }
};

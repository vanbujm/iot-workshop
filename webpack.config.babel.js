import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

export default {
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/'
  },
  devtool: 'false',
  mode: 'production',
  entry: './src/index.js',
  target: 'node',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: false,
        sourceMap: false
      })
    ]
  },
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

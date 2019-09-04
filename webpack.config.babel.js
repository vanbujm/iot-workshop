import path from 'path';

export default env => ({
  target: 'node',
  entry: {
    app: ['./src/index.js']
  },
  watchOptions: {
    ignored: /node_modules/
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },
  mode: env !== 'dev' ? 'production' : 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
});

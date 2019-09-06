// import path from 'path';
//
// export default env => ({
//   target: 'node',
//   entry: {
//     app: ['./src/index.js']
//   },
//   output: {
//     path: path.resolve(__dirname, './build'),
//     filename: 'index.js',
//     library: '',
//     libraryTarget: 'commonjs'
//   },
//   mode: env !== 'dev' ? 'production' : 'development',
//   module: {
//     rules: [
//       {
//         exclude: /node_modules/,
//         test: /\.js$/,
//         use: 'babel-loader'
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.json']
//   }
// });

import path from 'path';

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

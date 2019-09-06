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
  mode: 'production',
  entry: './src/main.js',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};

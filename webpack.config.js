const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './entry.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
      test: /\.css$/,
      use: [ 
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      }, 
      ],
     }
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};

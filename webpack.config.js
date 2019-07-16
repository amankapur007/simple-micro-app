const path = require('path');

module.exports = {
  entry: ['./src/home.component.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: [ {
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }],
    },
    {
        test: /\.css$/i,
        use: ['css-loader'],
      }
    ]
  }
};
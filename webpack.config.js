const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractLess = new ExtractTextPlugin({
    filename: "[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: './src/index.js',
  output: {
  	filename: '[name].css',
  	path: path.resolve(__dirname, 'css')
    // path: path.resolve(../testsite, 'mycss')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: extractLess.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
            publicPath: './css/'
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
            publicPath: './css/'
          }
        }]
      }
    ]
  },
  plugins: [
      extractLess
  ]
};

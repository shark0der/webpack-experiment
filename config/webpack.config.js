const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
  entry: './src/index.js',
  output: {
    path: __dirname + '/../dist',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              name: '[path][name].[ext]',
              publicPath: __dirname + '/../dist',
            }
          },
          "css-loader"
        ]
      },
      {
        // generates => module.exports = "<html><img src=' + require('file.img') + '</html>"
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            root: __dirname + '/dist',
            attrs: [':src']
          }
        }
      },
      {
        test: /\.(jpg|png|gif|svg|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              context: 'src',
              publicPath: __dirname + '/../dist/static',
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "app.css"
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false,
      // filename: '/dev/null',
    }),
  ],
}];

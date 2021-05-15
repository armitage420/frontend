const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/script.js',
  devtool: 'eval-cheap-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./index.html",
        chunks: ["main"],
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};

// npm run build:dev --> for dev
// npm run build --> for prod
// npm install webpack-dev-server --save-dev
// npm run start --> dist wont be needed will be form in local system
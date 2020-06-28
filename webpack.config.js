var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const src = path.join(__dirname, "src");
const elm = path.join(__dirname, "elm");

const ElmLoaders = (...loaders) =>
  loaders.map((loader) => ({
    loader,
    options: { cwd: elm },
  }));

module.exports = {
  entry: path.join(src, "index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: ElmLoaders("elm-hot-webpack-loader", "elm-webpack-loader"),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      inject: "body",
    }),
  ],
};

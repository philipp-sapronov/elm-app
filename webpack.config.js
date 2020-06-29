var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const isDevMode = NODE_ENV === "development";
const src = path.join(__dirname, "src");
const elm = path.join(__dirname, "elm");

const ElmLoaders = (...loaders) =>
  loaders.map((loader) => ({
    loader,
    options: { cwd: elm },
  }));

module.exports = {
  mode: NODE_ENV,
  devServer: {
    contentBase: false,
    historyApiFallback: true,
    host: "0.0.0.0",
    hot: true,
    publicPath: "/",
    liveReload: true,
    port: 8080,
  },
  entry: path.join(src, "index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  devtool: isDevMode ? "source-map" : false,
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

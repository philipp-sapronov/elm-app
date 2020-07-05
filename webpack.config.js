const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV;
const isDevMode = NODE_ENV === "development";
const src = path.join(__dirname, "src");
const elm = path.join(__dirname);

module.exports = {
  mode: NODE_ENV,
  devServer: {
    contentBase: false,
    historyApiFallback: true,
    host: "0.0.0.0",
    publicPath: "/",
    port: 3000,
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
        use: [
          {
            loader: "elm-hot-webpack-loader",
            options: { cwd: elm },
          },
          {
            loader: "elm-webpack-loader",
            options: { cwd: elm },
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      inject: "body",
    }),
    new ExtractTextPlugin({
      filename: "./css/style.bundle.css",
      allChunks: true,
    }),
  ],
};

const webpack = require("webpack");

module.exports = {
  entry: "./client/public/js/index.js",
  output: {
    path: __dirname + "/client/dist",
    filename: "index.js"
  },
  mode: "development",
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"] }
    ]
  },
  devServer: {
    open: true
  }
};

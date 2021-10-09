const path = require("path");
var myPlugins = require("./plugins/myPlugins");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.muji$/,
        use: [
          {
            loader: "myLoader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
    ],
  },
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "loaders")],
  },
  plugins: [new myPlugins({ options: true })],
};

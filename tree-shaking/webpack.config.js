const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [],
  },
  optimization: {
      // 模块只导出被使用的成员
    usedExports: true,
    minimize: true
  },
};

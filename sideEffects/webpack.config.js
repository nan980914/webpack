const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:[
              ['@babel/preset-env']
            ]
          }
        }
      }
    ],
  },
  optimization: {
    usedExports: true, // 模块只导出被使用的成员
    minimize: true // 压缩代码，删除未被引用的代码
  },
};

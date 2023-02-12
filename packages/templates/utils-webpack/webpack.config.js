const path = require("path");
module.exports = {
  mode: "production",
  entry: `./src/index`,
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "mylib.min.js", // 指定生成的库文件名称
    globalObject: "this",
    clean: true,
    library: {
      type: "umd", // 指定打包出来的库 是哪种模块化规范 通常我们采用umd 就能满足 CommonJS、AMD 以及 script 标签使用
      name: "mylib", // 这就是我们导出的全局对象上的属性的名称 例如 window.mylib  上面有一个test方法
      export: 'default'
    },
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$|\.m?ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1",
                    ie: "11",
                  },
                  corejs: "3",
                  useBuiltIns: "usage",
                },
              ],
              "@babel/preset-typescript",
            ],
            cacheDirectory: true,
          },
        },
      },
    ],
  },

  externals: {
    // 排除一些模块，让用户自己去安装需要的模块，这样能有效减少包的体积
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_", // 页面引入的全局变量
    },
  },
};

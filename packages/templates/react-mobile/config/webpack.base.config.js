/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WebpackBar = require("webpackbar")
const os = require("os")
const HappyPack = require("happypack")
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
const CopyPlugin = require("copy-webpack-plugin")
const fs = require('fs');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const sourcePath = path.resolve(__dirname, '../src/pages'); // 替换为你的源代码目录

// 获取指定目录下的文件夹列表
function getDirectories(srcpath) {
  return fs.readdirSync(srcpath)
    .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory());
}

// 根据入口，动态生成 entry 配置
function generateEntries() {
  const entries = {};
  const folders = getDirectories(sourcePath);
  folders.forEach(folder => {
    entries[folder] = path.resolve(sourcePath, folder, 'app.tsx');
  });
  return entries;
}

function generatePlugin() {
  const plugin = []
  const folders = getDirectories(sourcePath);
  folders.forEach(folder => {
    plugin.push(
      new HtmlWebpackPlugin({
        title: folder,
        template: path.resolve(__dirname, `../public/index.html`), // 源模板文件
        chunks: [folder],
        filename: `${folder}.html`
      }),
      // 把public中的文件复制到dist文件中
      new CopyPlugin([
        {
          // 从public中复制文件
          from: path.resolve(__dirname, "../public"),
          // 把复制的文件存放到dis里面
          to: path.resolve(__dirname, `../dist`)
        }
      ])
    )
  });

  return plugin;
}



const createHappyPlugin = (id, loaders) =>
  new HappyPack({
    id: id,
    loaders: loaders,
    threadPool: happyThreadPool,
    verbose: process.env.HAPPY_VERBOSE === "1" // make happy more verbose with HAPPY_VERBOSE=1
  })

const pathsPlugin = new TsconfigPathsPlugin({
  configFile: path.resolve(__dirname, "../tsconfig.json")
})

module.exports = {
  entry: generateEntries(),
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    plugins: [pathsPlugin],
    alias: {
      "@src": path.resolve(__dirname, "../src")
    }
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "happypack/loader?id=happybabel",
        // options: { 使用happypack, 需要把options写到对应的plugin里
        //   configFile: resolve("./babel.config.js")
        // },
        test: /\.(jsx?|tsx?)$/
      }
    ]
  },
  plugins: [
    new WebpackBar(),
    createHappyPlugin("happybabel", [
      {
        loader: "babel-loader",
        options: {
          babelrc: true,
          configFile: path.resolve(__dirname, "../babel.config.js"),
          cacheDirectory: true // 启用缓存
        }
      }
    ]),
    new CleanWebpackPlugin(),
    ...generatePlugin()
  ]
}

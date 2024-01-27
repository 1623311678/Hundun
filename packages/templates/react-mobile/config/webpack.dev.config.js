/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { merge } = require('webpack-merge');
const Base = require('./webpack.base.config')

const resolve = path.resolve.bind(path, __dirname);

const fileLoaderPath = "file-loader?name=[name].[ext]";
const devConfig = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    compress: true,
    // historyApiFallback: true,
    open: true,
    openPage: ['pageA.html',],  // 指定要打开的页面
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
        changeOrigin: true
      },
    },
    hot: true,
    port: 9002
  },
  mode: 'development',
  devtool: "sourceMap",
  output: {
    chunkFilename: "[name].js",
    filename: "[name].js",
    path: path.resolve(__dirname, '../dist'),
    // publicPath: "./",
  },
  module: {
    rules: [
      {
        test: /.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ].concat([
          // {
          //   loader: "sass-resources-loader",
          //   options: {
          //     resources:  path.resolve(__dirname,'../src/styles/base.scss')
          //   }
          // }
        ])
      },
      {
        include: [
          path.resolve(__dirname, '../node_modules'),
          path.resolve(__dirname, '../assets'),
        ],
        loader: fileLoaderPath,
        test: /\.(eot|otf|png|gif|svg|jpg|ttf|woff|woff2)(\?v=[0-9.]+)?$/
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, '../postcss.config.js'),
              },
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
                "math": "always"
              }
            }
          }
        ]
      }
    ]
  }
}
module.exports = merge(Base, devConfig)
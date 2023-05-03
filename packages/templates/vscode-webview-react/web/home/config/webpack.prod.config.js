/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require('webpack-merge');
const Base = require('./webpack.base.config')

const resolve = path.resolve.bind(path, __dirname);
const dashboardBuildPath = path.resolve(__dirname,'../../../dist/home')
const publicPath = "./";
const fileLoaderPath = "file-loader?name=[name].[hash].[ext]";
const prodConfig =  {
  mode: "production",
  devtool: false,
  output:{
    chunkFilename: `[name].js`,
    filename: `[name].js`,
    path: resolve(dashboardBuildPath),
    publicPath
  },
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname,'../node_modules'),
          path.resolve(__dirname,'../assets'),
        ],
        loader: fileLoaderPath,
        test: /\.(eot|otf|png|gif|svg|jpg|ttf|woff|woff2)(\?v=[0-9.]+)?$/
      },
      {
        test: /.s?css$/,
        use: [
         MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ].concat([
          {
            loader: "sass-resources-loader",
            options: {
              resources:  path.resolve(__dirname,'../src/styles/base.scss')
            }
          }
        ])
      },
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
    minimizer: [
      // webpack:production模式默认有配有js压缩，但是如果这里设置了css压缩，js压缩也要重新设置,因为使用minimizer会自动取消webpack的默认配置
      new CssMinimizerPlugin({
        parallel: true,
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true }
            }
          ]
        },
        minify: CssMinimizerPlugin.cleanCssMinify
      }),
      new TerserPlugin({
        include: path.resolve(__dirname,'../src'),
        exclude: /node_modules/,
        terserOptions: {
          ecma: 5,
          parse: {},
          compress: {},
          drop_console: true, //传true就是干掉所有的console.*这些函数的调用.
          drop_debugger: true, //干掉那些debugger;
          pure_funcs: ["console.log"], // 如果你要干掉特定的函数比如console.info ，又想删掉后保留其参数中的副作用，那用pure_funcs来处理
          module: false,
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css"
    }),
  ]
};

module.exports = merge(Base,prodConfig)
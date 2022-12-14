/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { merge } = require('webpack-merge');
const Base = require('./webpack.base.config')

const resolve = path.resolve.bind(path, __dirname);
const dashboardBuildPath = path.resolve(__dirname,'../dist')
const publicPath = "./";
const fileLoaderPath = "file-loader?name=[name].[hash].[ext]";
const prodConfig =  {
  mode: "production",
  devtool: false,
  output:{
    chunkFilename: `[name].[chunkhash].js`,
    filename: `[name].[chunkhash].js`,
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
    splitChunks: {
      minSize: 10000,
      chunks: "all",
      cacheGroups: {
        editorjs: {
          name: "chunk-editjs",
          priority: 10,
          test: /[\/]node_modules[\/]@editorjs[\/]/,
          enforce: true
        },
        material: {
          name: "chunk-material",
          priority: 11,
          test: /[\/]node_modules[\/]@material-ui[\/]/,
          enforce: true
        },
        react: {
          name: "chunk-react",
          priority: 82,
          test: /[\/]node_modules[\/](react|react-dom|react-router|react-router-dom)[\/]/,
          enforce: true
        },
        antd: {
          name: "chunk-antd",
          priority: 13,
          test: /[\/]node_modules[\/](antd|@ant-design|rc-\w+)[\/]/,
          enforce: true
        },
        echarts: {
          name: "chunk-echarts",
          priority: 13,
          test: /[\/]node_modules[\/](echarts)[\/]/,
          enforce: true
        },
        moment: {
          chunks: "all",
          name: "moment",
          test: /(?<!node_modules.*)[\\/]node_modules[\\/](moment|moment-timezone)[\\/]/,
          priority: 24,
          enforce: true
        }
      }
    },
    minimizer: [
      // webpack:production?????????????????????js????????????????????????????????????css?????????js????????????????????????,????????????minimizer???????????????webpack???????????????
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
          drop_console: true, //???true?????????????????????console.*?????????????????????.
          drop_debugger: true, //????????????debugger;
          pure_funcs: ["console.log"], // ???????????????????????????????????????console.info ?????????????????????????????????????????????????????????pure_funcs?????????
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
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    }),
  ]
};

module.exports = merge(Base,prodConfig)
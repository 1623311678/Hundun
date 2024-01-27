module.exports = {
    plugins: [
      require('postcss-px-to-viewport')({
        viewportWidth: 375, // 设计稿宽度
        minPixelValue: 1,   // 小于或等于 1px 不转换
        propList: ['*', '!font*'],
      }),
    ],
  };
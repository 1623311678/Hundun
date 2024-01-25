//utils
//px 已经是逻辑像素，独立像素了，会决定有多少点渲染
// 当像素比为1:1时，使用1X1个设备像素显示1个css像素
// 当像素比为2:1时，使用2X2个设备像素显示1个css像素
// 当像素比为3:1时，使用3X3个设备像素显示1个css像素
// 这里我们需要做的事等比锁房
// https://github.com/Qingquan-Li/blog/issues/58
// 以 Apple 系统下的（标准） 72 dpi 来计算，1 pt = px * ( 72 / 72) = 1 px
const toDp = (px: number) => {
  const docEl = document.documentElement
  const scale = docEl.clientWidth / 375
  console.log("scale", scale)
  return px * scale + "px"
}
export { toDp }

const chalk = require("chalk");
const success = (content) => console.log(chalk.green(content));
const error = (content) => console.log(chalk.red(content));
const warn = (content) => console.log(chalk.yellow(content));
/**
 * @description 获取随机十六进制颜色
 * @author wangjunkai 2022.10.07
 * @function getHexRandomColor
 * @returns {String} color-颜色
 */
function getHexRandomColor() {
  let color = "#";
  //一个十六进制数组
  const array = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  //获取六个随机数
  for (let i = 0; i < 6; i++) {
    const num = parseInt(Math.random() * 16);
    color += array[num];
  }
  return color;
}

/**
 * @description 每次执行cli命令的提示
 * @author wangjunkai 2022.10.07
 * @function tipMsg
 */
const tipMsg = (content = []) => {
  let outputString = "";
  for (let j = 0; j<content.length; j++) {
    const curStr = content[j];
    if (curStr && curStr.length) {
      outputString += `${chalk
        .bgHex("#ffffe5")
        .italic.bold(` ${chalk.hex(getHexRandomColor())(curStr)} `)}`;
    }
  }
  console.log(outputString)
};
module.exports = {
  success,
  error,
  warn,
  getHexRandomColor,
  tipMsg,
};

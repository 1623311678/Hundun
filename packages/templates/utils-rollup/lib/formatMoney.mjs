/**
 * 根据输入的金额按千位逗号分割
 * @param s 输入的金额
 * @param type 是否需要小数位 0: 10000 -> '10,000', 1: 有小数 10000 -> '10,000.00'
 * @returns 返回格式化后的金额字符串
 */
var formatMoney = function formatMoney(s, type) {
  if (type === void 0) {
    type = 1;
  }
  s = Number.parseFloat("".concat(s));
  var isNegative = false;
  if (s < 0) {
    isNegative = true;
    s = -s;
  }
  var newString = s.toString().replace(/^(\d*)$/, '$1.');
  newString = "".concat(newString, "00").replace(/(\d*\.\d\d)\d*/, '$1');
  newString = newString.replace('.', ',');
  var re = /(\d)(\d{3},)/;
  while (re.test(newString)) newString = newString.replace(re, '$1,$2');
  newString = newString.replace(/,(\d\d)$/, '.$1');
  if (type == 0) {
    var a = newString.split('.');
    if (a[1] == '00') {
      newString = a[0];
    }
  }
  if (isNegative) {
    return "-".concat(newString);
  }
  return newString;
};

export { formatMoney as default };

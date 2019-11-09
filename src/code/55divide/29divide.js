/**
给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。

示例 1:

输入: dividend = 10, divisor = 3
输出: 3
示例 2:

输入: dividend = 7, divisor = -3
输出: -2
说明:

被除数和除数均为 32 位有符号整数。
除数不为 0。
假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。

*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// 勉强通过, 但是时间复杂度太差..
var divide1 = function (dividend, divisor) {
  if (dividend === 0) return 0
  if (divisor === 1) return dividend
  let res = 0
  const symbol = dividend > 0 ^ divisor > 0
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  while (dividend >= divisor) {
    res++
    dividend -= divisor
  }
  res = symbol === 0 ? +res : -res
  const ceil = 2 ** 31 - 1
  const floor = (-2) ** 31
  return res > ceil || res < floor ? ceil : res
};


var divide = function (dividend, divisor) {
  let dividendAbs = Math.abs(dividend)
  const divisorAbs = Math.abs(divisor)
  let res = 0
  while (dividendAbs >= divisorAbs) {
    let temp = divisorAbs
    let m = 1
    while (temp <= (dividendAbs >> 1)) {
      temp <<= 1
      m <<= 1
    }
    dividendAbs -= temp
    res += m
  }
  res = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0) ? -res : res
  const ceil = 2 ** 31 - 1
  const floor = (-2) ** 31
  return res > ceil || res < floor ? ceil : res
}

console.log(divide(-7, -2));

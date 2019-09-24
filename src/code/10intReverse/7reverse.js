/**
 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321
 示例 2:

输入: -123
输出: -321
示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse1 = function(x) {
  let res
  const MAX31 = Math.pow(2, 31) - 1
  const MIN31 = Math.pow(-2, 31)
  if(x > 0) {
    res = parseInt((x+'').split('').reverse().join(''))
  } else {
    const arr = (x+'').split('')
    arr.push(arr.shift())
    res = parseInt(  arr.reverse().join('') )
  }
  if(cur < MIN31 || cur > MAX31 ){
    return 0
  }
  return res;
};


/**
 * 2
 * @param {*} x 
 */
var reverse2 = function(x) {
  let cur = 0
  const MAX31 = Math.pow(2, 31) - 1
  const MIN31 = Math.pow(-2, 31)
  while (x!==0) {
    let pop = x%10
    if(x <0){
      x = Math.ceil(x/10)
    } else {
      x = Math.floor(x/10)
    }
    cur = cur *10 + pop
    if(cur < MIN31 || cur > MAX31 ){
      return 0
    }
  }
  return cur
};

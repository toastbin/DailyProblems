/**
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

示例 1:

输入: n = 12
输出: 3 
解释: 12 = 4 + 4 + 4.
示例 2:

输入: n = 13
输出: 2
解释: 13 = 4 + 9.
*/
/**
 * @param {number} n
 * @return {number}
 */
// 暴力递归
var numSquares1 = function(n) {
  
  return process(n)

  // 数字n的完全平方数
  // 返回的是可能凑的最少个数
  function process(n) {
    if(n === 1) return 1
    if( (Math.sqrt(n)+'').indexOf('.') === -1 ) return 1
    let res = Number.MAX_SAFE_INTEGER
    for(let i = 1; i ** 2 <= n; i++) {
      let square = i ** 2
      res = Math.min(res, process(n - square) + 1)
    }
    return res 
  }
};

console.log(numSquares1(12))

// 备忘录
var numSquares2 = function(n) {
  const memo = new Array(n+1).fill(-1)

  return process(n)
  // 数字n的完全平方数
  // 返回的是可能凑的最少个数
  function process(n) {
    if(n === 1) return 1
    if( (Math.sqrt(n)+'').indexOf('.') === -1 ) return 1
    if(memo[n] !== -1) return memo[n]
    let res = Number.MAX_SAFE_INTEGER

    for(let i = 1; i ** 2 < n; i++) {
      let square = i ** 2
      res = Math.min(res, process(n - square) + 1)
    }
    return memo[n] = res
  }
};

console.log(numSquares2(12))

// dp
var numSquares3 = function(n) {
  const dp = new Array(n+1)
  for(let i = 0; i < dp.length; i++) {
    dp[i] = i
  }

  for(let i = 2; i <= n; i++){
    for (let j = 1; j ** 2 <= i; j++){
      dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
    }
  }
  return dp[n];
};

console.log(numSquares3(12))
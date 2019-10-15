/**
给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

示例 1:

输入: 2
输出: 1
解释: 2 = 1 + 1, 1 × 1 = 1。
示例 2:

输入: 10
输出: 36
解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。
说明: 你可以假设 n 不小于 2 且不大于 58。

*/
/**
 * @param {number} n
 * @return {number}
 */
// 暴力递归
var integerBreak1 = function(n) {
  
  return process(n)

  // 将n进行分割, 至少分割两部分, 求可以获得的最大乘积
  function process(n) {
    if(n === 1) return 1
    let res = -1
    for(let i = 1; i <= n-1; i++) {
      // i + (n-i)
      res = Math.max(res, i * process(n-i), i * (n-i))
    }

    return res
  }
  
};

console.log(integerBreak1(10));


// 备忘录
var integerBreak2 = function(n) {
  let memo = new Array(n+1).fill(-1)

  return process(n)

  function process(n) {
    if(n === 1) return 1
    if(memo[n] !== -1) return memo[n]
    let res = -1
    for(let i = 1; i <= n-1; i++) {
      res = Math.max(res, i * process(n-i), i * (n-i))
    }
    memo[n] = res
    return res
  }
};

console.log(integerBreak2(10));

// dp
var integerBreak3 = function(n) {
  // dp[i] 表示将数字 i 分割至少两部分后得到的最大乘积
  let dp = new Array(n+1).fill(-1)
  dp[0] = 0
  dp[1] = 1

  for(let i = 2; i <= n; i++) {
    for(let j = 1; j <= i-1; j++) {
      // i => j + (i-j)
      dp[i] = Math.max(j * (i-j), j * dp[i-j], dp[i])
    }
  }

  return dp[n]
};

console.log(integerBreak3(10));



/**
给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

示例 1:

输入: coins = [1, 2, 5], amount = 11
输出: 3 
解释: 11 = 5 + 5 + 1
示例 2:

输入: coins = [2], amount = 3
输出: -1
说明:
你可以认为每种硬币的数量是无限的。

*/
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 暴力递归 不予通过 
var coinChange1 = function(coins, amount) {
  
  return process(coins, amount)

  function process(coins, amount) {
    if(amount === 0) {
      return 0
    }
    let res = Number.MAX_SAFE_INTEGER
    for(let i=0, len=coins.length; i<len; i++) {
      if(amount - coins[i] < 0) continue
      let subProb = process(coins, amount - coins[i])
      if(subProb === -1) continue
      res = Math.min(res, subProb + 1)
    }
    return res === Number.MAX_SAFE_INTEGER ? -1 : res
  }
};

console.log(coinChange1([1, 2, 5], 11));

// dp 完全背包问题
var coinChange2 = function(coins, amount) {
  
  const dp = new Array(amount+1).fill(-1)
  dp[0] = 0

  for(let i=0, len=coins.length; i<len; i++) {
    for(let j=coins[i]; j<=amount; j++) {
      if(dp[j - coins[i]] === -1) continue
      if(dp[j] === -1) {
        dp[j] = dp[j-coins[i]] + 1
        continue
      }
      dp[j] = Math.min(dp[j], dp[j-coins[i]] + 1)
    }
  }
  return dp[amount]
  
};

console.log(coinChange2([1, 2, 5], 11));

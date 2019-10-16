/**
一条包含字母 A-Z 的消息通过以下方式进行了编码：

'A' -> 1
'B' -> 2
...
'Z' -> 26
给定一个只包含数字的非空字符串，请计算解码方法的总数。

示例 1:

输入: "12"
输出: 2
解释: 它可以解码为 "AB"（1 2）或者 "L"（12）。
示例 2:

输入: "226"
输出: 3
解释: 它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。

*/

/**
 * @param {string} s
 * @return {number}
 */

 // 暴力递归
var numDecodings1 = function(s) {
  const len = s.length
  return process(s, 0)

  // 当前i 到 len的编码情况
  // 返回当前的总数
  function process(s, i) {
    if(i === len) return 1
    if(s[i] === '0') return 0

    // f[i] = f[i+1] + f[i+2]
    let res1 = process(s, i+1)
    let res2 = 0
    if(i < len -1 && s[i] + s[i+1] <= 26) {
      res2 = process(s, i+2)
    }

    return res1 + res2
  }
};

console.log(numDecodings1('113'));

// 备忘录
var numDecodings2 = function(s) {
  const len = s.length
  let memo = new Array(len).fill(-1)

  return process(s, 0)

  // 当前i 到 len的编码情况
  // 返回当前的总数
  function process(s, i) {
    if(i === len) return 1
    if(s[i] === '0') return 0
    if(memo[i] !== -1) return memo[i]

    // f[i] = f[i+1] + f[i+2]
    let res1 = process(s, i+1)
    let res2 = 0
    if(i < len -1 && s[i] + s[i+1] <= 26) {
      res2 = process(s, i+2)
    }

    memo[i] = res1 + res2
    return res1 + res2
  }
};

console.log(numDecodings2('113'));

// dp
var numDecodings3 = function(s) {
  const len = s.length
  let dp = new Array(len+1).fill(-1)
  dp[len] = 1
  dp[len-1] = s[len-1] === '0' ? 0 : 1
  // dp[i] = dp[i+1] + dp[i+2]
  for(let i = len - 2; i >= 0; i--) {
    if(s[i] === '0') {
      dp[i] = 0
      continue
    } 
    if(s[i] + s[i+1] <= 26) {
      dp[i] = dp[i+1] + dp[i+2]
    } else {
      dp[i] = dp[i+1]
    }
  }
  return dp[0]
};

console.log(numDecodings3('123'));

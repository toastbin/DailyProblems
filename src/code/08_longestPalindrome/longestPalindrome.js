/**
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 
*/

/**
 * @param {string} s
 * @return {string}
 */
// 暴力法  超出时间限制
var longestPalindrome1 = function(s) {
  if(s.length===1) return s
  if(s.length===2) {
    if(s[0] === s[1]){
      return s
    }else{
      return s[0]
    }
  }
  let max = ''
  function isCycle(s) {
    let len = Math.floor(s.length/2)
    for(let i=0; i<len; i++){
      if( s[i] !== s[s.length - i-1] ){
        return false
      }
    }
    return true
  }
  for( let i=0, len=s.length; i<len-1; i++ ){
    for(let j=i+1; j<len+1; j++){
      const cur = s.substring(i, j)
      if( isCycle(cur) && cur.length > max.length ){
        max = cur
      }
    }
  }
  return max
};

// console.log(longestPalindrome1("babad"))
// console.log(longestPalindrome1("cbbd"))
// console.log(longestPalindrome1("a"))

// 2 中心扩散法
var longestPalindrome2 = function(s) {
  if(s.length<=1) return s
  let res = ''
  function diffusion(s, left, right) {
    while(left >=0 && right < s.length && s[left] === s[right]){
      if ((right - left + 1) > res.length){
        res = s.substring(left, right+1)
      }
      left --
      right ++
    }
  }

  for(let i=0, len=s.length; i<len; i++) {
    // 中心是单个
    diffusion(s, i, i)
    // 中心是两个
    diffusion(s, i, i+1)
  }
  return res
};

console.log(longestPalindrome3('abba'))


// 3 动态规划  dp
// 如果在当前的回文串两端加上相同的元素, 那么新形成的字符串仍然是一个回文串
// 状态定义 dp[i][j] 字符串从 i 到 j 是否是回文串 
// dp 方程 s[i] === s[j]  dp[i][j] = dp[i+1][j-1]

var longestPalindrome3 = function(s) {
  if(s.length<=1) return s
  let res = s[0]
  if(s[0] === s[1]){
    res = s.substring(0, 2)
  }
  let dp = new Array(s.length).fill([])
  for(let i=0, len=s.length; i<len; i++){
    dp[i].push('')
  }
  for(let j=2, len=s.length; j<len; j++) {
    dp[j][j] = true
    for(let i=0; i<j; i++){
      dp[i][j] = s[i] === s[j] && (i-j <= 2) || dp[i+1][j-1]
      if(dp[i][j] && res.length < j-i+1 ) {
        res = s.substring(i, j-i+2)
      }
    }
  }
  return res
};



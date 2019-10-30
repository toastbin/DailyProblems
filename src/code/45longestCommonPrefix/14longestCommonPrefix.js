/**
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
// 
var longestCommonPrefix1 = function(strs) {
  if(strs.length === 0) return ''
  if(strs.length === 1) return strs[0]
  const common = [...strs[0]]
  let minLen = Number.MAX_SAFE_INTEGER

  for(let i = 1, len = strs.length; i < len; i++ ) {
    if(strs[i] == '') return ''
    minLen = Math.min(minLen, strs[i].length)
    for(let j = 0; j < strs[i].length; j++) {
      if(common[j] !== strs[i][j]) {
        common.splice(j)
        break
      }
    }
  }

  return common.slice(0, minLen).join('')
};

var longestCommonPrefix2 = function(strs) {
  if(strs.length === 0) return ''
  if(strs.length === 1) return strs[0]

  return process(strs, 0, strs.length - 1)

  function process(strs, l, r) {
    if(l === r) return strs[l]

    let mid = (l + r) >> 1

    let left = process(strs, l, mid)
    let right = process(strs, mid + 1, r)

    return commonPrefix(left, right)

  }

  function commonPrefix(left, right) {
    const min = Math.min(left.length, right.length)

    for(let i = 0; i < min; i++) {
      if(left[i] !== right[i]) return left.slice(0, i)
    }
    return left.slice(0, min)
  }

};



module.exports = {
  longestCommonPrefix1,
  longestCommonPrefix2
}
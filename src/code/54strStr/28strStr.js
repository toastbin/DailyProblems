/**
实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

示例 1:

输入: haystack = "hello", needle = "ll"
输出: 2
示例 2:

输入: haystack = "aaaaa", needle = "bba"
输出: -1
说明:

当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。

*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// KMP 算法
var strStr = function (haystack, needle) {
  if (haystack === '' && needle === '') return 0
  if (needle === '') return 0
  if (!haystack || haystack.length < needle.length) {
    return -1
  }
  let i1 = i2 = 0

  const next = getNextArray(needle)

  while (i1 < haystack.length && i2 < needle.length) {
    if (haystack[i1] === needle[i2]) {
      i1++
      i2++
    } else {
      if (next[i2] === -1) {
        i1++
      } else {
        i2 = next[i2]
      }
    }
  }
  return i2 === needle.length ? i1 - i2 : -1

  function getNextArray(str) {
    if (str.length === 1) return [-1]
    const next = [-1, 0]

    let i = 2
    let cn = 0

    while (i < str.length) {
      // 当前字符的前一个 等于 前缀的下一个
      if (str[i - 1] === str[cn]) {
        next[i++] = ++cn
      } else if (cn > 0) {
        cn = next[cn]
      } else {
        next[i++] = 0
      }
    }
    return next
  }
}



/**
给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = []
  process(res, '', 0, 0, n)

  return res

  function process(res, str, l, r, n) {
    if(l > n || r > n || r > l) return
    if(l === n && r === n ) {
      res.push(str)
      return
    }
    process(res, str + '(', l + 1, r, n)
    process(res, str + ')', l, r + 1, n)
    return
  }
};


console.log(generateParenthesis(3));
module.exports = generateParenthesis
/**
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]

 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(matrix.length === 0 || matrix[0].length === 0) {
    return []
  }
  let sL = 0, sR = 0, eL = matrix.length - 1, eR = matrix[0].length - 1
  let res = []

  while(sL <= eL && sR <= eR) {
    printCycle(matrix, sL++, sR++, eL--, eR--)
  }

  return res
  function printCycle(matrix, sl, sr, el, er) {
      // 行相同
    if(sl === el) {
      for(let i=sl; i<=er; i++) {
        res.push(matrix[sl][i])
      }
      // 列相同
    } else if(sr === er) {
      for(let i=sr; i<=el; i++) {
        res.push(matrix[i][sr])
      }
    } else {
      let curL = sl
      let curR = sr
      while(curR !== er) {
        res.push(matrix[sl][curR++])
      }
      while(curL !== el) {
        res.push(matrix[curL++][er])
      }
      while(curR !== sr) {
        res.push(matrix[el][curR--])
      }
      while(curL !== sl) {
        res.push(matrix[curL--][sr])
      }
    }
  }
};
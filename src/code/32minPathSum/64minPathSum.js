/**
给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。

示例:

输入:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 7
解释: 因为路径 1→3→1→1→1 的总和最小。

*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
// 暴力递归
var minPathSum1 = function(grid) {
  let row = grid.length
  let col = grid[0].length

  return process(grid, 0, 0)

  function process(m, i, j) {
    let res = m[i][j]
    if(i === row-1 && j === col-1) return res
    if( i === row-1) return process(m, i, j+1) + res
    if( j === col-1 ) return process(m, i+1, j) + res

    let right = process(m, i, j+1) 
    let down = process(m, i+1, j)  
    return Math.min(right, down) + res
  }
};

// 7
console.log(minPathSum1(
  [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
))

// 备忘录法
var minPathSum2 = function(grid) {
  let row = grid.length
  let col = grid[0].length

  // 记忆数组
  let memo = []
  for(let i = 0; i < row; i++) {
    memo.push([])
  }
  return process(grid, row-1, col-1)
  function process(m, i, j) {
    if(memo[i][j]) return memo[i][j]

    if(i === 0 && j === 0) return memo[i][j] = grid[0][0]

    let up = left = Number.MAX_SAFE_INTEGER

    if(i) up = process(m, i-1, j)
    if(j) left = process(m, i, j-1)
    return memo[i][j] = Math.min(up, left) + m[i][j]
  }
};

console.log(minPathSum2(
  [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
))

// dp
var minPathSum3 = function(grid) {
  let row = grid.length
  let col = grid[0].length
  let dp = []
  for(let i = 0; i < row; i++) {
    dp.push([])
  }

  dp[0][0] = grid[0][0]
  for(let i = 1; i < col; i++) dp[0][i] = dp[0][i-1] + grid[0][i]
  for(let i = 1; i < row; i++) dp[i][0] = dp[i-1][0] + grid[i][0]
  
  for(let i=1; i<row; i++) {
    for(let j=1; j<col; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    }
  }
  return dp[row-1][col-1]
};

console.log(minPathSum3(
  [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
))
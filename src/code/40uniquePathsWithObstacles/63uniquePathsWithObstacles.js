/**
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？


网格中的障碍物和空位置分别用 1 和 0 来表示。

说明：m 和 n 的值均不超过 100。

示例 1:

输入:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
输出: 2
解释:
3x3 网格的正中间有一个障碍物。
从左上角到右下角一共有 2 条不同的路径：
1. 向右 -> 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右 -> 向右

*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 备忘录
var uniquePathsWithObstacles1 = function(obstacleGrid) {
  const row = obstacleGrid.length
  const col = obstacleGrid[0].length 

  const memo = []
  for(let i = 0; i < row; i++) {
    memo.push(new Array(col).fill(-1))
  }

  return process(obstacleGrid, 0, 0)

  function process(m, i, j) {
    if(i >= row || j >= col) return 0
    if(i === row - 1 && j === col - 1 ) return m[i][j] === 1 ? 0 : 1
    if(memo[i][j] !== -1) return memo[i][j] 
    if(i === row - 1) return m[i][j+1] === 1 ? 0 : process(m, i, j+1)
    if(j === col - 1) return m[i+1][j] === 1 ? 0 : process(m, i+1, j)

    let left = m[i][j+1] === 1 ? 0 : process(m, i, j+1)
    let down = m[i+1][j] === 1 ? 0 : process(m, i+1, j)

    return memo[i][j] = left + down
  }
};


// dp 时间复杂度 O(N * M) 空间复杂度 O(N * M)
var uniquePathsWithObstacles2 = function(obstacleGrid) {
  const row = obstacleGrid.length
  const col = obstacleGrid[0].length 

  const dp = []
  for(let i = 0; i < row; i++) {
    dp.push(new Array(col).fill(0))
  }
  for(let i = row-1; i >= 0; i--) {
    // 最后一行
    if(i === row-1) {
      for(let j = col-1; j >= 0; j--) {
        if(obstacleGrid[i][j] === 1) {
          break
        }
        dp[i][j] = 1
      }
    }

    // 最后一列
    if(obstacleGrid[i][col-1] === 1) {
      break
    }
    dp[i][col-1] = 1

  }

  // dp[i][j] = dp[i+1][j] + dp[i][j+1]
  for(let i = row - 2; i >= 0; i--) {
    for(let j = col - 2; j >= 0; j--) {
      if(obstacleGrid[i][j] === 1) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i+1][j] + dp[i][j+1]
      }
    }
  }

  return dp[0][0]
};

module.exports = {
  uniquePathsWithObstacles1,
  uniquePathsWithObstacles2
}
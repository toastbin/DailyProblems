/**
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

问总共有多少条不同的路径？
[
  [start, 0, 0, 0, 0, 0, 0],
  [0,     0, 0, 0, 0, 0, 0],
  [0,     0, 0, 0, 0, 0, finish],
]

例如，上图是一个7 x 3 的网格。有多少可能的路径？

说明：m 和 n 的值均不超过 100。

示例 1:

输入: m = 3, n = 2
输出: 3
解释:
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向右 -> 向下
2. 向右 -> 向下 -> 向右
3. 向下 -> 向右 -> 向右
示例 2:

输入: m = 7, n = 3
输出: 28

*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 备忘录
var uniquePaths1 = function(m, n) {
  const memo = []
  for(let i = 0; i < m; i++) {
    memo.push(new Array(n).fill(-1))
  }

  return process(0, 0)

  function process(i, j) {
    if(i >= m || j >= n) return 0
    if(i === m-1 && j === n-1) return 1
    if(memo[i][j] !== -1) return memo[i][j]

    let right = process(i, j+1)
    let down = process(i+1, j)

    return memo[i][j] = right + down
  }
};

console.log(uniquePaths1(7, 3));


// dp 时间复杂度 O(N * M)  空间复杂度 O(N * M)
var uniquePaths2 = function(m, n) {
  const dp = []
  for(let i = 0; i < m; i++) {
    if(i === 0) {
      dp.push(new Array(n).fill(1))
      continue
    } 
    dp.push([1, ...new Array(n-1).fill(0)])
  }
  // dp[i][j] 是到达 i, j的最多路径
  // 逆着走的过程
  // dp[i][j] = dp[i-1][j] + dp[i][j-1]

  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      dp[i][j] = dp[i-1][j] + dp[i][j-1]
    }
  }

  return dp[m-1][n-1]
};

console.log(uniquePaths2(7, 3));


// dp 时间复杂度 O(N * M)  空间复杂度 O(2 * N)  优化
var uniquePaths3 = function(m, n) {
  const dp = []
  for(let i = 0; i < 2; i++) {
    dp.push(new Array(n).fill(1))
  }

  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      dp[i % 2][j] = dp[(i-1) % 2][j] + dp[i % 2][j-1]
    }
  }
  return dp[(m-1) % 2][n-1]
};

console.log(uniquePaths3(7, 3));

// dp 时间复杂度 O(N * M)  空间复杂度 O(N)  优化
var uniquePaths4 = function(m, n) {
  const dp = new Array(n).fill(1)
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      dp[j] += dp[j-1]
    }
  }
  return dp.pop()
};

console.log(uniquePaths4(7, 3));
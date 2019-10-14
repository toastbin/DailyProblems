/**
给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

例如，给定三角形：

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

说明：

如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。

*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */

// 暴力递归  超出时间限制
var minimumTotal1 = function(triangle) {
  let h = triangle.length - 1

  return process(triangle, 0, 0)

  function process(triangle, i, j) {
    if(i === h) return triangle[i][j]
    if(j > i || j < 0) return 0

    let left = process(triangle, i+1, j) + triangle[i][j]
    let right = process(triangle, i+1, j + 1) + triangle[i][j]

    return Math.min(left, right)
  }
};

console.log(minimumTotal1(
            [
                 [2],
                [3,4],
               [6,5,7],
              [4,1,8,3]
          ]
));

// 备忘录
var minimumTotal2 = function(triangle) {
  let h = triangle.length
  let w = triangle[h-1].length
  let memo = []
  for(let i=0; i<h; i++) {
    memo.push([])
    for(let j=0; j<w; j++) {
      memo[i].push(null)
    }
  }

  return process(0, 0, triangle)
  function process(i, j, triangle) {
    if(memo[i][j] !== null) {
      return memo[i][j]
    }
    if(i === h-1) {
      return memo[i][j] = triangle[i][j]
    }
    let left = process(i+1, j, triangle)
    let right = process(i+1, j+1, triangle)
    return memo[i][j] = Math.min(left, right) + triangle[i][j]
  }
}

console.log(minimumTotal2(
  [
       [2],
      [3,4],
     [6,5,7],
    [4,1,8,3]
]
));



// dp 二维
var minimumTotal3 = function(triangle) {
  let h = triangle.length
  let dp = []
  for(let i=0; i<h; i++) {
    dp.push([])
  }

  dp[0][0] = triangle[0][0]
  for(let i=1; i<h; i++) {
    for(let j=0; j<=i; j++) {
      let cur = triangle[i][j]
      if(j === 0) {
        dp[i][j] = dp[i-1][j] + cur
        continue
      }
      if(j === i) {
        dp[i][j] = dp[i-1][j-1] + cur
        break
      }
      dp[i][j] = Math.min(dp[i-1][j], dp[i-1][j-1]) + cur
    }
  }

  return Math.min(...dp[h-1])
}

console.log(minimumTotal3(
  [
       [2],
      [3,4],
     [6,5,7],
    [4,1,8,3]
]
));


// dp 一维
var minimumTotal4 = function(triangle) {
  let h = triangle.length
  let dp = new Array(h+1).fill(0)
  for(let level = h-1; level>=0; level--) {
    for(let i=0; i<=level; i++) {
      dp[i] = Math.min(dp[i], dp[i+1]) + triangle[level][i]
    }
  }
  return dp[0]
}

console.log(minimumTotal4(
  [
       [2],
      [3,4],
     [6,5,7],
    [4,1,8,3]
  ]
));



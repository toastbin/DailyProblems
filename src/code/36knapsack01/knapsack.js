/**
01 背包问题
*/

/**
 * 
 * @param {Array} w weight
 * @param {Array} v value
 * @param {Number} c capacity
 */
// 暴力递归
function knapsack1(w, v, c) {
  const len = w.length

  return process(w, v, len-1, c)

  // [0, ...index] 的物品, 填充容积为C的背包的最大价值
  function process(w, v, index, c) {
    if(index < 0 || c <= 0) return 0

    let res = process(w, v, index-1, c)

    if(c >= w[index]) {
      res = Math.max(res, v[index] + process(w, v, index - 1, c - w[index]))
    }
    return res
  }
}

console.log(knapsack1([3, 1, 2], [6, 4, 3], 5))


// 备忘录
function knapsack2(w, v, c) {
  const len = w.length

  const memo = []
  for(let i = 0; i < len; i++) {
    memo.push(new Array(c+1).fill(-1))
  }

  return process(w, v, len-1, c)

  // [0, ...index] 的物品, 填充容积为C的背包的最大价值
  function process(w, v, index, c) {
    if(index < 0 || c <= 0) return 0
    if(memo[index][c] !== -1) return memo[index][c]
    let res = process(w, v, index-1, c)

    if(c >= w[index]) {
      res = Math.max(res, v[index] + process(w, v, index - 1, c - w[index]))
    }
    memo[index][c] = res
    return res
  }
}

console.log(knapsack2([3, 1, 2], [6, 4, 3], 5))


// dp
function knapsack3(w, v, c) {
  const n = w.length

  const memo = []
  for(let i = 0; i < n; i++) {
    memo.push(new Array(c+1).fill(-1))
  }

  for(let i = 0; i <= c; i++) {
    memo[0][i] = ( i >= w[0] ? v[0] : 0)
  }
  
  for(let i = 1; i < n; i++) {
    for(let j = 0; j <=c; j++) {
      memo[i][j] = memo[i-1][j]
      if(j >= w[i]) {
        memo[i][j] = Math.max(memo[i][j], v[i] + memo[i-1][j-w[i]])
      }
    }
  }

  return memo[n-1][c]
}

console.log(knapsack3([3, 1, 2], [6, 4, 3], 5))
  

// dp 空间优化 只使用两个数组空间
function knapsack4(w, v, c) {
  const n = w.length

  const memo = []
  for(let i = 0; i < 2; i++) {
    memo.push(new Array(c+1).fill(-1))
  }

  for(let i = 0; i <= c; i++) {
    memo[0][i] = ( i >= w[0] ? v[0] : 0)
  }
  
  for(let i = 1; i < n; i++) {
    for(let j = 0; j <=c; j++) {
      memo[i % 2][j] = memo[(i-1) % 2][j]
      if(j >= w[i]) {
        memo[i % 2][j] = Math.max(memo[i % 2][j], v[i] + memo[(i-1) % 2][j-w[i]])
      }
    }
  }

  return memo[(n-1) % 2][c]
}

console.log(knapsack4([3, 1, 2], [6, 4, 3], 5))
  

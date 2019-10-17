/**
给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

注意:

每个数组中的元素不会超过 100
数组的大小不会超过 200
示例 1:

输入: [1, 5, 11, 5]

输出: true

解释: 数组可以分割成 [1, 5, 5] 和 [11].
 

示例 2:

输入: [1, 2, 3, 5]

输出: false

解释: 数组不能分割成两个元素和相等的子集.

*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 暴力递归
var canPartition1 = function(nums) {
  const sum = nums.reduce((pre, cur) => pre + cur)
  if(sum % 2) {
    return false
  }
  const aim = sum >> 1
  return process(nums, 0, 0)

  function process(nums, i, res) {
    if(res === aim) return true
    if(i === nums.length) return false

    let res1 = process(nums, i+1, res)
    let res2 = process(nums, i+1, res + nums[i])
    return res1 || res2
  }
  
};

console.log(canPartition1([3, 3, 3, 4, 5]));


// 备忘录  (和上面的思路稍有不同)
var canPartition2 = function(nums) {
  const sum = nums.reduce((pre, cur) => pre + cur)
  if(sum % 2) {
    return false
  }
  const len = nums.length
  // -1 未计算 0 不可以 1 可以
  const memo = []

  for(let i = 0; i < len; i++) {
    memo.push(new Array((sum >> 1) + 1).fill(-1))
  }
  return process(nums, len-1, sum >> 1)

  function process(nums, index, sum) {
    if(sum === 0) return true
    if(sum < 0 || index < 0) return false
    if(memo[index][sum] !== -1) return memo[index][sum]

    memo[index][sum] = process(nums, index - 1, sum) || process(nums, index - 1, sum - nums[index])
    return memo[index][sum]
  }
};

console.log(canPartition2([1, 2, 5]));


// dp
var canPartition3 = function(nums) {
  const sum = nums.reduce((pre, cur) => pre + cur)
  if(sum % 2) {
    return false
  }
  const n = nums.length
  const c = sum >> 1
  // -1 未计算 0 不可以 1 可以
  const dp = new Array(c + 1).fill(false)

  // 初始化第一行的情况
  for(let i = 0; i <= c; i++) {
    dp[i] = nums[0] === i
  }

  for(let i = 1; i < n; i++) {
    for(let j = c; j >= nums[i]; j--) {
      dp[j] = dp[j] || dp[j - nums[i]]
    }
  }

  return dp[c]
};

console.log(canPartition3([1,2,5]));

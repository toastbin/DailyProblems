/**
你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

示例 1:

输入: [1,2,3,1]
输出: 4
解释: 偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 2:

输入: [2,7,9,3,1]
输出: 12
解释: 偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力递归
var rob1 = function(nums) {
  
  return process(nums, 0)

  // 考虑 nums[index, ...tail] 这个范围的所有房子
  function process(nums, i) {
    if(i >= nums.length) return 0

    let cur = process(nums, i+2) + nums[i]
    let prev = process(nums, i+1)

    return Math.max(cur, prev)
  }
};
// 4
console.log(rob1([1, 2, 3, 1])) 

// 备忘录
var rob2 = function(nums) {
  const memo = new Array(nums.length).fill(null)

  return process(nums, 0)

  function process(nums, i) {
    if(i >= nums.length) return 0
    if(memo[i] !== null) return memo[i] 
    let cur = process(nums, i+2) + nums[i]
    let prev = process(nums, i+1)

    return memo[i] = Math.max(cur, prev)
  }
};
// 4
console.log(rob2([1, 2, 3, 1])) 

// dp
var rob3 = function(nums) {
  const len = nums.length;
  if(len == 0)
      return 0;
  const dp = new Array(len).fill(-1)
  dp[len-1] = nums[len-1]

  for(let i = len-2; i >=0; i--) {
    for(let j = i; j < len; j++) {
      dp[i] = Math.max(dp[i], nums[j] + (j + 2 < len ? dp[j+2] : 0))
    }
  }

  return dp[0];
};
console.log(rob3([1, 2, 3, 1])) 

// dp
var rob4 = function(nums) {
  const len = nums.length;
  if(len == 0)
      return 0;
  const dp = [];
  dp[0] = 0;
  dp[1] = nums[0];
  for(let i = 2; i <= len; i++) {
      dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
  }
  return dp[len];
};
console.log(rob4([1, 2, 3, 1])) 
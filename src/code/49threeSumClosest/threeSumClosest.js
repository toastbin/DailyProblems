/**
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 暴力
var threeSumClosest1 = function (nums, target) {
  let offset = Number.MAX_SAFE_INTEGER
  const len = nums.length
  let result = 0

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        let cur = Math.abs(nums[i] + nums[j] + nums[k] - target)
        if (cur < offset) {
          offset = cur
          result = nums[i] + nums[j] + nums[k]
        }
      }
    }
  }

  return result
};

var threeSumClosest2 = function (nums, target) {
  let offset = Number.MAX_SAFE_INTEGER
  const len = nums.length
  let result = 0
  nums.sort((a, b) => a - b)
  let l, r

  for (let i = 0; i < len - 2; i++) {
    l = i + 1
    r = len - 1
    while (l < r) {
      let cur = target - (nums[i] + nums[l] + nums[r])
      if (Math.abs(cur) < offset) {
        offset = Math.abs(cur)
        result = target - cur
      } else {
        if (cur > 0) {
          l++
        } else {
          r--
        }
      }
    }
  }

  return result
};

module.exports = {
  solution1: threeSumClosest1,
  solution2: threeSumClosest2
}
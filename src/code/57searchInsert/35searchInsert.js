/**
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1
示例 3:

输入: [1,3,5,6], 7
输出: 4
示例 4:

输入: [1,3,5,6], 0
输出: 0

*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert1 = function (nums, target) {
  if (nums.indexOf(target) !== -1) {
    return nums.indexOf(target)
  } else {
    nums.push(target)
    nums.sort((a, b) => a - b)
    return nums.indexOf(target)
  }
}

var searchInsert2 = function (nums, target) {
  let start = 0, end = nums.length - 1
  while (start <= end) {
    let mid = (start + end) >> 1
    if (target == nums[mid]) {
      return mid
    } else if (target < nums[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return start
}
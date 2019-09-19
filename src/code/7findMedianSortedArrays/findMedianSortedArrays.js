/* 
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5

*/




/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */


// 1. 先将两个数组合并, 然后返回中位数
//  但是 时间复杂度太高
var findMedianSortedArrays1 = function(nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a-b)
  if(arr.length %2){
    return arr[(arr.length-1)/2]
  }else{
    return (arr[arr.length/2] + arr[arr.length/2-1]) / 2
  }
};


//
var findMedianSortedArrays2 = function(nums1, nums2) {
  let len = Math.floor((nums1.length + nums2.length) / 2)

  while(1) {

    if( len === 0 ){
      return nums1[0] > nums2[0] ? nums2[0] : nums1[0]
    }

    if(nums1[len-1] > nums2[len-1]){
      nums2.splice(0, len)
    }else{
      nums1.splice(0, len)
    }
    console.log(nums1, nums2);
    len = Math.floor(len/2)
  }

};

console.log( findMedianSortedArrays2([3,4, 5], [-2, -1]) )
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
  let len1 = nums1.length;
  let len2 = nums2.length;
  
  let n = (len1 + len2) / 2;
  let m = Math.floor(n);
  if (m === n) {
      n = m - 1;
  } else {
      n = m;
  }
  
  let i = 0, j = 0, k = -1;
  let mNum = null, nNum = null;
  while (i < len1 && j < len2 && (mNum === null || nNum === null)) {
      k++;
      let num;
      if (nums1[i] < nums2[j]) {
          num = nums1[i];
          i++;
      } else {
          num = nums2[j];
          j++;
      }
      if (k === m) {
          mNum = num;
      }
      if (k === n) {
         nNum = num; 
      }
  }
  
  while (i < len1 && (mNum === null || nNum === null)) {
      k++;
      let num = nums1[i];
      i++;
      if (k === m) {
          mNum = num;
      }
      if (k === n) {
         nNum = num; 
      }
  }
  while (j < len2 && (mNum === null || nNum === null)) {
      k++;
      let num = nums2[j];
      j++;
      if (k === m) {
          mNum = num;
      }
      if (k === n) {
         nNum = num; 
      }
  }
  return (nNum + mNum) / 2;
};

console.log( findMedianSortedArrays2([3], [-2, -1]) )
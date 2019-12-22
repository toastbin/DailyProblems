/**
打乱一个没有重复元素的数组。

示例:

// 以数字集合 1, 2 和 3 初始化数组。
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。
solution.shuffle();

// 重设数组到它的初始状态[1,2,3]。
solution.reset();

// 随机返回数组[1,2,3]打乱后的结果。
solution.shuffle();

*/

var Solution = function(nums) {
  this._origArr = nums
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function() {
  return this._origArr
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle1 = function() {
  const newArr = [...this._origArr]
  for (let i = 0, len = newArr.length; i < len; i++) {
    const j = Math.floor(Math.random() * newArr.length)
    const temp = newArr[j]
    newArr[j] = newArr[i]
    newArr[i] = temp
  }
  return newArr
};

Solution.prototype.shuffle2 = function() {
  const newArr = [...this._origArr]
  const res = []
  while(newArr.length) {
    const j = Math.floor(Math.random() * newArr.length)
    const temp = newArr[j]
    newArr.splice(j, 1)
    res.push(temp)
  }
  return res
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/
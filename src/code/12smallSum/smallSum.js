// 小和问题

//  在一个数组中, 每一个数左边比当前数小的数累加起来, 叫做这个数组的小和, 求一个数组的小和
// [1, 3, 4, 2, 5]
// 1左边比1小的数, 没有.
// 3左边比3小的数, 1
// ...
// 1+1+3+1+1+3+4+2 = 16

function smallSum(arr){
  if(arr === null || arr.length < 2) {
    return 0
  }

  return sortProcess(arr, 0, arr.length - 1)

  function sortProcess(arr, left, right) {
    if(left === right) {
      return 0
    }
    let middle = Math.floor((left + right) / 2)
    return  sortProcess(arr, left, middle) +
            sortProcess(arr, middle+1, right) +
            merge(arr, left, middle, right)
  }
  
  function merge(arr, left, mid, right){
    let help = []
    let p1 = left
    let p2 = mid + 1
    let res = 0 
    while(p1 <= mid && p2 <= right) {
      res += arr[p1] < arr[p2] ? (right - p2 +1) * arr[p1] : 0
      help.push( arr[p1] < arr[p2] ? arr[p1++] : arr[p2++] )
    }
    if(p1 > mid) {
      help = help.concat(arr.slice(p2, right+1))
    }
    if(p2 > right){
      help = help.concat(arr.slice(p1, mid+1))
    }
    arr.splice(left, right-left+1, ...help)
    return res
  }
}


console.log(smallSum([1, 3, 4, 2, 5]))
// 手写归并排序


function mergeSort(arr) {
  
  sortProcess(arr, 0, arr.length-1)

  function sortProcess(arr, l, r){
    if(l === r) {
      return
    }
    let mid = Math.floor((l+r) / 2)
    sortProcess(arr, l, mid)
    sortProcess(arr, mid+1, r)
    merge(arr, l, mid, r)
  }

  function merge(arr, l, mid, r) {
    let p1 = l
    let p2 = mid + 1
    let help = []

    while(p1 <= mid && p2 <= r ) {
      help.push( arr[p1] < arr[p2] ? arr[p1++] : arr[p2++] )
    }

    if(p1 > mid ){
      help = [...help, ...arr.slice(p2, r+1)]
    }

    if(p2 > r) {
      help = [...help, ...arr.slice(p1, mid+1)]
    }

    arr.splice(l, r-l+1, ...help)
  }
}

let arr = [4, 2, 1, 5, 7, 6, 0, 10]
mergeSort(arr)
console.log(arr);
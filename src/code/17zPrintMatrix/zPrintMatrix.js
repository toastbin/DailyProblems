// 之字形打印矩阵

function zhiPrintMatrix(matrix) {
  let sl = 0, sr = 0, el = 0, er = 0 
  let res = []
  let flag = 0
  while( sl !== matrix.length  ) {
    if(sr >= matrix[0].length - 1 && el >= matrix.length - 1) {
      print(matrix, sl++, sr, el, er++, flag++)
    } else if(sr >= matrix[0].length - 1) {
      print(matrix, sl++, sr, el++, er, flag++)
    } else if(el >= matrix.length - 1) {
      print(matrix, sl, sr++, el, er++, flag++)
    } else {
      print(matrix, sl, sr++, el++, er, flag++)
    }

  }
  return res
  function print(arr, sl, sr, el, er, flag) {
    // 奇数 斜向下打印
    if(flag % 2) {
      for(let i=0; sl <= el || sr >= er; i++) {
        res.push(arr[sl++][sr--])
      }
      // 偶数 斜向上打印
    } else {
      for(let i=0; el >= sl || er <= sr; i++) {
        res.push(arr[el--][er++])
      }
    }
  }
}

const arr = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16],
]

const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(zhiPrintMatrix(arr));
console.log(zhiPrintMatrix(arr1));
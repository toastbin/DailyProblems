/**
 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
示例 1:

输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
示例 2:

输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G
 
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert1 = function(s, numRows) {
  if (s.length <= 1 ||  numRows === 1) return s
  const res = []
  for(let i=0; i<numRows; i++){
    res[i] = []
  }

  let pre = -1
  let sign = 'down'
  for(let i=0, len=s.length; i<len; i++) {
    if(sign === 'down'){
      res[++pre].push(s[i])
      if(pre === numRows-1){
        sign = 'up'
      }
    }else{
      res[--pre].push(s[i])
      if(pre === 0){
        sign = 'down'
      }
    }
  }

  return res.reduce((prev, cur) => (
    prev += cur.join('')
  ),[''])
};

console.log(convert1('0123456789', 3));


// 数学规律
var convert2 = function(s, numRows) {
  if (s.length <= 1 ||  numRows === 1) return s
  const res = []
  for(let i=0; i<numRows; i++){
    res[i] = []
  }

  for(let i=0, len=s.length; i<len; i++) {
    let index = i % (2 * numRows -2)
    index = index < numRows ? index : 2 * numRows - 2 - index
    res[index].push(s[i])
  }
  return res.reduce((prev, cur) => (
    prev += cur.join('')
  ),[''])
};

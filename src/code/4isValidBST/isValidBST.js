/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if(!root) return true

  let inOrder = (root) => {
    if (!root) return null
    if( root.left != null && root.val <= inOrder(root.left) ){
      return false
    }
    if( root.right != null && root.val >= inOrder(root.right)){
      return false
    }
    return root.val
  }
  return inOrder(root) === 0 || inOrder(root) ? true : false
};
/* 
     10
    /  \
   5   15
      /  \
     6   20

*/ 

// 错误


var isValidBST1 = function(root) {
  let max = Number.MAX_VALUE
  let min = Number.MIN_VALUE
  let traverse = (root, max, min) => {
    if (root) return true
    if( max !== null && root.val <= max ){
      return false
    }
    if( min !== null && root.val >= min ){
      return false
    }
    if (!traverse(root.left, root.val, min)){
      return false
    }
    if (!traverse(root.right, max, root.val)){
      return false
    }
    return true
  }
  return traverse(root, max, min) ? true : false
};

var isValidBST = function(root) {
  let max = Number.MAX_SAFE_INTEGER
  let min = Number.MIN_SAFE_INTEGER
  let traverse = (node, min, max) => {
    if (node === null) return true
    if (node.val <= min) return false
    if (node.val >= max) return false
    return traverse(node.left, min, node.val) && traverse(node.right, node.val, max)
  }
  return traverse(root, min, max)
};

// console.log(isValidBST({val: 1,left: null, right: null}))
console.log(isValidBST({val: 0,left: null, right: null}))

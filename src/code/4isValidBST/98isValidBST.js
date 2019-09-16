/* 

给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true
示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。

*/



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

  上述代码这个测试用例未通过, 因为根节点的整个右子树都要大于本身, 显然 6 没有大于 10

*/ 



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

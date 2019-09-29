/**
给定一个二叉树，返回它的中序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** 递归版本
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal1 = function(root) {
  const res = []
  traversal(root)
  return res
  function traversal(root) {
      if(!root) {
          return
      }
      traversal(root.left)
      res.push(root.val)
      traversal(root.right)
  }
};


/**
 * 非递归版本
 * @param {*} root 
 */
var inorderTraversal2 = function(root) {
  const stack = []
  const res = []
  while(stack.length || root) {
    if(root) {
      stack.push(root)
      root = root.left
    } else {
      root = stack.pop()
      res.push(root.val)
      root = root.right
    }
  }
  return res
};

/**
给定一个二叉树，返回它的 后序 遍历。

示例:

输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [3,2,1]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归版
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal1 = function(root) {
  const res = []
  traverse(root)
  return res
  function traverse(root) {
      if(!root) return
      traverse(root.left)
      traverse(root.right)
      res.push(root.val)
  }
};

/**
 * 非递归版
 * @param {}} root 
 */
var postorderTraversal2 = function(root) {
  if(!root) return []
  const stack = [root]
  const res = []

  while(stack.length) {
    root = stack.pop()
    res.push(root.val)
    if(root.left) {
      stack.push(root.left)
    }
    if(root.right) {
      stack.push(root.right)
    }
  }
  return res.reverse()
};
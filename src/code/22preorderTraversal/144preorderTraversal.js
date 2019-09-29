/**
给定一个二叉树，返回它的 前序 遍历。

 示例:

输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [1,2,3]
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
 * 递归版本
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal1 = function(root) {
  const res= []
  traversl(root)
  return res
  function traversl(root) {
      if(!root){
          return
      }
      res.push(root.val)
      traversl(root.left)
      traversl(root.right)
  }
};


/**
 * 非递归版本
 * @param  root 
 */
var preorderTraversal2 = function(root) {
  const stack = [root]
  const res = []

  while(stack.length) {
    root = stack.pop()
    res.push(root.val)
    if(root.right) {
      stack.push(root.right)
    }
    if(root.left) {
      stack.push(root.left)
    }
  }
  return res
};
/**
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。

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
var isBalanced1 = function(root) {

  return process(root).isB
  function process(root) {
    if(!root) {
      return {
        isB: true,
        h: 0
      }
    }  
    let left = process(root.left)
    if(!left.isB) {
      return {
        isB: false,
        h: 0
      }
    }
  
    let right = process(root.right)
    if(!right.isB) {
      return {
        isB: false,
        h: 0
      }
    }
  
    if(Math.abs(left.h - right.h) > 1) {
      return {
        isB: false,
        h: 0
      }
    }
  
    return {
      isB: true,
      h: Math.max(left.h, right.h) + 1
    }
  }

};


var isBalanced2 = function(root) {
  return process(root)!==-1;
  
  function process (node) {
    if (!node) return 0;
    let left = process(node.left);
    if (left===-1) return -1;
    let right = process(node.right);
    if (right===-1) return -1;
    return Math.abs(left - right) < 2 ? Math.max(left, right)+1 : -1;
  }
};

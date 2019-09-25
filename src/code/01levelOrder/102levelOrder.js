/* 
给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-level-order-traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return []
  const queue = [root], res = [[root.val]]
  while(queue.length > 0) {
    const curLevel = [], q = [...queue]
    q.forEach(item => {
      queue.shift()
      if(item.left){
        curLevel.push(item.left.val)
        queue.push(item.left)
      }
      if(item.right){
        curLevel.push(item.right.val)
        queue.push(item.right)
      }
    })
    res.push(curLevel)
  }
  res.pop()
  return res
};
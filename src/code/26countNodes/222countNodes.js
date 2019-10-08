/**
给出一个完全二叉树，求出该树的节点个数。

说明：

完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。

示例:

输入: 
    1
   / \
  2   3
 / \  /
4  5 6

输出: 6
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
 * @return {number}
 */

// 遍历 严格 O(N) 不太行 会被骂的
// 递归 & 非递归
var countNodes1 = function(root) {
  if(root === null) return 0;
  return countNodes(root.left) + countNodes(root.right) + 1;
};

var countNodes2 = function(root) {
  let count = 0
  if(!root) return count
  let queue = [root]
  while(queue.length) {
      count ++
      let cur = queue.shift()
      if(cur.left) queue.push(cur.left)
      if(cur.right) queue.push(cur.right)
  }
  return count
};


// 不遍历
var countNodes3 = function(root) {
  if(!root) return 0
  return bs(root, 1, mostLevel(root, 1))

  function bs(node, level, h) {
    if(level === h) return 1
    if(mostLevel(node.right, level) + 1 === h) {
      // 2 ^ h - level
      return (2 ** (h - level)) + bs(node.right, level + 1, h)
    } else {
      return (2 ** (h - level - 1)) + bs(node.left, level + 1, h)
    }
  }

  function mostLevel(node, level) {
    while(node) {
      level ++
      node = node.left
    }
    return level - 1
  }
};
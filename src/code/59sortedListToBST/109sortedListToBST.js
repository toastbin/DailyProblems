/*
给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定的有序链表： [-10, -3, 0, 5, 9],

一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// [-10, -3, 0, 5, 9]
// [0, -3, 9, -10, null, 5]
// 0 => -10 -3
//      => -10
//      => -3
//
//   => 5 9
//      => 5
//      => 9

var sortedListToBST = function(head) {
    // 递归终点1
    if (!head) return null
    // 递归终点2
    if (!head.next) return new TreeNode(head.val)
    let pre = head
    let slow = head.next
    let fast = slow.next
    while (fast && fast.next) {
        pre = pre.next
        slow = slow.next
        fast = fast.next.next
    }
    // 断掉中间节点
    pre.next = null
    const root = new TreeNode(slow.val)
    root.left = sortedListToBST(head)
    root.right = sortedListToBST(slow.next)
    return root
}
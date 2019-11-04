/**

合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// 依次两两合并
var mergeKLists1 = function (lists) {
  if (lists.length === 1) return lists[0]

  let res = null
  for (let i = 0, len = lists.length; i < len; i++) {
    res = merge(res, lists[i])
  }

  return res

  function merge(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    if (l1.val < l2.val) {
      l1.next = merge(l1.next, l2)
      return l1
    } else {
      l2.next = merge(l2.next, l1)
      return l2
    }
  }
};


var mergeKLists2 = function (lists) {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]

  return process(0, lists.length - 1)

  function process(l, r) {
    if (l === r) return lists[l]
    const mid = (l + r) >> 1
    const left = process(l, mid)
    const right = process(mid + 1, r)

    return merge(left, right)
  }

  function merge(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    if (l1.val < l2.val) {
      l1.next = merge(l1.next, l2)
      return l1
    } else {
      l2.next = merge(l2.next, l1)
      return l2
    }
  }
};




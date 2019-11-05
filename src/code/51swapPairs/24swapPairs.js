/**

给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。



示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs1 = function (head) {
  if (!head) return null
  let dummy = new ListNode(0)
  if (head.next) {
    dummy.next = head.next
  } else {
    return head
  }

  let cur = head, pre = null, next = null

  while (cur && cur.next) {
    next = cur.next
    if (next.next) {
      cur.next = next.next
    } else {
      cur.next = null
    }
    if (pre) {
      pre.next = next
    }
    next.next = cur

    pre = cur
    cur = cur.next
  }

  return dummy.next
};

var swapPairs2 = function (head) {
  if (!head || !head.next) return head;
  let next = head.next;
  head.next = swapPairs2(next.next);
  next.next = head;
  return next;
};
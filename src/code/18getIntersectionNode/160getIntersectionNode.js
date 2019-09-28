/**
  编写一个程序，找到两个单链表相交的起始节点。

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) {
    return null
  }

  const m = new Map()
  let cur = headA

  while(cur) {
    m.set(cur)
    cur = cur.next
  }
  cur = headB
  while(cur) {
    if(m.has(cur)) {
      return cur
    }
    cur = cur.next
  }

  return null
};
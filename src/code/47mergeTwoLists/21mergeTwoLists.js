/**
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists1 = function(l1, l2) {
  
  let dummy = new ListNode(0)
  let res = dummy

  while(l1 && l2) {
    if(l1.val < l2.val) {
      dummy.next = l1
      dummy = dummy.next
      l1 = l1.next
    } else {
      dummy.next = l2
      dummy = dummy.next
      l2 = l2.next
    }
  }
  if(!l1) dummy.next = l2
  if(!l2) dummy.next = l1
  return res.next
};

var mergeTwoLists2 = function(l1, l2) {
  
  if(!l1) return l2
  if(!l2) return l1

  if(l1.val < l2.val) {
    l1.next = mergeTwoLists2(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists2(l2.next, l1)
    return l2
  }
};

module.exports = mergeTwoLists
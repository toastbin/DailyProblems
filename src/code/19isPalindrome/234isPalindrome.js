/**
请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
// 使用额外空间
var isPalindrome1 = function(head) {
  let cur = head
  let s = []
  while(cur) {
    s.push(cur.val)
    cur = cur.next
  }

  cur = head
  while(cur) {
    if(cur.val !== s.pop() ) {
      return false
    }
    cur = cur.next
  }
  return true
};

// 不使用额外的辅助空间  
var isPalindrome2 = function(head) {
  if(!head) return true
  let slow = fast = head
  while(fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let prev = null, next = null, cur = slow.next

  while(cur) {
    next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  cur = head
  // prev 是后半段链表的头节点
  while(prev) {
    if(prev.val !== cur.val) {
      return false
    }
    cur = cur.next
    prev = prev.next
  }
  return true
};
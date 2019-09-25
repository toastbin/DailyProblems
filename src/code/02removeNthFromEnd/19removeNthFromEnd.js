/* 
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？

*/



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val
  this.next = null
}


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd1 = function (head, n) {
  if(!head) return null
  const dummy = new ListNode(0)
  dummy.next = head
  let count = 0
  while(head){
    head = head.next
    count ++
  }
  head = dummy
  for(let i=0; i<count-n ; i++){
    head = head.next
  }
  head.next = head.next.next

  return dummy.next
};


var removeNthFromEnd2 = function (head, n) {
  if(!head) return null
  const dummy = new ListNode(0)
  dummy.next = head
  const m = new Map()
  let count = 0

  while(head){
    m.set(++count, head)
    head = head.next
  }
  if(count === n){
    dummy.next = dummy.next.next
  }else{
    m.get(count - n).next = m.get(count - n).next.next
  }

  return dummy.next
};


var removeNthFromEnd3 = function (head, n) {
  if(!head) return null
  const dummy = new ListNode(0)
  dummy.next = head
  let p = q = dummy
  for(let i=0; i<=n; i++){
    q = q.next
  }
  while(q){
    q = q.next
    p = p.next
  }
  p.next = p.next.next

  return dummy.next
};
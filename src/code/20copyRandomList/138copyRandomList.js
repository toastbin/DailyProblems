/**
给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。

要求返回这个链表的深拷贝。 

 

示例：



输入：
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

解释：
节点 1 的值是 1，它的下一个指针和随机指针都指向节点 2 。
节点 2 的值是 2，它的下一个指针指向 null，随机指针指向它自己。
 

提示：

你必须返回给定头的拷贝作为对克隆列表的引用。
*/

/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if(!head) return head
  const m = new Map()
  let cur = head
  while(cur) {
    m.set(cur, new Node(cur.val, null, null))
    cur = cur.next
  }

  cur = head

  while(cur) {
    m.get(cur).next = m.get(cur.next)
    m.get(cur).random = m.get(cur.random)
    cur = cur.next
  }
  head = m.get(head)
  return head
};

var copyRandomList2 = function(head) {
  if(!head) return head

  let cur = head, next = null

  while(cur) {
    next = cur.next
    cur.next = new Node(cur.val)
    cur.next.next = next
    cur = next
  }

  cur = head

  while(cur) {
    let ran = cur.random
    cur.next.ran = ran.next
    cur = cur.next.next
  }
  const newHead = head.next

  while(newHead) {
    newHead.next = newHead.next.next 
    newHead = newHead.next.next
  }
  return newHead
};
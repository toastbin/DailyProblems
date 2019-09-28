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
// 用了一个 辅助的 hashMap 结构  额外空间复杂度是 O(N)
var getIntersectionNode1 = function(headA, headB) {
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


// 不适用 额外的辅助结构, 空间复杂度为 O(N)
var getIntersectionNode2 = function(headA, headB) {
  if(!headA || !headB) {
    return null
  }
  let endA = headA
  let countA = 0
  let endB = headB
  let countB = 0
  while(endA.next) {
    endA = endA.next
    countA ++
  }
  while(endB.next) {
    endB = endB.next
    countB ++
  }

  if(endA === endB) {
    const times = Math.abs(++countA - ++countB)
    let cur = countA > countB ? headA : headB
    let anotherCur = cur === headA ? headB : headA
    for(let i=0; i<times; i++) {
      cur = cur.next
    }
    while(cur !== anotherCur) {
      cur = cur.next
      anotherCur = anotherCur.next
    }
    return cur
  } else {
    return null
  }
};
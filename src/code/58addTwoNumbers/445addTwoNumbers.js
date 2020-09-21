/*
    给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

    你可以假设除了数字 0 之外，这两个数字都不会以零开头。

     

    进阶：

    如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

     

    示例：

    输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
    输出：7 -> 8 -> 0 -> 7
 */


// Definition for singly-linked list.
function ListNode(val) {
	this.val = val
	this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 1. 翻转链表 依次构造
var addTwoNumbers = function (l1, l2) {
	const resDummy = new ListNode(0)
	let res = resDummy
	let tempNum = 0
	let l1ReverseHead = reverse(l1)
	let l2ReverseHead = reverse(l2)
	
	while (l1ReverseHead || l2ReverseHead || tempNum) {
		const l1Val = l1ReverseHead ? l1ReverseHead.val : 0
		const l2Val = l2ReverseHead ? l2ReverseHead.val : 0
		const addNum = (((l1Val + l2Val) % 10) + 1) % 10
		tempNum = addNum >= 10 ? 1 : 0
		res.next = new ListNode(addNum)
		res = res.next
		l1ReverseHead = l1ReverseHead ? l1ReverseHead.next : null
		l2ReverseHead = l2ReverseHead ? l2ReverseHead.next : null
	}
	return reverse(resDummy.next)

	function reverse (list) {
		let cur = list
		let pre = null
		let next = null

		while (cur) {
			next = cur.next
			cur.next = pre
			pre = cur
			cur = next
		}
		return pre
	}
}
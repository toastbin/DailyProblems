/*
在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。

示例 1:

输入: 4->2->1->3
输出: 1->2->3->4
示例 2:

输入: -1->5->3->4->0
输出: -1->0->3->4->5

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 经典归并排序
var sortList1 = function(head) {
    return mergeSort(head)

    function mergeSort (head) {
        // 终止条件
        if (!head || !head.next) return head
        let slow = head
        let fast = head.next.next

        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        const r = mergeSort(slow.next)
        // 断链
        slow.next = null
        const l = mergeSort(head)
        return mergeList(l, r)
    }

    function mergeList(l , r) {
        const dummyHead = new ListNode(-1)
        let p = dummyHead

        while (l && r) {
            if (l.val < r.val) {
                p.next = l
                l = l.next
            } else {
                p.next = r
                r = r.next
            }
            p = p.next
        }
        p.next = l || r

        return dummyHead.next
    }
}

var sortList2 = function(head) {
    
}

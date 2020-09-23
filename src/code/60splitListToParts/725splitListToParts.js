/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
    if (!root) return new Array(k).fill(null)
    let start = root
    const res = []
    let count = 0
    while (start) {
        count++
        start = start.next
    }
    const isHasNull = count / k < 1 ? true : false
    // 分割不够的情况
    if (isHasNull) {
        let head = root
        for (let i = 1; i < k; i++) {
            if (head) {
                res.push(head)
                const next = head.next
                head.next = null
                head = next
            }
            if (!head) {
                res.push(null)
            }
        }
    }
    if (!isHasNull) {
        const isHasRemainder = count % k
        const step = Math.floor(count / k)
        let head = root
        if (isHasRemainder === 0) {
            for (let i = 0; i < k; i++) {
                // 加入起始节点
                res.push(head)
                // 断链
                for (let j = 1; j < step; j++) {
                    head = head.next
                }
                const next = head.next
                head.next = null
                head = next
            }
        } else {
            let leftNum = isHasRemainder
            for (let i = 0; i < k; i++) {
                res.push(head)
                let curStep = step + (leftNum-- > 0 ? 1 : 0)
                for (let j = 1; j < curStep; j++) {
                    head = head.next
                }
                const next = head.next
                head.next = null
                head = next
            }
        }
    }

    return res
};
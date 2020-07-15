/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (!l1) {
        return l2
    };

    if (!l2) {
        return l1
    }
    const sum = l1.val + l2.val;
    const mod = sum % 10;
    const curry = sum < 10 ? null : {val: 1};

    return {
        val: mod,
        next: addTwoNumbers(
            l1.next,
            addTwoNumbers(l2.next, curry)
        )
    }
};
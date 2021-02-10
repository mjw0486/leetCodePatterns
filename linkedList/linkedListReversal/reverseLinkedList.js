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
var reverseList = function(head) {
  let next = head;
  let current = head;
  let prev = null;
  while(current) {
    next = next.next;
    current.next = prev
    prev = current;
    current = next
  }
  return prev;
};
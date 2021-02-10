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
var deleteDuplicates = function(head) {
  let current = head;
  while(current) {
    if (current.next === null) {
      current.next = null;
    } else if (current.val === current.next.val) {
      current.next = current.next.next;
    }
    if (current.next && current.val === current.next.val) {
      continue;
    }
    current = current.next;
  }
  return head;
};
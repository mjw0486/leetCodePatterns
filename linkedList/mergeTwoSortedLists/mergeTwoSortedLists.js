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
var mergeTwoLists = function(l1, l2) {
  let next, currentNode, result;
  if (l1 === null) {
    return l2;
  } else if (l2 === null) {
    return l1;
  }
  if (l1.val > l2.val) {
    result = l2
    currentNode = l2;
    next = l1;
  } else {
    result = l1;
    currentNode = l1;
    next = l2;
  }
  while (currentNode && next) {
    if (currentNode.next === null) {
      currentNode.next = next;
      break;
    }
    if (currentNode.next.val < next.val) {
      currentNode = currentNode.next;
    } else {
      let temp = currentNode.next;
      currentNode.next = next;
      next = temp;
      currentNode = currentNode.next;
    }
  }
  return result;
};
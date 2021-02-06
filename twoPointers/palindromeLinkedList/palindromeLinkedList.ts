/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
  const palindromeArray : number[] = [];
  while(head) {
    palindromeArray.push(head.val);
    head = head.next;
  }
  let j : number = palindromeArray.length - 1;
  for (let i : number = 0; i < Math.floor(palindromeArray.length / 2); i += 1) {
    if (palindromeArray[i] !== palindromeArray[j]) {
      return false;
    }
    j -= 1;
  }
  return true;
};
// Single Number: LeetCode
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

function singleNumber(nums: number[]) : number {
  // sort the input array
  const sortedNums : number[] = nums.sort((a,b) => a - b);

  // loop through sorted array
  for (let i = 0; i < sortedNums.length; i += 2) {
    // set currentNum to a[i] and nextNum to a[i + 1]
    const currentNum : number = nums[i];
    const nextNum : number = nums[i + 1];

    // if currentNum !== nextNum
    if (currentNum !== nextNum) {
      // return currentNum
      return currentNum;
    }
  }
  return -1;
}

console.log(singleNumber([2, 3, 1, 2, 4, 5, 4, 5, 3])) // -> 1
console.log(singleNumber([1, 1, 2, 3, 3])) // -> 2
console.log(singleNumber([1, 1, 2, 2, 3])) // -> 2
// to run: npx ts-node singleNumber.ts
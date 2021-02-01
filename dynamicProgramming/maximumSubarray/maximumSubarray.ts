function maxSubArray(nums: number[]): number {
  let maxSubArray = nums[0];
  let currentMax = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    const num = nums[i];
    currentMax = Math.max((currentMax + num), num);
    maxSubArray = Math.max(currentMax, maxSubArray);
  }
  return maxSubArray;
};

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // => 6
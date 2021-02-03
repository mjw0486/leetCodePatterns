var NumArray = function(nums) {
  this.nums = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  let result = 0;
  for (let x = i; x <= j; x += 1) {
    result += this.nums[x]
  }
  return result;
};
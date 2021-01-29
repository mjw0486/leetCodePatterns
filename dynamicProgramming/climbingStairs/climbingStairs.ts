// Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


function climbStairs(n: number): number {
  const memoizedCount = {};

  function recursiveClimb(currentStep: number): number {
    if(currentStep === n) {
      return 1;
    }
    if(currentStep > n) {
      return 0;
    }
    if (memoizedCount[currentStep]) {
      return memoizedCount[currentStep];
    }
    memoizedCount[currentStep] = recursiveClimb(currentStep + 1) + recursiveClimb(currentStep + 2);
    return memoizedCount[currentStep];
  }
  return recursiveClimb(0);
};

console.log(climbStairs(6)) // => 13
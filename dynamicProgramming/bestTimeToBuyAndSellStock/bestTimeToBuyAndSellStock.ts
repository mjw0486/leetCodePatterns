function maxProfit(prices: number[]): number {
  let maxProfit : number = 0;
  let minBuy : number = prices[0];
  for (let i = 0; i < prices.length; i += 1) {
    const currentNum = prices[i];
    const currentMax = currentNum - minBuy;
    if (currentMax > maxProfit) {
      maxProfit = currentMax;
    }
    if (currentNum < minBuy) {
      minBuy = currentNum;
    }
  }
  return maxProfit;
};

console.log(maxProfit([2, 3, 1, 4])) // => 3
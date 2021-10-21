function maxProfit(prices: number[]): number {
  let maxPrice = 0
  let maxProfit = 0
  for (let i = prices.length - 1; i >= 0; i--) {
    if (prices[i] > maxPrice) maxPrice = prices[i]
    let profit = maxPrice - prices[i]
    if (profit > maxProfit) maxProfit = profit
  }
  return maxProfit
}

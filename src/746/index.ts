// function minCostClimbingStairs(cost: number[]): number {
//   let nextCost = 0
//   let nextNextCost = 0
//   let i = cost.length - 1
//   while (i >= 0) {
//     let thisCost = cost[i] + Math.min(nextCost, nextNextCost)
//     nextNextCost = nextCost
//     nextCost = thisCost
//     i--
//   }
//   return Math.min(nextCost, nextNextCost)
// }

function minCostClimbingStairs(cost: number[]): number {
  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 1], cost[i - 2])
  }
  return Math.min(cost[cost.length - 1], cost[cost.length - 2])
}

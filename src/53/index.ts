// function maxSubArray(nums: number[]): number {
//   if (nums.length === 1) return nums[0]

//   let max = -Infinity
//   const dp: number[][] = []

//   for (let i = 0; i < nums.length; i++) {
//     if (!dp[i]) {
//       dp[i] = []
//       dp[i][i] = nums[i]
//       max = Math.max(dp[i][i], max)
//     }

//     for (let j = i + 1; j < nums.length; j++) {
//       dp[i][j] = dp[i][j - 1] + nums[j]
//       max = Math.max(dp[i][j], max)
//     }
//   }

//   return max
// }

function maxSubArray(nums: number[]): number {
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const sum = nums[i] + nums[i - 1]
    // Use DP in place
    nums[i] = nums[i] > sum ? nums[i] : sum
    max = nums[i] > max ? nums[i] : max
  }
  return max
}

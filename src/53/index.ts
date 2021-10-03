function maxSubArray(nums: number[]): number {
  if (nums.length === 1) return nums[0]

  let max = -Infinity
  const dp: number[][] = []

  for (let i = 0; i < nums.length; i++) {
    if (!dp[i]) {
      dp[i] = []
      dp[i][i] = nums[i]
      max = Math.max(dp[i][i], max)
    }

    for (let j = i + 1; j < nums.length; j++) {
      dp[i][j] = dp[i][j - 1] + nums[j]
      max = Math.max(dp[i][j], max)
    }
  }

  return max
}

function rob(nums: number[]): number {
  let sum1 = 0
  let sum2 = 0
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) sum1 = Math.max(sum2, sum1 + nums[i])
    else sum2 = Math.max(sum1, sum2 + nums[i])
  }
  return Math.max(sum1, sum2)
}

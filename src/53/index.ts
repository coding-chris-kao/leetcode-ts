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

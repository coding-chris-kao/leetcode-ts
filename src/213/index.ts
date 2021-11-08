function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  return Math.max(
    helper(nums, 0, nums.length - 2),
    helper(nums, 1, nums.length - 1),
  )
}

function helper(nums: number[], lo: number, hi: number): number {
  let sum1 = 0
  let sum2 = 0
  for (let i = lo; i <= hi; i++) {
    if (i % 2 === 0) sum1 = Math.max(sum2, sum1 + nums[i])
    else sum2 = Math.max(sum1, sum2 + nums[i])
  }
  return Math.max(sum1, sum2)
}

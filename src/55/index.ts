function canJump(nums: number[]): boolean {
  let max = 0
  for (let i = 0; i <= max; i++) {
    max = Math.max(i + nums[i], max)
    if (max >= nums.length - 1) return true
  }
  return false
}

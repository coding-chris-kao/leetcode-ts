function getConcatenation(nums: number[]): number[] {
  const n = nums.length
  for (let i = 0; i < n; i++) {
    nums[n + i] = nums[i]
  }
  return nums
}

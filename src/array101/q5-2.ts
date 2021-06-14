function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0
  let left = 0
  let right = 0

  nums[left] = nums[right]
  while (right < nums.length) {
    if (nums[left] !== nums[right]) {
      left++
      nums[left] = nums[right]
    }
    right++
  }

  return left + 1
}

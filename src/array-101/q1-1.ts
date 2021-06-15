function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums.length - 1 - i < max - count) break
    const num = nums[i]
    if (num === 1) {
      count++
      max = Math.max(max, count)
    } else {
      count = 0
    }
  }

  return max
}

function missingNumber(nums: number[]): number {
  let max = nums[0]
  const hashset = new Set<number>()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num > max) max = num
    hashset.add(num)
  }

  let cur = max
  while (cur--) {
    if (!hashset.has(cur)) return cur
  }

  return max + 1
}

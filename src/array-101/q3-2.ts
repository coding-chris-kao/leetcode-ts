function removeDuplicates(nums: number[]): number {
  const set = new Set()

  let i = 0
  while (nums[i] != null) {
    const num = nums[i]
    if (!set.has(num)) {
      set.add(num)
      i++
      continue
    }

    nums.splice(i, 1)
  }

  return nums.length
}

export { removeDuplicates }

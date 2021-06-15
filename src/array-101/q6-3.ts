function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i])
  }

  const res: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(i + 1)) res.push(i + 1)
  }
  return res
}

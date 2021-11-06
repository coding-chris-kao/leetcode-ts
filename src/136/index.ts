function singleNumber(nums: number[]): number {
  const hashset = new Set<number>()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (!hashset.has(num)) hashset.add(num)
    else hashset.delete(num)
  }
  return Array.from(hashset)[0]
}

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    let sub = target - nums[i]
    if (map.has(sub)) {
      return [map.get(sub)!, i]
    }
    map.set(nums[i], i)
  }
  return []
}

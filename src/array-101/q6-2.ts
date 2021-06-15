function thirdMax(nums: number[]): number {
  const set = new Set(nums)
  const sorted = [...set].sort((a, b) => b - a)
  return sorted.length < 3 ? sorted[0] : sorted[2]
}

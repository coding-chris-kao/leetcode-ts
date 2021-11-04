function permute(nums: number[]): number[][] {
  const res: number[][] = []
  const combo: number[] = []
  const visited = new Set<number>()
  backTrack(res, combo, nums, visited)
  return res
}

function backTrack(
  res: number[][],
  combo: number[],
  nums: number[],
  visited: Set<number>,
) {
  if (nums.length === combo.length) {
    res.push(combo.slice())
    return
  }
  for (let i = 0; i < nums.length; i++) {
    if (visited.has(nums[i])) continue
    visited.add(nums[i])
    combo.push(nums[i])
    backTrack(res, combo, nums, visited)
    combo.pop()
    visited.delete(nums[i])
  }
}

export {}

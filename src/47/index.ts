function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = []
  const combo: number[] = []
  const visited: boolean[] = []
  nums.sort((a, b) => a - b)
  backTrack(res, combo, nums, visited)
  return res
}

function backTrack(
  res: number[][],
  combo: number[],
  nums: number[],
  visited: boolean[],
) {
  if (nums.length === combo.length) {
    res.push(combo.slice())
    return
  }
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1] && visited[i - 1]) continue
    if (visited[i]) continue
    visited[i] = true
    combo.push(nums[i])
    backTrack(res, combo, nums, visited)
    combo.pop()
    visited[i] = false
  }
}

export {}

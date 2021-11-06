function subsets(nums: number[]): number[][] {
  const res: number[][] = []
  const combo: number[] = []
  backtrack(res, combo, nums, 0)
  return res
}

function backtrack(
  res: number[][],
  combo: number[],
  nums: number[],
  start: number,
) {
  res.push(combo.slice())
  for (let i = start; i < nums.length; i++) {
    combo.push(nums[i])
    backtrack(res, combo, nums, i + 1)
    combo.pop()
  }
}

export {}

function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = []
  const combo: number[] = []
  nums.sort((a, b) => a - b)
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
    if (i > start && nums[i] === nums[i - 1]) continue
    combo.push(nums[i])
    backtrack(res, combo, nums, i + 1)
    combo.pop()
  }
}

export {}

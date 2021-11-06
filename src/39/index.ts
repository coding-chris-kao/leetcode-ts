function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = []
  const combo: number[] = []
  candidates.sort((a, b) => a - b)
  backtrack(res, combo, 0, candidates, target)
  return res
}

function backtrack(
  res: number[][],
  combo: number[],
  start: number,
  candidates: number[],
  target: number,
) {
  if (target < 0) return

  if (target === 0) {
    res.push(combo.slice())
    return
  }

  for (let i = start; i < candidates.length; i++) {
    combo.push(candidates[i])
    backtrack(res, combo, i, candidates, target - candidates[i])
    combo.pop()
  }
}

export {}

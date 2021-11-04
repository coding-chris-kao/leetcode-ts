function combine(n: number, k: number): number[][] {
  const res: number[][] = []
  const combo: number[] = []
  backTrack(res, combo, 1, n, k)
  return res
}

function backTrack(
  res: number[][],
  combo: number[],
  start: number,
  n: number,
  k: number,
) {
  if (k === 0) {
    res.push(combo.slice())
    return
  }
  for (let i = start; i <= n; i++) {
    combo.push(i)
    backTrack(res, combo, i + 1, n, k - 1)
    combo.pop()
  }
}

export {}

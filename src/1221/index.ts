function balancedStringSplit(s: string): number {
  let l = 0
  let r = 0
  let count = 0
  for (let c of s) {
    if (c === 'L') l++
    else r++
    if (l === r) {
      l = 0
      r = 0
      count++
    }
  }
  return count
}

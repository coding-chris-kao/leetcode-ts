function hammingWeight(n: number): number {
  let count = 0
  for (let bit of n.toString(2)) {
    count += bit === '1' ? 1 : 0
  }
  return count
}

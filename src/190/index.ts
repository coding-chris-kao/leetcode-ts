function reverseBits(n: number): number {
  let res = 0
  for (let i = 0; i < 32; i++) {
    res = res * 2 + (n % 2)
    n = (n / 2) >>> 0
  }
  return res
}

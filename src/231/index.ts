function isPowerOfTwo(n: number): boolean {
  let bits = n.toString(2)
  let ones = 0
  for (let bit of bits) {
    if (bit === '1') ones++
  }
  return n > 0 && ones === 1
}

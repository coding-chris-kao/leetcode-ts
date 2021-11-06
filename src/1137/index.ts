function tribonacci(n: number): number {
  const fibs: number[] = [0, 1, 1]
  let i = 3
  while (i <= n) {
    fibs[i] = fibs[i - 1] + fibs[i - 2] + fibs[i - 3]
    i++
  }
  return fibs[n]
}

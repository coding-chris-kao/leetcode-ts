function fib(n: number): number {
  let fibs: number[] = [0, 1]
  let i = 2
  while (i <= n) {
    fibs[i] = fibs[i - 1] + fibs[i - 2]
    i++
  }
  return fibs[n]
}

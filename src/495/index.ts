function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let total = duration
  const len = timeSeries.length
  if (len === 1) return total

  for (let i = len - 1; i > 0; i--) {
    const sub = timeSeries[i] - timeSeries[i - 1]
    total += sub < duration ? sub : duration
  }

  return total
}

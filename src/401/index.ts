function readBinaryWatch(turnedOn: number): string[] {
  const res: string[] = []
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (countBits(i * 64 + j) === turnedOn) {
        const H = i.toString()
        const MM = j < 10 ? `0${j}` : j.toString()
        res.push(`${H}:${MM}`)
      }
    }
  }
  return res
}

function countBits(n: number) {
  let count = 0
  while (n !== 0) {
    n = n & (n - 1)
    count++
  }
  return count
}

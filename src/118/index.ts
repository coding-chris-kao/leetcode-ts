function generate(numRows: number): number[][] {
  if (numRows === 1) return [[1]]
  const res: number[][] = [[1], [1, 1]]
  if (numRows === 2) return res

  for (let i = 2; i < numRows; i++) {
    const row = [1]

    for (let k = 1; k < i; k++) {
      row[k] = res[i - 1][k - 1] + res[i - 1][k]
    }

    row.push(1)
    res.push(row)
  }

  return res
}

function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length
  const n = mat[0].length
  if (m * n !== r * c) return mat

  const res: number[][] = [[]]
  let p = 0
  let q = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (q === c) {
        q = 0
        res[++p] = []
      }
      res[p][q++] = mat[i][j]
    }
  }
  return res
}

function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length
  const n = mat[0].length

  const queue: number[][] = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) queue.push([i, j])
      else mat[i][j] = Infinity
    }
  }

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  while (queue.length > 0) {
    const [i, j] = queue.shift()!
    for (let [di, dj] of dirs) {
      let r = i + di
      let c = j + dj
      if (r < 0 || r >= m || c < 0 || c >= n || mat[r][c] <= mat[i][j] + 1)
        continue
      mat[r][c] = mat[i][j] + 1
      queue.push([r, c])
    }
  }

  return mat
}

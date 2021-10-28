function islandPerimeter(grid: number[][]): number {
  let m = grid.length
  let n = grid[0].length
  let p = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) continue

      if (i - 1 < 0 || grid[i - 1][j] === 0) p++
      if (j - 1 < 0 || grid[i][j - 1] === 0) p++
      if (i + 1 >= m || grid[i + 1][j] === 0) p++
      if (j + 1 >= n || grid[i][j + 1] === 0) p++
    }
  }

  return p
}

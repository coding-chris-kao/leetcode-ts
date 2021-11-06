function orangesRotting(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  const rotten: number[][] = []
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]
  let freshCount = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        rotten.push([i, j])
      } else if (grid[i][j] === 1) {
        freshCount++
      }
    }
  }

  if (rotten.length === 0 && freshCount === 0) return 0

  let time = -1
  while (rotten.length > 0) {
    time++
    let rottenCount = rotten.length
    while (rottenCount--) {
      const [i, j] = rotten.shift()!
      for (let [di, dj] of dirs) {
        let r = i + di
        let c = j + dj
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] !== 1) continue
        grid[r][c] = 2
        rotten.push([r, c])
        freshCount--
      }
    }
  }

  if (freshCount === 0) return time
  return -1
}

function maxAreaOfIsland(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length
  const visited: boolean[][] = Array(m)
    .fill(0)
    .map(() => Array(n).fill(false))

  let max = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // if (grid[i][j] === 1) max = Math.max(max, bfs(grid, i, j, visited))
      max = Math.max(max, dfs(grid, i, j, visited))
    }
  }

  return max
}

function bfs(grid: number[][], i: number, j: number, visited: boolean[][]) {
  const m = grid.length
  const n = grid[0].length
  const queue: number[][] = []
  queue.push([i, j])

  let islandSize = 0
  while (queue.length > 0) {
    const [p, q] = queue.shift()!
    if (visited[p][q]) continue

    islandSize++
    if (p + 1 < m && grid[p + 1][q]) queue.push([p + 1, q])
    if (p - 1 >= 0 && grid[p - 1][q]) queue.push([p - 1, q])
    if (q + 1 < n && grid[p][q + 1]) queue.push([p, q + 1])
    if (q - 1 >= 0 && grid[p][q - 1]) queue.push([p, q - 1])

    visited[p][q] = true
  }
  return islandSize
}

function dfs(
  grid: number[][],
  i: number,
  j: number,
  visited: boolean[][],
): number {
  const m = grid.length
  const n = grid[0].length
  if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0 || visited[i][j])
    return 0
  visited[i][j] = true
  return (
    1 +
    dfs(grid, i + 1, j, visited) +
    dfs(grid, i - 1, j, visited) +
    dfs(grid, i, j + 1, visited) +
    dfs(grid, i, j - 1, visited)
  )
}

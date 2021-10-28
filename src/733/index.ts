function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number,
): number[][] {
  const m = image.length
  const n = image[0].length
  const queue: [number, number][] = [[sr, sc]]
  let color = image[sr][sc]
  while (queue.length > 0) {
    const [i, j] = queue.shift()!

    if (i < 0 || i >= m || j < 0 || j >= n) continue
    if (image[i][j] !== color || image[i][j] === newColor) continue

    image[i][j] = newColor

    if (i + 1 < m) queue.push([i + 1, j])
    if (i - 1 >= 0) queue.push([i - 1, j])
    if (j + 1 < n) queue.push([i, j + 1])
    if (j - 1 >= 0) queue.push([i, j - 1])
  }
  return image
}

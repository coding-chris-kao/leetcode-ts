function maxSumSubmatrix(matrix: number[][], k: number): number {
  const row = matrix.length
  const col = matrix[0].length
  let max = -Infinity

  for (let a = 0; a < row; a++) {
    for (let b = 0; b < col; b++) {
      for (let c = a; c < row; c++) {
        for (let d = b; d < col; d++) {
          // Got the top-left and bottom-right location here

          // Initial the sum
          let sum = 0

          // Iterate the sub matrix
          for (let i = a; i <= c; i++) {
            for (let j = b; j <= d; j++) {
              sum += matrix[i][j]
            }
          }

          if (sum === k) return sum

          // Update max
          if (sum > k) continue
          max = Math.max(max, sum)

          // Save this
        }
      }
    }
  }

  return max
}

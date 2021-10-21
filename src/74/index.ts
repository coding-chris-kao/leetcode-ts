function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i = matrix.length - 1; i >= 0; i--) {
    const row = matrix[i]
    if (row[0] <= target) {
      for (let j = 0; j < row.length; j++) {
        if (row[j] === target) return true
      }
      return false
    }
  }
  return false
}

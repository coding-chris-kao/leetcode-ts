function longestCommonSubsequence(text1: string, text2: string): number {
  const matrix: number[][] = new Array(text1.length + 1)
    .fill(0)
    .map(() => new Array(text2.length + 1).fill(0))

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) matrix[i][j] = matrix[i - 1][j - 1] + 1
      else matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1])
    }
  }
  return matrix[text1.length][text2.length]
}

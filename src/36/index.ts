function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    const row = board[i]
    const column = board.map((row) => row[i])

    if (!isChunkValid(row)) return false
    if (!isChunkValid(column)) return false
  }

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const block = []
      for (let m = 0; m < 3; m++) {
        for (let n = 0; n < 3; n++) {
          block.push(board[i + m][j + n])
        }
      }
      if (!isChunkValid(block)) return false
    }
  }

  return true
}

function isChunkValid(chunk: string[]): boolean {
  const set = new Set()
  for (let i = 0; i < chunk.length; i++) {
    if (chunk[i] !== '.' && set.has(chunk[i])) return false
    set.add(chunk[i])
  }
  return true
}

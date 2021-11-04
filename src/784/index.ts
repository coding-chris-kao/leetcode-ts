function letterCasePermutation(s: string): string[] {
  const res: string[] = []
  const letters: string[] = s.split('')
  dfs(res, letters, 0)
  return res
}

function dfs(res: string[], letters: string[], pos: number) {
  if (pos === letters.length) {
    res.push(letters.join(''))
    return
  }
  if (!isNaN(parseInt(letters[pos]))) {
    dfs(res, letters, pos + 1)
    return
  }

  letters[pos] = letters[pos].toLowerCase()
  dfs(res, letters, pos + 1)

  letters[pos] = letters[pos].toUpperCase()
  dfs(res, letters, pos + 1)
}

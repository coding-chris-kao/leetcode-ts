function convertToTitle(columnNumber: number): string {
  let s: string[] = []
  while (columnNumber > 0) {
    let rest = columnNumber % 26
    rest = rest === 0 ? 26 : rest
    columnNumber = (columnNumber - rest) / 26
    s.unshift(String.fromCharCode(rest + 64))
  }
  return s.join('')
}

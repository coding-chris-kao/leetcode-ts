function longestCommonPrefix(strs: string[]): string {
  let i = 1
  let prefix = ''
  let maxlength = Math.max(...strs.map((s) => s.length))

  while (i <= maxlength) {
    const temp = strs.map((s) => s.slice(0, i))
    const curPrefix = temp[0]
    if (!temp.every((t) => t.startsWith(curPrefix))) {
      break
    }
    prefix = curPrefix
    i++
  }
  return prefix
}

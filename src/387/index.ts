function firstUniqChar(s: string): number {
  const map = new Map<string, number>()
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    map.set(char, map.has(char) ? map.get(char)! + 1 : 1)
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (map.get(char)! === 1) return i
  }

  return -1
}

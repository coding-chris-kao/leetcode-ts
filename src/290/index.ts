function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(' ')
  if (pattern.length !== words.length) return false

  const map1 = new Map<string, string>()
  const map2 = new Map<string, string>()
  for (let i = 0; i < pattern.length; i++) {
    if (map1.has(pattern[i]) && map1.get(pattern[i]) !== words[i]) return false
    if (map2.has(words[i]) && map2.get(words[i]) !== pattern[i]) return false
    map1.set(pattern[i], words[i])
    map2.set(words[i], pattern[i])
  }
  return true
}

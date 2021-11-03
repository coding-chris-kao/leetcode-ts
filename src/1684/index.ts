function countConsistentStrings(allowed: string, words: string[]): number {
  const set = new Set<string>()
  for (let s of allowed) {
    set.add(s)
  }

  let res = 0
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    let n = word.length
    for (let c of word) {
      if (!set.has(c)) break
      n--
    }
    if (n === 0) res++
  }

  return res
}

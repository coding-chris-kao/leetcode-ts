function checkInclusion(s1: string, s2: string): boolean {
  const width = s1.length
  const targetFreq = countFreq(s1)

  for (let i = 0; i <= s2.length - width; i++) {
    const freq = countFreq(s2.substr(i, width))
    if (freq.size !== targetFreq.size) continue
    const keys = [...freq.keys()]
    const res = keys.every(
      (key) => targetFreq.has(key) && targetFreq.get(key) === freq.get(key),
    )
    if (res) return true
    else continue
  }
  return false
}

function countFreq(s: string) {
  const map = new Map<string, number>()
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    map.set(c, map.has(c) ? map.get(c)! + 1 : 1)
  }
  return map
}

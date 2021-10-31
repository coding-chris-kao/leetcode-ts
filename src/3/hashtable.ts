function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>()
  let max = 0
  for (let end = 0, start = 0; end < s.length; end++) {
    if (map.has(s[end])) {
      start = Math.max(start, map.get(s[end])! + 1)
    }
    map.set(s[end], end)
    max = Math.max(max, end - start + 1)
  }
  return max
}

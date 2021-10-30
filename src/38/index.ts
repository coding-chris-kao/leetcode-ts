function countAndSay(n: number): string {
  if (n === 1) return '1'
  let s = countAndSay(n - 1)
  let res = ''
  for (let i = 0; i < s.length; i++) {
    let count = 1
    while (s[i] === s[i + 1]) {
      count++
      i++
    }
    res += count + s[i]
  }
  return res
}

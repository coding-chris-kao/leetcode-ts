function longestPalindrome(s: string): string {
  let len = 0
  let start = 0
  for (let i = 0; i < s.length; i++) {
    let cur = Math.max(
      getPalindromeLength(s, i, i),
      getPalindromeLength(s, i, i + 1),
    )
    if (cur > len) {
      len = cur
      start = i - Math.floor((cur - 1) / 2)
    }
  }
  return s.substr(start, len)
}

function getPalindromeLength(s: string, l: number, r: number) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--
    r++
  }
  return r - l - 1
}

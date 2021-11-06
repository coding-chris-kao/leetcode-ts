function partition(s: string): string[][] {
  const res: string[][] = []
  const combo: string[] = []
  backtrack(res, combo, s)
  return res
}

function backtrack(res: string[][], combo: string[], substring: string) {
  if (substring === '') {
    res.push(combo.slice())
    return
  }

  for (let i = 1; i <= substring.length; i++) {
    let first = substring.slice(0, i)
    let second = substring.slice(i)
    if (isPalindrome(first)) {
      combo.push(first)
      backtrack(res, combo, second)
      combo.pop()
    }
  }
}

function isPalindrome(s: string): boolean {
  return s.split('').reverse().join('') === s
}

function isValid(s: string): boolean {
  const stack: string[] = []
  const hash: any = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (let i = 0; i < s.length; i++) {
    const str = s[i]
    if (str in hash) {
      stack.push(str)
    } else if (hash[stack[stack.length - 1]] == str) {
      stack.pop()
    } else {
      return false
    }
  }
  return stack.length === 0
}

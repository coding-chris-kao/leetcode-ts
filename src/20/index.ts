function isValid(s: string): boolean {
  const stack: string[] = []
  const hash: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  for (let bracket of s) {
    if (bracket in hash) {
      stack.push(hash[bracket])
    } else if (stack[stack.length - 1] === bracket) {
      stack.pop()
    } else {
      return false
    }
  }
  return stack.length === 0
}

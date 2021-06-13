export function isValid(s: string): boolean {
  const stack = []
  const pushTypes = ['(', '[', '{']
  const popTypes = [')', ']', '}']

  for (let i = 0; i < s.length; i++) {
    const str = s[i]
    if (pushTypes.includes(str)) {
      stack.push(str)
    } else if (popTypes.includes(str)) {
      if (
        pushTypes.indexOf(stack[stack.length - 1]) === popTypes.indexOf(str)
      ) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

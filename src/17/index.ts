function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return []

  const map: {
    [key: string]: string
  } = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }
  const queue: string[] = ['']
  while (queue[0].length !== digits.length) {
    const combo = queue.shift()!
    const letters = map[digits[combo.length]]
    for (let c of letters) {
      queue.push(combo + c)
    }
  }

  return queue
}

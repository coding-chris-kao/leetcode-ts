function finalValueAfterOperations(operations: string[]): number {
  let X = 0
  for (let op of operations) {
    switch (op) {
      case 'X++':
      case '++X':
        X += 1
        break
      case '--X':
      case 'X--':
        X -= 1
        break
    }
  }
  return X
}

function isSumEqual(
  firstWord: string,
  secondWord: string,
  targetWord: string,
): boolean {
  const res1: number[] = []
  const res2: number[] = []
  const res3: number[] = []
  for (let i = 0; i < firstWord.length; i++) {
    const val = firstWord.charCodeAt(i) - 97
    res1.push(val)
  }
  for (let i = 0; i < secondWord.length; i++) {
    const val = secondWord.charCodeAt(i) - 97
    res2.push(val)
  }
  for (let i = 0; i < targetWord.length; i++) {
    const val = targetWord.charCodeAt(i) - 97
    res3.push(val)
  }

  return (
    parseInt(res1.join('')) + parseInt(res2.join('')) ===
    parseInt(res3.join(''))
  )
}

export { isSumEqual }

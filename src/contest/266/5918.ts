function countVowelSubstrings(word: string): number {
  const VOWELS = new Set(['a', 'e', 'i', 'o', 'u'])
  let res = 0
  let left = -1
  let right = 0

  while (left < word.length) {
    left++
    if (!VOWELS.has(word[left])) {
      continue
    }

    right = left
    const seen = new Set<string>()
    while (right < word.length && VOWELS.has(word[right])) {
      seen.add(word[right])
      if (isAllThere(seen)) res++
      right++
    }
  }

  return res
}

function isAllThere(seen: Set<string>) {
  return (
    seen.has('a') &&
    seen.has('e') &&
    seen.has('i') &&
    seen.has('o') &&
    seen.has('u')
  )
}

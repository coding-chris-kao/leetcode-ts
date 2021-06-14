function strStr(haystack: string, needle: string): number {
  if (needle === '') return 0
  const needleLength = needle.length
  for (let i = 0; i < haystack.length; i++) {
    const char = haystack[i]
    if (char === needle[0] && haystack[i + needleLength - 1]) {
      let correct = true
      for (let j = 0; j < needleLength; j++) {
        if (haystack[i + j] !== needle[j]) correct &&= false
        else correct &&= true
      }
      if (correct) return i
    }
  }
  return -1
}

export { strStr }

function removeDuplicates(s: string, k: number): string {
  let arr = s.split('')
  let last
  let count = 0
  let i = 0
  while (i < arr.length) {
    if (last !== arr[i]) {
      last = arr[i]
      count = 1
    } else {
      count++
    }
    if (count === k) {
      arr.splice(i - k + 1, k)
      i = 0
      continue
    }
    i++
  }
  return arr.join('')
}

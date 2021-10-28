function reverseString(s: string[]): void {
  let tmp
  let left = 0
  let right = s.length - 1
  while (left < right) {
    tmp = s[left]
    s[left++] = s[right]
    s[right--] = tmp
  }
}

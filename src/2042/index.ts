function areNumbersAscending(s: string): boolean {
  const nums = s
    .split(' ')
    .map((word) => parseInt(word))
    .filter((num) => !isNaN(num))

  let last = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= last) return false
    last = nums[i]
  }
  return true
}

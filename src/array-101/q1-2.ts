function findNumbers(nums: number[]): number {
  return nums
    .map((num) => num.toString().split('').length)
    .filter((x) => x % 2 === 0).length
}

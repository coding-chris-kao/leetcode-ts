function sortedSquares(nums: number[]): number[] {
  // return nums.map((num) => num * num).sort((a, b) => a - b)

  let left = 0
  let right = nums.length - 1
  let result = new Array(nums.length)
  for (let i = nums.length - 1; i >= 0; i--) {
    const sl = nums[left] * nums[left]
    const sr = nums[right] * nums[right]
    if (sl > sr) {
      result[i] = sl
      left++
    } else {
      result[i] = sr
      right--
    }
  }
  return result
}

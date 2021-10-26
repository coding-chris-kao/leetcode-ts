function sortedSquares(nums: number[]): number[] {
  let left = 0
  let right = nums.length - 1
  const res: number[] = []
  while (res.length < nums.length) {
    let leftSquare = nums[left] ** 2
    let rightSquare = nums[right] ** 2
    if (leftSquare > rightSquare) {
      res.unshift(leftSquare)
      left++
    } else {
      res.unshift(rightSquare)
      right--
    }
  }
  return res
}

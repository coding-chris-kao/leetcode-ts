function removeElement(nums: number[], val: number): number {
  if (nums.length === 0) return 0

  let left = 0
  let right = nums.length - 1
  while (left < right) {
    if (nums[left] === val) {
      let temp = nums[right]
      nums[right] = nums[left]
      nums[left] = temp
      right--
    } else {
      left++
    }
  }

  return nums[left] === val ? left : left + 1
}

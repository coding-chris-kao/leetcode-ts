/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let left = 0
  let right = 0

  while (right < nums.length) {
    if (nums[right] !== 0) {
      let tmp = nums[left]
      nums[left] = nums[right]
      nums[right] = tmp
      left++
    }
    right++
  }
}

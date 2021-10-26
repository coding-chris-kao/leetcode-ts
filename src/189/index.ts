function rotate(nums: number[], k: number): void {
  k = k % nums.length
  reverse(nums, 0, nums.length - k - 1)
  reverse(nums, nums.length - k, nums.length - 1)
  reverse(nums, 0, nums.length - 1)
}

function reverse(nums: number[], lo: number, hi: number) {
  while (lo < hi) {
    let tmp = nums[lo]
    nums[lo] = nums[hi]
    nums[hi] = tmp
    lo++
    hi--
  }
}

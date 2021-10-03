function searchInsert(nums: number[], target: number): number {
  let lo = 0
  let hi = nums.length

  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2)
    if (target > nums[mid]) {
      lo = mid + 1
    } else {
      hi = mid
    }
  }

  return lo
}

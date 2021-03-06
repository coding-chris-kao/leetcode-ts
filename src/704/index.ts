function search(nums: number[], target: number): number {
  let lo = 0
  let hi = nums.length - 1
  while (lo <= hi) {
    let mid = (lo + hi) >> 1
    if (target === nums[mid]) return mid
    if (target < nums[mid]) hi = mid - 1
    else lo = mid + 1
  }
  return -1
}

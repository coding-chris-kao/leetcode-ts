function smallestEqual(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let r = i % 10
    if (r === nums[i]) return i
  }
  return -1
}

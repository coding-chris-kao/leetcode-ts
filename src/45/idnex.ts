function jump(nums: number[]): number {
  let res = 0
  let max = 0
  let curMax = 0

  for (let i = 0; i < nums.length - 1; i++) {
    curMax = Math.max(curMax, i + nums[i])
    if (i === max) {
      res++
      max = curMax
      if (max >= nums.length - 1) return res
    }
  }
  return res
}

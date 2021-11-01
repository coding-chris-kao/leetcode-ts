function fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4) return []
  nums.sort((a, b) => a - b)
  const res: number[][] = []
  for (let p1 = 0; p1 < nums.length - 3; p1++) {
    if (p1 > 0 && nums[p1] === nums[p1 - 1]) continue

    for (let p2 = p1 + 1; p2 < nums.length - 2; p2++) {
      let p3 = p2 + 1
      let p4 = nums.length - 1
      if (p2 > p1 + 1 && nums[p2] === nums[p2 - 1]) continue

      while (p3 < p4) {
        let sum = nums[p1] + nums[p2] + nums[p3] + nums[p4]
        if (sum === target) {
          res.push([nums[p1], nums[p2], nums[p3], nums[p4]])
          p3++
          p4--
          while (p3 < p4 && nums[p3] === nums[p3 - 1]) p3++
          while (p3 < p4 && nums[p4] === nums[p4 + 1]) p4--
        } else if (sum > target) {
          p4--
        } else {
          p3++
        }
      }
    }
  }
  return res
}

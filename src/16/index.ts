function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b)
  let closest = Infinity

  for (let p1 = 0; p1 <= nums.length - 3; p1++) {
    let p2 = p1 + 1
    let p3 = nums.length - 1

    while (p2 < p3) {
      let sum = nums[p1] + nums[p2] + nums[p3]
      if (Math.abs(target - sum) < Math.abs(target - closest)) closest = sum
      if (sum > target) {
        p3--
      } else {
        p2++
      }
    }
  }

  return closest
}

function removeElement(nums: number[], val: number): number {
  let found = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      let j = i
      while (j < nums.length - 1) {
        nums[j] = nums[j + 1]
        j++
      }
      nums[j] = -1
      i--
      found++
    }
  }
  return nums.length - found
}

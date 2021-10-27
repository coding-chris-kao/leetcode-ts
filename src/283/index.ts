function moveZeroes(nums: number[]): void {
  let insertPosition = 0
  for (let num of nums) {
    if (num !== 0) nums[insertPosition++] = num
  }
  while (insertPosition < nums.length) {
    nums[insertPosition++] = 0
  }
}

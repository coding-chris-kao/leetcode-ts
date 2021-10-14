// function buildArray(nums: number[]): number[] {
//   const arr = []
//   for (let num of nums) {
//     arr.push(nums[num])
//   }
//   return arr
// }

// O(1) Space Solution
function buildArray(nums: number[]): number[] {
  const n = nums.length
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + n * (nums[nums[i]] % n)
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.floor(nums[i] / n)
  }

  return nums
}

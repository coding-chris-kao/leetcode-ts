/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1
  let j = n - 1
  let end = m + n - 1
  while (j >= 0) {
    nums1[end--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--]
  }
  console.log(nums1)
}

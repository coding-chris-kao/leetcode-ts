// function swap(nums: number[], i: number, j: number) {
//   let tmp = nums[i]
//   nums[i] = nums[j]
//   nums[j] = tmp
// }

// Bubble Sort
// function sortArray(nums: number[]): number[] {
//   let last = nums.length - 1
//   while (last > 0) {
//     for (let i = 0; i < last; i++) {
//       if (nums[i] > nums[i + 1]) swap(nums, i, i + 1)
//     }
//     last--
//   }
//   return nums
// }

// Selection Sort
// function sortArray(nums: number[]): number[] {
//   let left = 0
//   while (left < nums.length) {
//     let min = left
//     for (let i = left; i < nums.length; i++) {
//       if (nums[i] < nums[min]) min = i
//     }
//     swap(nums, left, min)
//     left++
//   }
//   return nums
// }

// Insertion Sort
// function sortArray(nums: number[]): number[] {
//   for (let i = 1; i < nums.length; i++) {
//     let j = i - 1
//     let cur = nums[i]
//     while (j >= 0 && cur < nums[j]) nums[j + 1] = nums[j--]
//     nums[j + 1] = cur
//   }
//   return nums
// }

// Merge Sort
function sortArray(nums: number[]): number[] {
  if (nums.length > 1) {
    let mid = nums.length >>> 1
    const left = sortArray(nums.slice(0, mid))
    const right = sortArray(nums.slice(mid))
    return merge(left, right)
  }
  return nums
}

function merge(nums1: number[], nums2: number[]) {
  let i = 0
  let j = 0
  const res: number[] = []
  while (i < nums1.length || j < nums2.length) {
    if (i === nums1.length) {
      res.push(nums2[j++])
    } else if (j === nums2.length) {
      res.push(nums1[i++])
    } else if (nums1[i] < nums2[j]) res.push(nums1[i++])
    else res.push(nums2[j++])
  }
  return res
}

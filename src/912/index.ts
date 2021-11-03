function swap(nums: number[], i: number, j: number) {
  let tmp = nums[i]
  nums[i] = nums[j]
  nums[j] = tmp
}

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
// function sortArray(nums: number[]): number[] {
//   if (nums.length > 1) {
//     let mid = nums.length >>> 1
//     const left = sortArray(nums.slice(0, mid))
//     const right = sortArray(nums.slice(mid))
//     return merge(left, right)
//   }
//   return nums
// }

// function merge(nums1: number[], nums2: number[]) {
//   let i = 0
//   let j = 0
//   const res: number[] = []
//   while (i < nums1.length || j < nums2.length) {
//     if (i === nums1.length) {
//       res.push(nums2[j++])
//     } else if (j === nums2.length) {
//       res.push(nums1[i++])
//     } else if (nums1[i] < nums2[j]) res.push(nums1[i++])
//     else res.push(nums2[j++])
//   }
//   return res
// }

// Quick Sort
// function sortArray(nums: number[], l: number = 0, r: number = nums.length - 1) {
//   if (l >= r) return nums
//   let pivot = r
//   let slow = l

//   for (let fast = slow; fast < r; fast++) {
//     if (nums[fast] <= nums[pivot]) {
//       swap(nums, slow, fast)
//       slow++
//     }
//   }
//   swap(nums, slow, pivot)
//   sortArray(nums, l, slow - 1)
//   sortArray(nums, slow + 1, r)
//   return nums
// }

// Heap Sort
function sortArray(nums: number[]): number[] {
  let heapSize = nums.length
  let startIdx = Math.floor(heapSize / 2) - 1
  for (let i = startIdx; i >= 0; i--) {
    heapify(nums, i, heapSize)
  }

  while (heapSize > 0) {
    swap(nums, 0, heapSize - 1)
    heapify(nums, 0, --heapSize)
  }
  return nums
}

function heapify(nums: number[], rootIdx: number, heapSize: number) {
  let maxIdx = rootIdx
  let left = 2 * rootIdx + 1
  let right = 2 * rootIdx + 2
  if (left < heapSize && nums[left] > nums[maxIdx]) maxIdx = left
  if (right < heapSize && nums[right] > nums[maxIdx]) maxIdx = right
  if (maxIdx !== rootIdx) {
    swap(nums, rootIdx, maxIdx)
    heapify(nums, maxIdx, heapSize)
  }
}

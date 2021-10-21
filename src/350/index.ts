function intersect(nums1: number[], nums2: number[]): number[] {
  const res: number[] = []
  const map = new Map<number, number>()
  for (let i = 0; i < nums1.length; i++) {
    const n = nums1[i]
    map.set(n, map.has(n) ? map.get(n)! + 1 : 1)
  }
  for (let j = 0; j < nums2.length; j++) {
    const n = nums2[j]
    if (map.has(n) && map.get(n)! > 0) {
      map.set(n, map.get(n)! - 1)
      res.push(n)
    }
  }
  return res
}

// function intersect(nums1: number[], nums2: number[]): number[] {
//   const res: number[] = []
//   nums1.sort((a, b) => a - b)
//   nums2.sort((a, b) => a - b)
//   let i = 0
//   let j = 0
//   let lastJ = 0
//   while (i < nums1.length && j < nums2.length) {
//     if (nums1[i] === nums2[j]) {
//       res.push(nums1[i])
//       i++
//       lastJ = j + 1
//     }
//     if (j === nums2.length - 1) {
//       i++
//       j = lastJ
//     } else {
//       j++
//     }
//   }

//   return res
// }

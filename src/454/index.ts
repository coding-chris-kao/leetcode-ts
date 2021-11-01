function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
): number {
  const map = new Map<number, number>()

  for (let a of nums1) {
    for (let b of nums2) {
      let num = a + b
      map.set(num, map.get(num)! + 1 || 1)
    }
  }

  let count = 0
  for (let c of nums3) {
    for (let d of nums4) {
      let num = c + d
      count += map.has(-num) ? map.get(-num)! : 0
    }
  }

  return count
}

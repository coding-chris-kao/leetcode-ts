function twoOutOfThree(
  nums1: number[],
  nums2: number[],
  nums3: number[],
): number[] {
  const seen1 = new Set(nums1)
  const seen2 = new Set(nums2)
  const seen3 = new Set(nums3)
  const res = new Set<number>()

  for (let i = 0; i < nums1.length; i++) {
    let num = nums1[i]
    if (seen2.has(num) || seen3.has(num)) res.add(num)
  }
  for (let i = 0; i < nums2.length; i++) {
    let num = nums2[i]
    if (seen1.has(num) || seen3.has(num)) res.add(num)
  }
  for (let i = 0; i < nums3.length; i++) {
    let num = nums3[i]
    if (seen1.has(num) || seen2.has(num)) res.add(num)
  }

  return [...res.keys()]
}

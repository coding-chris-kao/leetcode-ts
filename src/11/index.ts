function maxArea(height: number[]): number {
  let l = 0
  let r = height.length - 1
  let maxArea = 0

  while (l < r) {
    let lower = Math.min(height[l], height[r])
    let width = r - l
    maxArea = Math.max(maxArea, lower * width)
    if (height[l] <= height[r]) {
      l++
    } else {
      r--
    }
  }

  return maxArea
}

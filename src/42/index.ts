function trap(height: number[]): number {
  let l = 0
  let r = height.length - 1
  let maxL = height[l]
  let maxR = height[r]
  let trappedWater = 0
  while (l < r) {
    if (maxL < maxR) {
      trappedWater += maxL - height[l++]
      maxL = Math.max(maxL, height[l])
    } else {
      trappedWater += maxR - height[r--]
      maxR = Math.max(maxR, height[r])
    }
  }
  return trappedWater
}

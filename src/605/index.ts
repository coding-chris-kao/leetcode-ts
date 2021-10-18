function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const len = flowerbed.length
  let zeroCount = 0
  for (let i = 0; i <= len; i++) {
    if (i < len && flowerbed[i] === 0) {
      zeroCount++
      if (i === 0 && flowerbed[i] === 0) zeroCount++
      if (i === len - 1 && flowerbed[len - 1] === 0) zeroCount++
    } else {
      n -= Math.trunc((zeroCount - 1) / 2)
      if (n <= 0) return true
      zeroCount = 0
    }
  }
  return false
}

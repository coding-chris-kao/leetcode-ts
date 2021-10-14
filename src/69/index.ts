function mySqrt(x: number): number {
  if (x === 0) return 0
  if (x === 1) return 1

  let left = 0
  let right = x
  let res = 0
  while (left <= right) {
    let root = (left + right) >> 1
    let square = root * root
    if (square === x) {
      return root
    } else if (square < x) {
      res = root
      left = root + 1
    } else {
      right = root - 1
    }
  }
  return res
}

function validMountainArray(arr: number[]): boolean {
  let everGoHigher = false
  let peek = false

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) continue
    const cur = arr[i]
    const pre = arr[i - 1]

    if (cur === pre) return false

    if (peek && cur > pre) {
      return false
    } else if (!peek && cur < pre) {
      peek = true
    } else if (!peek && cur > pre) {
      if (!everGoHigher) everGoHigher = true
    }
  }
  return everGoHigher && peek
}

export { validMountainArray }

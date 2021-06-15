/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  for (let i = 0; i < arr.length - 1; i++) {
    const num = arr[i]
    if (num === 0) {
      const tmp = arr.splice(i + 1)
      tmp.pop()
      arr.push(0)
      arr.push(...tmp)
      i++
    }
  }
}

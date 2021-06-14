function replaceElements(arr: number[]): number[] {
  let max = -1

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max || i === 0) {
      max = -1
      for (let j = i + 1; j < arr.length; j++) {
        max = Math.max(max, arr[j])
      }
    }
    arr[i] = max
  }
  return arr
}

export { replaceElements }

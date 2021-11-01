function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const res: number[] = []
  const seen = new Map<number, number>()
  for (let i = 0; i < arr1.length; i++) {
    const num = arr1[i]
    seen.set(num, seen.has(num) ? seen.get(num)! + 1 : 1)
  }
  for (let i = 0; i < arr2.length; i++) {
    const num = arr2[i]
    helper(seen, num, res)
  }
  const rest = [...seen.keys()].sort((a, b) => a - b)
  rest.forEach((num) => {
    helper(seen, num, res)
  })

  return res
}

function helper(seen: Map<number, number>, num: number, res: number[]) {
  while (seen.has(num)) {
    let count = seen.get(num)! - 1
    res.push(num)
    if (count === 0) seen.delete(num)
    else seen.set(num, count)
  }
}

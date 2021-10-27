function twoSum(numbers: number[], target: number): number[] {
  const map = new Map<number, number>()
  for (let i = 0; i < numbers.length; i++) {
    let index = i + 1
    let sub = target - numbers[i]
    if (!map.has(sub)) {
      map.set(numbers[i], index)
      continue
    }
    return [map.get(sub)!, index]
  }
  return []
}

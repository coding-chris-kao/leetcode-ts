function checkIfExist(arr: number[]): boolean {
  const set = new Set()
  for (const num of arr) {
    if (set.has(num)) return true
    set.add(num * 2)
    set.add(num / 2)
  }
  return false
}

export { checkIfExist }

function isHappy(n: number): boolean {
  const set = new Set()
  let sum = n
  while (sum !== 1) {
    const nums: number[] = []
    while (sum >= 10) {
      nums.push(sum % 10)
      sum = (sum / 10) >>> 0
    }
    nums.push(sum)
    sum = 0
    for (let num of nums) {
      sum += num ** 2
    }

    if (set.has(sum)) return false
    else set.add(sum)
  }
  return true
}

function prefixesDivBy5(nums: number[]): boolean[] {
  const res: boolean[] = []
  let k = 0
  for (let num of nums) {
    k = (k * 2 + num) % 5
    res.push(k === 0)
  }
  return res
}

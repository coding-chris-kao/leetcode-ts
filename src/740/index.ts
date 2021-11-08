function deleteAndEarn(nums: number[]): number {
  const buckets: number[] = Array(10001).fill(0)
  for (let num of nums) {
    buckets[num] += num
  }
  const dp: number[] = []
  dp[0] = buckets[0]
  dp[1] = buckets[1]
  for (let i = 2; i < buckets.length; i++) {
    dp[i] = Math.max(buckets[i] + dp[i - 2], dp[i - 1])
  }
  return dp[10000]
}

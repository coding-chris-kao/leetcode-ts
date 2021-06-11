function subtractProductAndSum(n: number): number {
  const nums: number[] = [];
  while (n !== 0) {
    nums.push(n % 10);
    n = (n / 10) | 0;
  }

  const prod = nums.reduce((acc, cur) => acc * cur, 1);
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  return prod - sum;
}

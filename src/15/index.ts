export function threeSum(nums: number[]): number[][] {
  let ret: number[][] = [];
  // Edge case
  if (nums.length < 3) return ret;

  nums.sort((a, b) => a - b);

  for (let a = 0; a < nums.length - 2; a++) {
    if (nums[a] > 0) break;
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    let b = a + 1,
      c = nums.length - 1;

    while (b < c) {
      let sum = nums[b] + nums[c];
      if (sum == -nums[a]) {
        while (nums[b] === nums[b + 1]) b++;
        while (nums[c] === nums[c - 1]) c--;
        ret.push([nums[a], nums[b], nums[c]]);
        b++;
      } else if (sum < -nums[a]) {
        b++;
      } else {
        c--;
      }
    }
  }

  return ret;
}

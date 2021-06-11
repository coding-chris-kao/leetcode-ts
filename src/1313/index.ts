function decompressRLElist(nums: number[]): number[] {
  const result: number[] = [];
  while (nums.length > 0) {
    const [freq, val] = [nums.shift(), nums.shift()];
    for (let i = 0; i < freq!; i++) {
      result.push(val!);
    }
  }
  return result;
}

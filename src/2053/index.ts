function kthDistinct(arr: string[], k: number): string {
  const map: { [key: string]: number } = {}
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1
  }
  const distincts: string[] = Object.entries(map)
    .filter(([key, val]) => val === 1)
    .map(([key, val]) => key)
  return !distincts[k - 1] ? '' : distincts[k - 1]
}

const ans = kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2)
console.log(ans)

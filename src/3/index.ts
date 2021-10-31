// function lengthOfLongestSubstring(s: string): number {
//   let max = 0
//   let stack: string[] = []

//   for (let c of s) {
//     let firstIndex = stack.findIndex((item) => item === c)
//     if (firstIndex !== -1) {
//       stack = stack.splice(firstIndex + 1)
//     }
//     stack.push(c)
//     max = Math.max(max, stack.length)
//   }

//   return max
// }

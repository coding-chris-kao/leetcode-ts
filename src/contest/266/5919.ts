// function countVowels(word: string): number {
//   const VOWELS = new Set(['a', 'e', 'i', 'o', 'u'])
//   const N = word.length
//   const vowelIndex: number[] = []
//   let res = 0
//   for (let i = 0; i < word.length; i++) {
//     const w = word[i]
//     if (VOWELS.has(w)) vowelIndex.push(i)
//   }

//   const dp: number[][] = Array(N)
//     .fill(0)
//     .map(() => Array(N).fill(-1))

//   for (let k = 0; k < N; k++) {
//     let vowelCount = vowelIndex.length
//     let left = 0
//     for (let i = 0; i < vowelIndex.length; i++) {
//       if (vowelIndex[i] >= k) break
//       left++
//     }

//     let right = vowelIndex.length - 1
//     for (let i = N - 1; i >= k; i--) {
//       res += right - left + 1
//       if (i === vowelIndex[right]) {
//         right--
//       }
//       if (vowelCount === left) break
//     }
//   }

//   return res
// }

// const res = countVowels('aba')
// console.log(res)

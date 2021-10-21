// function isAnagram(s: string, t: string): boolean {
//   const short = s.length <= t.length ? s : t
//   const long = short === s ? t : s
//   const letters = new Map<string, number>()
//   for (let i = 0; i < short.length; i++) {
//     const char = short[i]
//     letters.set(char, letters.has(char) ? letters.get(char)! + 1 : 1)
//   }
//   for (let i = 0; i < long.length; i++) {
//     const char = long[i]
//     const count = letters.get(char)!
//     if (!letters.has(char) || count <= 0) return false
//     letters.set(char, count - 1)
//   }
//   return true
// }

function isAnagram(s: string, t: string): boolean {
  const str1 = s.split('').sort().join('')
  const str2 = t.split('').sort().join('')
  return str1 === str2
}

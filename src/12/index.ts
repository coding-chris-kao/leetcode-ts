// function intToRoman(num: number): string {
//   const ROMAN = [
//     'M',
//     'CM',
//     'D',
//     'CD',
//     'C',
//     'XC',
//     'L',
//     'XL',
//     'X',
//     'IX',
//     'V',
//     'IV',
//     'I',
//   ]
//   const VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

//   let res = ''
//   let i = 0
//   while (num > 0) {
//     while (num >= VALUES[i]) {
//       res += ROMAN[i]
//       num -= VALUES[i]
//     }
//     i++
//   }
//   return res
// }

function intToRoman(num: number): string {
  const M = ['', 'M', 'MM', 'MMM']
  const C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  const X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  const I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  return (
    M[(num / 1000) >>> 0] +
    C[((num % 1000) / 100) >>> 0] +
    X[((num % 100) / 10) >>> 0] +
    I[num % 10]
  )
}

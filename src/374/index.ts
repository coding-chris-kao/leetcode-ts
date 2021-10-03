/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  let lo = 1
  let hi = n

  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2)
    if (guess(mid) === 0) return mid
    if (guess(mid) === 1) {
      lo = mid + 1
    } else if (guess(mid) === -1) {
      hi = mid
    }
  }
  return lo
}

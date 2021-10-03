/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let lo = 1
    let hi = n

    while (lo < hi) {
      let mid = Math.floor((lo + hi) / 2)
      if (!isBadVersion(mid)) {
        lo = mid + 1
      } else {
        hi = mid
      }
    }

    return lo
  }
}

function plusOne(digits: number[]): number[] {
  let carry = false
  let i = digits.length - 1
  do {
    if (i === -1) {
      digits.unshift(1)
      return digits
    }

    digits[i] = digits[i] + 1
    if (digits[i] === 10) {
      digits[i] = 0
      carry = true
      i--
    } else {
      carry = false
    }
  } while (carry)

  return digits
}

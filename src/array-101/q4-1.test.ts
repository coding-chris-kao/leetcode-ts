import { checkIfExist } from './q4-1'

describe('checkIfExist', () => {
  test('case 1', () => {
    const arr = [10, 2, 5, 3]
    const ans = true
    const res = checkIfExist(arr)
    expect(res).toEqual(ans)
  })

  test('case 2', () => {
    const arr = [7, 1, 14, 11]
    const ans = true
    const res = checkIfExist(arr)
    expect(res).toEqual(ans)
  })

  test('case 3', () => {
    const arr = [3, 1, 7, 11]
    const ans = false
    const res = checkIfExist(arr)
    expect(res).toEqual(ans)
  })
})

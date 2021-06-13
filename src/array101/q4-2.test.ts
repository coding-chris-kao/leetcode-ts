import { validMountainArray } from './q4-2'

describe('validMountainArray ', () => {
  test('case 1', () => {
    const arr = [2, 1]
    const res = validMountainArray(arr)
    expect(res).toBe(false)
  })

  test('case 2', () => {
    const arr = [3, 5, 5]
    const res = validMountainArray(arr)
    expect(res).toBe(false)
  })

  test('case 3', () => {
    const arr = [0, 3, 2, 1]
    const res = validMountainArray(arr)
    expect(res).toBe(true)
  })

  test('case 4', () => {
    const arr = [0, 1, 4, 3, 5]
    const res = validMountainArray(arr)
    expect(res).toBe(false)
  })

  test('case 5', () => {
    const arr = [0, 3, 1, 4, 3]
    const res = validMountainArray(arr)
    expect(res).toBe(false)
  })

  test('case 6', () => {
    const arr = [4, 4, 3, 2, 1]
    const res = validMountainArray(arr)
    expect(res).toBe(false)
  })

  test('case 6', () => {
    const arr = [1, 1, 1, 1, 1, 1, 1, 2, 1]
    const res = validMountainArray(arr)
    expect(res).toBe(false)
  })
})

import { replaceElements } from './q5-1'

describe('replaceElements ', () => {
  test('case 1', () => {
    const arr = [17, 18, 5, 4, 6, 1]
    const res = replaceElements(arr)
    expect(res).toEqual([18, 6, 6, 6, 1, -1])
  })

  test('case 2', () => {
    const arr = [400]
    const res = replaceElements(arr)
    expect(res).toEqual([-1])
  })
})

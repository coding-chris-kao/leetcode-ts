import { rotate } from './index'

describe('rotate ', () => {
  test('case 1', () => {
    const M = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ]
    rotate(M)    
    expect(M).toEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ])
  })
})

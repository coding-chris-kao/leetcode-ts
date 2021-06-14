import { isSumEqual } from './index'

describe('isSumEqual', () => {
  test('case 1', () => {
    const res = isSumEqual('acb', 'cba', 'cdb')
    expect(res).toEqual(true)
  })

  test('case 2', () => {
    const res = isSumEqual('aaa', 'a', 'aab')
    expect(res).toEqual(false)
  })

  test('case 3', () => {
    const res = isSumEqual('aaa', 'a', 'aaaa')
    expect(res).toEqual(true)
  })
})

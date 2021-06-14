import { strStr } from './index'

describe('strStr ', () => {
  test('case 1', () => {
    const haystack = 'hello'
    const needle = 'll'
    const res = strStr(haystack, needle)
    expect(res).toBe(2)
  })

  test('case 2', () => {
    const haystack = 'aaaaa'
    const needle = 'bba'
    const res = strStr(haystack, needle)
    expect(res).toBe(-1)
  })

  test('case 3', () => {
    const haystack = ''
    const needle = ''
    const res = strStr(haystack, needle)
    expect(res).toBe(0)
  })

  test('case 4', () => {
    const haystack = ''
    const needle = 'a'
    const res = strStr(haystack, needle)
    expect(res).toBe(-1)
  })

  test('case 5', () => {
    const haystack = 'mississippi'
    const needle = 'issi'
    const res = strStr(haystack, needle)
    expect(res).toBe(1)
  })
})

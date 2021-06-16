import { createTree } from '../models/TreeNode'
import { preorderTraversal } from './q1-1'

describe('preorderTraversal ', () => {
  test('case 1', () => {
    const tree = createTree([1, null, 2, 3])
    const res = preorderTraversal(tree)
    expect(res).toEqual([1, 2, 3])
  })

  test('case 2', () => {
    const tree = createTree([])
    const res = preorderTraversal(tree)
    expect(res).toEqual([])
  })

  test('case 3', () => {
    const tree = createTree([1])
    const res = preorderTraversal(tree)
    expect(res).toEqual([1])
  })

  test('case 4', () => {
    const tree = createTree([1, 2])
    const res = preorderTraversal(tree)
    expect(res).toEqual([1, 2])
  })

  test('case 5', () => {
    const tree = createTree([1, null, 2])
    const res = preorderTraversal(tree)
    expect(res).toEqual([1, 2])
  })
})

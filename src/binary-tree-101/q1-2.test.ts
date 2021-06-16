import { createTree } from '../models/TreeNode'
import { inorderTraversal } from './q1-2'

describe('inorderTraversal ', () => {
  test('case 1', () => {
    const tree = createTree([1, null, 2, 3])
    const res = inorderTraversal(tree)
    expect(res).toEqual([1, 3, 2])
  })

  test('case 2', () => {
    const tree = createTree([])
    const res = inorderTraversal(tree)
    expect(res).toEqual([])
  })

  test('case 3', () => {
    const tree = createTree([1])
    const res = inorderTraversal(tree)
    expect(res).toEqual([1])
  })

  test('case 4', () => {
    const tree = createTree([1, 2])
    const res = inorderTraversal(tree)
    expect(res).toEqual([2, 1])
  })

  test('case 5', () => {
    const tree = createTree([1, null, 2])
    const res = inorderTraversal(tree)
    expect(res).toEqual([1, 2])
  })
})

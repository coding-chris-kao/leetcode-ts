import { createTree } from '../models/TreeNode'
import { postorderTraversal } from './q1-3'

describe('postorderTraversal ', () => {
  test('case 1', () => {
    const tree = createTree([1, null, 2, 3])
    const res = postorderTraversal(tree)
    expect(res).toEqual([3, 2, 1])
  })

  test('case 2', () => {
    const tree = createTree([])
    const res = postorderTraversal(tree)
    expect(res).toEqual([])
  })

  test('case 3', () => {
    const tree = createTree([1])
    const res = postorderTraversal(tree)
    expect(res).toEqual([1])
  })

  test('case 4', () => {
    const tree = createTree([1, 2])
    const res = postorderTraversal(tree)
    expect(res).toEqual([2, 1])
  })

  test('case 5', () => {
    const tree = createTree([1, null, 2])
    const res = postorderTraversal(tree)
    expect(res).toEqual([2, 1])
  })

  test('case 6', () => {
    const tree = createTree([3, 1, 2])
    const res = postorderTraversal(tree)
    expect(res).toEqual([1, 2, 3])
  })
})

import { TreeNode } from '../models/TreeNode'

function pathSum(
  root: TreeNode | null,
  targetSum: number,
  res: number[][] = [],
  arr: number[] = [],
): number[][] {
  if (!root) return res
  arr.push(root.val)
  if (!root.left && !root.right && targetSum === root.val) {
    res.push(arr)
    return res
  }
  targetSum -= root.val
  if (root.left) pathSum(root.left, targetSum, res, arr.slice())
  if (root.right) pathSum(root.right, targetSum, res, arr.slice())
  return res
}

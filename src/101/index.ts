import { TreeNode } from '../models/TreeNode'

function isSymmetric(root: TreeNode | null): boolean {
  return !root || helper(root.left, root.right)
}

function helper(left: TreeNode | null, right: TreeNode | null): boolean {
  if (!left && !right) return true
  if (!left || !right) return false

  return (
    left.val === right.val &&
    helper(left.left, right.right) &&
    helper(left.right, right.left)
  )
}

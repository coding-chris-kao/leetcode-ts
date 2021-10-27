import { TreeNode } from '../models/TreeNode'

function findTarget(
  root: TreeNode | null,
  k: number,
  set: Set<number> = new Set<number>(),
): boolean {
  if (!root) return false
  if (set.has(root.val)) return true
  set.add(k - root.val)
  return findTarget(root.left, k, set) || findTarget(root.right, k, set)
}

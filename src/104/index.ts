import { TreeNode } from '../models/TreeNode'

function maxDepth(root: TreeNode | null, max: number = 0): number {
  if (!root) return max
  max++
  let maxLeft = maxDepth(root.left, max)
  let maxRight = maxDepth(root.right, max)
  max = Math.max(maxLeft, maxRight)
  return max
}

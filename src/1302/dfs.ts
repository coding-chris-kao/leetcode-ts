import { TreeNode } from '../models/TreeNode'

let maxLevel = -1
let sum = 0

function deepestLeavesSum(root: TreeNode | null): number {
  find(root, maxLevel)
  return sum
}

function find(root: TreeNode | null, level: number) {
  if (!root) return

  level++

  if (!root.left && !root.right) {
    if (level > maxLevel) {
      maxLevel = level
      sum = root.val
    } else if (level == maxLevel) {
      sum += root.val
    }
  }

  if (root.left) find(root.left, level)
  if (root.right) find(root.right, level)
}

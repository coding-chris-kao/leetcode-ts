import { TreeNode } from '../models/TreeNode'

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  return new TreeNode(root.val, invertTree(root.right), invertTree(root.left))
}

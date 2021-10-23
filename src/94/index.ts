import { TreeNode } from '../models/TreeNode'

// Recursively
// function inorderTraversal(root: TreeNode | null, res: number[] = []): number[] {
//   if (!root) return res
//   if (root.left) inorderTraversal(root.left, res)
//   res.push(root.val)
//   if (root.right) inorderTraversal(root.right, res)
//   return res
// }

// Iteratively
function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  if (!root) return res

  const stack: TreeNode[] = []
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()!
    res.push(root.val)
    root = root.right
  }

  return res
}

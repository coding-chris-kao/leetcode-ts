import { TreeNode } from '../models/TreeNode'

// Recursively
// function preorderTraversal(
//   root: TreeNode | null,
//   res: number[] = [],
// ): number[] {
//   if (!root) return []
//   res.push(root.val)
//   preorderTraversal(root.left, res)
//   preorderTraversal(root.right, res)
//   return res
// }

// Iteratively
function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []
  const stack: TreeNode[] = [root]
  const res: number[] = []

  while (stack.length !== 0) {
    const node = stack.pop()!
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)

    res.push(node.val)
  }

  return res
}

export { preorderTraversal }

import { TreeNode } from '../models/TreeNode'

// Recursively
// function preorderTraversal(
//   root: TreeNode | null,
//   res: number[] = [],
// ): number[] {
//   if (!root) return res
//   res.push(root.val)
//   preorderTraversal(root.left, res)
//   preorderTraversal(root.right, res)
//   return res
// }

// Iteratively
function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  if (!root) return res
  const stack: TreeNode[] = [root]

  while (stack.length !== 0) {
    const node = stack.pop()!
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)

    res.push(node.val)
  }

  return res
}

export { preorderTraversal }

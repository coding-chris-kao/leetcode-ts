import { TreeNode } from '../models/TreeNode'

// Recursively
// function postorderTraversal(
//   root: TreeNode | null,
//   res: number[] = [],
// ): number[] {
//   if (!root) return res
//   postorderTraversal(root.right, res)
//   postorderTraversal(root.left, res)
//   res.push(root.val)
//   return res
// }

// Iteratively
function postorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  if (!root) return res
  const stack: TreeNode[] = [root]

  while (stack.length !== 0) {
    const node = stack.pop()!
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)

    res.unshift(node.val)
  }

  return res
}

export { postorderTraversal }

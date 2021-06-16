import { TreeNode } from '../models/TreeNode'

// Recursively
// function inorderTraversal(root: TreeNode | null, res: number[] = []): number[] {
//   if (!root) return res
//   inorderTraversal(root.left, res)
//   res.push(root.val)
//   inorderTraversal(root.right, res)
//   return res
// }

// Iteratively
function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []
  if (!root) return res

  const stack: TreeNode[] = []
  let node: TreeNode | null = root
  while (node || stack.length !== 0) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    node = stack.pop()!
    res.push(node.val)
    node = node.right
  }

  return res
}

export { inorderTraversal }

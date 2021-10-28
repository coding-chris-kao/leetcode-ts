import { TreeNode } from '../models/TreeNode'

function minDepth(root: TreeNode | null): number {
  if (!root) return 0
  let depth = 1
  let queue: TreeNode[] = [root]
  while (queue.length > 0) {
    const qLength = queue.length

    for (let i = 0; i < qLength; i++) {
      const node = queue.shift()!

      if (!node.left && !node.right) return depth

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    depth++
  }
  return depth
}

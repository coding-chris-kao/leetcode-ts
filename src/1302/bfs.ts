import { TreeNode } from '../models/TreeNode'

function deepestLeavesSum(root: TreeNode | null): number {
  let res = 0
  const queue = [root]

  while (queue.length > 0) {
    res = 0
    for (let i = queue.length - 1; i >= 0; i--) {
      const cur = queue.shift()
      res += cur!.val
      if (cur!.left) queue.push(cur!.left)
      if (cur!.right) queue.push(cur!.right)
    }
  }

  return res
}

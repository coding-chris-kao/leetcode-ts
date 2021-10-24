import { TreeNode } from '../models/TreeNode'

function levelOrder(
  root: TreeNode | null,
  res: number[][] = [],
  layer: number = 0,
): number[][] {
  if (!root) return []
  if (!res[layer]) res[layer] = []
  res[layer].push(root.val)
  levelOrder(root.left, res, layer + 1)
  levelOrder(root.right, res, layer + 1)
  return res
}

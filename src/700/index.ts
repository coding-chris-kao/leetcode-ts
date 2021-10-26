import { TreeNode } from '../models/TreeNode'

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null
  if (val === root.val) {
    return root
  }
  if (val < root.val) {
    return searchBST(root.left, val)
  } else {
    return searchBST(root.right, val)
  }
}

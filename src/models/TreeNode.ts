export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

export function createTree(nums: (number | null)[]): TreeNode | null {
  if (nums.length === 0) return null
  const nodes = nums.map((num) => (num ? new TreeNode(num) : null))
  let i = 0
  const root = nodes[i++]
  const queue: (TreeNode | null)[] = [root!]

  while (i < nums.length) {
    const node = queue.shift()
    if (node) {
      node.left = nodes[i++] || null
      queue.push(node.left)
      node.right = nodes[i++] || null
      queue.push(node.right)
    }
  }

  return root
}

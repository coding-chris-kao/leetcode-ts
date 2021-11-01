class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.next = next === undefined ? null : next
  }
}

function connect(root: Node | null): Node | null {
  if (!root) return null
  const queue: Node[] = [root]
  while (queue.length > 0) {
    let queueSize = queue.length
    let last: Node | null = null
    while (queueSize--) {
      const node = queue.shift()!
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      if (last) last.next = node
      last = node
    }
  }
  return root
}

export {}

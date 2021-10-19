import { ListNode } from '../models/ListNode'

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) return null

  let res: ListNode | null = head
  let node: ListNode | null = head
  let last: ListNode | null = null
  while (node) {
    if (node.next) {
      let next = null
      let nextNext = null
      next = node.next
      nextNext = node.next.next
      next.next = node
      node.next = nextNext

      if (last) last.next = next
      last = node
      if (res === head) res = next
    }
    node = node.next
  }

  return res
}

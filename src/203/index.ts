import { ListNode } from '../models/ListNode'

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null

  let node: ListNode | null = head
  while (node) {
    if (node.next && node.next.val === val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }

  return head.val === val ? head.next : head
}

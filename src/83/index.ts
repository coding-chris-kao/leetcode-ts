import { ListNode } from '../models/ListNode'

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null
  let node: ListNode | null = head
  while (node?.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }
  return head
}

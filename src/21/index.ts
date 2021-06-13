import { ListNode } from '../models/ListNode'

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && !l2) return null
  if (!l2) return l1
  if (!l1) return l2

  let cur = new ListNode()
  const head = cur

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }

  cur.next = l1 ? l1 : l2

  return head.next
}

import { ListNode } from '../models/ListNode'

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null
  let reversalHead = reverse(head)!
  let reversal = reversalHead
  let k = 0
  while (reversal && reversal.next) {
    k++
    if (k < n) {
      reversal = reversal.next
    } else {
      reversal.next = reversal.next.next
      break
    }
  }

  head = reverse(reversalHead.next)

  return !head ? null : head.next
}

function reverse(head: ListNode | null): ListNode | null {
  if (!head) return null
  let curr = head
  let reversal = new ListNode(curr.val)
  while (curr && curr.next) {
    let tmp = reversal
    curr = curr.next
    reversal = new ListNode(curr.val)
    reversal.next = tmp
  }
  let reversalHead = new ListNode()
  reversalHead.next = reversal
  return reversalHead
}

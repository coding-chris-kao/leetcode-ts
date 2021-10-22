import { ListNode } from '../models/ListNode'

// function reverseList(head: ListNode | null): ListNode | null {
//   let newHead = null
//   while (head) {
//     let next = head.next
//     head.next = newHead
//     newHead = head
//     head = next
//   }

//   return newHead
// }

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head
  let node = reverseList(head.next)
  head.next.next = head
  head.next = null
  return node
}

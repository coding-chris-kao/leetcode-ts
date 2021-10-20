import { ListNode } from '../models/ListNode'

// function hasCycle(head: ListNode | null): boolean {
//   const showed = new Set<ListNode>()

//   let node = head
//   while (node) {
//     if (showed.has(node)) return true
//     showed.add(node)
//     node = node.next
//   }

//   return false
// }

// O(1) space solution
function hasCycle(head: ListNode | null): boolean {
  let slow = head
  let fast = head

  while (slow?.next && fast?.next?.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) return true
  }

  return false
}

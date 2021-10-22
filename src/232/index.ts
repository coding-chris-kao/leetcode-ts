// class MyQueue {
//   private stack1: number[] = []
//   private stack2: number[] = []

//   private switch = false

//   constructor() {}

//   push(x: number): void {
//     const stack = this.getCurrentStack()
//     if (this.switch) {
//       const otherStack = stack === this.stack1 ? this.stack2 : this.stack1
//       while (stack.length) {
//         otherStack.push(stack.pop()!)
//       }
//       otherStack.push(x)
//       this.switch = !this.switch
//     } else {
//       stack.push(x)
//     }
//   }

//   pop(): number {
//     const stack = this.getCurrentStack()
//     const otherStack = stack === this.stack1 ? this.stack2 : this.stack1

//     if (this.switch) {
//       return stack.pop()!
//     }

//     while (stack.length > 1) {
//       otherStack.push(stack.pop()!)
//     }
//     this.switch = !this.switch
//     return stack.pop()!
//   }

//   peek(): number {
//     const stack = this.getCurrentStack()
//     if (this.switch) return stack[stack.length - 1]
//     else return stack[0]
//   }

//   empty(): boolean {
//     const stack = this.getCurrentStack()
//     return stack.length === 0
//   }

//   private getCurrentStack() {
//     return this.switch ? this.stack2 : this.stack1
//   }
// }

class MyQueue {
  private pushStack: number[] = []
  private popStack: number[] = []

  constructor() {}

  push(x: number): void {
    this.pushStack.push(x)
  }

  pop(): number {
    this.peek()
    return this.popStack.pop()!
  }

  peek(): number {
    if (this.popStack.length === 0)
      while (this.pushStack.length !== 0)
        this.popStack.push(this.pushStack.pop()!)
    return this.popStack[this.popStack.length - 1]
  }

  empty(): boolean {
    return this.pushStack.length === 0 && this.popStack.length === 0
  }
}

const queue = new MyQueue()
queue.push(1)
queue.push(2)
const num1 = queue.peek()
const num2 = queue.pop()
const b = queue.empty()
console.log({ num1, num2, b })

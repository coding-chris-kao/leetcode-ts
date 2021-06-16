import { createTree } from './models/TreeNode'

const arr = [10, null, 5, 3, 1, 2]
const res = createTree(arr)

console.log(res?.right)

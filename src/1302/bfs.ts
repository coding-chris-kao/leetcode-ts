export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function deepestLeavesSum(root: TreeNode | null): number {
  let res = 0;
  const queue = [root];

  while (queue.length > 0) {
    res = 0;
    for (let i = queue.length - 1; i >= 0; i--) {
      const cur = queue.shift();
      res += cur!.val;
      if (cur!.left) queue.push(cur!.left);
      if (cur!.right) queue.push(cur!.right);
    }
  }

  return res;
}

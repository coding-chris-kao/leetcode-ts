function minOperations(boxes: string): number[] {
  const result: number[] = [];
  for (let i = 0; i < boxes.length; i++) {
    let count = 0;
    for (let j = 0; j < boxes.length; j++) {
      if (boxes[j] === "0") continue;
      count += Math.abs(j - i);
    }
    result.push(count);
  }
  return result;
}

function minOperationsDP(boxes: string): number[] {
  const result = new Array(boxes.length).fill(0);
  for (let i = 0, ops = 0, nextCount = 0; i < boxes.length; i++) {
    result[i] += ops;
    if (boxes[i] === "1") {
      nextCount++;
    }
    ops += nextCount;
  }
  for (let i = boxes.length - 1, ops = 0, nextCount = 0; i >= 0; i--) {
    result[i] += ops;
    if (boxes[i] === "1") {
      nextCount++;
    }
    ops += nextCount;
  }
  return result;
}

minOperationsDP("001011");

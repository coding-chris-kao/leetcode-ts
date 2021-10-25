function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string,
): number {
  const RuleKey: { [key: string]: number } = {
    type: 0,
    color: 1,
    name: 2,
  }

  let count = 0
  for (let item of items) {
    const index = RuleKey[ruleKey]
    if (item[index] === ruleValue) count++
  }
  return count
}

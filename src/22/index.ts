function generateParenthesis(n: number): string[] {
  const res: string[] = []
  let str = ''
  helper(res, str, n, n)
  return res
}

function helper(res: string[], str: string, open: number, close: number) {
  if (open === 0 && close === 0) {
    res.push(str)
    return
  }
  if (open > 0) helper(res, str + '(', open - 1, close)
  if (close > open) helper(res, str + ')', open, close - 1)
}

const generateParenthesis = require('../code/48generateParenthesis/generateParenthesis')

test('generateParenthesis', () => {
  expect(generateParenthesis(3)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()' ])
})
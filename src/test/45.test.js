const solute = require('../code/45longestCommonPrefix/14longestCommonPrefix')

test('longestCommonPrefix', () => {
  expect(solute.longestCommonPrefix1(['flower', 'flow', 'flight'])).toBe('fl')
  expect(solute.longestCommonPrefix1(['dog', 'racecar', 'car'])).toBe('')
  expect(solute.longestCommonPrefix1(['aa', 'a'])).toBe('a')
  expect(solute.longestCommonPrefix1(['abab', 'aba', ''])).toBe('')

  expect(solute.longestCommonPrefix2(['flower', 'flow', 'flight'])).toBe('fl')
  expect(solute.longestCommonPrefix2(['dog', 'racecar', 'car'])).toBe('')
  expect(solute.longestCommonPrefix2(['aa', 'a'])).toBe('a')
  expect(solute.longestCommonPrefix2(['abab', 'aba', ''])).toBe('')
})


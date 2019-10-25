const intToRoman = require('../code/43intToroman/12intToroman')

test('intToRoman', () => {
  expect(intToRoman(3)).toBe('III')
  expect(intToRoman(4)).toBe('IV')
  expect(intToRoman(9)).toBe('IX')
  expect(intToRoman(58)).toBe('LVIII')
  expect(intToRoman(1994)).toBe('MCMXCIV')
})
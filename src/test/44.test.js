const romanToInt = require('../code/44romanToInt/13romanToInt')

test('romanToInt test', () => {
  expect(romanToInt('III')).toBe(3)
  expect(romanToInt('IV')).toBe(4)
  expect(romanToInt('IX')).toBe(9)
  expect(romanToInt('LVIII')).toBe(58)
  expect(romanToInt('MCMXCIV')).toBe(1994)
})
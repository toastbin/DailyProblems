const threeSum = require('../code/46threeSum/15threeSum')


test('threeSum', () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, 0, 1],
    [-1, -1, 2]
  ])
})
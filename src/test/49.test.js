const threeSumClosest = require('../code/49threeSumClosest/threeSumClosest')


test('threeSumClosest', () => {
  expect(threeSumClosest.solution1([-1, 2, 1, -4], 1)).toBe(2)
  expect(threeSumClosest.solution1([0, 1, 2], 3)).toBe(3)

  expect(threeSumClosest.solution2([-1, 2, 1, -4], 1)).toBe(2)
  expect(threeSumClosest.solution2([0, 1, 2], 3)).toBe(3)
})
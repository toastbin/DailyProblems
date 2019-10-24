const uniquePathsWithObstacles = require('../code/40uniquePathsWithObstacles/63uniquePathsWithObstacles')

test('uniquePathsWithObstacles', () => {
  expect(uniquePathsWithObstacles.uniquePathsWithObstacles1([
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ])).toBe(2)
})

test('uniquePathsWithObstacles', () => {
  expect(uniquePathsWithObstacles.uniquePathsWithObstacles2([
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ])).toBe(2)
})


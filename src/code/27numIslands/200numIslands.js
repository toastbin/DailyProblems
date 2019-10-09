/**
给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

示例 1:

输入:
11110
11010
11000
00000

输出: 1
示例 2:

输入:
11000
11000
00100
00011

输出: 3
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  if(!grid.length) return 0
  let res = 0

  let r = grid.length
  let c = grid[0].length

  grid.forEach((row, i) => {
    row.forEach((item, j) => {
      if(item == 1) {
        res++
        infect(grid, i, j, c, r)
      }
    })
  })
  return res

  function infect(grid, i, j, c, r) {
    if(i<0 || i>=r || j<0 || j>=c || grid[i][j] != 1) {
      return
    }
    grid[i][j] = 2

    infect(grid, i+1, j, c, r)
    infect(grid, i-1, j, c, r)
    infect(grid, i, j+1, c, r)
    infect(grid, i, j-1, c, r)
  }
}
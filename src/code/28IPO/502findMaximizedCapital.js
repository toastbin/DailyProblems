/**
假设 力扣（LeetCode）即将开始其 IPO。为了以更高的价格将股票卖给风险投资公司，力扣 希望在 IPO 之前开展一些项目以增加其资本。 由于资源有限，它只能在 IPO 之前完成最多 k 个不同的项目。帮助 力扣 设计完成最多 k 个不同项目后得到最大总资本的方式。

给定若干个项目。对于每个项目 i，它都有一个纯利润 Pi，并且需要最小的资本 Ci 来启动相应的项目。最初，你有 W 资本。当你完成一个项目时，你将获得纯利润，且利润将被添加到你的总资本中。

总而言之，从给定项目中选择最多 k 个不同项目的列表，以最大化最终资本，并输出最终可获得的最多资本。

示例 1:

输入: k=2, W=0, Profits=[1,2,3], Capital=[0,1,1].

输出: 4

解释:
由于你的初始资本为 0，你尽可以从 0 号项目开始。
在完成后，你将获得 1 的利润，你的总资本将变为 1。
此时你可以选择开始 1 号或 2 号项目。
由于你最多可以选择两个项目，所以你需要完成 2 号项目以获得最大的资本。
因此，输出最后最大化的资本，为 0 + 1 + 3 = 4。
 

注意:

假设所有输入数字都是非负整数。
表示利润和资本的数组的长度不超过 50000。
答案保证在 32 位有符号整数范围内。

*/

/**
 * @param {number} k
 * @param {number} W
 * @param {number[]} Profits
 * @param {number[]} Capital
 * @return {number}
 */
// 超出时间限制
var findMaximizedCapital1 = function (k, W, Profits, Capital) {
  const arr = []
  Profits.forEach((item, index) => {
    arr.push([Capital[index], item])
  })

  for (let i = 0; i < k; i++) {
    let candidates = arr.filter(item => item[0] <= W)
    if (candidates.length === 0) {
      return W
    }
    candidates.sort((a, b) => b[1] - a[1])
    W += candidates[0][1]
    arr.splice(arr.indexOf(candidates[0]), 1)
  }

  return W
};

// console.log(findMaximizedCapital1(1, 0, [1, 2, 3], [1, 1, 2]));



const father = x => x === 0 ? 0 : Math.floor((x - 1) / 2);
const lc = x => 2 * x + 1;
const rc = x => 2 * x + 2;

class PQueue {  // 优先级队列
  constructor(ctor) { // 接受一个比较器函数，用于扩展队列功能，使得可以自定义队列的排序
    this.s = [];
    this.ctor = ctor;
  }
  get size() {
    return this.s.length;
  }
  heapInsert(item) { //尾插入，并堆化
    const { s, ctor } = this;
    s.push(item);
    let offset = this.s.length - 1;
    let f = father(offset);
    while (ctor(s[offset], s[f]) < 0) {
      [s[f], s[offset]] = [s[offset], s[f]];
      offset = f;
      f = father(offset);
    }

  }
  heapify() {  //弹出顶部后，然后进行堆化
    if (this.size <= 1) return;
    const { s, ctor } = this;
    let ofset = 0;
    while (lc(ofset) < this.size) {
      let lcof = lc(ofset);
      let rcof = rc(ofset);
      // console.log('lcof', lcof, ' rcof', rcof);
      let largest = rcof < this.size && ctor(s[rcof], s[lcof]) < 0 ? rcof : lcof;
      // console.log('largest', largest);
      if (ctor(s[largest], s[ofset]) >= 0) largest = ofset;
      if (largest === ofset) break;
      [s[ofset], s[largest]] = [s[largest], s[ofset]];
      // console.log(this.s);
      ofset = largest;
      // console.log('ofset', ofset);
    }

  }
  add(item) {
    this.heapInsert(item);
  }
  pull() {
    if (this.size === 0) return null;
    const { s } = this;
    [s[0], s[s.length - 1]] = [s[s.length - 1], s[0]];
    const res = s.pop();
    this.heapify();
    return res;
  }
  peek() {
    return this.s[0];
  }

  toString() {
    return String(this.s);
  }

}

var findMaximizedCapital = function (k, W, Profits, Capital) {
  const minCostPQueue = new PQueue((a, b) => {
    if (Capital[a] < Capital[b]) return -1;
    return 1;
  });
  const maxProfitPQueue = new PQueue((a, b) => {
    if (Profits[a] > Profits[b]) return -1;
    return 1;
  });
  for (let i = 0; i < Capital.length; i++) {
    minCostPQueue.add(i);
  }
  for (let i = 0; i < k; i++) {
    while (minCostPQueue.size !== 0 && Capital[minCostPQueue .peek()] <= W) {
      maxProfitPQueue.add(minCostPQueue.pull());
    }
    if (maxProfitPQueue.size === 0) return W;
    W += Profits[maxProfitPQueue.pull()];
  }
  return W;
}
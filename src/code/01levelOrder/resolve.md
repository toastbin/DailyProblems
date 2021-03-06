### 二叉树的层序遍历解析

* 首先题目里有几个关键点
  1. 层序遍历
  2. 每层顺序要一致, 从左到右

* 所以基本思路如下
  1. 因为是层序遍历, 需要把二叉树每一层的节点都找到, 基本思路就是`广度优先(BFS)`
 
  2. 在这里我们使用迭代的方式, 所以要首先创建一个队列`queue`, 并将其初始化填入`root`根节点
      + 队列`queue`其实就是一个数组, 但我们在使用时只采取 `arr.push() && arr.shift()` 或者 `arr.unshift() && arr.pop()`的操作, 这样就是一个从一头进队, 另外一头出队的先进先出`(first in first out)`的队列了.
  3. 在循环体内部, 先创建一个保存当前层的节点的数组`curLevel`, 然后复制一份当前的`queue`, 因为我们在遍历`queue`时需要维护`queue`, 所以干脆拷贝一份新的来供我们遍历.
  4. 遍历拷贝的`queue`, 每次取出真正的`queue`中的队尾元素, 判断这个队尾元素是否有左节点和右节点, 如果有入队, 并且添加到`curLevel`中, 注意这次遍历的对象是上一层的节点, 遍历完成之后, 将本层节点的值添加到结果中`res.push(curLevel)`
  5. 因为每次遍历的上一层节点, 找的是下一层节点, 所以最后一层遍历出的`curLevel`永远是空数组, 要将最后的`res.pop()`一下.

+ 简单图示
  + ![image](https://github.com/toastbin/DailyProblems/blob/master/src/code/1levelOrder/diagram.jpg)
  
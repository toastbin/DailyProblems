### 二叉树的最近公共祖先
* 思路
  1. 关于二叉树的题目大部分都是围绕着遍历来进行的
  2. 对二叉树进行`深度优先遍历且是后序遍历`, 因为后序遍历是先子节点后父节点, 所以再向父节点遍历回溯的同时, 给当前路径一个标识, 当`q`和`p`的第一次路径相交时, 就是这两个节点的最近公共祖先 

* 本人能力有限, 而且确实感觉不是太好讲, 大家结合代码和下面这幅图来进行消化吧..
* ![image](https://github.com/toastbin/DailyProblems/blob/master/src/code/3lowestCommonAncestor/lowestCommonAncestor.jpg)
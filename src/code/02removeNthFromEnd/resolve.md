### 删除链表的倒数第N个节点
* 首先本题的关键点是如何找到到数的第N个节点

* 第一种解题思路
    * 先对当前的链表进行一次遍历, 得到当前的链表长度, 当前的链表长度`count`减去倒数的`n`便是从头开始数的那个节点
    * ![image](https://github.com/toastbin/DailyProblems/blob/master/src/code/2removeNthFromEnd/removeNthFromEnd1.jpg)
  
* 第二种思路
    * 对当前链表做两次遍历是肯定可以的, 但我们能不能一次遍历就删除呢?
    * 答案肯定是可以的, 我们可以建立一个`map`, 用来存放每个节点是在第几个, 然后再进行上述相似的操作, 具体见代码

* 第三种思路
    * 第二种方法里虽然是只使用了一趟循坏, 但是我们因为存放相关的节点索引而新开辟了多余的空间, 所以还是可以优化的.
    1. 我们先定义两个指针, 让其中的一个指针`q`先走到`n`的位置, 另外一个指针`p`不进行移动, 到目前为止, `q, p`两个指针相距的就是`n`
    2. `q, p`一块进行移动, 当`q`走到头, 即`q == null`时, `p`所在的位置就是到数的第`n`个位置, 这时再进行相关的删除操作就好 
    * ![image](https://github.com/toastbin/DailyProblems/blob/master/src/code/2removeNthFromEnd/removeNthFromEnd2.jpg)
  


* ps: 引入虚拟头节点的好处
    1. 因为最后时返回的整个链表, 所以虚拟头结点可以帮助我们保存最后要返回的那个链表, 即 `dummy.next`
    2. 链表的第一个节点是无法删除的, 所以引入的虚拟头节点, 原本的头节点就变成了第二个节点, 于是我们就可以使用 `dummy.next = dummy.next.next` 将其删除.
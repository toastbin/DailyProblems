### 两数之和
* 思路一: 暴力枚举
    * 在对字符串进行遍历的时候, 查找剩下数组内有没有和当前数字匹配的即`target - curNum`, 如果就就返回退出, 没有就继续查找, 思路很清晰.
    * 在我的代码中, 操作了数组和, 因为实际上我们只需要向当前数组的后半部分寻找即可, 但是这种方法时间复杂度太高, 没有被通过

* 思路二
    * 分析一下思路一中主要的时间花费在查找上, 所以我们从找出是否有匹配的数字这方面来进行优化, 具体方案是, 建立一个`hashMap`, 在每次遍历的时候, 如果匹配的数字不在`hashMap`中, 那么我们就将当前的数字和位置组成一对儿`key value`值存入用来备用, 每次遍历到不同数字的时候, 先去查表.
    * 这样我们用一定的空间节约了时间, 降低了时间复杂度
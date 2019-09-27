// 栈实现队列


function sTq() {
  this.pushStack = []
  this.popStack = []
  this.size = 0

  this.isEmpty = () => {
    return this.size === 0
  }

  this.toPopStack = () => {
    if(this.popStack.length === 0){
      while(this.pushStack.length) {
        this.popStack.push(this.pushStack.pop())
      }
    }
  }

  this.pop = () => {
    if(this.isEmpty()) {
      console.log('empty');
      return null
    }
    this.toPopStack()
    this.size --
    return this.popStack.pop()
  }

  this.push = val => {
    this.size ++
    this.pushStack.push(val)
  }

}

const q = new sTq()

q.push(1)
q.push(2)
q.push(3)
console.log(q.pop());
console.log(q.pop());
q.push(10)
console.log(q.pop())
console.log(q.pop())
console.log(q.pop())
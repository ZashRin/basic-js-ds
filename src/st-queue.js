const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.length = 0;
    this.top = null;
  }
  
  getUnderlyingList() {
    let q = this.top;
    let list = {value: q.value, next: null};

    while(q.next !== null) {
      q = q.next;
      list = {value: q.value, next: list}
    }
    
    return list;
  }

  enqueue(value) {
    this.length += 1;
    const element = new ListNode(value);
    if(this.top === null) {
      this.top = element;
    }
    else {
      element.next = this.top;
      this.top = element;
    }
  }

  dequeue() {
    this.length -= 1;
    let top = this.top;
    let newTop;

    while(top.next !== null) {
      newTop = top;
      top = top.next;
    }
    newTop.next = null;

    return top.value;
  }

}

const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
class Queue {
  constructor() {
    this.elem = [];
  }

  getUnderlyingList() {
    const list = { value: null, next: null };

    if (this.elem.length > 0) {
      list.value = this.elem[this.elem.length - 1]
      let current = list

      for (let i = this.elem.length - 2; i >= 0; i--) {
        current.next = { value: this.elem[i], next: null }
        current = current.next
      }
    }
    return list
  }

  enqueue(value) {
    return this.elem.unshift(value);
  }

  dequeue() {
    return this.elem.pop()
  }
}

module.exports = {
  Queue
};

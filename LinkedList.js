class Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
  }

  addToTail(value) {
    //TODO: implement me!
  }

  removeHead() {
    //TODO: implement me!
  }

  contains(targetNodeValue) {
    //TODO: implement me!
  }
}
module.exports = LinkedList;

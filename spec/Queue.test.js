const expect = require("chai").expect;
const Queue = require("../Queue");

describe("Queue", function () {
  it("should exist", function () {
    expect(Queue).to.exist;
  });

  it("reports a size of zero for a new queue", function () {
    var queue = new Queue();
    expect(queue.size()).to.equal(0);
  });

  it("reports a size of 2 after adding two items", function () {
    var queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    expect(queue.size()).to.equal(2);
  });

  it("does not error when removing from an empty queue", function () {
    var queue = new Queue();
    expect(function () {
      queue.dequeue();
    }).not.throws();
  });

  it("reports a size of 1 after adding two items and removing one", function () {
    var queue = new Queue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.dequeue();
    expect(queue.size()).to.equal(1);
  });

  it("enqueue(): should add an element to the back of the queue", function () {
    var queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(6);
    queue.enqueue(7);
    expect(queue.dequeue()).to.equal(5);
    expect(queue.dequeue()).to.equal(6);
    expect(queue.dequeue()).to.equal(7);
  });

  it("dequeue(): should remove an element from the front of the queue and return that value", function () {
    var queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).to.equal(1);
  });

  it("front(): should return the front element", () => {
    var queue = new Queue();

    queue.enqueue(9);
    queue.enqueue(10);
    queue.enqueue(11);

    expect(queue.front()).to.equal(9);
  });

  it("isEmpty(): should return true if the queue is empty", function () {
    var queue = new Queue();
    expect(queue.isEmpty()).to.equal(true);
  });

  it("isEmpty(): should return false if the queue is not empty", function () {
    var queue = new Queue();
    queue.enqueue(5);
    expect(queue.isEmpty()).to.equal(false);
  });

  it("printQueue(): should print all elements in the queue (in order that they appear in the array of `items`) separated by a space in one string", () => {
    var queue = new Queue();
    queue.enqueue("Hello");
    queue.enqueue("Hola");
    queue.enqueue("Bonjour");
    expect(queue.printQueue()).to.equal("Bonjour Hola Hello");
  });
});

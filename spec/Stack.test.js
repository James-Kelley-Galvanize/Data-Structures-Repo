const expect = require("chai").expect;
const Stack = require("../Stack");

describe("Stack", function () {
  it("should exist", function () {
    expect(Stack).to.exist;
  });

  it("reports a size of zero for a new stack", function () {
    var stack = new Stack();
    expect(stack.size()).to.equal(0);
  });

  it("reports a size of 2 after adding two items", function () {
    var stack = new Stack();
    stack.push("a");
    stack.push("b");
    expect(stack.size()).to.equal(2);
  });

  it("does not error when removing from an empty stack", function () {
    var stack = new Stack();
    expect(function () {
      stack.pop();
    }).not.throws();
  });

  it("reports a size of 1 after adding two items and removing one", function () {
    var stack = new Stack();
    stack.push("a");
    stack.push("b");
    stack.pop();
    expect(stack.size()).to.equal(1);
  });

  it("push(): should add an element to the top of the stack", function () {
    var stack = new Stack();
    stack.push(5);
    stack.push(6);
    stack.push(7);
    expect(stack.items.pop()).to.equal(7);
  });

  it("pop(): should remove the top of the stack and return that value", function () {
    var stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).to.equal(3);
  });

  it("peek(): should return the top element", () => {
    var stack = new Stack();

    stack.push(9);
    stack.push(10);
    stack.push(11);

    expect(stack.peek()).to.equal(11);
  });

  it("isEmpty(): should return true if the stack is empty", function () {
    var stack = new Stack();
    expect(stack.isEmpty()).to.equal(true);
  });

  it("isEmpty(): should return false if the stack is not empty", function () {
    var stack = new Stack();
    stack.push(5);
    expect(stack.isEmpty()).to.equal(false);
  });

  it("printStack(): should print all elements in the stack (in order that they appear in the array of `items`) separated by a space in one string", () => {
    var stack = new Stack();
    stack.push("Hello");
    stack.push("Hola");
    stack.push("Bonjour");
    expect(stack.printStack()).to.equal("Hello Hola Bonjour");
  });
});

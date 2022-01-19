var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  Object.assign(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  let newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function (target) {
  // check if this node has the target value
  if (this.value === target) return true;
  // if not, does this have children
  if (this.children) {
    return this.children.some((childNode) => childNode.contains(target));
  }
  return false;
  // if yes, check the children
  // if no, return false
};
module.exports = Tree;

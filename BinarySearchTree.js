var BinarySearchTree = function (value) {
  //TODO: IMPLEMENT THE ABOVE METHODS ON THE BST CLASS

  let BST = {
    value,
    right: null,
    left: null,
    insert(newVal) {
      let direction = newVal > this.value ? "right" : "left";
      if (direction === "right") {
        if (this.right) this.right.insert(newVal);
        else this.right = BinarySearchTree(newVal);
        // IF newval is greater
        // Do we currently have a RIGHT, or is it still null?
        // IF WE HAVE A RIGHT, RECURSE
        // IF NO, add a new node to this BST at the RIGHT property
      } else {
        if (this.left) this.left.insert(newVal);
        else this.left = BinarySearchTree(newVal);
        // IF newval is less
        // Do we currently have a LEFT, or is it still null?
        // IF WE HAVE A LEFT, RECURSE
        // IF NO, add a new node to this BST at the LEFT property
      }
    },
    contains(target) {
      if (target === this.value) return true;
      if (target > this.value) {
        // handle checking the RIGHT stuff
        if (this.right) return this.right.contains(target);
        else return false;
      } else {
        // handle check the LEFT stuff
        if (this.left) return this.left.contains(target);
        else return false;
      }
    },
    depthFirstLog(callback) {
      callback(this.value);
      if (this.left) this.left.depthFirstLog(callback);
      if (this.right) this.right.depthFirstLog(callback);
    },
  };
  return BST;
};
module.exports = BinarySearchTree;

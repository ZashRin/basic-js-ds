const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.r = null;
  }

  root() {
    return this.r;
  }

  add(data) {
    if(this.r === null) this.r = new Node(data);
    else {
      let current = this.r;
      while(1) {
        if(data < current.data) {
          if(current.left === null) {
            current.left = new Node(data);
            return;
          }
          current = current.left;
        }
        else {
          if(current.right === null) {
            current.right = new Node(data);
            return;
          }
          current = current.right;
        }
      }
    }
  }

  has(data) {
    return this.find(data) !== null ? true : false;
  }

  find(data) {
    if(this.r === null) return null;
    let current = this.r;

    while(1) {
      if(current.data === data) return current;
      current = data < current.data ? current.left : current.right;
      if(current === null) return null;
    }
  }

  addPartTree(target, part) {
    while(target.right !== null) target = target.right;
    target.right = part;
  }

  remove(data) {
    if(!this.has(data)) return;
    let current = this.r;
    let previous = null;
    while(1) {
      if(current.data === data) {
        if(previous !== null) {
          if(previous.right === current) {
            previous.right = current.left === null ? current.right : current.left;
            if(current.left !== null && current.right !== null) this.addPartTree(current.left, current.right);
            current = null;
            return;
          }
          if(previous.left === current) {
            previous.left = current.left === null ? current.right : current.left;
            if(current.left !== null && current.right !== null) this.addPartTree(current.left, current.right);
            current = null;
            return;
          }  
        }
        this.addPartTree(current.left, current.right);
        this.r = current.left;
        current = null;
        return;
      }
      previous = current;
      current = data < current.data ? current.left : current.right;
    }
  }

  min() {
    if(this.r === null) return null;
    let min = this.r;
    while(min.left !== null) min = min.left;
    return min.data;
  }

  max() {
    if(this.r === null) return null;
    let max = this.r;
    while(max.right !== null) max = max.right;
    return max.data;
  }

}
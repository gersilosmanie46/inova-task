// File: ComplexCodeExample.js

/**
 * This is a complex JavaScript code example that demonstrates various advanced concepts and techniques.
 * It includes the implementation of a custom data structure, algorithms, and functional programming.
 */

// Custom Data Structure: LinkedList

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  addToTail(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  deleteFromHead() {
    if (!this.head) return null;
    const deletedNode = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return deletedNode.data;
  }
  
  // ... More LinkedList methods

  // Algorithm: Binary Search
  binarySearch(value, sortedArray) {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;

    while (startIndex <= endIndex) {
      const middleIndex = Math.floor((startIndex + endIndex) / 2);
      if (sortedArray[middleIndex] === value) {
        return middleIndex;
      } else if (sortedArray[middleIndex] < value) {
        startIndex = middleIndex + 1;
      } else {
        endIndex = middleIndex - 1;
      }
    }

    return -1;
  }

  // Functional Programming: Map, Filter, Reduce
  const array = [1, 2, 3, 4, 5];
  
  const mappedArray = array.map((value) => value * 2);
  const filteredArray = array.filter((value) => value % 2 === 0);
  const reducedValue = array.reduce((accumulator, value) => accumulator + value, 0);
}

// Usage Example:

const linkedList = new LinkedList();
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);
linkedList.addToTail(4);
linkedList.addToTail(5);

console.log(linkedList.deleteFromHead()); // Output: 1

const sortedArray = [1, 2, 3, 4, 5];
const binarySearchResult = linkedList.binarySearch(3, sortedArray);
console.log(binarySearchResult); // Output: 2

console.log(mappedArray); // Output: [2, 4, 6, 8, 10]
console.log(filteredArray); // Output: [2, 4]
console.log(reducedValue); // Output: 15
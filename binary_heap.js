

//----------------------- Removing
// we usually remove the max element from a max binary heap
// & remove the min element from a min binary heap

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();

  }

  bubbleUp() {
    let idx = this.values.length - 1
    const element = this.values[idx];


    while (idx > 0) {
      let parentIndx = Math.floor((idx - 1) / 2)
      let parent = this.values[parentIndx];
      if (element <= parent) break;
      this.values[parentIndx] = element;
      this.values[idx] = parent;
      idx = parentIndx;
    }
  }


  extractMax() {
    const max = this.values[0]
    const end = this.values.pop();
    if (this.values.length <= 0) {
      return;
    }
    this.values[0] = end;
    this.sinkDown();
    return max;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIndex = (2 * index) + 1;
      let rightChildIndex = (2 * index) + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild > element) || (swap != null && rightChild > leftChild)) {
          swap = rightChildIndex;
        }

      }
      if (swap === null)
        break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;

      // leftChild = this.values[leftChildIndex];
      // rightChild = this.values[rightChildIndex];

    }


  }


  // remove() {
  //   this.values.shift()
  //   let lastElement = this.values[this.values.length - 1];
  //   this.values.unshift(lastElement);
  //   this.values.pop()
  //   this.extractmax()
  // }

  // extractmax() {

  //   let index = 0;
  //   while (index < this.values.length-1) {
  //     let childIndex1 = (2 * index) + 1;
  //     let childIndex2 = (2 * index) + 2;

  //     if (this.values[childIndex1] <= this.values[index] && this.values[childIndex2] <= this.values[index]) {
  //       break;
  //     }

  //     if (this.values[childIndex1] > this.values[index]) {
  //       let parent = this.values[index]
  //       this.values[index] = this.values[childIndex1]
  //       this.values[childIndex1] = parent;
  //       index = childIndex1;
  //       // this.values[childIndex1] = this.values[]
  //     }
  //     if (this.values[childIndex2] > this.values[index]) {
  //       let parent = this.values[index]
  //       this.values[index] = this.values[childIndex2]
  //       this.values[childIndex2] = parent;
  //       index = childIndex2;
  //       // this.values[childIndex1] = this.values[]
  //     }
  //   }

  // }
}


let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(24);
heap.insert(10);
heap.insert(4);
heap.insert(1);
heap.insert(100);
heap.insert(24);

console.log(heap.values)
heap.extractMax()
console.log(heap.values)

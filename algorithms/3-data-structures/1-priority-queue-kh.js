//Array Solution
class PriorityQueue {
  constructor() {
    this.queue = []
  }

  insert(data, priority) {
    let index = 0;
    let ourObj = { data: data, priority: priority }

    while (index < this.queue.length && priority <= this.queue[index].priority) {
      index++
    }

    this.queue.splice(index, 0, ourObj)
  }

  peek() {
    return this.queue[0].data
  }

  popMax() {
    let prevHead = this.queue[0]
    this.queue.shift();
    return prevHead.data
  }
}

//Linked List Solution
class Task {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.head = null;
  }

  insert(data, priority) {
    let newTask = new Task(data, priority)

    if (!this.head || priority > this.head.priority) {
      newTask.next = this.head;
      this.head = newTask;
    } else {
      let currentTask = this.head;
      while (currentTask.next && priority <= currentTask.next.priority) {
        currentTask = currentTask.next;
      }

      newTask.next = currentTask.next;
      currentTask.next = newTask;
    }
  }

  peek() {
    return this.head.data
  }

  popMax() {
    let prevHead = this.head
    this.head = this.head.next;
    return prevHead.data
  }
}

//Binary Heap Solution
class PriorityQueue {
  constructor() {
    this.tasks = []; //Heaps are just specially-ordered arrays!
  }

  //Methods
  insert(data, priority) {
    this.tasks.push({ data, priority })
    this.bubbleUp()
  }

  peek() {
    return this.tasks[0].data
  }

  popMax() {
    let tempFirstTask = this.tasks[0]
    let tempLastTask = this.tasks[this.tasks.length - 1]

    this.tasks.shift();
    this.tasks.pop();
    this.tasks.unshift(tempLastTask);
    this.heapifyDown();
  }

  //Helper Functions
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2)
  }

  getChildrenIdx(idx) {
    return [idx * 2 + 1, idx * 2 + 2]
  }

  //Heaping up!
  bubbleUp() {
    let currentId = this.tasks.length - 1

    //stop at index of 1; if we've reached that point (or if there's only 1 item), no need to heap further
    while (currentId > 0) {
      let parentId = this.getParentIdx(currentId) //get parents

      //if the current child has a higher priority than the parent, swap them
      if (this.tasks[currentId].priority > this.tasks[parentId].priority) {
        [this.tasks[currentId], this.tasks[parentId]] = [this.tasks[parentId], this.tasks[currentId]]
      }

      //move through the heap from child to parent
      currentId = parentId
    }
  }

  //Heaping Down!
  heapifyDown() {
    //We need a current index (parent) and a comparing index that will be set based on the childrens' values.
    let currentIndex = 0;
    let comparingIndex;
    let length = this.tasks.length;
    //using our helper function to calculate the indeces of our child tasks
    let [left, right] = this.getChildrenIdx(currentIndex)

    //run a loop while left is less than the length of the task list (one item remaining)
    while (left < length) {
      //if there is a left child AND a right child, we have to compare them and set the current priority to the largest of the two
      if (right < length) {
        comparingIndex = this.tasks[left].priority >= this.tasks[right].priority ? left : right
      }
      //otherwise, the comparing index will be the left child by default
      else { comparingIndex = left }

      if (this.tasks[currentIndex].priority < this.tasks[comparingIndex].priority) {
        //if the current priority is larger than it's largest child, swap them
        [this.tasks[currentIndex], this.tasks[comparingIndex]] = [this.tasks[comparingIndex], this.tasks[currentIndex]]
        //update the index
        currentIndex = comparingIndex;
        //update the children
        [left, right] = this.getChildrenIdx(currentIndex)
      }
      else { return }
    }
  }
}

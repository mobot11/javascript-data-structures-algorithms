// // // //implement a stack
// // //
// // // //stacks are last in first out, have push, pop, peek, isEmpty, size, clear
// // //
// // //
// // // var Stack = function() {
// // //
// // //     let items = [];
// // //
// // //     this.push = function(element) {
// // //         items.push(element);
// // //     };
// // //     this.pop = function() {
// // //         return items.pop();
// // //     };
// // //     this.peek = function() {
// // //         return items[items.length-1];
// // //     };
// // //     this.isEmpty = function() {
// // //         return items.length === 0;
// // //     };
// // //     this.size = function() {
// // //         return items.length;
// // //     };
// // //     this.clear = function() {
// // //         items = [];
// // //     };
// // // };
// // //
// // // var minStack = new Stack();
// // //
// // // minStack.min = new Stack();
// // //
// // // minStack.push = function(element) {
// // //     items.push(element);
// // //     if (minStack.length === 0) {
// // //         minStack.push(element);
// // //     } else if (element < minStack.peek()) {
// // //
// // //     }
// // // };
// // //
// // // var stack = new Stack();
// // //
// // // stack.push(1);
// // // stack.push(3);
// // // stack.push(5);
// // //
// // //
// // //
// // //
// // // //create a queue
// // //
// // // let Queue = function() {
// // //     let items = [];
// // //
// // //     this.enqueue = function(element) {
// // //         items.push(element);
// // //     };
// // //
// // //     this.dequeue = function() {
// // //         return items.shift();
// // //     };
// // //
// // //     this.front = function() {
// // //         return items[0];
// // //     };
// // //
// // //     this.size = function() {
// // //         return items.length;
// // //     };
// // //
// // //     this.isEmpy = function() {
// // //         return items.length === 0;
// // //     };
// // //
// // //
// // // };
// // //
// // // // let priorityQueue = function() {
// // // //     let items = [];
// // // //
// // // //     this.enqueue = function(element, priority) {
// // // //         if(items.length === 0) {
// // // //             items.push(element,priority);
// // // //         } else {
// // // //             for (var i = 0; i < items.length; i ++) {
// // // //                 if (items[i+1] <)
// // // //             }
// // // //         }
// // // //     };
// // // //
// // // //     this.print = function() {
// // // //         return items.toString();
// // // //     };
// // // // };
// // //
// // // var priority = new priorityQueue();
// // //
// // // priority.enqueue(10,1);
// // //
// // // console.log(priority.print());
// //
// //
// // //merge sort
// //
// // //split the array into smaller ArrayList
// // var a = [34, 203, 745, 200, 984, 198, 764, 9];
// //
// // // function mergeSort(array) {
// // //
// // //     //if you have a single item, list is sorted
// // //     if (array.length < 2) {
// // //         return array;
// // //     }
// // //     //break list in half
// // //     var mid = array.length /2;
// // //     var left = array.slice(0, mid);
// // //     var right = array.slice(mid, array.length)
// // //     //repeat to get list of single element
// // //     return merge(mergeSort(left), mergeSort(right))
// // // }
// // //
// // // function merge(left, right) {
// // //     var result = [];
// // //
// // //     while(left.length && right.length) {
// // //         if(left[0] <= right[0]) {
// // //             result.push(left.shift());
// // //         } else {
// // //             result.push(right.shift())
// // //         }
// // //     }
// // //
// // //     while(left.length) {
// // //         result.push(left.shift());
// // //     }
// // //
// // //     while(right.length) {
// // //         result.push(right.shift())
// // //     }
// // //
// // //     return result;
// // // }
// // //
// // // console.log(mergeSort(a));
//
//
//
//
// //implement mergeSort for a binary search
//
// // function mergeSort(array) {
// //   //if array.length = 1, return array;
// //   if (array.length < 1) {
// //       return array;
// //   }
// //   let mid = array.length / 2;
// //   let left = array.slice(0, mid);
// //   let right = array.slice(mid, array.length);
// //   return merge(mergeSort(left), mergeSort(right));
// // }
// //
// // function merge(left, right) {
// //     var items =[];
// //     //while there are elements in both the left and right array
// //     while (left.length && right.length) {
// //         if (left[0] <= right[0]) {
// //             items.push(left.shift[0])
// //         } else {
// //             items.push(right.shift[0])
// //         }
// //     }
// //     while(left.length) {
// //         items.push(left.shift());
// //     }
// //     while (right.length) {
// //         items.push(right.shift());
// //     }
// //     return items;
// // }
//
// // implement a binary search agorithm
//
// // function mergeSort(array) {
// //     if (array.length < 2) {
// //         return array;
// //     }
// //
// //     let mid = array.length / 2;
// //     let left = array.slice(0, mid);
// //     let right = array.slice(mid, array.length);
// //
// //     merge(mergeSort(left) , mergeSort(right));
// // }
// //
// // function merge(left , right) {
// //     let items = []
// //     while(left.length && right.length) {
// //         if (left[0] <= right[0]) {
// //             items.push(left.shift());
// //         } else {
// //             items.push(right.shift());
// //         }
// //     }
// //
// //     while(left.length) {
// //         items.push(left.shift());
// //     }
// //
// //     while(right.length) {
// //         items.push(right.shift());
// //     }
// //
// //     return items;
// // }
//
//
// // function binarySearch(array, item) {
// //     var low = 0;
// //     var high = array.length -1;
// //     var mid;
// //     var element;
// //
// //     while (low <= high) {
// //         mid = Math.floor((low + high) / 2);
// //         element = array[mid];
// //     } if (element < item) {
// //         low = mid +1;
// //     } else if (element > item) {
// //         high = mid -1;
// //     } else {
// //         return mid;
// //     }
// //     return -1;
// // }
// //
// // function binary(array, item) {
// //     let low = 0;
// //     let high = array.length-1;
// //     let mid;
// //     let element;
// //     while (low < high) {
// //         // mid = middle index of array
// //         mid = Math.floor((low + high) / 2);
// //         //element === value at middle index
// //         element = array[mid];
// //         //if value at middle index is less than item
// //     } if (element < item) {
// //         //we know the item is higher than mid, so change low to mid + 1;
// //         low = mid + 1;
// //         //if the value is lower than the middle item, we can discard from mid to high
// //         //high = mid -1;
// //     } else if (element > item) {
// //         high = mid - 1;
// //         //else we found the element
// //     } else {
// //         return mid;
// //     }
// //     //or it doesn't exist
// //     return -1;
// // }
//
//
// //implement a binary search function
//
// function mergeSort(array) {
//     if (array.length < 2) {
//         return array;
//     }
//     let mid = Math.floor(array.length / 2);
//     let left = array.slice(0, mid);
//     let right = array.slice(mid, array.length);
//
//     return merge(mergeSort(left), mergeSort(right));
// }
//
// function merge(left, right) {
//     let items = [];
//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             items.push(left.shift());
//         } else {
//             items.push(right.shift());
//         }
//     }
//
//     while(left.length) {
//         items.push(left.shift());
//     }
//     while(right.length) {
//         items.push(right.shift());
//     }
//     return items;
// }
//
// function binarySearch(array, item) {
//     let low = 0;
//     let high = array.length -1;
//     let mid;
//     let element;
//     while(low < high) {
//         mid = ((low + high) >> 1);
//         element = array[mid];
//      if (element < item) {
//         low = mid + 1;
//     } else if (element > item) {
//         high = mid -1;
//     } else {
//         return mid;
//     }
//     }
//     return -1;
// }
//
// var a = [34, 203, 745, 200, 984, 198, 764, 9];
//
// var sorted = mergeSort(a);
//
// console.log(mergeSort(sorted));
//
// console.log(binarySearch(sorted, 200));
//
// console.log(binarySearch((sorted, 1000)));
//
// function nodeTraversal(node) {
//     let current = node;
//     if (node === null) {
//         return null;
//     }
//     while (node.next) {
//         numString += current.value.toString();
//     }
//     return value;
// }
//
// function addStrings(string1, string2) {
//     if (typeof string1 !== 'string' && typeof string2 !== 'string'){
//         return null
//     }
//     return Number(string1) + Number(string2);
// }
//
// console.log(addStrings('123', '456'));
//
// function uniqueNoExtra(string) {
//     for (var i = 0; i < string.length-1; i++) {
//         if(string.charAt(i) != string.charAt(i + 1)) {
//             continue;
//         } else {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(uniqueNoExtra('hello'));
// console.log(uniqueNoExtra('world'));
//
// function isPermutation(string1, string2) {
//     if (string1.length !== string2.length) {
//         return false;
//     }
//     return string1.split("").sort().join() === string2.split("").sort().join();
//
// }
//
//
// console.log(isPermutation('abc', 'cab'));
// console.log(isPermutation('abc', 'def'));
//
//
//
// // implement a binary search
//
// function mergeSort(array) {
//     if (array.length < 2) {
//         return array;
//     }
//     var mid = Math.floor(array.length / 2);
//     var left = array.split(0, mid);
//     var right = array.split(mid, array.length);
//
//     merge(mergeSort(left), mergeSort(right));
// }
//
// function merge(left, right) {
//     var items = [];
//     while(left.length && right.length) {
//         if(left[0] <= right[0]) {
//             items.push(left.shift());
//         } else {
//             items.push(right.shift());
//         }
//     }
//     while(left.length) {
//         items.push(left.shift());
//     }
//     while(right.length) {
//         items.push(right.shift());
//     }
//     return items;
// }
//
// function binarySearch(array,value) {
//     if(array.length === 1) {
//         return array;
//     }
//     var low = 0;
//     var high = array.length-1;
//     var mid;
//     var element;
//     while(low < high) {
//         mid = array.length >> 1;
//         element = array[mid];
//         if(element < value) {
//             low = mid + 1;
//         }
//         if(element > value) {
//             high = mid -1;
//         } else {
//             return mid;
//         }
//         return -1;
//     }
// }
//
// //im just here so I wont get fined
//
// //
//
// var BinaryTree = function() {
//     var Node = function(element) {
//         this.left = null;
//         this.right = null;
//         this.element = element;
//     }
//
//     var root = null;
// }
//
//
//
// //code a doubly linked list
//
// var Node = function(data) {
//     this.data = data;
//     this.next = null;
//     this.prev = null;
// }
//
// var DoublyLinkedList = function() {
//     this.length = 0;
//     this.head = null;
//     this.tail = null;
// }
//
// DoublyLinkedList.prototype.add = function(data) {
//     var node = new Node(data);
//     if (this.length === 0) {
//         this.head = node;
//         this.tail = node;
//     } else {
//         this.tail.next = node;
//         node.prev = this.tail;
//         this.tail = node;
//     }
//     this.length ++;
//     return true;
// }
//
// DoublyLinkedList.prototype.remove = function(position){
//     var node = this.head;
//     //break conditions, if position < = 0 or postion > list .length
//     if (position <=0 || position > this.length) {
//         return 'you fucked up';
//     }
//     if (position === 1) {
//         node = node.next;
//
//     if (head.next) {
//         this.tail = null;
//     } else {
//         this.tail = node;
//     }
//     }
//     else if (position === this.length) {
//         this.tail = this.tail.previous;
//         this.tail.next = null;
//     } else {
//         while (count < position) {
//             node = node.next;
//             count++;
//         }
//         prev = node.previous;
//         curr = node.next;
//         curr.prev = prev;
//         prev.next = curr;
//     }
//
//     this.length --;
//     return true;
// }
//  DoublyLinkedList.search = function(position) {
//      let node = this.head;
//      var count = 0;
//      if (position <= 0 || position > this.length) {
//          return 'you fucked up'
//      }
//
//      while(count < position) {
//          node = node.next;
//          count ++
//      }
//
//      return node;
//
//  }

function doSearch(array, key) {
    var lo = 0,
        hi = array.length - 1,
        mid,
        element;
    while (lo <= hi) {
        mid = ((lo + hi) >> 1);
        element = array[mid];
        if (element < key) {
            lo = mid + 1;
        } else if (element > key) {
            hi = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

 var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

console.log(doSearch(primes, 73));

//code an iterative factorial function

// function factorial (number) {
//     let firstFactorial = number -1,
//     result = number;
//
//     for (var i = firstFactorial; i > 0; i --) {
//         result = result * firstFactorial;
//         firstFactorial --;
//     }
//     return result;
// }

// console.log(factorial(5));

var factorial = function(n) {
	// base case:
	if (n === 0) {
	    return 1;
	}
	// recursive case:
    else {
        return (num * factorial(n-1));
    }
};

function recursiveIsPalendrome(string) {
    var characters = string.split("");
    firstLetter = characters.shift();
    lastLetter = characters.pop();

    if (firstLetter != lastLetter) {
        return false;
    }
    if (characters.length < 2) {
        return true;
    }
    return recursiveIsPalendrome(string.join(''));
}

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid, array.length);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var items = [];
    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            items.push(left.shift());
        } else {
            items.push(right.shift());
        }
    }
    while(left.length) {
        items.push(left.shift());
    }
    while(right.length) {
        items.push(right.shift());
    }
    return items;
}

var unsorted = [10,5,20,6,39,6];

// create a binary tree algorithm

var BinaryTree = function() {
    this.root = null;
}

var TreeNode = function(element) {
    this.key = element;
    this.left = null;
    this.right = null;
}

BinaryTree.prototype.add = function(key) {
    let curr = this.root;
    let newNode = TreeNode(key);

    if (curr === null ) {
        curr = newNode;
    } else {
        placeNode(newNode, curr);
    }
}

function placeNode(node, root) {
    let curr = root;
    if (node.key < curr.key) {
        if(curr.left === null) {
            curr.left = node;
        } else {
            placeNode(node,curr.left);
        }
    } else if (node.key > curr.key) {
        if(curr.right === null) {
            curr.right = node;
        } else {
            placeNode(node, curr.right)
        }
    }
    return node;
}

BinaryTree.search = function(key) {
    var curr = this.root;
    if (curr.key === key) {
        return true;
    } else {
    searchTree(curr, key);
  }
}

function searchTree(node, key) {
    if (node === null) {
        return false;
    } else if (node.value < key) {
        searchTree(node.left, key);
    } else if (node.value > key) {
        searchTree(node.right, key);
    } else {
        return key;
    }
}

var inOrderTraverse = function(root) {
    var curr = root;
    var count = 0;
    if (curr === null) {
        return;
    } else{
        inOrderTraverse(curr.left);
        inOrderTraverse(curr);
        inOrderTraverse(curr.right);
    }
}

//add all values in a binary tree

function addKeys(root, counter) {
    var node = root;
    counter = 0;
    if (root === null) {
        return;
    }
    else {
        addKeys(node.left, counter);
        counter += node.value;
        addKeys(node.right,counter);
    }
    return counter;
}

//find size of binary tree using post order traversal

function findSize(root, size) {
    var curr = root;
    if (curr === null) {
        return;
    } else {
        findSize(curr.right, size);
        findSize(curr.left, size);
        size++;

    }
    return size;
}








//

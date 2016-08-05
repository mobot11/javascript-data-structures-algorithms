// // //implement a stack
// //
// // //stacks are last in first out, have push, pop, peek, isEmpty, size, clear
// //
// //
// // var Stack = function() {
// //
// //     let items = [];
// //
// //     this.push = function(element) {
// //         items.push(element);
// //     };
// //     this.pop = function() {
// //         return items.pop();
// //     };
// //     this.peek = function() {
// //         return items[items.length-1];
// //     };
// //     this.isEmpty = function() {
// //         return items.length === 0;
// //     };
// //     this.size = function() {
// //         return items.length;
// //     };
// //     this.clear = function() {
// //         items = [];
// //     };
// // };
// //
// // var minStack = new Stack();
// //
// // minStack.min = new Stack();
// //
// // minStack.push = function(element) {
// //     items.push(element);
// //     if (minStack.length === 0) {
// //         minStack.push(element);
// //     } else if (element < minStack.peek()) {
// //
// //     }
// // };
// //
// // var stack = new Stack();
// //
// // stack.push(1);
// // stack.push(3);
// // stack.push(5);
// //
// //
// //
// //
// // //create a queue
// //
// // let Queue = function() {
// //     let items = [];
// //
// //     this.enqueue = function(element) {
// //         items.push(element);
// //     };
// //
// //     this.dequeue = function() {
// //         return items.shift();
// //     };
// //
// //     this.front = function() {
// //         return items[0];
// //     };
// //
// //     this.size = function() {
// //         return items.length;
// //     };
// //
// //     this.isEmpy = function() {
// //         return items.length === 0;
// //     };
// //
// //
// // };
// //
// // // let priorityQueue = function() {
// // //     let items = [];
// // //
// // //     this.enqueue = function(element, priority) {
// // //         if(items.length === 0) {
// // //             items.push(element,priority);
// // //         } else {
// // //             for (var i = 0; i < items.length; i ++) {
// // //                 if (items[i+1] <)
// // //             }
// // //         }
// // //     };
// // //
// // //     this.print = function() {
// // //         return items.toString();
// // //     };
// // // };
// //
// // var priority = new priorityQueue();
// //
// // priority.enqueue(10,1);
// //
// // console.log(priority.print());
//
//
// //merge sort
//
// //split the array into smaller ArrayList
// var a = [34, 203, 745, 200, 984, 198, 764, 9];
//
// // function mergeSort(array) {
// //
// //     //if you have a single item, list is sorted
// //     if (array.length < 2) {
// //         return array;
// //     }
// //     //break list in half
// //     var mid = array.length /2;
// //     var left = array.slice(0, mid);
// //     var right = array.slice(mid, array.length)
// //     //repeat to get list of single element
// //     return merge(mergeSort(left), mergeSort(right))
// // }
// //
// // function merge(left, right) {
// //     var result = [];
// //
// //     while(left.length && right.length) {
// //         if(left[0] <= right[0]) {
// //             result.push(left.shift());
// //         } else {
// //             result.push(right.shift())
// //         }
// //     }
// //
// //     while(left.length) {
// //         result.push(left.shift());
// //     }
// //
// //     while(right.length) {
// //         result.push(right.shift())
// //     }
// //
// //     return result;
// // }
// //
// // console.log(mergeSort(a));




//implement mergeSort for a binary search

// function mergeSort(array) {
//   //if array.length = 1, return array;
//   if (array.length < 1) {
//       return array;
//   }
//   let mid = array.length / 2;
//   let left = array.slice(0, mid);
//   let right = array.slice(mid, array.length);
//   return merge(mergeSort(left), mergeSort(right));
// }
//
// function merge(left, right) {
//     var items =[];
//     //while there are elements in both the left and right array
//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             items.push(left.shift[0])
//         } else {
//             items.push(right.shift[0])
//         }
//     }
//     while(left.length) {
//         items.push(left.shift());
//     }
//     while (right.length) {
//         items.push(right.shift());
//     }
//     return items;
// }

// implement a binary search agorithm

// function mergeSort(array) {
//     if (array.length < 2) {
//         return array;
//     }
//
//     let mid = array.length / 2;
//     let left = array.slice(0, mid);
//     let right = array.slice(mid, array.length);
//
//     merge(mergeSort(left) , mergeSort(right));
// }
//
// function merge(left , right) {
//     let items = []
//     while(left.length && right.length) {
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
//
//     while(right.length) {
//         items.push(right.shift());
//     }
//
//     return items;
// }


// function binarySearch(array, item) {
//     var low = 0;
//     var high = array.length -1;
//     var mid;
//     var element;
//
//     while (low <= high) {
//         mid = Math.floor((low + high) / 2);
//         element = array[mid];
//     } if (element < item) {
//         low = mid +1;
//     } else if (element > item) {
//         high = mid -1;
//     } else {
//         return mid;
//     }
//     return -1;
// }
//
// function binary(array, item) {
//     let low = 0;
//     let high = array.length-1;
//     let mid;
//     let element;
//     while (low < high) {
//         // mid = middle index of array
//         mid = Math.floor((low + high) / 2);
//         //element === value at middle index
//         element = array[mid];
//         //if value at middle index is less than item
//     } if (element < item) {
//         //we know the item is higher than mid, so change low to mid + 1;
//         low = mid + 1;
//         //if the value is lower than the middle item, we can discard from mid to high
//         //high = mid -1;
//     } else if (element > item) {
//         high = mid - 1;
//         //else we found the element
//     } else {
//         return mid;
//     }
//     //or it doesn't exist
//     return -1;
// }


//implement a binary search function

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
    let items = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
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

function binarySearch(array, item) {
    let low = 0;
    let high = array.length -1;
    let mid;
    let element;
    while(low < high) {
        mid = ((low + high) >> 1);
        element = array[mid];
     if (element < item) {
        low = mid + 1;
    } else if (element > item) {
        high = mid -1;
    } else {
        return mid;
    }
    }
    return -1;
}

var a = [34, 203, 745, 200, 984, 198, 764, 9];

var sorted = mergeSort(a);

console.log(mergeSort(sorted));

console.log(binarySearch(sorted, 200));

console.log(binarySearch((sorted, 1000)));

function nodeTraversal(node) {
    let current = node;
    if (node === null) {
        return null;
    }
    while (node.next) {
        numString += current.value.toString();
    }
    return value;
}

function addStrings(string1, string2) {
    if (typeof string1 !== 'string' && typeof string2 !== 'string'){
        return null
    }
    return Number(string1) + Number(string2);
}

console.log(addStrings('123', '456'));

function uniqueNoExtra(string) {
    for (var i = 0; i < string.length-1; i++) {
        if(string.charAt(i) != string.charAt(i + 1)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

console.log(uniqueNoExtra('hello'));
console.log(uniqueNoExtra('world'));

function isPermutation(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    return string1.split("").sort().join() === string2.split("").sort().join();

}


console.log(isPermutation('abc', 'cab'));
console.log(isPermutation('abc', 'def'));

//

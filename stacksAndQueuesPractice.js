(function() {

//how can you use a single array to implement three stacks?

//sort a stack such that the smallest elements are at the top
function sortStack(stack) {
    var temp = new Stack();
    var greaterThan = new Stack();
    temp.push(stack.pop());
    while (!stack.isEmpty()) {
        if (temp.peek() <= stack.peek()) {
            temp.push(stack.pop());
        } else if(temp.peek() > stack.peek()) {
            while(temp.peek() > stack.peek()) {
                greaterThan.push(temp.pop());
            }
            temp.push(stack.pop());
            while(!empty(greaterThan)) {
                temp.push(greaterThan.pop());
            }
        }
    }
    return temp;

}

//given a sorted, increasing order array with unique integer elements, write an algorithm to create a binary search tree with minimal height

function createTree(array) {

    var Node = function(element) {
        this.key = element;
        this.left = null;
        this.right = null;
    }

    var mid = Math.floor(array.length / 2);

    var curr = new Node(array[mid]);

    if (head === null) {
        head = curr;
    }

    var left = array.slice(0,mid);
    var right = array.slice(mid+1, array.length);

    place(left, head);
    place(right, head);

}

function place(array, node) {
    if (array.length === 0 && array[0] < node.value) {
        node.left = new Node(array[0]);
        return;
    }
    if (array.length === 0 && array[0] > node.value) {
        node.right = new Node(array[0]);
        return;
    } else {
        var mid = Math.floor(array.length / 2);
        if (array[mid] < node.value) {
            node.left = new Node(array[mid]);
        }
        if (array[mid] > node.value) {
            node.right = new Node(array[mid]);
        }
        var left = array.slice(0, mid);
        var right = array.slice(mid+1, array.length);
        place(left, node.left);
        place(right, node.right);
    }
}

//you are given two sorted arrays, a and bwrite a method to merge b into a in sorted order

function mergeSortedArrays(array1, array2) {
    var temp = [];
    if (!array1.length && !array2.length) {
        return 'error, provide valid arrays'
    }
    if (array1.length && !array2.length) {
        return array1;
    }

    if (array2.length && !array1.length) {
        return array2;
    }

    while (array1.length && array2.length) {
        if (array1[0] <= array2[0]) {
            temp.push(array1.shift());
        } else {
            temp.push(array2.shift());
        }
    }

    while (array1.length) {
        temp.push(array1.shift());
    }
    while (array2.length) {
        temp.push(array2.shift())
    }
    return temp;
}

console.log(mergeSortedArrays([1,50,70,100], [1,2,3,50,55]));

function searchInRotatedArray(array, value) {
    if (array.length === 0) {
        return 'please provide valid array';
    }

    if (array[0] < array[array.length-1]) {
        return 'array is already sorted';
    }

    var pivot = findPivot(array);

    function findPivot(array) {
        var mid = Math.floor(array.length / 2);
    }
}












} ());
//

//place a key in a binary tree


var BinaryTree = function() {
    var root = null;

    var TreeNode = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    function addNode(treeNode, root) {
        var node = treeNode;
        var curr = root;
        if (curr === null) {
            return;
        } else {
            if (node.key < curr.key) {
                if (curr.left === null) {
                    curr.left = node;
                } else {
                    addNode(node, curr.left);
                }
            } else if (node.key > curr.key) {
                if (curr.right === null) {
                    curr.right = node;
                } else {
                    addNode(node, curr.right);
                }
            }
        }
    }



    this.add = function(key) {
        let curr = new TreeNode(key);
        if (root === null) {
            root = curr;
            return;
        } else {
            addNode(curr, root);
        }
    }

    this.inOrderTraverse = function(callback) {
        treeInOrderTraverse(root, callback);
    }

    var treeInOrderTraverse = function(root, callback) {
        var node = root;
        if (node === null) {
            return;
        } else {
            treeInOrderTraverse(node.left, callback);
            callback(node);
            treeInOrderTraverse(node.right, callback);
        }

    }

    this.toArray = function() {
        var result = [];
        this.inOrderTraverse(function(node) {
            result.push(node.key);
        });
        return result;
    }

    this.total = function() {
        var keyArray = this.toArray();
        return keyArray.reduce(function(a, b) {
            return a + b;
        });
    }

    this.min = function() {
        return minimum(root);
    }

    var minimum = function(root) {
        var node = root;
        console.log(node);
        if (!node) {
            return 0;
        }
        if (node.left) {
            return minimum(node.left);
        }
        return node.key;
    }

    this.max = function() {
        return maximum(root);
    }

    function maximum(root) {
        var node = root;
        if (!node) {
            return 0;
        }
        if (node.right) {
            return minimum(node.right);
        }
        return node.key;
    }

    this.height = function() {
        return treeHeight(root);
    }

    function treeHeight(root) {
        var node = root;
        if (!node) {
            return -1;
        }
        var leftHeight = treeHeight(node.left);
        var rightHeight = treeHeight(node.right);
        console.log('left height ' + leftHeight);
        console.log('right height ' + rightHeight);

        return Math.max(leftHeight, rightHeight) + 1;
    }

}
var tree = new BinaryTree();

var treeArray = [10, 5, 20, 4, 30, 2, 40, 1];

treeArray.forEach(function(num) {
    tree.add(num);
});
console.log(tree);

function printNode(value) {
    console.log(value);
}

console.log(tree.inOrderTraverse(printNode));
console.log(tree.toArray());
console.log(tree.total());
console.log(tree.min());
console.log(tree.max());
console.log(tree.height());

//find element in a sorted, rotated array

//find the pivot

function rotatedBinarySearch(array, num) {
    //find index of pivot element
    //apply binary search on subarray
    //if num lies between start element and element at pivot -1 position, then find num in array using binary serach
    //else if num lies between pivot and last element, find num in array pivot
    // if array[0] <= array[array.length-1], array is not rotated, so return zero
    if (array === null || array.length === 0) {
        return -1;
    }
    if(array[0] === num) {
        return 0;
    }
    if (array[array.length-1] === num) {
        return array.length-1;
    }
    var pivot = findPivot(array);
    //if num is greater than value at smallest index and smaller than value at pivot -1
    if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
        return binarySearch(array, 0, pivot - 1, num);
    } else {
        return binarySearch(array, pivot, array.length - 1, num);
    }

    function findPivot(array) {
        if (array === null || array.length === 0) {
            return -1;
        }

        if (array.length === 1 || array[0] < array[array.length -1]) {
            return 0;
        }

        var start = 0, end = array.length -1;
        while (start <= end) {
            var mid = Math.floor((start + end) / 2);
            if(array[mid] > array[mid+1]) {
                return mid + 1;
            } else if (array[start] <= array[mid]) {
                start = mid +1;
            } else {
                end = mid - 1;
            }
        }
        return 0;
    }

    function binarySearch(array, start, end, num) {
        if (array === null || array.length === 0) {
            return -1;
        }
        if (start > end || start < 0 || end >= array.length) {
            return('invalid arguments for start and end');
        }

        if (num < array[start] || num > array[end]) {
            return -1;
        }

        while (start < end) {
            mid = Math.floor((start+end) / 2);
            if (array[mid] === num) {
                return mid;
            } else if (num < array[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return - 1;
    }

}

var array = [156, 235, 457, 21, 32, 43, 74, 75, 86, 97, 108, 149];

console.log(rotatedBinarySearch(array, 75));
console.log(rotatedBinarySearch(array, 156));
console.log(rotatedBinarySearch(array, 149));







//

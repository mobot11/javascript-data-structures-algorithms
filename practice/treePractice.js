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
    console.log( 'left height ' + leftHeight);
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









//

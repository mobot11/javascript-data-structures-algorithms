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
                if(curr.left === null) {
                    curr.left = node;
                } else {
                    addNode(node, curr.left);
                }
            } else if (node.key > curr.key) {
                if(curr.right === null) {
                    curr.right = node;
                } else {
                    addNode(node,curr.right);
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

var treeInOrderTraverse = function(root,callback) {
    var node = root;
    if (node === null) {
        return;
    } else {
        treeInOrderTraverse(node.left, callback);
        callback(node);
        treeInOrderTraverse(node.right,callback);
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

}
var tree = new BinaryTree();

var treeArray = [10,5,20,4,30,2,40,1];

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

















//

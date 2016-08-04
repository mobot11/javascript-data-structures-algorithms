(function() {
    //each node has a parent and zero or more children except for the top node

    //top node is called the root

    //internal node has as least one child
    //node without children is external node or leaf

    //node can have ancestors and descendants, ancestors are parent, grandparent, etc. decendants are child, grandchild, etc

    //subtree consits of a node and its decendants

    //node in a binary tree has at most two children

    //binary search tree is a binary tree, but it only allows you to store nodes with lesser values on the left side and nodes with greater values on the right side


    function BinarySearchTree() {
        //nodes are called edges in tree terminology

        //key is how a treen node is known in tree terminology

        var insertNode = function(node, newNode) {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        };

        var Node = function(key) {
            this.key = key;
            this.left = null;
            this.right = null;
        };
        var root = null;

        this.insert = function(key) {
            var newNode = new Node(key);
            if (root === null) {
                root = newNode;
            } else {
                insertNode(root, newNode);
            }
        };
        // visits all the node of a binary search tree in ascending order
        //visits the nodes from smallest to largest

        this.inOrderTraverse= function(callback) {
            inOrderTraverseNode(root, callback);
        };

        var inOrderTraverseNode = function(node, callback) {
            if (node === null) {
                return;
            }
            else {
                inOrderTraverseNode(node.left, callback);

                callback(node.key);

                inOrderTraverseNode(node.right, callback);
            }
        };

        this.preOrderTraverse = function(callback) {
            preOrderTraverseNode(root,callback);
        }

        function preOrderTraverseNode(node, callback) {
            if (node === null) {
                return;
            } else {
                callback(node.key);
                preOrderTraverseNode(node.left, callback);
                preOrderTraverseNode(node.right, callback);
            }
        }

        this.postOrderTraverse = function(callback) {
            postOrderTraverseNode(root, callback);
        }

        function postOrderTraverseNode(node, callback) {
            if (node === null) {
                return;
            } else {
                postOrderTraverse(node.left, callback);
                postOrderTraverse(node.right, callback);
                callback(node.key);
            }
        }

        this.min = function() {
            return minNode(root);
        };

        function minNode(node) {
            if (node) {
                while (node && node.left !== null) {
                    node = node.left;
                }
                return node.key;
            }
            return null;
        }

        this.max = function() {
            return maxNode(root);
        }

        function maxNode(node) {
            if (node) {
                while(node && node.right !== null) {
                    node = node.right;
                }
                return node.key;
            }
            return null;
        }

        this.search = function(key) {
            return searchNode(root, key);
        }

        var searchNode = function(node, key) {
            if (node === null) {
                return false;
            }
            if (key < node.key) {
                return searchNode(node.left, key);
            } else if (key > node.key) {
                return searchNode(node.right, key);
            } else {
                return true;
            }
        };

        this.remove = function(key) {
            root = removeNode(root, key);
        };

        var removeNode = function(node, key) {
            if (node === null) {
                return null;
            }
            if (key < node.key) {
                node.left = removeNode(node.left, key);

                return node;
            } else if (key > node.key) {
                node.right = removeNode(node.right, key);

                return node;
                //key ==== node.key whew we made it
            } else {
                //remove leaf node
                if (node.left === null && node.right === null) {
                    node = null;
                    return node;
                }
                // remove node with only one child
                if (node.left === null) {
                    node = node.right;
                    return node;
                } else if (node.right === null) {
                    node = node.left;
                    return node;
                }
                //remove node with two children
                var aux = findMinNode(node.right);
                node.key = aux.key;
                node.right = removeNode(node.right, aux.key);
                return node;
            }
        }

    }


    var tree = new BinarySearchTree();

    tree.insert(7);
    tree.insert(15);
    tree.insert(5);
    tree.insert(3);
    tree.insert(9);
    tree.insert(8);
    tree.insert(10);
    tree.insert(13);
    tree.insert(12);
    tree.insert(14);
    tree.insert(20);
    tree.insert(18);
    tree.insert(25);

    tree.insert(6);

function printNode(value) {
    console.log(value);
}

tree.inOrderTraverse(printNode);




})('use strict');

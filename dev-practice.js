(function() {
// Given an unsorted array of integers, output an array containing the numbers in the original array that appear an odd number of times. What is the runtime of your process?

let test = [1,4,4,6,7,8,6,6,7,8,9];
let test2 = [1,1,2,2,3,3,4,4];
let validString = '((helel(())wowowow))';
let nonvalidString = '(nnn(ggg(fff)tt)';


function outputOdd(array) {
    let newArray = [];
    let dataStore = {};
    for (let i = 0; i < array.length; i ++)  {
        if(! dataStore.hasOwnProperty(array[i])) {
            dataStore[array[i]] = 1;
        } else if (dataStore.hasOwnProperty(array[i])) {
            dataStore[array[i]] += 1;
        }
    }
    for (let key in dataStore) {
        if (dataStore.hasOwnProperty(key)) {
            if (dataStore[key] % 2 !== 0) {
                newArray.push(key);
            }
        }
    }
    if (newArray.length === 0) {
        return null;
    }
    return newArray;
}

console.log(outputOdd(test));
console.log(outputOdd(test2));

let Stack = function() {
    this.dataStore = [];
}

Stack.prototype.push = function(value) {
    this.dataStore.push(value);
}

Stack.prototype.pop = function() {
    return this.dataStore.pop();
}

Stack.prototype.peek = function() {
    return this.dataStore[dataStore.length -1];
}

Stack.prototype.size = function() {
    return this.dataStore.length;
}

Stack.prototype.isEmpty = function() {
    return this.dataStore.length === 0;
}

var stack = new Stack();

stack.push(10);

stack.push(20);

console.log(stack.dataStore);


function validParens(string) {
    let parensStack = new Stack();
    let stringArray = string.split("");
    for (var i = 0; i < stringArray.length; i ++) {
        if (stringArray[i] ==='(') {
            parensStack.push(stringArray[i]);
        }
        if (stringArray[i] === ')') {
            parensStack.pop();
        }
    }
    return parensStack.size() === 0;
}

console.log(validParens(validString));
console.log(validParens(nonvalidString));

//rotate an array
// function rotateArray(arr, positions) {
//     if(isNaN(order) || order < 0) {
//         return null
//     }
//     if (arr.length === 0) {
//         return null;
//     }
//     //find the number of positions to move, which will either be positions or the result of the remainder of positions / arr.length
//     positions = positions % arr.length;
//
//     //find length of segment that will not change
//     let segLength = arr.length - positions;
//
//
// }

var shiftThis = [1,2,3,4,5];


// console.log(rotateArray(shiftThis, 7));

// Given two linked lists. Each linked list represents a   number where each node in the linked list contains an integer digit of that number. E.g. the linked list 1->2->3 represents the number 123. Add the numbers represented by the two linked lists.

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


console.log(addStrings('123', '456'))

//Find the top 1000 most frequent words in a text file, with better than O(nlogn) complexity, tree traversal problem.

var textFile = '';

textFile.replace('some regex to remove punctionation and spaces');

var stringArray = string.split(" ");

var wordHunter = function(stringArray) {
    this.dataStore = {};
    stringArray.forEach(function(word) {
        if (!dataStore.hasOwnProperty(word)) {
            dataStore[word] = 1;
        } else if (dataStore.hasOwnProperty(word)) {
            dataStore[word] += 1;
        }
    });


};

//bubble sort

// function bubleSort(array) {
//     let test = true;
//     let count = 0;
//
// }


// Code an iterator that returns the in-order traversal of a binary tree.

function treeTraversal(root, callback) {
    let node = head;
    if (node === null) {
        return;
    }
    treeTraversal(node.left);
    treeTraversal(tree);
    treeTraversal(tree.right);
}

treeTraversal(root, console.log(node.value));

// 2.find a value in a rotated array

// Explain and implement a serialization of a binary tree.

/**
2  * Definition for a binary tree node.
3  * function TreeNode(val) {
4  *     this.val = val;
5  *     this.left = this.right = null;
6  * }
7  */
// 8 /**
// 9  * Encodes a tree to a single string.
// 10  *
// 11  * @param {TreeNode} root
// 12  * @return {string}
// 13  */
// 14 var serialize = function(root) {
// 15     var res = "";
// 16     LDR(root);
// 17     if(res[0] === '#'){
// 18         res = res.substring(1);
// 19     }
// 20     return res;
// 21
// 22     function LDR(node){
// 23         if(node !== null && node.val !== undefined){
// 24             res += "#" + node.val;
// 25             if(node.left !== null){
// 26                 LDR(node.left);
// 27             }else{
// 28                 res += "#N";
// 29             }
// 30             if(node.right !== null){
// 31                 LDR(node.right);
// 32             }else{
// 33                 res += "#N";
// 34             }
// 35         }
// 36     }
// 37 };
// 38
// 39 /**
// 40  * Decodes your encoded data to tree.
// 41  *
// 42  * @param {string} data
// 43  * @return {TreeNode}
// 44  */
// 45 var deserialize = function(data) {
// 46     var nodes = data.split('#');
// 47     return LDR(0).node;
// 48
// 49     function LDR(i){
// 50         if(nodes[i] !== undefined && nodes[i] !== "" && nodes[i] !== 'N'){
// 51             var root = new TreeNode(parseInt(nodes[i]));
// 52             i++;
// 53             var res = LDR(i);
// 54             i = res.i;
// 55             root.left = res.node;
// 56             res = LDR(i);
// 57             i = res.i;
// 58             root.right = res.node;
// 59             return {node : root, i : i};
// 60         }else{
// 61             return {node : null, i : ++i};
// 62         }
// 63     }
// 64 };

//return boolean if string is palendrome

// function isPalendrome(string) {
//
// }


//return if a string is all unique characters

function unique(string) {
    var dataStore = {};
    var stringArray = string.split("");

    stringArray.forEach(function(character) {
        var check = true;
        if(!dataStore.hasOwnProperty(character)) {
            dataStore[key] = 1;
        } else {
            check = false;
            return check;
        }
        return check;
    });
}

//without extra datastructures

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


})('use strict');

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
function rotateArray(arr, positions) {
    if(isNaN(order) || order < 0) {
        return null
    }
    if (arr.length === 0) {
        return null;
    }
    //find the number of positions to move, which will either be positions or the result of the remainder of positions / arr.length
    positions = positions % arr.length;

    //find length of segment that will not change
    let segLength = arr.length - positions;


}

var shiftThis = [1,2,3,4,5];


console.log(rotateArray(shiftThis, 7));

// Given two linked lists. Each linked list represents a   number where each node in the linked list contains an integer digit of that number. E.g. the linked list 1->2->3 represents the number 123. Add the numbers represented by the two linked lists.

//Find the top 1000 most frequent words in a text file, with better than O(nlogn) complexity, tree traversal problem.

// Code an iterator that returns the in-order traversal of a binary tree.

// 2.find a value in a rotated array

// Explain and implement a serialization of a binary tree.



})('use strict');

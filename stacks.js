(function() {

function Stack() {
    //need a data structure to store elements in a stack
    //in js, we will use an array
    var items = [];
    //need a way to push(element or elements) an element onto end of array,
    //pop() element off end of array,
    //peek() which returns the top element of a stack, element is not removed just returned for information purposes
    //

    //implement push method
    this.push = function(element) {
        items.push(element);
    };

    this.pop = function() {
        return items.pop();
    };

    this.peek = function() {
    return items[items.length-1];
    };

    this.isEmpty = function() {
        return items.length === 0;
    };

    this.size = function() {
    return items.length;
    };

    this.clear = function() {
        items = [];
    };

    this.print = function() {
        console.log(items.toString());
    };
}

var stack = new Stack();

//to turn a number to binary, divide number by 2 until the division result is zero

function divideBy2(decNumber, base) {
    var remStack = new Stack();
    var rem = '';
    var binaryString = '';
    digits = '0123456789ABCDEF';
    while (decNumber > 0) {
        //push remainder, either one or zero
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    while (!remStack.isEmpty()) {
        binaryString += digits[remStack.pop()];
    }
    return binaryString;
}


console.log(divideBy2(10));





















})('use strict');

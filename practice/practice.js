//implement a stack

//stacks are last in first out, have push, pop, peek, isEmpty, size, clear


var Stack = function() {

    let items = [];

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
};

var minStack = new Stack();

minStack.min = new Stack();

minStack.push = function(element) {
    items.push(element);
    if (minStack.length === 0) {
        minStack.push(element);
    } else if (element < minStack.peek()) {
        
    }
};



var stack = new Stack();

stack.push(1);
stack.push(3);
stack.push(5);

console.log(stack.peek());

stack.isMin();

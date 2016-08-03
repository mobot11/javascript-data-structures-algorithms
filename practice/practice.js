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




//create a queue

let Queue = function() {
    let items = [];

    this.enqueue = function(element) {
        items.push(element);
    };

    this.dequeue = function() {
        return items.shift();
    };

    this.front = function() {
        return items[0];
    };

    this.size = function() {
        return items.length;
    };

    this.isEmpy = function() {
        return items.length === 0;
    };


};

let priorityQueue = function() {
    let items = [];

    this.enqueue = function(element, priority) {
        if(items.length === 0) {
            items.push(element,priority);
        } else {
            for (var i = 0; i < items.length; i ++) {
                if (items[i+1] <)
            }
        }
    };

    this.print = function() {
        return items.toString();
    };
};

var priority = new priorityQueue();

priority.enqueue(10,1);

console.log(priority.print());

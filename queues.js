(function() {
//A queue is an ordered collection of items that follows first in first out or FIFO

//a line is an example of a queue, often called a queue in other countries

function Queue() {
    //use an array to store data
    var items = [];

    //enqueue ands a new item at the back of a queue
    this.enqueue = function() {
        items.push(element);
    };
    //dequeue() removes the first item from the front of the queue and returns it
    this.dequeue = function() {
        return items.shift();
    };
    //front() returns the first element from the queue, queue is not modified
    this.front = function() {
        return items[0];
    };
    //isEmpty() returns true if queue does not contain elements
    this.isEmpty  = function() {
        return items.length === 0;
    };
    //size() contains # of elements in queue
    this.size = function() {
        return items.length;
    };

    this.print = function() {
        console.log(items.toString());
    };



}

//priority queues are when a certain group or element gets priority in the queue over others







})('use strict');

(function() {

let DoublyLinkedList = function() {
    let Node = function(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };
    let length = 0;
    let head = null;
    let tail = null;

    //some methods

    this.insert = function(position, element) {
        //check for out of bounds
        if (position >= 0 && position <= length) {
            //create node;
            let node = new Node(element),
            current = head,
            previous,
            index = 0;
            //if list is empty
            if (position === 0) {
                if (!head) {
                    //only item in the list
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index ++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;
            }
            length ++;
            return true;
      } else {
          return false;
      }
    };
    this.removeAt = function(position) {
        //look for out of bounds
        if (position > -1 && poisition < length) {
            let current = head;
            let previous;
            let index = 0;

            if(position === 0) {
                head = current.next;

                //if there is only one item, update tail
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            }else if (position === length -1) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < posiiton) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length --;

            return current.element;
        } else {
            return null;
        }
    };
};





})('use strict');

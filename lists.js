function LinkedList() {

    let Node = function(element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.append = function(element) {
        //adds a new item to end of list
        let node = new Node(element),
            current;
        //if list is empty, element is head
        if (head === null) {
            head = node;
        } else {
            current = head;
            //loop until we find element that equals null and then assign element to end
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        } //update size of list
        length ++;
    };
    //last node always has null as its next element
    this.insert = function(position, element) {
        //inserts a new item at a specified position in the list
        //check for out of bounds values
        if (position >= 0 && position <=length) {

            //our new element with next = null
            let node = new Node(element);
            //current originally references the head
            let current = head;
            //letiable for previous we will use later
            let previous;
            //a counter to see when we hit our position
            let index = 0;
            //if it is the first element
            if (position === 0) {
                //node.next = head
                node.next = current;
                //our new node is now the head of the list
                head = node;
            } else {
                while (index++ < position) {
                    //previous = current element
                    previous = current;
                    //previous is head, node is next
                    previous.next = node;
                }
                //once we hit position
                node.next = current;
                previous.next = node;
            }
            //increase our length
            //return value to show it worked
            length++;
            return true;
        } else
            //something went wrong, return false
        {
            return false;
        }

    };
    this.removeAt = function(position) {
        //removes an item from a specified position in the list
        //check for out of bounds
        if (position > -1 && position < length) {
            let current = head, previous,
            index = 0;

            if(position === 0) {
                head = current.next;
            } else {

                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                //link previous with curent's next: skip it to remove
                previous.next = current.next;
            }
            length --;

            return current.element;
        } else {
            return null;
        }
    };
    this.remove = function(element) {

        //removes an element from the list

        let index = this.indexOf(element);
        return this.removeAt(index);

    };
    this.indexOf = function(element) {
        //returns the index of the element in the list, if the element is not in the list, it returns -1

        let current = head, index = -1;

        while(current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.isEmpty = function() {
        //returns true if the linked list does not contain any elements and false if the size of the linked list is > 0
        return length === 0;
    };
    this.size = function() {
        //returns how many elements the list contains
        return length;
    };

    this.toString = function() {
        let current = head, string = '';

        while (current) {
            string += current.element;
            current = current.next;
        }
        return string;
    };

    this.print = function() {

    };

    this.getHead = function() {
        return head;
    };
}

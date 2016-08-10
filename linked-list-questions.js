//write a function to remove duplicates from a linked list

function removeDuplicates(list) {
    var head = list.head;
    var items = {};
    if(!head) {
        return null;
    }
    else if(head.next === null) {
        return true;
    }
    else {
        var curr = head;
        items[curr.value] = 1;
        while(curr) {
            if (!items.hasOwnProperty(curr.next.value)) {
                items[curr.next.value] = 1;
            } else if(items.hasOwnProperty(curr.next.value)) {
                if(curr.next.next !== null) {
                    curr.next = curr.next.next;
                } else {
                    curr.next = null;
                }
            }
            length = length - 1;
        }
        return true;
    }
}


//implement an algorithm to find the kth to last element of a singly linked list

function kthToLast(list,position) {
    var curr = list.head;
    if (position > list.length) {
        return 'please provide a valid list position, lower than ' + list.length;
     }
    count = list.length - position;
    while(count > 0) {
        curr = curr.next;
        count --;
    }
    return curr.value;
}

//delete middle node

//write a function that takes two sorted arrays and merges them to create a sorted array

function mergeArrays(arr1, arr2) {
    var merged = [];
    aElement = arr1[0];
    bElement = arr2[0];
    var aIndex = 0;
    var bIndex = 0;
    if (!arr1.length && !arr2.length) {
        return 'please provide valid arrays';
    }

    if(!arr1.length) {
        return arr2;
    }

    if(!arr2.length) {
        return arr1;
    }

    while(aElement || bElement) {
        if(aElement && !bElement || aElement < bElement) {
            merged.push(aElement);
            aElement = arr1[aIndex ++];
        } else {
            merged.push(bElement);
            bElement = arr2[bIndex ++];
        }
    }
    return merged;
}

function inOrderTraverse(head, callback) {
    if (!head) {
        return 'list is empty';
    }
    traverse(head,callback);
}

function traverse(head,callback) {
    var curr = head;
    if (curr === null) {
        return;
    }
    traverse(curr.left, callback);
    callback(curr);
    traverse(curr.right, callback);
}

console.log(mergeArrays([2,5,6,7], [1,2,3,29]));



// find the first non-duplicated character in a string

function nonDuplicated(string) {
    for (var i = 0; i < string.length; i ++) {
        var c = string.charAt(i);
        if(string.indexOf(c) === i && string.indexOf(c, i+1) === -1) {
            return c;
        }
    }

    return null;



}

var string = 'aabbccdddee';

console.log(nonDuplicated(string));




function mergeSort(array) {
    if (!array.length) {
        return 'provide valid array';
    }
    if(array.length < 2) {
        return array;
    }

    var mid = Math.floor(array.length / 2);
    var left = array.slice(0, mid);
    var right = array.slice(mid, array.length);

    merge(mergeSort(left), mergeSort(right));

    function merge(left, right) {
        var temp = [];
        while(left.length && right.length) {
            if (left[0] <= right[0]) {
                temp.push(left.shift());
            } else {
                temp.push(right.shift());
            }
        }

        while(left.length) {
            temp.push(left.shift());
        }
        while(right.length) {
            temp.push(right.shift());
        }
    }
    return temp;
}









//

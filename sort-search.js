function ArrayList(){

    var array = [];

    this.insert = function(item){
        array.push(item);
    };

    var swap = function(array, index1, index2){
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
        //ES2015 swap - Firefox only, for other browser, uncomment code above and coment line below
        //[array[index1], array[index2]] = [array[index2], array[index1]];
    };

    this.toString= function(){
        return array.join();
    };

    this.bubbleSort = function(){
        var length = array.length;

        for (var i=0; i<length; i++){
            console.log('--- ');
            for (var j=0; j<length-1; j++ ){
                console.log('compare ' + array[j] + ' with ' + array[j+1]);
                if (array[j] > array[j+1]){
                    console.log('swap ' + array[j] + ' with ' + array[j+1]);
                    swap(array, j, j+1);
                }
            }
        }
    };

    this.modifiedBubbleSort = function(){
        var length = array.length;

        for (var i=0; i<length; i++){
            console.log('--- ');
            for (var j=0; j<length-1-i; j++ ){
                console.log('compare ' + array[j] + ' with ' + array[j+1]);
                if (array[j] > array[j+1]){
                    console.log('swap ' + array[j] + ' with ' + array[j+1]);
                    swap(j, j+1);
                }
            }
        }

    };

    this.selectionSort = function(){
        var length = array.length,
            indexMin;

        for (var i=0; i<length-1; i++){
            indexMin = i;
            console.log('index ' + array[i]);
            for (var j=i; j<length; j++){
                if(array[indexMin]>array[j]){
                    console.log('new index min ' + array[j]);
                    indexMin = j;
                }
            }
            if (i !== indexMin){
                console.log('swap ' + array[i] + ' with ' + array[indexMin]);
                swap(array, i, indexMin);
            }
        }
    };
    this.insertionSort = function(){
        var length = array.length,
            j, temp;
        for (var i=1; i<length; i++){
            j = i;
            temp = array[i];
            console.log('to be inserted ' + temp);
            while (j>0 && array[j-1] > temp){
                console.log('shift ' + array[j-1]);
                array[j] = array[j-1];
                j--;
            }
            console.log('insert ' + temp);
            array[j] = temp;
        }
    };

    this.mergeSort = function(){
        array = mergeSortRec(array);
    };

    var mergeSortRec = function(array){

        var length = array.length;

        if(length === 1) {
            console.log(array);
            return array;
        }

        var mid = Math.floor(length / 2),
            left = array.slice(0, mid),
            right = array.slice(mid, length);

        return merge(mergeSortRec(left), mergeSortRec(right));
    };

    var merge = function(left, right){
        var result = [],
            il = 0,
            ir = 0;

        while(il < left.length && ir < right.length) {

            if(left[il] < right[ir]) {
                result.push(left[il++]);
            } else{
                result.push(right[ir++]);
            }
        }

        while (il < left.length){
            result.push(left[il++]);
        }

        while (ir < right.length){
            result.push(right[ir++]);
        }

        console.log(result);

        return result;
    };
    this.quickSort = function(){
        quick(array,  0, array.length - 1);
    };

    var partition = function(array, left, right) {

        var pivot = array[Math.floor((right + left) / 2)],
            i = left,
            j = right;

        console.log('pivot is ' + pivot + '; left is ' + left + '; right is ' + right);

        while (i <= j) {
            while (array[i] < pivot) {
                i++;
                console.log('i = ' + i);
            }

            while (array[j] > pivot) {
                j--;
                console.log('j = ' + j);
            }

            if (i <= j) {
                console.log('swap ' + array[i] + ' with ' + array[j]);
                swap(array, i, j);
                i++;
                j--;
            }
        }

        return i;
    };

    var quick = function(array, left, right){

        var index;

        if (array.length > 1) {

            index = partition(array, left, right);

            if (left < index - 1) {
                quick(array, left, index - 1);
            }

            if (index < right) {
                quick(array, index, right);
            }
        }
        return array;
    };

    var swapQuickSort = function(array, index1, index2) {
        var aux = [index1];
        array[index1] = array[index2];
        array[index2] = aux;
    }

    this.sequentialSearch = function(item) {
        for (var i = 0; i < array.length; i ++) {
            if (item === array[i]) {
                return i
            }
        }
        return -1
    };

    this.binarySearch = function(item) {
        this.quickSort();

        var low = 0;
        var high = array.length -1;
        var mid;
        var element;

        while (low <= high) {
            mid = Math.floor((low + high) / 1);
            element = array[mid];
        } if (element < item) {
            low = mid +1;
        } else if (element > item) {
            high = mid -1;
        } else {
            return mid;
        }
    }
    return -1;
}


function createNonSortedArray(size) {
    var array = new ArrayList();
    for (var i = size; i > 0; i--) {
        array.insert(i);
    }
        return array;
    }
var array = createNonSortedArray(5);
array.quickSort();
console.log(array.toString());

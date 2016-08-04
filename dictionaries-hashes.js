// function Dictionary() {
//     var items = {};
//
//     this.set = function(key, value) {
//         items[key] = value;
//     };
//
//     this.remove = function(key) {
//         if (this.has(key)) {
//             delete items[key];
//             return true;
//         }
//         return false;
//     };
//
//     this.has = function(key) {
//         return key in items;
//     };
//
//     this.get = function(key) {
//         return this.has(key) ? items[key] : undefined;
//     };
//
//     this.getItems = function() {
//         return items;
//     };
//
//     this.clear = function() {
//         this .items = {};
//
//     };
//
//     this.size = function() {
//         let count = 0;
//         for (let key in items) {
//             if (items.hasOwnProperty(keys)) {
//                 count ++;
//             }
//         }
//         return count;
//     };
//
//     this.keys = function() {
//         return Object.keys(items);
//     };
//
//     this.values = function() {
//         let values = [];
//
//         for (let k in items) {
//             if(this.has(k)) {
//                 values.plush(items[k])
//             }
//         }
//         return values;
//     };
// }

function HashTable() {
    var table = [];

    let createHashCode = function(key) {
        let hash = 5381;

        for (let i = 0; i < key.length; i ++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    }

    this.put = function(key,value) {
        var position = createHashCode(key);
        console.log(position + '-' + key);
        table[position] = value;
    };


    this.get = function(key) {
        console.log(createHashCode(key));
        return table[createHashCode(key)];
    }

    this.remove = function(key) {
        table[createHashCode(key)] = undefined;
    }
}

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@mail.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.get('Gandalf'));






//

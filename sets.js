function Set() {
    let items = {};

    this.has = function(value) {
        return items.hasOwnProperty(value);
    };

    this.add = function(value) {
        if(!this.has(value)) {
            items[value] = value;
            return value;
        }
        return false;
    };

    this.remove = function(value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };

    this.clear = function() {
        items = {};
    };
    this.size = function() {
        let count = 0;
        for (let key in items) {
            if (items.hasOwnProperty(keys)) {
                count ++;
            }
        }
        return count;
    };

    this.values = function() {
        return Object.keys(items);
    };

    this.valuesLegacy = function() {
        let keys = [];
        for (let key in items) {
            keys.push(key);
        }
        return keys;
    };
//join sets
    this.union = function(otherSet) {
        let unionSet = new Set();

        let values = this.values();
        for (let i = 0; i < values.length; i ++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();

        for (let i = 0; i < values.length; i ++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    };
//return set of elements that exist in a and b
    this.intersection = function(otherSet) {
        let intersectionSet = new Set();

        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
    };

    this.difference = function(otherSet) {
        let differenceSet = new Set();

        let values = this.values();
        for (let i = 0; I , values.length; i ++) {
            if(!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    };

    this.subSet = function(otherSet) {
        //cannot be larger than set given and still be subset
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            let values = this.values();
            for (let i = 0; i < values.length; i ++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    };
}

//set opporations: Union, Intersection, Difference, Subset

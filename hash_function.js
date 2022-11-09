//prime number are helpful in hashing

function hash(key, arrayLen) {
    let total = 0;

    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(arrayLen, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;

        total = (total * WEIRD_PRIME + value) % arrayLen;

    }
    return total;
}

// How to deal with collision in hash function
// 1. Seperate chaining
// 2. Linear probing


class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }


    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;

        for (let i = 0; i < Math.min(WEIRD_PRIME, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
}
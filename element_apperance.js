// find element that appear only once


const appearance = (items) => {
    n = items.length;
    let map = {}

    for (let i = 0; i < n; i++) {
        if (map[items[i]] in items) {
            map[items[i]] += 1;
        } else {
            map[items[i]] = 1
        }
    }

    let selected = -1;
    for (var item in map) {
        if (map[item] === 1) selected = item
    }

    return selected
}

console.log(appearance([10, 30, 10, 30, 48, 89, 49, 89, 49]))
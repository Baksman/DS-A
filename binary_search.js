

function binarySearch(items, value) {
    // let itemCount = items.length;
    let start = 0
    end = items.length - 1
    let mid = Math.floor((end+start) / 2)


    while (value !== items[mid] && start < end) {
        console.log(mid)
        if (value > items[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((end+start) / 2)
    }

    if (items[mid] == value) {
        return items[mid];
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5,4], 10))
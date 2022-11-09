
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let midPoint = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid,))

    return merge(left, right);
}

function merge(arr1, arr2) {
    let result = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
    }
    while (i < arr2.length) {
        result.push(arr2[j])
    }

    return result;

}


merge([1, 10, 50], [2, 4, 19, 100])
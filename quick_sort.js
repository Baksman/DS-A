


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1)
        // right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
}


function pivot(arr, start = 0, end = arr.lengt + 1) {

    var pivot = arr[start];
    var swapIndex = start;
    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }


    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i)

        }
        console.log(arr)
    }

    swap(arr, start, swapIndex)
    console.log(arr)
    return swapIndex;
}
quickSort([10, 8, 2, 1, 5, 7, 6, 3])

// pivot([10, 8, 2, 1, 5, 7, 6, 3])

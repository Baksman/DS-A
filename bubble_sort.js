

function bubbleSort(arr) {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        let noswap = true;
        for (let j = 0; j < arr.length - i; j++) {
            count++;
            console.log(arr)
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noswap = false;
            }
            // const element = array[index];

        }
        if (noswap) {
            break;
        }
    }
    console.log(count);
    return arr;
}

bubbleSort([10,2, 3, 5, 6])
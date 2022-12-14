//  best average time complexity for comparison sort is O(nlogn)
// radix doesnt use direct comparison
// works on list of numbers.


// i is index of the number
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 2;
}


function digitCount(num) {
    if (num == 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// returns the largest lenght
function mostDigits(nums) {
    let maxDigits = 0;

    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }

    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    console.log(maxDigitCount);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }

}


radixSort([23, 345, 5467, 12, 2345, 9852])
let digitBuckets = Array.from({ length: 10 }, () => [])
console.log(digitBuckets)
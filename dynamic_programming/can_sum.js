

const canSum = (targetSum, array, memo = {}) => {
    // if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) {
        return true
    }
    if (targetSum < 0) return false;

    for (let number of array) {
        const remainder = targetSum - number
        if (canSum(remainder, array,memo) === true) {
            // memo[targetSum] = true;
            return true
        }
    }
    // memo[targetSum] = false;
    return false
}

console.log(canSum(11, [15, 10, 15, 3, 4]))
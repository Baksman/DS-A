
// @param string
const longestPalindrome = (input) => {
    let mapping = {};
    let lenght = 0;


    for (let s of input) {
        let currentVal = mapping[s];
        if (s in mapping) {
            mapping[s] = currentVal + 1

        } else {
            mapping[s] = 1
        }
        console.log(mapping)
    }


    for (val in mapping) {
        let currentVal = mapping[val];
        if (currentVal % 2 === 0) {
            lenght = lenght + currentVal;
        } else {
            lenght = lenght + (currentVal - 1)
        }
    }


    if (lenght < input.length) {
        lenght++;
    }
    return lenght
}



console.log(longestPalindrome('madamamma'))
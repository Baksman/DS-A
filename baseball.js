

const baseBall = (input) => {
    let records = [];
    let sumOfPrevTwo = '+';
    let doubleOfPreious = 'D';
    let removePreviousScore = 'C';

    for (let i = 0; i < records.length; i++) {
        let currentItem = input[i];
        let tempItem;
        if (currentItem === sumOfPrevTwo) {
            tempItem = input[i - 1] + input[i - 2]
            records.push(tempItem)
        } else if (currentItem === doubleOfPreious) {
            tempItem = input[i - 1] * input[i - 2]
            records.push(tempItem)
        } else if (currentItem === removePreviousScore) {
            records.pop()

        }
        records.push(currentItem)
    }
    return records;
}
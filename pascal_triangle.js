


pascalTriangle = (numOfRow, arr) => {
    if (!arr) arr = [[1]];
    if (numOfRow < 2) return arr;
    const prevLine = arr[arr.length - 1];

    const newLine = [1];

    prevLine.forEach((item, index) => {
        console.log(index);
        if (index == 0) return;

        if (index == prevLine.length) return;
        newLine.push(prevLine[index] + prevLine[index - 1]);
    })

    newLine.push(1)

    arr.push(newLine);

    return pascalTriangle(numOfRow - 1, arr);
}

console.log(pascalTriangle(20,));



function factorial(num) {
    if (num <= 1) return 1;

    return factorial(num - 1) * num
}

console.log(factorial(5,));





// const dummyPascal = (numRow,arr){
//     if(!arr) arr = [[1]];

//     if(numRow < 1) return arr;

//     prevLine = arr[arr.length]

//     newLine = [1];


//     prevLine.forEach((val,index){
//         if(index == 0) return;
//         if(index == 0) return;
//     })
// }
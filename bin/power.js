



const power = (quotient, exponent) => {
    if (exponent == 0) return 1;
    if (exponent == 1) return quotient;
    let esp = Math.abs(exponent)
    let isNegative = exponent < 0;

    while (esp > 1) {
        quotient *= quotient;
        esp--;
    }

    if (isNegative) return 1 / quotient
    return quotient
}




// console.log(power(3, -2))


// move zero to the end without making copy


const zeroMover = (array) => {
    let removerConter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            removerConter++
            array.splice(i, 1)
        }

    }
    console.log(array)
    for (let v = 0; v < removerConter; v++) {
        array.push(0)
    }
    console.log(array)

}

zeroMover([10, 0, 11, 3, 0, 48, 49, 0])



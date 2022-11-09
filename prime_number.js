

const isPrimeNumber = (number) => {

    for (let i = 2; i < Math.sqrt(number); i++) {

        if ((number % i) === 0) {
            return false;
        }


    }
    return true;
}

console.log(isPrimeNumber(53))


const LCM = (number1, number2) => {

    if (number2 <= 0) {
        return number1
    }


    return LCM(number2, number1 % number2);
}

console.log(LCM(100, 12))



const reverseNumber = (number) => {
    let lastDigit = 0;
    let rev = 0;

    while (number != 0) {

        lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        number = Math.floor(number)
    }

    return number;
}

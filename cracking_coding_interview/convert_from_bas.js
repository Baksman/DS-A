


const convertFrombase = (number, base) => {
    if (base < 2 || base > 36) {
        return 'Invalid base';
    }
    let result = '';
    let remainder = 0;
    while (number > 0) {
        remainder = number % base;
        result = remainder + result;
        number = Math.floor(number / base);
    }
    return result;
}

const ccc = (number, base, result = '') => {

    if (base < 2 || base > 36) {
        return 'Invalid base';
    }
    if (number == 0) return result;

    let remainder = number % base;
     number = Math.floor(number / base);
    result = remainder + result;
   return ccc(number, base, result);
}


console.log(ccc(1000, 2));

// const convertFrombaseRecursive = (number,base)=>{
//     if(base<2 || base>36){
//         return 'Invalid base';
//     }
//     let result = '';
//     let remainder = 0;
//     let convert = (number,base)=>{
//         if(number > 0){
//             remainder = number % base;
//             result = remainder + result;
//             number = Math.floor(number / base);
//             convert(number,base);
//         }
//     }
//     convert(number,base);
//     return result;
// }
console.log(convertFrombase(1000, 2));
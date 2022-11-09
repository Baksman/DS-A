


const palindrome = (str) => {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

const palindromeLoop = (str) => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}

const palindromeRecursive = (str) => {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return palindromeRecursive(str.slice(1, str.length - 1));
}
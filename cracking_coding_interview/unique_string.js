


const uniqueString = (title) => {
    let items = [];


    for (let i = 0; i < title.length; i++) {
        let currentChar = title[i];
        console.log(currentChar)
        if (items.includes(currentChar)) {
            return false;
        } else {
            items.push(currentChar);
        }
    }
    return true;
}




console.log(uniqueString('Bakssmn'))
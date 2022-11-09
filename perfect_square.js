// Minimum digit ro remove to make number perfect square



const minimumDigit = (number) => {
    str = number.toString()
    let result = -1;
    let list = [];

    for (let val = 0; val < str.length; val++) {
        list.push(str[val])

        for (let i = val; i < str.length; i++) {
            for (let j = i; j < str.length; j++) {
                list.push(str[i] + str[val]+ str[j])
                list.push(str[val] + str[i]+str[j])
            }
        }

    }

    for (let item of list) {
        if (Number.isInteger(Math.sqrt(Number(item)))) {
            if (Number(item) > Number(result)) {
                result = item
                console.log(item)
            }
        }
        console.log(result)
    }

    console.log(list)

    console.log(result)
    return str.length - result.length

}

console.log(minimumDigit(2813))
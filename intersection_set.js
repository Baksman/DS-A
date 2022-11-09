
a = [1, 2, 4, 4, 5, 6, 7, 8]
b = [3, 4, 6, 7, 4, 89, 0]


const intersectionSet = (set1, set2) => {
    const intersection = [];
    for (let i = 0; i < set1.length; i++) {
        for (let j = 0; j < set2.length; j++) {
            if (set1[i] === set2[j]) {
                if (intersection.includes(set1[i])) continue;
                intersection.push(set1[i]);
            }
        }
    }
    return intersection;
}





console.log(intersectionSet(a, b))
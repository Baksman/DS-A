heights = [2, 3, 5, 12, 1, 0, 3, 1, 4, 4, 1, 2];


const mostHeight = (heights) => {

    let length = heights.length;

    heights.sort((a, b) => a - b);
    let val1 = heights[length - 1]
    let val2 = heights[length - 2];

    console.log(val1, val2);
}

mostHeight(heights)
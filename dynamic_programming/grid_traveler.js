
// where m is row and n is column
const gridTraveller = (m, n) => {
    if (m == 1 && n == 1) return 1;
    if (m == 0 || n == 0) return 0;

    return gridTraveller(m - 1, n) + gridTraveller(m, n - 1)
}


// console.log(gridTraveller(14,14))



// where m is row and n is column
const gridTravellerMemoised = (m, n, cache = {}) => {
    console.log(m,n)

    const key = m + ',' + n;
    if (key in cache) return cache[key]
    if (m == 1 && n == 1) return 1;
    if (m == 0 || n == 0) return 0;


    // let cacheVal = Math.min(m, n)
    // if (cacheVal in cache) return cache[cacheVal]

    // cache[cacheVal] = gridTraveller(m - 1, n, cache) + gridTraveller(m, n - 1, cache)
    cache[key] = gridTraveller(m - 1, n, cache) + gridTraveller(m, n - 1, cache)
    return cache[key];
}


console.log(gridTravellerMemoised(20, 20))

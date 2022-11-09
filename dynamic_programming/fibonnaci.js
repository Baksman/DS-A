

const fib = (num, cache) => {
    if (!cache) cache = {};
    if (num in cache) return cache[num]
    if (num <= 2) return 1;

    f1 = fib(num - 1,cache);
    f2 = fib(num - 2,cache);
    cache[num] = f1 + f2;


    return f1 + f2;
}


console.log(fib(1))
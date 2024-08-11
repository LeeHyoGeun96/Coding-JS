function nextPowerOfTwo(n) {
    if (n < 1) return 1;
    return 2 ** Math.ceil(Math.log2(n));
}

function solution(arr) {
    const addLength = nextPowerOfTwo(arr.length) - arr.length;
    return [...arr, ...new Array(addLength).fill(0)];
}
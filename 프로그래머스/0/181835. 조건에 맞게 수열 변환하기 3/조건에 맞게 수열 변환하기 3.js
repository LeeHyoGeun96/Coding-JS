function solution(arr, k) {
    return k % 2 === 0 ? arr.map((cur) => cur + k) : arr.map((cur) => cur * k);
}
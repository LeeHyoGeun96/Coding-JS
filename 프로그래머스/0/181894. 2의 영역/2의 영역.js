function solution(arr) {
    const from = arr.indexOf(2);
    const end = arr.lastIndexOf(2);

    return from === -1 ? [-1] : arr.slice(from, end+1);
}

/*
function solution(arr) {
    const firstTwo = arr.indexOf(2);
    const lastTwo = arr.lastIndexOf(2);
    if(firstTwo === -1 && lastTwo === -1) {
        return [-1];
    };
    if(firstTwo === -1 || lastTwo === -1) {
        return [2];
    };
    return arr.slice(firstTwo, lastTwo + 1)
}
*/
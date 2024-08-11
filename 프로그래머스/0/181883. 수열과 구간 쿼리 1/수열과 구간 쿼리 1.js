function solution(arr, queries) {
    queries.forEach(([s, e]) => {
        while (s <= e) arr[s++]++;
    });
    return arr;
}

/*
function solution(arr, queries) {
    return queries.reduce((acc, cur) =>{
        const [s, e] = cur;
        return acc.map((arrValue, arrIdx) => (arrIdx >= s && arrIdx <= e) ? arrValue + 1 : arrValue)
    } ,arr);
}
*/
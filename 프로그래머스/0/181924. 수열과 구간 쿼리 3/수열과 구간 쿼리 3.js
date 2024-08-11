function solution(arr, queries) {
    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
}
/*
const temp = bucket[a]
        bucket[a] = bucket[b]
        bucket[b] = temp
        return bucket
*/

/*
function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const [i, j] = cur;
        const temp = acc[i];
        acc.splice(i, 1,acc[j]);
        acc.splice(j, 1,temp);
        return acc;
    },arr);
}
*/
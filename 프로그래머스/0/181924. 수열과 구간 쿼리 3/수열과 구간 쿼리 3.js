function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const [i, j] = cur;
        const temp = acc[i];
        acc.splice(i, 1,acc[j]);
        acc.splice(j, 1,temp);
        return acc;
    },arr);
}
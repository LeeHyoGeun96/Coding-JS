function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const [s, e, k] = cur;
        for(let i = s; i <= e; i++){
            if(i % k === 0){
                acc[i] += 1;
            }
        }
        return acc;
    }, arr);
}